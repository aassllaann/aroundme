---
title: Scentscape
order: 1
year: '2026'
type: AI / SENSORY DATA VISUALIZATION
categories: ['AI·Systems']
featured: true
summary: An interactive olfactory atlas that translates perfume data into a visual, searchable, and AI-assisted sensory interface.
preview:
  type: image
  src: images/works/scentscape/thumbnail-illustration-v2.png
  alt: Paper-cut perfume bottle releasing scent ribbons into a nine-segment fragrance wheel
---

## An olfactory atlas

Scentscape is an experimental creative-technology prototype that turns perfume data into an interactive olfactory atlas. Rather than treating fragrance as a static catalogue, it frames each record as a layered sensory system: family, subfamily, top/heart/base notes, mood scores, intensity over time, and an optional AI-generated synesthetic visual concept.

<div class="project-screen-gallery project-screen-gallery--single">
  <figure>
    <img src="/images/works/scentscape/home-hero-clean.png" alt="Scentscape Home landing page introducing the project and its nine fragrance families" loading="lazy" />
    <figcaption>01 / HOME — PROJECT VISION</figcaption>
  </figure>
</div>

## My role

- Designed the product concept, information architecture, and visual direction for the olfactory data interface.
- Built the Next.js and TypeScript frontend, including the fragrance wheel, search flow, detail panel, mood canvas, and sillage timeline.
- Structured perfume data into family, subfamily, mood, note-stage, and intensity fields for interactive exploration.
- Implemented AI-assisted routes that translate perfume profiles into JSON visual concepts and p5.js generative-sketch code.
- Used AI coding assistance as workflow support while retaining ownership of the product direction, interaction decisions, data interpretation, and implementation review.

## How it works

<div class="project-feature">
  <div>
    <h3>Explore the atlas</h3>
    <p>The D3 double-ring wheel maps 9 fragrance families and their subfamilies. Visitors can browse with pointer or keyboard controls, then search by perfume or brand; family and subfamily results remain paginated without losing the current query.</p>
  </div>
  <div class="project-feature__images project-feature__images--atlas">
    <figure>
      <img src="/images/works/scentscape/atlas-main-clean.png" alt="Scentscape Atlas with an interactive double-ring fragrance wheel, search bar, and perfume list" loading="lazy" />
      <figcaption>02 / ATLAS — FAMILY BROWSING</figcaption>
    </figure>
    <figure>
      <video controls playsinline preload="metadata" poster="/images/works/scentscape/atlas-main-clean.png" aria-label="Screen recording of browsing the Scentscape fragrance atlas">
        <source src="/images/works/scentscape/atlas-browsing.mp4" type="video/mp4" />
      </video>
      <figcaption>03 / MOTION — ATLAS BROWSING</figcaption>
    </figure>
    <figure>
      <video controls playsinline preload="metadata" poster="/images/works/scentscape/atlas-main-clean.png" aria-label="Screen recording of selecting a Scentscape fragrance family">
        <source src="/images/works/scentscape/atlas-selection.mp4" type="video/mp4" />
      </video>
      <figcaption>04 / MOTION — FAMILY SELECTION EXCERPT</figcaption>
    </figure>
  </div>
</div>

<div class="project-feature">
  <div>
    <h3>Read a perfume in layers</h3>
    <p>Each perfume view brings together brand and release metadata, top/heart/base notes, mood scores, and an estimated intensity timeline. Its responsive canvas changes with the selected profile while the reading surface remains stable.</p>
  </div>
  <figure>
    <img src="/images/works/scentscape/perfume-detail-clean.png" alt="Perfume detail dialog showing note structure, mood character, and an interactive sillage timeline" loading="lazy" />
    <figcaption>03 / DETAIL — NOTES, MOOD, AND SILLAGE</figcaption>
  </figure>
</div>

<div class="project-feature">
  <div>
    <h3>Interpret the scent visually</h3>
    <p>Optional AI routes translate a selected profile into a synesthetic visual concept and sanitized p5.js sketch output, including a palette, mood labels, and bilingual sensory description. Browsing the Atlas never depends on this generation step.</p>
  </div>
  <div class="project-feature__images project-feature__images--ai-vision">
    <figure>
      <img src="/images/works/scentscape/ai-vision-dark-clean.png" alt="Dark AI visual overlay with a generated colour palette, mood labels, and sensory description" loading="lazy" />
      <figcaption>04 / AI VISION — DARK INTERPRETATION</figcaption>
    </figure>
    <figure class="project-feature__primary">
      <img src="/images/works/scentscape/ai-vision-amber-clean.png" alt="Warm amber AI visual interpretation generated from a selected perfume profile" loading="lazy" />
      <figcaption>05 / AI VISION — AMBER INTERPRETATION</figcaption>
    </figure>
    <figure>
      <video controls playsinline preload="metadata" poster="/images/works/scentscape/ai-vision-amber-clean.png" aria-label="Screen recording of the Scentscape AI visual interpretation">
        <source src="/images/works/scentscape/ai-vision-motion.mp4" type="video/mp4" />
      </video>
      <figcaption>06 / MOTION — AI VISION</figcaption>
    </figure>
  </div>
</div>

## Data and interpretation

Local CSV and XLSX material is transformed into the JSON dataset used by the interface. Family, subfamily, mood, and intensity fields are heuristic classifications based on note keywords; the sillage timeline is an interpretation rather than a measured longevity claim. The AI layer remains optional, so the Atlas can be browsed without generation or AI credentials.

[VIEW SOURCE ON GITHUB ↗](https://github.com/aassllaann/Scentscape)
