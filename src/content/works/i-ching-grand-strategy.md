---
title: I Ching Grand Strategy
order: 3
year: '2026–'
type: GAME SYSTEM / AI NARRATIVE
categories: ['AI·Systems', 'Game·Project']
featured: true
summary: An in-development strategy and visual-novel game where I Ching hexagrams become a state system for AI-driven war narratives and player decisions.
preview:
  type: image
  src: images/works/i-ching-grand-strategy/thumbnail-illustration.png
  alt: Paper-cut Earth over Heaven hexagram above a grain road with three strategy tokens
---

## A strategic reading of change

《易经大战略：执理者》 is an in-development Godot game that combines turn-based strategy, visual-novel pacing, and the 64 hexagrams of the I Ching. The player acts as a military adviser, making one strategic intervention per turn while a changing hexagram frames the consequences.

## Core system

- A 15–25 turn strategic loop organized around attack, defence, intrigue, and diplomacy.
- Hexagrams and changing lines used as a playable state system rather than visual decoration.
- AI-generated war narration with structured output for narrative, analysis, changing lines, and resource effects.
- Three local game-state values—strength, morale, and treasury—with rule-based consequences and animated settlement.
- A local fallback narrative library so a full run remains possible when an AI request fails.

## Interaction design

Each turn moves from a situation reading to a decision, a generated consequence, and a visual hexagram transition. The interface places the hexagram reading, narrative, strategic actions, and state HUD in one visible field of play.

## Status

The project is in MVP development. The core loop, multi-provider AI integration, save/settings systems, ending routes, and major interface systems are documented as implemented; additional fallback narratives, visual assets, and refinement are ongoing.

[VIEW SOURCE ON GITHUB ↗](https://github.com/aassllaann/2D-Strategy-Game)
