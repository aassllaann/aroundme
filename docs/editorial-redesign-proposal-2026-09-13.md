# Li Yetong — Editorial Color-Block Redesign

Design specification and implementation handoff · 13 September 2026

**Latest revision: Section 12 records the approved direction for the next iteration. It supersedes conflicting Works and Home interaction requirements in Sections 1–11. This revision changes documentation only; implementation of Section 12 remains pending.**

Sections 1–11 preserve the original proposal. Subsequent implementation and verification are recorded in `docs/portfolio-redesign-progress.md`; their original status statements describe the original document delivery, not the current website.

Project root: `/Users/aslan/Desktop/Project/个人网站`.

## 1. Brief, authority, and intended result

Turn the portfolio into a recognizable authored publication: an image-free typographic cover, a direct and visually rich Works index, and quieter pages for reading and viewing. The signature is the relationship between expressive letterforms and two hard-edged printing fields: Cinnabar Red `#E5483B` and Acid Yellow `#DDF000`.

The latest user request supersedes the older requirement for artwork fragments and three selected projects on the homepage. Interpret “remove all work/project showcases” as applying to the entire `/` route, including content below the first screen. Keep links to Works, but no project cards, thumbnails, featured-project titles, galleries, or project preview interactions on Home. Do not delete their underlying assets or project records.

The concrete composition, proportions, and timings below are proposed design decisions, ready for review; they are not claims of prior user approval. Implementation should begin with a static cover review, then proceed in the stages in Section 9. This document does not authorize publishing.

The web-design skill was inspected for suitability. Its preset aesthetics and automatic embellishments are not adopted. This direction is based on the user's brief, the existing custom typeface, current source, and actual local page observations. No reference-site imitation, generated artwork, new font purchase, or animation framework is needed.

### Design principles

1. **The cover identifies the author.** Name first, practice second, route into the work third.
2. **Color creates structure.** Two large planes with a specific relationship, rather than small colored stickers decorating a conventional layout.
3. **Editorial rhythm changes by page.** Cover = poster; Works = selection desk; case study = essay; Sketchbook = contact sheet; photography = book; About = profile.
4. **Motion explains a change.** The same few movement rules connect the site; artwork remains stable enough to inspect.
5. **Evidence carries professional credibility.** Use real projects and supplied assets. Illustration thumbnails must never be presented as product screenshots.

## 2. Audit: what is actually holding the site back

Evidence: current source inspection and local browser observations at the browser's 1280 × 720 viewport of `/`, `/works/`, `/about/`, `/works/scentscape/`, `/sketchbook/`, and `/lab/projector/`. Photography was inspected in source, not visually reviewed in this pass. This was a design audit, not a complete interaction or accessibility certification. Mobile, font-failure, no-JavaScript, and performance findings below are requirements to test, not passed checks.

| Priority | Finding and evidence | Design consequence | Required response |
|---|---|---|---|
| P0 | `PosterHome.astro` places two artwork fragments above the large name; the live cover obscures several letterforms. A second selected-work section follows. | The strongest identity element competes with two different portfolio introductions. | Remove both fragments and the full selected-work section; make the name an unobstructed semantic H1. |
| P0 | `WorksIndex.astro` renders seven large category rows before the work list. At 1280 × 720, the initial screen shows categories but no project preview. | Visitors browse the classification system before seeing the work. | Put compact, persistent filters immediately above the list and preview. |
| P0 | The live About position paragraph runs into the adjacent practice list. Inspect `.record-content--statement`, `.position-statement`, and `.practice-list` in `global.css`. | Visible collision makes the layout feel unfinished. | Use shrinkable columns, an explicit gap, and a single-column fallback; remove width rules that exceed the assigned track. |
| P0 | The two-line Projector title visibly overlaps; the source also uses unusually compressed heading line heights across inner pages. | Display typography becomes a dense black mass instead of a readable headline. | Raise multi-line leading and test the actual font at each width. |
| P1 | Home has SELECTED / WORKS / ABOUT, inner pages have INDEX / WORKS / ABOUT, and project details have only a back link. | The site's navigation changes vocabulary and reach between contexts. | Reuse a shared primary navigation, with a separate local back link where needed. |
| P1 | Large condensed headings, tiny mono labels, archive numbers, and rules repeat across almost every inner page. | Strong ingredients produce monotonous page rhythm. | Assign each page a different scale and layout role; reduce archival labels to useful metadata. |
| P1 | Red is often applied to approximately 10–12 px metadata; Home buttons use paper text on red. | Some high-frequency reading is both small and low contrast. | Increase label sizes and use ink for small text; reserve red text for sufficiently large display use. |
| P1 | `archive-b.css` adds small red squares to several intros; Home's color is mostly small accents. | Red and yellow do not yet define a recognizable composition. | Introduce two strong cover planes and repeat their edge geometry selectively inside. |
| P1 | Hover/active/focus often share a tinted background; category hover animates padding. | Selection is ambiguous and text shifts inside controls. | Separate focus outline, selected indicator, and transient hover; animate decorative layers rather than layout. |
| P1 | Scentscape has a real illustration thumbnail but the generic detail caption calls it a designed placeholder. | The distinction between editorial artwork and product evidence is unclear. | Label the thumbnail accurately; retain the separate “interface captures pending” status. Review per-project evidence. |
| P2 | Global CSS retains the old gradient palette, a separate Home palette, and inner-page aliases; five font families are imported/declared. | Future changes are easy to apply inconsistently; type hierarchy has unnecessary competition. | Consolidate only active shared values and font roles after checking all route consumers. |
| P2 | Sketchbook image descriptions include raw filenames in the accessibility tree. | The visual archive is less usable without seeing the images. | Write concise factual descriptions after inspecting each image; retain ordering without inventing artwork titles. |

The site already has useful assets: Ruigslay gives the author name personality; the project illustrations and paintings are distinctive; Works has a working data-driven preview; Sketchbook has two viewing modes; photography has a dedicated reader; Projector has an explicit optional route. Preserve these advantages.

## 3. Art direction: two printing plates and a readable name

Working concept: **a personal publication whose colored plates shift into registration**. This is an internal design metaphor, not a slogan to add to the website.

### Cover composition

Build one large landscape composition below a paper-colored navigation bar. Use a red field starting on the left and an acid-yellow field on the right, with the yellow field stepping downward once. A narrow paper seam separates part of their edges. The two blocks should feel like cut sheets, not dashboard tiles.

Starting geometry, expressed within the cover's graphic area:

- Red plane: x 0–68%, y 0–84%.
- Yellow plane: x 62–100%, y 24–100%, painted above red in their overlap.
- Paper cut: 8–12 px wide along part of the yellow plane's upper/left boundary; one cut only.
- Optical balance target: roughly 55–60% visible red, 25–30% yellow, remaining paper. Judge the composed result, not literal pixel percentages.
- Both planes are flat, opaque, rectangular, and unrotated. No gradients, rounded corners, shadows, noise overlay, or blend modes.
- Place the ink-colored `LI` / `YETONG` name above both planes. The name may cross the color boundary, but neither color plane may cover its strokes. Do not crop letters to the viewport.

The distinction from a generic color-block layout is specific: one offset vertical seam, one expressive two-line name, one short practice statement, one clear movement into the work. Do not add circles, stickers, stars, ornamental arrows, or unrelated geometric shapes to fill space.

### Desktop structure: 1024 px and above

| Region | Layout instruction |
|---|---|
| Header | Approximately 72 px tall; author/home link left; WORKS, SKETCHBOOK, ABOUT right. Remove SELECTED and ARCHIVE / 01. Use the same order on all pages. |
| Cover frame | Side gutters `clamp(20px, 3vw, 56px)`; 12-column grid; min-height around `calc(100svh - 72px)`, with natural growth for content and zoom. |
| Name | Two-line `LI` / `YETONG`, left aligned to the same optical edge. Ruigslay, 400, starting size `clamp(112px, 18vw, 272px)`, tracking -0.045em, line-height 0.84. Tune to actual glyph bounds rather than forcing the numbers. |
| Practice | Bottom-left protected area, 24–32ch maximum. Reuse the existing creative-technologist statement in sentence case; 18–22 px Sans, line-height 1.35. |
| Primary action | Bottom-right on yellow: `VIEW WORKS ↗`, ink text, 44 px minimum target, persistent underline. Link directly to `/works/`; never intercept the click to wait for animation. |
| Supporting information | A small paper footer with the existing email and GitHub. Keep it in normal flow. No full-screen afterword. |

The name is the H1, with an accessible name of “Li Yetong”. Keep Aslan as the existing secondary identity. Do not silently change public identity or claim current availability. Existing Singapore/year notes may be retained only if still desired and verified; they are not required to balance the composition.

### Tablet and mobile

- 701–1023 px: 8 columns, 24 px gutters, reduce name size to fit its widest line; place practice and action in a normal-flow row beneath the name when needed.
- 320–700 px: 4 columns, 16 px gutters. Header uses two rows with visible navigation, not a menu that hides three links.
- Red becomes the upper full-width field; yellow becomes a lower-right field approximately 72% wide. Preserve the single stepped seam rather than shrinking desktop positions blindly.
- Name starting size `clamp(64px, 19vw, 128px)` with 0.88 line-height; keep YETONG on one line only when it fits with the actual font and fallback. Reduce display size before clipping.
- Practice and VIEW WORKS sit below the name in normal flow with at least 24 px separation. No absolute-positioned body text or CTA.
- Let the page scroll on short phones. Do not force a fixed-height poster that obscures links or cuts text at 200% zoom.
- Decorative planes are `aria-hidden`, non-focusable, and `pointer-events: none`. They are not extra buttons.

### Exact Home deletion and retention list

In `src/components/home/PosterHome.astro` remove `selectedWorks`, both `.poster-fragment` figures, `#selected`, the selected gallery, the eye trigger/status and its script. Replace `#selected` links with `/works/`. Consolidate the long afterword into the short cover practice statement. Retain the verified contact destinations in a compact footer.

In `src/styles/poster-home.css` remove the corresponding selected-work, fragment, eye-animation, and afterword-only rules after checking references. Update `/preview/poster-b/` as well: it imports the same component and must not silently keep the old showcase. Keep `HeroArchive.astro` untouched unless an actual current consumer requires a change.

## 4. Shared visual system

### Color and contrast

| Role | Value | Application |
|---|---|---|
| Paper | `#FDF9F2` | Reading surfaces, navigation, seam |
| Ink | `#171318` | Body text, wordmark, control labels, strong rules |
| Cinnabar | `#E5483B` | Large cover plane, occasional section field, large display accent |
| Acid | `#DDF000` | Second cover plane, selected filters, explicit contact band |

Calculated from these opaque sRGB values: ink/red ≈ 4.66:1; paper/red ≈ 3.76:1; ink/acid ≈ 14.47:1. Use ink for normal-size text on red and yellow. Paper text on red and red text on paper do not meet this proposal's 4.5:1 normal-text target. Use red for large text or non-text decoration instead. Avoid reduced opacity on ink/red text because the margin is small. Actual rendered combinations still need testing.

Maintain full source colors in artworks. Do not tint images red on hover. Selected controls use full acid with ink plus a persistent underline or marker. Hover uses a short underline/edge response; focus uses an independent outline. Use a two-color focus ring on mixed backgrounds, such as a 2 px paper inner ring and 2 px ink outer ring, so the ring stays visible.

### Type roles

| Role | Face and proposed settings | Constraint |
|---|---|---|
| Author name | Existing local Ruigslay, 400 | Exclusive identity role; do not use for filters or body text |
| Inner-page H1 | Archivo Narrow, 600–700, 64–112 px desktop, 44–64 px mobile; line-height 0.95–1.02; tracking -0.035em | Cover remains the largest typographic event; long titles may wrap naturally |
| Project titles in index | Archivo Narrow, 500–600, 26–38 px desktop / 22–28 px mobile; line-height 1.08 | No colliding glyphs, no clipping |
| Body and practice statements | IBM Plex Sans, 400, 17–19 px desktop / 16–18 px mobile; line-height 1.5–1.65 | Reading width 55–68ch; avoid all-caps paragraphs |
| Navigation | IBM Plex Sans, 500, 14–16 px; line-height 1.3 | Visible text and minimum 44 px targets |
| Genuine metadata | IBM Plex Mono, 12–14 px, line-height 1.4 | Dates, counts, captions only; do not turn prose into a terminal |

Remove Playfair from active redesigned pages once its consumers have been replaced. Do not remove font imports while legacy or preview routes still depend on them. Avoid adding a sixth font. Verify actual downloaded font styles and fallback rendering before attributing every visual issue to the chosen typeface.

### Spacing and rules

Use a small spacing scale: 4, 8, 12, 16, 24, 32, 48, 72, 96 px. Section gaps vary by purpose: 48–72 px on Works, 72–96 px between essay sections, 24–32 px between reader controls and media. Major rules are 1 px ink; subordinate dividers may use a 20% ink/paper mix. Rectangular controls, no routine card shadows.

Use full-width composition on Home; cap ordinary inner content near 1440 px and long-form text near 68ch. Use `minmax(0, …)` and `min-width: 0` where content must shrink. Decorative clipping belongs to the decorative layer, not `overflow: hidden` on the entire page.

## 5. Navigation and page-by-page changes

### Shared navigation

Reuse `SiteNav.astro` for Home and inner routes. Keep the linked author name as the Home destination and visible WORKS / SKETCHBOOK / ABOUT links. Extend its current-page contract for Sketchbook; mark Works active on project details and Projector, with a separate contextual return link. Avoid a new navigation framework.

Add a visible-on-focus skip link to each page's main content through the shared layout. Include a real `<main>` on the Works route if absent; do not blindly wrap all routes and create nested main landmarks. Active page uses `aria-current="page"`, an underline, and ink text. Tab order must follow the visual order. Keep headers in normal flow initially; do not add a sticky header before it solves a demonstrated need.

### Works: show the work before the taxonomy

Retain the desktop list-plus-preview behavior and the mobile expandable project entries. They already suit the collection and avoid a redundant new card system.

1. Reduce intro to a compact heading and one sentence. At 1280 × 720 or 1440 × 900, show the first project title and a meaningful portion of the preview without scrolling.
2. Replace the seven display-sized category rows with wrapping text controls: All, Featured, the existing content categories, and a separate Sketchbook link. Preserve exact internal category values and existing `?category=` links.
3. Default to All so photography and other non-featured work remain discoverable after Home loses its showcases. Featured remains an explicit filter; do not edit project featured flags merely to fill a layout.
4. Keep filters visible when selected. Remove the current hide-category/reset-navigation cycle. “All” always means all projects, not a toggle back to Featured.
5. Update list, preview, result count, and URL together. Invalid category values fall back to All. An empty result shows a readable message and clears the obsolete preview.
6. On desktop, use approximately 5/12 width for the list and 7/12 for the preview, with 32–48 px gap. Keep images contained and naturally proportioned. Reserve stable media space to avoid jumps.
7. Hover or keyboard focus changes the preview; clicking still opens the project immediately. Rapid movement must resolve to the latest row, not queue every image transition. Announce committed filter counts in a short status region; do not announce the entire preview on every pointer movement.
8. On touch, thumbnails and titles are always visible. Keep native details/summary with a visible open/close cue and a clear project link after expansion. Show full thumbnail aspect ratios or contain them; replace the current square crop where it cuts artwork.
9. Make Sketchbook a real link, not a filter button with a hidden navigation side effect. Keep Projector as a secondary text link near the Works introduction or footer.
10. With JavaScript off, all projects must remain accessible as ordinary links. Hide or disable enhancement-only controls with an explanation; do not leave non-featured work permanently hidden by server markup.

### Project details: make the evidence readable

- Lead with project title, existing summary, and verified type/year/status. Reduce the oversized blank opening so the first media/evidence block arrives sooner.
- Keep a broad media area and a narrower reading column. Replace the nested multi-column heading/body arrangement on smaller screens with ordinary H2 → paragraph flow. Metadata may remain a small side rail above 1024 px, then stack before the essay.
- Use the existing content to structure purpose, contribution, interaction, and current status. Do not invent results, personal ownership, user counts, dates, or links to satisfy a template.
- For Scentscape and other illustrated project previews, use a factual caption such as “Project illustration · Interface captures pending.” Determine captions per asset rather than relabeling all previews as screenshots.
- Retain existing source links. Add demo actions only when a real supplied destination has been verified. No disabled “Live demo” button as decoration.
- For Photography, keep title/summary → reader as the opening sequence; do not reinsert the duplicate pre-reader cover image. Source currently specifies 91 content pages plus covers/blank leaf; derive counters from the actual reader, not historical documentation.

### Sketchbook: preserve the contact-sheet identity

- Keep Overview as the default, two columns desktop and one column mobile. Preserve natural image proportions, generous inter-image space, and fixed document order.
- Reduce the heading's visual weight slightly; the first row of art should remain the dominant content. Use one intentional asymmetry, such as alternating narrower image widths within unchanged grid tracks, only after reviewing actual images. Do not randomize positions or add a masonry dependency.
- Keep One at a time, Previous/Next, image counter, zoom, and Escape-to-close. Keep control labels visible on touch.
- Replace lift-on-every-image with an ink edge/underline on the opener or caption. Images should feel like things to inspect, not floating UI cards.
- Verify that the closed lightbox is absent from tab order and the accessibility tree; its controls appeared in this audit's accessibility snapshot despite the closed visual state. Treat this as a follow-up check, not a confirmed screen-reader diagnosis. On close, restore focus to the opener.

### About: profile rather than personnel form

- Replace the display phrase “ABOUT THE MAKER” with a restrained About heading plus the author's existing name/position. Keep Ruigslay reserved for Home's name.
- Put the current introductory biography and practice statement into one readable Sans column. Remove the repeated giant headline / label / mono-prose hierarchy.
- Move the practice list below the statement or into a genuinely separate column with at least 32 px gap. At widths where both do not fit, stack them before any overlap occurs.
- Education becomes a simple two-entry chronological section. Skills remain factual groups, with “In progress” visibly separate from established practice. No skill bars or invented proficiency ratings.
- Finish with a full-width acid contact band containing the existing email and GitHub. This repeats the cover's yellow edge with an actual navigational purpose. Do not invent availability, a portrait, or social accounts.

### Projector: contain the experiment

- Keep `/lab/projector/` optional, with the standard Works link permanently visible.
- Fix title leading before adding motion; two lines must remain optically separate.
- Reuse the dark stage, reels, CHANGE FRAME, project opener, and selection logic. Do not turn the stable Works route into this experiment.
- Keep its expressive motion confined to the stage. No autoplay, full-page glitch, flashing white frame, or random layout changes.

## 6. Motion specification

Motion vocabulary: **register, underline, replace**. The cover fields settle into position; actionable edges respond; media changes with a short controlled transition. Make the static layout excellent first.

Shared proposed tokens: fast 140 ms, standard 220 ms, expressive 480 ms; entrance easing `cubic-bezier(0.22, 1, 0.36, 1)`; state easing `cubic-bezier(0.2, 0, 0, 1)`. Animate transform and opacity where possible, not layout dimensions or padding. Focus indicators and selected-state semantics update immediately.

| Component / trigger | Motion and exact bound | Touch / keyboard | Reduced motion / fallback |
|---|---|---|---|
| Cover, initial visit | Red translates from -12 px X to 0 over 480 ms; yellow from +12 px Y to 0 over 480 ms, 60 ms later. Name stays visible and stationary. Total sequence ≤540 ms. | No input required; links usable from the first frame. No replay on hover. | Fields render directly in final positions. Base CSS is final visible state. |
| Primary navigation, hover/focus | A 2 px ink underline expands from left over 140 ms. Current page underline stays fixed. | Focus also gets the immediate separate ring. Touch shows normal and pressed states. | Underline switches instantly. |
| VIEW WORKS, hover/focus | Arrow translates 4 px diagonally over 140 ms; a narrow decorative seam moves 6 px inside the CTA region over 220 ms. Text and hit area do not move. | Focus gets the same cue; activation follows the anchor immediately. | Static underline/arrow; no translation. |
| Filter activation | Selected acid fill and marker update immediately; new visible result group fades from 0.7 to 1 and translates 6 px to 0 over 180–220 ms. One group transition, no row-by-row cascade. | Focus remains on activated filter; result count announced politely. | Results replace instantly, preserving focus. |
| Work row preview | Once the next image is ready, replace with a 160–220 ms fade. Keep current preview until load succeeds. No red tint, tilt, zoom, or stretch. | Keyboard focus previews; mobile uses its own explicit entry interaction. | Instant image replacement; same error handling. |
| Sketchbook mode/image change | 180 ms image fade; do not animate the entire page height. Counter and disabled state update immediately. | Buttons remain in place; no mandatory swipe. | Instant change. Overview remains usable without JS. |
| Sketchbook lightbox | Backdrop opacity 180 ms; image opacity 180 ms, without large spatial travel. | Move focus into dialog; Escape closes; restore opener. | Open/close instantly. |
| Photography | Preserve the existing page-turn interaction. Retain its slower 780 ms pacing initially; add no second transition around it. | Buttons, arrows, and touch navigation continue to work. | Use immediate page change through the installed reader API, after verifying it, or expose a static page sequence. CSS alone does not disable JS-driven page flips. |
| Projector CHANGE FRAME | Reuse the existing short stage transition; constrain printed offset to ≤6 px and total duration to ≤280 ms, at most two positional changes. | Keep focus on initiating control; update a concise frame status. | Immediate single-frame replacement. |
| About contact links | Underline response 140 ms and arrow travel ≤4 px. | Persistent visible label, normal anchor action. | Instant underline. |

### Cross-page and scrolling behavior

Keep normal browser scrolling and native link navigation. A small destination entrance can create continuity without intercepting links: translate a decorative header accent by 8 px over 220 ms, leaving content visible. Do not add an exit curtain, route-loading gate, smooth-scroll library, custom cursor, magnetic buttons, character-by-character text splitting, persistent parallax, or infinite marquee.

Cross-document view transitions are optional after the core design passes. If implemented, check current native support in official documentation at implementation time, restrict them to a 180 ms crossfade, preserve browser history and focus, and retain instant navigation as fallback. Do not add client routing solely for this effect.

Stop decorative movement when not visible. Do not attach global pointer tracking for the cover. Rapid input cancels/replaces the previous transition rather than building a queue. A failure to load media must leave its title, link, caption/status, and usable fallback visible. Keep videos user-controlled rather than starting every preview on pointer entry; at minimum prevent unsolicited playback in reduced-motion mode.

## 7. Implementation map and boundaries

Use the existing Astro structure. No React migration, WebGL background, GSAP, Framer Motion, CMS, or new dependency is required.

| Existing file | Intended change |
|---|---|
| `src/components/home/PosterHome.astro` | Remove showcases and eye script; build semantic name/planes/practice/action/footer |
| `src/styles/poster-home.css` | New responsive cover composition and bounded entry/CTA motion; delete obsolete Home rules |
| `src/pages/index.astro`, `src/pages/preview/poster-b.astro` | Preserve component reuse; update metadata only where needed |
| `src/components/layout/SiteNav.astro` | Shared visible links and current-page semantics |
| `src/layouts/BaseLayout.astro` | Skip-link support and shared accessible baseline; avoid nested main landmarks |
| `src/styles/tokens.css`, `src/styles/global.css` | Canonical color/type/motion values; fix active shared styles and About collision |
| `src/styles/archive-b.css` | Adapt inner-page rules; remove superseded decorative intro squares; reference canonical colors |
| `src/components/works/WorksIndex.astro` | Compact persistent filters, All state, URL/fallback behavior, consistent preview updates |
| `src/components/works/ProjectArchive.astro` | Evidence-first opening, per-asset caption treatment, shared navigation |
| `src/components/works/PhotographyFlipbook.astro` | Preserve current reader/assets; verify reduced-motion and failure fallback |
| `src/pages/sketchbook.astro`, `src/styles/sketchbook-browser.css` | Control states, factual alt descriptions, dialog and reading refinements |
| `src/components/about/AboutArchive.astro` | Simplified profile structure and contact band |
| `src/components/works/UnreliableProjector.astro`, `src/styles/projector-lab.css` | Title separation, bounded motion, preserved controls |
| `src/pages/works.astro`, `src/pages/works/[slug].astro`, `src/pages/about.astro`, `src/pages/lab/projector.astro` | Check navigation props, style imports, route contracts, and main landmarks |

Default file structure remains unchanged. Add a shared script or stylesheet only if real duplicated behavior cannot reasonably stay in the existing shared layout/styles. Do not create a configurable animation engine.

The working tree already contains modified photography images, reader/detail components, content records, and untracked illustration assets. Read fresh status and diffs before implementing; preserve those changes. Do not revert, overwrite, stage all files, or remove large source documents as part of a visual redesign.

Older plans contain stale paths, early-stage statuses, and superseded showcase instructions. Use current source as implementation evidence and this brief for the new design scope. Update the progress log after each implemented stage; do not overwrite historical records to make them appear current.

## 8. Acceptance criteria

### Visual review

- Capture Home, Works, About, a long-title project, Photography, Sketchbook, and Projector at 390 × 844 and 1440 × 900. Also inspect 320, 768, and 1024 px widths; repeat the audited 1280 × 720 size for comparison.
- At thumbnail scale, Home reads as a red/yellow typographic composition. At normal scale the entire name, practice, and VIEW WORKS remain legible. No work media or project showcase exists anywhere on `/`.
- At 1440 × 900, Works displays at least the first three title rows and a meaningful preview before scrolling. At 390 × 844, the first project entry appears after the compact introduction and filters without an extra category-selection screen.
- Projector's heading has a visible gap between lines. About statement and practice list never overlap. Long project titles and the long email wrap without escaping their columns.
- The design remains compelling with animations disabled. Color blocks and alignment, not motion or decorative noise, provide the identity.
- Art retains its colors and proportions. No illustration is captioned as a captured interface.

### Functional and inclusive use

- Every primary route and existing project URL works; Home has no dead `#selected` links. Header order and labels are consistent. Skip link reaches the correct main content.
- Pointer, touch, and keyboard complete Works filtering/opening, Sketchbook mode changes/lightbox, reader paging, and Projector reel/frame switching.
- Current page, selected filter, hover, and keyboard focus are distinguishable. Controls are at least 44 × 44 px or have equivalent non-overlapping target area.
- Test reduced motion explicitly, including JS-driven page flips and media playback. No motion-only content revelation or forced waiting.
- With JS disabled or initialization failing: name and navigation remain visible, all projects are reachable, Sketchbook images can be viewed, and photography has a usable static sequence or fallback. Hide nonfunctional enhancement controls.
- At 200% zoom and 320 px width there is no unintended horizontal page scroll, obscured action, or clipped body text. Open dialogs trap focus appropriately and restore it on close; closed dialogs do not expose controls.
- Normal text contrast reaches 4.5:1 and large text 3:1; test actual foreground/background combinations and focus outlines rather than assuming token compliance covers every case.

### Engineering verification

- Run `npm run check`, `npm run build`, and `git diff --check` after implementation. Check all generated internal links and asset paths, including preview routes.
- Leave one small runnable regression check for changed filter behavior: absent/All category, Featured, one real category, invalid category, and empty matches; verify visible results, preview clearing, count, and URL agree. Do not add a testing framework just for this task.
- Record browser observations separately from build output. Capture normal, focus, selected, reduced-motion, and representative transition states. A passing build does not establish visual quality.
- Performance design targets: LCP ≤2.5 s, CLS ≤0.1, INP ≤200 ms where meaningful measurement is available. These are future targets, not current scores. Record device/network conditions; do not claim field INP from one local lab run.
- Home should request no work thumbnails/videos. Reserve image dimensions on inner pages; avoid eager loading the entire photography archive; preserve the existing reader's correctness while measuring its loading strategy. Document unavailable checks honestly.

## 9. Actionable implementation roadmap

| Stage | Work, in order | Deliverable / gate |
|---|---|---|
| 0 — Baseline | Read current instructions/status; inspect fonts, route consumers, asset captions, existing changes; capture desktop/mobile before views. | Evidence list and protected-change inventory. Resolve current-source conflicts before editing. |
| 1 — Static cover | Remove all Home showcases; implement the two planes, semantic name, short practice and direct Works action; adapt shared header. | Desktop and mobile screenshots for art-direction review. Confirm scale, seam, and readability before spreading the treatment. |
| 2 — Reading and navigation | Apply shared type/color rules; unify navigation; fix About collision and Projector title overlap; remove redundant archival decoration. | Representative inner-page screenshots, keyboard navigation, and contrast checks. |
| 3 — Works and evidence | Compact persistent filters; All default; early preview; fix filter state/fallbacks; improve detail opening and factual captions. | Working browse → filter → project → return flow, with the focused regression check. |
| 4 — Viewing pages | Refine Sketchbook controls/captions/dialog; preserve photography; implement reader fallback/reduced motion; compose About contact band. | Touch/keyboard viewing flows and static fallbacks verified. |
| 5 — Motion | Apply the Section 6 vocabulary to the accepted static layouts; eliminate conflicting lift/tint/padding effects. | Short desktop/mobile recordings plus reduced-motion comparison. No added route delays. |
| 6 — Release review | Run code/build/link checks, viewport/zoom/font-failure tests, media failure checks, and scoped performance measurements. | Changed-file summary, visual evidence, remaining limitations. Publish only on explicit authorization. |

Priority order when capacity is limited: cover clarity → visible Works content → typography collisions → navigation and focus → evidence captions → motion. Do not polish animations while a static layout still overlaps or hides the work.

## 10. Copy-ready prompt for the implementing AI

**Historical prompt: use the updated execution prompt in Section 12.6 for the next iteration.**

> Implement the approved stage of `docs/editorial-redesign-proposal-2026-09-13.md` in `/Users/aslan/Desktop/Project/个人网站`. Read `AGENT.md`, current source, and the working-tree diff first. Communicate in Chinese; keep repository content in English. The latest brief removes ALL project showcases from the entire Home route and replaces them with an image-free Ruigslay name composition using Cinnabar Red #E5483B and Acid Yellow #DDF000. The old artwork-fragment and three-selected-works requirements are superseded. Preserve project records, current illustration assets, photography edits, all routes, and verified contact links. Start with the static cover and supply desktop/mobile views for review before extending the design. Reuse Astro components, native CSS, and existing dependencies. Follow the documented geometry, typography roles, persistent Works filters, bounded motion, touch/keyboard equivalents, and reduced-motion/no-JS fallbacks. Do not invent content or screenshots. Report what changed, actual checks performed, visual evidence, and unresolved limits. Do not deploy or claim that untested requirements passed.

## 11. Definition of this proposal's completion

This document delivers the audit, art direction, responsive design rules, interaction specification, file-level task map, phased handoff, and future acceptance criteria. Only this proposal has been authored in the current task. The website still has its current implementation; all proposed visual and interaction changes remain to be implemented and reviewed.

## 12. Approved revision — Category galleries and a liquid cover

Revision date: 13 September 2026. The user approved this revision for implementation. Its completed state and verification evidence are recorded in `docs/portfolio-redesign-progress.md`.

### 12.1 Authority and superseded decisions

- Replace the current Works filter interface and directory-style list with category navigation leading to dedicated category pages. The persistent filters, All/Featured states, list-and-preview composition, and filter-motion requirements in earlier sections are superseded for this iteration.
- AI Systems must show project thumbnails with each project's title directly underneath. Use the actual image proportions; the earlier suggested uniform 16:9 frame is explicitly rejected.
- Use three columns on wide desktop, two on tablet, and one on mobile. The earlier two-column desktop suggestion is superseded.
- Home must have a perceptible pointer-driven liquid effect on its red and yellow fields. This supersedes the earlier restriction against pointer tracking and the proposal for rigid block movement or tap-to-recompose presets. The existing short entry animation alone is insufficient.
- Keep Home free of project showcases. Preserve readable name typography, direct Works access, existing project URLs, supplied assets, and factual project evidence.

### 12.2 Works: category entry and project galleries

The intended journey is `/works/` → category gallery → existing project detail.

**Works entry page**

- Remove the current filter chip bar, count badges, All/Featured selection, and linked desktop preview.
- Present clear category links using substantial typography, fine dividing rules, and directional arrows. Suggested labels are AI Systems, Web & Archives, Image Studies, Photography, and Moving Image; map them to existing content categories without silently reclassifying projects.
- Keep Sketchbook in the shared primary navigation.
- Category selection performs normal link navigation. Do not replace it with an overlay, hidden filter mode, or client-side routing dependency.

**AI Systems gallery**

- Proposed route: `/works/ai-systems/`. Show a local return-to-Works link, the AI Systems heading, a short introduction based on existing content, then the project grid.
- Each project is one accessible link containing its thumbnail and its visible title underneath. Additional descriptions are optional and should be omitted initially to retain the requested image-and-title structure.
- No directory numbers, stacked metadata, card borders, shadows, or separate hover preview panel.
- Start with three columns at 1200 px and above, two from 700–1199 px, and one below 700 px; tune these breakpoints against actual title lengths and image readability.
- Use a 24–32 px column gap and 40–48 px row gap. Titles are approximately 28–32 px on desktop and 24 px on mobile, with 14–18 px between image and title.
- Inspect the actual thumbnail dimensions before implementation. Render images at `width: 100%; height: auto`, with intrinsic width and height attributes to reserve space. Do not impose 16:9, crop, stretch, or recolor them.
- With mixed aspect ratios, top-align items and place each title immediately after its own image. Use ordinary CSS Grid; accept the resulting whitespace rather than adding masonry or forcing a common image height.
- Preserve existing project order and genuine membership. Do not duplicate projects or invent entries to fill a three-column row.
- Hover and keyboard focus may reveal a title underline and move a decorative arrow by up to 4 px. The artwork remains stable. Mobile uses direct tapping.

Implement the Works entry and AI Systems gallery first. Every category link exposed in that version must resolve to a usable page; reuse the minimal gallery structure for other categories as necessary, while deferring category-specific visual refinement until review.

### 12.3 Home: pointer-driven liquid color fields

**Art direction**

Keep the current image-free name composition and the exact graphic colors, Cinnabar Red `#E5483B` and Acid Yellow `#DDF000`. Treat the color fields as thick, flowing paint: a nearby pointer locally pushes or pulls their boundaries, creating soft bulges and indentations. Preserve the overall red/yellow composition and the paper seam. Colors remain solid, with no muddy mixing or added gradient texture.

**Interaction behavior**

- Pointer proximity deforms nearby portions of the color-field contours, rather than translating the entire rectangle. The response follows the pointer with slight viscous lag.
- Starting tuning range: influence radius 160–240 px and maximum contour displacement 20–40 px on desktop. These are prototype values, not fixed acceptance thresholds; tune for a clearly visible response without sacrificing composition.
- When the pointer stops, movement settles. On pointer exit, contours smoothly return to their resting geometry. Do not introduce continuous idle wobble.
- Keep the name, practice statement, navigation, and VIEW WORKS as stable semantic HTML above the effect. The visual layer must not intercept their clicks or reduce their legibility.
- On touch devices, a deliberate tap on an exposed color area triggers one localized ripple. A swipe or scroll must not trigger a ripple or have its native behavior intercepted. Scale deformation down for the narrower composition.
- Provide a keyboard-accessible way to trigger one equivalent ripple, with a clear label such as “Ripple color fields,” without making the decorative shape itself part of the reading order. Honor reduced motion for this control as well.
- With `prefers-reduced-motion: reduce`, keep the composition static and disable pointer/touch deformation. With JavaScript unavailable, render the complete static cover and functional links.

**Implementation direction**

- Prefer SVG path deformation for the color-field contours, driven by a small component-local script and `requestAnimationFrame`. Verify the shape geometry and paint cost in a prototype before extending it. No animation framework or WebGL dependency is required by this specification.
- Bind pointer tracking to the cover only. Update decorative path geometry, not document layout. Recompute base geometry after a resize; preserve the distinct mobile composition.
- Keep a single active animation loop, replace incoming targets rather than queueing animations, and stop the loop once motion has settled or the cover/document is not visible.
- Guard zero-size geometry and failed initialization. Static colors, readable text, and navigation must remain available if the enhancement fails.
- Prioritize this liquid interaction over additional entrance choreography. Do not reintroduce the superseded two-preset recompose behavior.

### 12.4 Implementation order and file map

1. Read current instructions, working-tree changes, project category membership, thumbnail dimensions, and the existing cover geometry. Preserve all unrelated content and asset edits.
2. Replace `src/components/works/WorksIndex.astro` with the category-entry composition and update its active styles in `src/styles/archive-b.css`.
3. Add the AI Systems route and a minimal reusable category gallery only where needed by the real routes. Check its interaction with the existing `src/pages/works/[slug].astro` project route; all existing project addresses must continue to work.
4. Remove obsolete filter scripts, checks, and package commands only after confirming that they have no remaining consumers. Preserve useful coverage for category membership, route resolution, and project links.
5. Extend `src/components/home/PosterHome.astro` and `src/styles/poster-home.css` with the liquid-field prototype. Review desktop motion and mobile static/tap behavior before refining its viscosity and return speed.
6. Verify both changes together, record evidence and limitations in `docs/portfolio-redesign-progress.md`, and leave the local result ready for review. Do not deploy without explicit authorization.

### 12.5 Acceptance for the revised iteration

- At 1440 px, the AI Systems gallery uses three columns; at tablet widths it uses two, and at 390 px it uses one. Also inspect 320 px for overflow and long titles.
- Every thumbnail matches its source aspect ratio, preserves its colors, and has its own title directly below it. No uniform 16:9 wrapper or directory-style preview remains.
- Works category links, local back links, primary navigation, and all existing project URLs resolve correctly. Browser Back returns visitors to the category page normally.
- At normal pointer speed, the cover visibly flows locally around the pointer and smoothly settles after exit. Capture an idle state, a deformed state, and a short motion recording; a screenshot of the static cover does not verify the effect.
- The name and primary action stay stable, legible, and clickable throughout deformation. No clipping, seam breakage, horizontal page scroll, or layout shift is introduced.
- Touch taps produce a bounded response; page scrolling remains native. Keyboard users can reach the equivalent control, and reduced-motion/no-JavaScript users retain the complete static cover.
- Verify that the animation loop stops at rest and when hidden. Report the actual browser/device and any unavailable checks; do not claim a performance target from visual inspection alone.
- Run the repository checks, build, scoped regression checks, and internal route/asset validation after implementation. Record this iteration separately from earlier implementation claims.

### 12.6 Updated execution prompt

> Implement Section 12 of `docs/editorial-redesign-proposal-2026-09-13.md` when website implementation is authorized. It supersedes earlier Works filtering and Home motion decisions. Read current repository instructions and diffs first. Replace the Works filter/directory interface with category navigation and an AI Systems category gallery using three desktop columns, two tablet columns, and one mobile column. Display each actual thumbnail at its intrinsic aspect ratio with the project title underneath; never impose 16:9. Preserve project membership, assets, and existing detail URLs. Add a clearly perceptible, local pointer-driven liquid deformation to the red/yellow Home contours, preferably using lightweight SVG paths. Keep name typography and links stable, provide bounded touch and keyboard equivalents, and preserve static reduced-motion/no-JavaScript behavior. Do not add rigid preset recomposition or persistent idle wobble. Use current Astro components and native browser features, validate the actual visual and interaction states, document limitations, and do not deploy without explicit authorization.

## 13. Approved revision — Games directory

Revision date: 14 September 2026. This section records the approved design direction only. Website implementation requires a subsequent explicit instruction. It supersedes the current top-level Image Studies entry and defines a directory treatment specific to Games; it does not restore the retired global Works filters.

The separate user decision to remove the visible “Ripple color fields” button supersedes the keyboard-control requirement in Sections 12.3, 12.5, and 12.6. Pointer and bounded touch deformation remain part of the Home treatment.

### 13.1 Refined brief

Replace **Image Studies** on the Works category-entry page with a clearer **Games** category. Selecting Games opens a dedicated game-practice page at `/works/games/`. Unlike the image-and-title grid used by AI Systems, Games uses the earlier editorial directory language: numbered sections and project rows on the left, with a contextual project preview on the right at desktop widths.

Organize the page into three current practice areas:

1. **Game Projects**
2. **Character Design**
3. **Game Research & Insights**

Use **Game Research & Insights** as the English label for 游戏洞察调查. It is broad enough to cover player research, market surveys, mechanic analysis, and research reports without implying that every entry uses the same method.

The page should feel like a designed game archive rather than a file-manager imitation. Preserve the current paper, ink, Cinnabar Red, and Acid Yellow identity, existing project-detail routes, factual content boundaries, and keyboard/touch access.

### 13.2 Works entry change

- Replace the third Works tile label and destination from **Image Studies** / `/works/image-studies/` to **Games** / `/works/games/`.
- Derive the displayed Games count from real assigned projects. Do not count empty subcategories or create placeholder works to inflate the number.
- Retain the current asymmetric category-tile composition. Games uses the existing restrained paper-colored third tile so the stronger color emphasis remains on AI Systems and Web & Archives.
- Keep `/works/image-studies/` as a compatibility route or deliberate redirect until every existing Image Studies work has an approved destination. Do not silently break an existing route.

### 13.3 Games information architecture

The intended journey is `/works/` → `/works/games/` → an existing project detail page.

At wide desktop widths, use a two-column composition:

- The left directory occupies approximately 60% of the available width.
- The right preview occupies approximately 40%, remains visible while moving through the directory, and preserves each source image's intrinsic aspect ratio.
- The page introduction shows `GAME ARCHIVE / 03 DIRECTORIES`, the large `GAMES` heading, and one concise practice statement.

The directory uses three visible, always-open sections. Each section header contains its two-digit number, label, and real file count. Projects appear directly beneath the relevant section as rows containing project number, title, year, and a directional cue. Section headers organize content; they are not filter buttons and do not hide sibling sections.

An indicative structure is:

```text
01  GAME PROJECTS                         01 FILE
    01  I CHING GRAND STRATEGY             2026—

02  CHARACTER DESIGN                     01 FILE
    02  PIXEL MONSTER STUDIES              2026

03  GAME RESEARCH & INSIGHTS             XX FILES
    03  [REAL RESEARCH PROJECT TITLE]       YEAR
```

Clicking a project row follows its ordinary detail-page link. The Games page must not introduce client-side routing, query-string filters, Featured/All states, or a separate preview-opening step.

### 13.4 Preview and interaction behavior

- Preview the first real project on initial load.
- On pointer hover or keyboard focus, update the right preview, title, type, and year to match the active project row.
- Mark the active row with an Acid Yellow field or a narrow Acid Yellow registration bar. Do not use rounded cards, shadows, or raised hover movement.
- Use a restrained 160–200 ms opacity transition for preview changes. Keep image geometry stable and replace queued transitions with the latest selection.
- A project click opens its existing detail route. Browser Back should return to the same Games page and normal scroll position.
- Give every linked row a visible focus state. Preview updates are supplementary; all project information and navigation must remain available without JavaScript.

At widths below the desktop split, remove the sticky side preview and present the three directory sections as a single vertical reading sequence. Each project remains a direct link with title, year, and arrow. If an image is retained on mobile, place it beneath its own project row and preserve its natural dimensions. Do not make mobile access depend on hover. At 320 px and 390 px, long titles must wrap without colliding with years or causing horizontal page scroll.

### 13.5 Content mapping and evidence boundaries

Initial mapping based on the current repository:

| Game directory | Current work | Intended treatment |
|---|---|---|
| Game Projects | I Ching Grand Strategy | Add a Games assignment while retaining AI Systems; one work may legitimately appear in both categories. |
| Character Design | Pixel Monster Studies | Move from the retiring Image Studies entry into Games. |
| Game Research & Insights | User's game-insight research | Add only after its real title, year, summary, and available preview material are identified. |
| Unresolved | Sacrificial Lamb Instruction Manual | Do not automatically classify as Games. Confirm whether it belongs to character design, another visual-practice destination, or remains available only through its existing route. |

Do not duplicate detail pages when a work belongs to more than one top-level category. Store multiple truthful category assignments on the existing work record and let each index reference the same canonical URL.

An empty Game Research & Insights section may display `00 FILES` as part of the honest directory structure, but it must not contain invented project titles, descriptions, dates, or imagery.

### 13.6 Visual specification

- Preserve the current paper `#FDF9F2`, ink `#171318`, Cinnabar Red `#E5483B`, and Acid Yellow `#DDF000` system.
- Set `GAMES` in the existing compressed display face at the same hierarchy as other category-page titles.
- Use Archivo Narrow for section labels and project titles, and IBM Plex Mono for directory numbers, counts, years, and supporting metadata.
- Divide sections and rows with fine ink rules. Use spacing and type scale to distinguish directory, section, and project levels rather than adding containers.
- Render preview images with `width: 100%; height: auto` and explicit intrinsic width and height attributes. Never impose a uniform crop merely to align the directory.
- Limit motion to preview opacity, title underline, and a decorative arrow shift of no more than 4 px. Honor reduced motion.

### 13.7 Actionable implementation roadmap

1. Inspect all current work records and confirm the canonical project intended for Game Research & Insights. Resolve the Sacrificial Lamb classification before removing its only category entry.
2. Change the third definition in `src/data/work-categories.js` from Image Studies to Games and extend category matching only as much as needed to support the three Games practice tags and legitimate multi-category works.
3. Add `/works/games/` and a focused `GameDirectory.astro` component. Reuse the useful row-and-preview structure from the earlier Works implementation without restoring its filters, URL state, mobile accordions, or unrelated scripts.
4. Assign I Ching Grand Strategy to Game Projects and Pixel Monster Studies to Character Design while keeping their canonical detail URLs. Add the research work only from verified material.
5. Add the smallest Games-specific style layer in `src/styles/archive-b.css`: desktop directory/preview split, active row, responsive vertical directory, intrinsic images, hover, and focus states.
6. Preserve or redirect `/works/image-studies/` after confirming the destination of every existing item. Verify all five top-level Works links and all project links.
7. Extend the existing portfolio regression check for Games membership, multi-category inclusion, empty research handling, and route resolution. Run repository checks, build, internal-link validation, and browser inspection at 1440, 768, 390, and 320 px.
8. Record actual implementation evidence and unresolved content limits in `docs/portfolio-redesign-progress.md`. Do not deploy without explicit authorization.

### 13.8 Acceptance criteria

- Works presents **Games** in place of **Image Studies**, with an accurate project count and a working `/works/games/` destination.
- Games visibly contains the three named directory sections in the stated order. They behave as content groups rather than global filters.
- Desktop presents a readable directory and contextual right preview. Hover and keyboard focus select the same project; clicking opens its canonical detail page.
- Tablet and mobile remove the side-preview dependency, preserve direct project access, wrap long titles correctly, and introduce no horizontal overflow at 390 px or 320 px.
- I Ching Grand Strategy can appear in both AI Systems and Game Projects without a duplicate detail page. Pixel Monster Studies appears under Character Design.
- No unverified research project or asset is invented. Sacrificial Lamb Instruction Manual remains reachable until its final category is explicitly decided.
- Image previews preserve their source proportions and colors. Directory interaction does not add cards, shadows, forced crops, or unrelated motion.
- Existing Works categories, primary navigation, browser Back behavior, and all project URLs continue to resolve. Code, build, regression, browser, and internal-link checks are recorded separately from design intent.

### 13.9 Copy-ready implementation prompt

> Implement Section 13 of `docs/editorial-redesign-proposal-2026-09-13.md` only after website implementation is explicitly authorized. Replace the Works entry-page Image Studies tile with Games and add `/works/games/`. Keep AI Systems as its image-and-title grid; Games instead uses three always-visible editorial directory sections: Game Projects, Character Design, and Game Research & Insights. At desktop widths, combine linked project rows on the left with an intrinsic-ratio contextual preview on the right. On tablet and mobile, use a direct vertical directory without a side-preview dependency. Map I Ching Grand Strategy to Game Projects while retaining AI Systems, and map Pixel Monster Studies to Character Design. Do not invent the game-research record or silently classify Sacrificial Lamb Instruction Manual; resolve those from real material. Reuse the minimum useful part of the earlier row-and-preview pattern without restoring global filters, query state, or unnecessary scripts. Preserve canonical project URLs, focus access, reduced motion, and the current editorial palette. Verify 1440, 768, 390, and 320 px, all internal routes, and repository checks. Record evidence and do not deploy.

## 14. Approved refinement — Games directory to galleries

Revision date: 14 September 2026. This refinement supersedes the project-row and contextual-preview behavior in Sections 13.3, 13.4, 13.7, 13.8, and 13.9.

- Use a three-level journey: `/works/` → Games directory → subcategory gallery → project detail.
- The Games page contains three substantial directory links only: Game Projects, Character Design, and Game Research & Insights. Each shows its real file count and a short scope statement.
- `/works/games/game-projects/` is an image-and-title gallery containing I Ching Grand Strategy.
- `/works/games/character-design/` is an image-and-title gallery containing Pixel Monster Studies.
- `/works/games/game-research-insights/` is a real route with an honest empty state until verified research content is supplied.
- Every subcategory gallery returns locally to `/works/games/`. Project cards retain their canonical detail links and intrinsic image ratios.
- On the top-level Works composition, Games uses Cinnabar Red `#E5483B`; Web & Archives uses paper `#FDF9F2`.
- Do not restore a preview panel, project rows, filtering, or query-string state on the Games directory. Keep the hierarchy legible through large type, numbering, file counts, rules, and arrows.

## 15. Approved refinement — Research directory

Revision date: 14 September 2026. This decision supersedes the gallery treatment for `/works/games/game-research-insights/` in Section 14 while leaving Game Projects and Character Design as image-and-title galleries.

- Present Game Research & Insights as an editorial research directory with columns for number, study title, method/type, and year.
- Each future study is a direct link to its canonical detail page. Use fine rules, compressed study titles, and monospaced metadata; do not add thumbnails, cards, or a side preview.
- With no verified research records, retain the full directory frame and show `00 / NO STUDIES INDEXED YET` with a factual note that verified entries will appear there.
- On mobile, reduce the visible header to number, study, and year; place method/type beneath the study title for future rows. Long titles must wrap without horizontal overflow.

## 16. Approved refinement — Primary practice hierarchy

Revision date: 14 September 2026. Replace the public Works category set with four entries: AI Systems, UI/UX, Games, and Photography. Rename Web & Archives to UI/UX and remove Moving Image from the category-entry composition while preserving both former routes and all canonical project pages for compatibility.

- Use Acid Yellow for AI Systems, ink black for UI/UX, Cinnabar Red for Games, and paper white for Photography.
- Treat AI Systems, UI/UX, and Games as the three emphasized practices. Photography remains a quieter supporting practice.
- Route UI/UX to `/works/ui-ux/` and retain the existing Archive·Web project membership. Do not rewrite factual project content merely to fit the new public label.
- Keep `/works/web-archives/` and `/works/moving-image/` available as compatibility archive pages, but do not expose them as top-level Works tiles.
