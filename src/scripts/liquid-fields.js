const point = (start, end, t) => ({
  x: start.x + (end.x - start.x) * t,
  y: start.y + (end.y - start.y) * t,
});

const number = (value) => Math.round(value * 100) / 100;

export function staticRectPath({ x, y, width, height }) {
  return `M ${x} ${y} L ${x + width} ${y} L ${x + width} ${y + height} L ${x} ${y + height} Z`;
}

function curvedEdge(start, end, centerT, spanT, normal, amplitude) {
  const startT = Math.max(0, centerT - spanT);
  const endT = Math.min(1, centerT + spanT);
  const a = point(start, end, startT);
  const center = point(start, end, centerT);
  const b = point(start, end, endT);
  const crest = { x: center.x + normal.x * amplitude, y: center.y + normal.y * amplitude };
  const firstControl = point(a, center, .58);
  const secondControl = point(a, center, .82);
  const thirdControl = point(center, b, .18);
  const fourthControl = point(center, b, .42);

  return [
    `L ${number(a.x)} ${number(a.y)}`,
    `C ${number(firstControl.x)} ${number(firstControl.y)} ${number(secondControl.x + normal.x * amplitude * .72)} ${number(secondControl.y + normal.y * amplitude * .72)} ${number(crest.x)} ${number(crest.y)}`,
    `C ${number(thirdControl.x + normal.x * amplitude * .72)} ${number(thirdControl.y + normal.y * amplitude * .72)} ${number(fourthControl.x)} ${number(fourthControl.y)} ${number(b.x)} ${number(b.y)}`,
    `L ${number(end.x)} ${number(end.y)}`,
  ].join(' ');
}

export function liquidRectPath(rect, pointer, strength, { radius = 260, maxDisplacement = 38, waveSpan = 190 } = {}) {
  if (!pointer || strength <= .001 || rect.width <= 0 || rect.height <= 0) return staticRectPath(rect);

  const x0 = rect.x;
  const y0 = rect.y;
  const x1 = rect.x + rect.width;
  const y1 = rect.y + rect.height;
  const edges = [
    { start: { x: x0, y: y0 }, end: { x: x1, y: y0 }, normal: { x: 0, y: -1 }, length: rect.width },
    { start: { x: x1, y: y0 }, end: { x: x1, y: y1 }, normal: { x: 1, y: 0 }, length: rect.height },
    { start: { x: x1, y: y1 }, end: { x: x0, y: y1 }, normal: { x: 0, y: 1 }, length: rect.width },
    { start: { x: x0, y: y1 }, end: { x: x0, y: y0 }, normal: { x: -1, y: 0 }, length: rect.height },
  ];

  const candidates = edges.map((edge) => {
    const dx = edge.end.x - edge.start.x;
    const dy = edge.end.y - edge.start.y;
    const rawT = ((pointer.x - edge.start.x) * dx + (pointer.y - edge.start.y) * dy) / (edge.length * edge.length);
    const centerT = Math.max(.08, Math.min(.92, rawT));
    const nearest = point(edge.start, edge.end, centerT);
    return { ...edge, centerT, distance: Math.hypot(pointer.x - nearest.x, pointer.y - nearest.y) };
  });
  const activeIndex = candidates.reduce((closestIndex, edge, index) => edge.distance < candidates[closestIndex].distance ? index : closestIndex, 0);
  const active = candidates[activeIndex];
  const proximity = Math.max(0, 1 - active.distance / radius);
  const amplitude = maxDisplacement * strength * proximity * proximity;
  if (amplitude <= .01) return staticRectPath(rect);

  const parts = [`M ${x0} ${y0}`];
  for (const [index, edge] of edges.entries()) {
    if (index === activeIndex) parts.push(curvedEdge(edge.start, edge.end, active.centerT, Math.min(.42, waveSpan / edge.length), edge.normal, amplitude));
    else parts.push(`L ${edge.end.x} ${edge.end.y}`);
  }
  parts.push('Z');
  return parts.join(' ');
}
