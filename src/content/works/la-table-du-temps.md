---
title: La Table du Temps
order: 2
year: '2026'
type: ARCHIVE WEB / CULTURAL DATA
categories: ['Archive·Web']
featured: true
summary: A cultural data interface that follows French cuisine through time, dishes, imagery, and evolving historical relationships.
preview:
  type: image
  src: images/works/la-table-du-temps/thumbnail-illustration.png
  alt: Hand-drawn illustration of hands arranging a plated dish with herbs, citrus, and time-like arcs
---

## A table across time

La Table du Temps is a creative web prototype that turns French culinary history into an explorable relationship map. It connects 5 historical eras, 28 dishes, local imagery, and two kinds of cultural relationships: direct evolution and same-era association. Rather than presenting dish history as static encyclopedia text, it frames changes in taste, class, technique, and memory as a journey.

<div class="project-screen-gallery project-screen-gallery--single">
  <figure>
    <img src="/images/works/la-table-du-temps/landing-page-clean.png" alt="La Table du Temps landing page introducing five historical eras of French cuisine" loading="lazy" />
    <figcaption>01 / NARRATIVE ENTRY — FIVE ERAS</figcaption>
  </figure>
</div>

## My role

- Designed the product concept, narrative structure, and interaction model for a cultural data-visualization interface.
- Built the Next.js and TypeScript frontend, including the landing page, exploration route, era timeline, graph canvas, dish detail panel, and relationship popup.
- Structured eras, dishes, and historical relationships with local image references and fallback behaviour.
- Created a Python collection pipeline for Wikidata and Wikipedia enrichment, with manual review points for historical and narrative accuracy.
- Used AI coding assistance as workflow support while retaining ownership of product direction, source selection, interaction decisions, and implementation review.

## How it works

<div class="project-feature">
  <div>
    <h3>Move through culinary eras</h3>
    <p>The era timeline navigates medieval court cuisine, classical French cuisine, the grand hotel era, Nouvelle Cuisine, and contemporary French dining. Each selection changes the historical lens and opens a Remy-inspired narrative note.</p>
  </div>
  <div class="project-feature__images project-feature__images--two">
    <figure>
      <img src="/images/works/la-table-du-temps/medieval-relationships-clean.png" alt="Medieval court cuisine selected with a historical narrative note" loading="lazy" />
      <figcaption>02 / ERA — MEDIEVAL COURT CUISINE</figcaption>
    </figure>
    <figure>
      <img src="/images/works/la-table-du-temps/grand-hotel-era-clean.png" alt="Grand hotel era selected with representative dishes and an era note" loading="lazy" />
      <figcaption>03 / ERA — GRAND HOTEL</figcaption>
    </figure>
  </div>
</div>

<div class="project-feature">
  <div>
    <h3>Explore relationships, not a list</h3>
    <p>A D3 graph renders dishes as a historical map with zoom, pan, node selection, hover highlighting, and relationship discovery. Clicking a connection explains whether it represents direct evolution or a same-era cultural pairing.</p>
  </div>
  <figure>
    <img src="/images/works/la-table-du-temps/explore-overview-clean.png" alt="La Table du Temps graph overview showing five era lanes, dish nodes, and relationship legend" loading="lazy" />
    <figcaption>04 / GRAPH — ERA LANES AND DISH RELATIONSHIPS</figcaption>
  </figure>
</div>

<div class="project-feature">
  <div>
    <h3>Read history through a dish</h3>
    <p>Each dish panel combines French and Chinese names, origin, history, key ingredients, chef attribution when available, and local imagery. A second sensory narration layer reinterprets the same record through smell, texture, and memory.</p>
  </div>
  <div class="project-feature__images project-feature__images--two">
    <figure>
      <img src="/images/works/la-table-du-temps/dish-detail-charlotte-russe-clean.png" alt="Charlotte russe detail panel with origin, ingredients, chef, and sensory note" loading="lazy" />
      <figcaption>05 / DISH DETAIL — CHARLOTTE RUSSE</figcaption>
    </figure>
    <figure>
      <img src="/images/works/la-table-du-temps/dish-detail-crepes-suzette-clean.png" alt="Crêpes Suzette detail panel alongside related dish nodes" loading="lazy" />
      <figcaption>06 / DISH DETAIL — CRÊPES SUZETTE</figcaption>
    </figure>
  </div>
</div>

## Selected dish artwork

<div class="project-screen-gallery">
  <figure>
    <img src="/images/works/la-table-du-temps/crepes-suzette-illustrated.png" alt="Illustrated Crêpes Suzette" loading="lazy" />
    <figcaption>CRÊPES SUZETTE</figcaption>
  </figure>
  <figure>
    <img src="/images/works/la-table-du-temps/ratatouille-contemporary-illustrated.png" alt="Illustrated contemporary Ratatouille" loading="lazy" />
    <figcaption>CONTEMPORARY RATATOUILLE</figcaption>
  </figure>
  <figure>
    <img src="/images/works/la-table-du-temps/madeleine-illustrated.png" alt="Illustrated Madeleine" loading="lazy" />
    <figcaption>MADELEINE</figcaption>
  </figure>
  <figure>
    <img src="/images/works/la-table-du-temps/terrine-de-legumes-illustrated.png" alt="Illustrated vegetable terrine" loading="lazy" />
    <figcaption>VEGETABLE TERRINE</figcaption>
  </figure>
  <figure>
    <img src="/images/works/la-table-du-temps/vol-au-vent-illustrated.png" alt="Illustrated vol-au-vent" loading="lazy" />
    <figcaption>VOL-AU-VENT</figcaption>
  </figure>
</div>

## Sources and structure

The project separates eras, dishes, and relationship edges into three data files. Wikidata and Wikipedia provide structured enrichment and cross-checking, while manual review guides historically sensitive interpretation and narrative placement. Some era assignments follow the role a dish plays in the story rather than a strict date of invention. Local-first assets keep the core experience independent of remote image loading.

[VIEW SOURCE ON GITHUB ↗](https://github.com/aassllaann/La-Table-du-Temps)
