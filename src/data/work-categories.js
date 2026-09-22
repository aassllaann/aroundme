export const workCategories = [
  { id: 'ai-systems', label: 'AI Systems', contentCategory: 'AI·Systems', intro: 'Systems that use AI as a material for interaction, narrative, and decision-making.' },
  { id: 'ui-ux', label: 'UI/UX', contentCategory: 'Archive·Web', intro: 'Interfaces, interactive archives, and cultural systems designed for exploration.' },
  { id: 'games', label: 'Games', contentCategory: 'Game·Project', contentCategories: ['Game·Project', 'Game·Character', 'Game·Research'], intro: 'Games, characters, and research shaped through systems, play, and visual narrative.' },
  { id: 'photography', label: 'Photography', contentCategory: 'Photography', intro: 'A first-person photographic archive presented as a digital book.' },
];

export const previewDimensions = {
  'images/works/scentscape/thumbnail-illustration-v2.png': [1672, 941],
  'images/works/agent-product-comparison/thumbnail-illustration.png': [1672, 941],
  'images/works/ai-camera-advisor/preview.png': [2170, 874],
  'images/works/in-vehicle-multimodal-interaction/driver-dashboard.png': [2879, 1919],
  'images/works/i-ching-grand-strategy/thumbnail-illustration.png': [1672, 941],
  'images/works/la-table-du-temps/thumbnail-illustration.png': [1672, 941],
  'images/works/photography-notes/book/cover-spread.png': [1551, 1106],
  'images/works/pixel-monster-studies/preview.svg': [1200, 900],
};

export const gameDirectories = [
  { id: 'game-projects', label: 'Game Projects', contentCategory: 'Game·Project', intro: 'Playable systems, narrative structures, and game prototypes.' },
  { id: 'character-design', label: 'Character Design', contentCategory: 'Game·Character', intro: 'Character, creature, and pixel-form studies developed for games.' },
  { id: 'game-research-insights', label: 'Game Research & Insights', contentCategory: 'Game·Research', intro: 'Research into players, mechanics, markets, and game culture.' },
];

export function getWorkCategory(id) {
  const category = workCategories.find((item) => item.id === id);
  if (!category) throw new Error(`Unknown work category: ${id}`);
  return category;
}

export function worksInCategory(works, category) {
  const categories = category.contentCategories ?? [category.contentCategory];
  return works.filter((work) => categories.some((item) => work.data.categories.includes(item)));
}
