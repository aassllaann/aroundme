---
title: Agent-Powered Product Comparison
order: 4
year: '2025–2026'
type: AGENT SYSTEM / EXPLAINABLE RECOMMENDATION
categories: ['AI·Systems']
featured: false
summary: A conversational recommendation prototype that combines structured intent parsing, scenario rules, product comparison, and explanatory visual analysis.
preview:
  type: image
  src: images/works/agent-product-comparison/thumbnail-illustration.png
  alt: Paper-cut agents routing one shopping request toward balanced product choices
---

## From a request to a comparison

Agent-Powered Product Comparison is a graduation-design prototype for turning natural-language shopping requests into grounded, comparable choices. It pairs language-model intent parsing with a local SQLite fact layer, category-specific rules, and Plotly charts in a Streamlit interface, so a request such as “a Vlog camera under ¥5,000” can become a traceable comparison rather than an ungrounded answer.

<div class="project-screen-gallery project-screen-gallery--single">
  <figure>
    <img src="/images/works/agent-product-comparison/camera-vlog-comparison.png" alt="Agent-powered product comparison camera consultation showing three recommendations, analyst notes, and radar and bar-chart comparisons" loading="lazy" />
    <figcaption>01 / CAMERA CONSULTATION — RECOMMENDATIONS AND ANALYST NOTES</figcaption>
  </figure>
</div>

## My role

- Defined the product concept and the four-layer architecture spanning presentation, intent routing, domain decisions, and fact data.
- Built the Python and Streamlit prototype, including multi-agent routing, category-specific scoring and retrieval, explanatory recommendation cards, and Plotly comparison views.
- Structured a three-level taxonomy across 10 digital-product categories and designed scenario-based rules for product comparison and cross-category suggestions.
- Evaluated the prototype with automated functional checks and a small user-experience study; the local test environment recorded 100% preset-category recognition and 3–5 second end-to-end responses.

## Recommendation flow

<ol class="recommendation-flow" aria-label="Recommendation flow">
  <li>
    <span>01 / INTERPRET</span>
    <h3>Understand the request</h3>
    <p>Category routing and domain agents extract product type, budget, use scenario, brand preference, and ranking priorities from everyday language.</p>
  </li>
  <li>
    <span>02 / RETRIEVE</span>
    <h3>Ground the comparison</h3>
    <p>Scenario presets retrieve candidates first; a constrained local-database search provides a fallback when strict requirements leave too few results.</p>
  </li>
  <li>
    <span>03 / EXPLAIN</span>
    <h3>Make trade-offs legible</h3>
    <p>Cards, a decision trace, and comparison charts surface the constraints, sorting basis, and multidimensional differences behind each result.</p>
  </li>
</ol>

The prototype covers 10 digital-product categories. Its evaluation combines automated logic checks with a small local user-experience study; feedback suggested that conversational input paired with visual comparison made results easier to understand and assess.

## Scope and limits

Recommendations are grounded in the project's local product database rather than live price or inventory feeds. The interface is an academic and portfolio prototype, not a current shopping service.

[VIEW SOURCE ON GITHUB ↗](https://github.com/aassllaann/agent-product-comparison-viz)
