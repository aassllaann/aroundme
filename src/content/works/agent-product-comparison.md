---
title: Agent Product Comparison
order: 4
year: '2025–2026'
type: AGENT SYSTEM / EXPLAINABLE RECOMMENDATION
categories: ['AI·Systems']
featured: false
summary: A conversational recommendation prototype that combines structured intent parsing, scenario rules, product comparison, and explanatory visual analysis.
preview:
  type: image
  src: images/works/agent-product-comparison/preview.svg
  alt: Designed placeholder for Agent Product Comparison; interface imagery pending
---

## From a vague request to a comparable choice

Agent Product Comparison explores how a recommendation system can translate natural-language needs into a transparent decision process. It began with camera data and developed into a broader electronics prototype with category detection, scenario-aware filtering, and comparison views.

## Recommendation pipeline

- Parses use case, budget, brand preference, product type, owned devices, and priority metrics from a user request.
- Routes known product categories to specialized data and scoring logic.
- Matches scenarios such as Vlog, street photography, travel, or gaming to curated candidate sets before applying hard constraints.
- Falls back to a wider catalogue when a scenario set cannot provide enough suitable options.
- Produces radar, bar, and scatter-chart comparisons alongside a natural-language explanation of the trade-offs.

## Scope and limits

The current local database supports electronics recommendation data. Other detected categories intentionally return an informed buying-guide mode rather than pretending that equivalent product data exists.

## Status

The prototype includes the unified agent flow, product data handling, scenario rules, category-specific specifications, and explanatory comparison views. Broader data coverage and interface refinement remain open work.

[VIEW SOURCE ON GITHUB ↗](https://github.com/aassllaann/agent-product-comparison-viz)
