# Portfolio redesign progress

## 2026-09-13 — Editorial redesign / Stage 1 v0

- Completed the reviewable static cover described in `docs/editorial-redesign-proposal-2026-09-13.md`.
- Removed all project images, selected-work data, cards, project titles, image interactions, and the eye animation from the Home route. Project assets and records remain untouched.
- Rebuilt Home as an image-free Ruigslay name composition with paper, ink, Cinnabar Red `#E5483B`, and Acid Yellow `#DDF000`; retained the verified email and GitHub links and added a direct `/works/` action.
- Reused `SiteNav.astro` on Home, added the visible Sketchbook destination, and gave the Sketchbook route its own current-page state. Updated the shared preview route description.
- Validation: `npm run check` passed with 0 diagnostics; `npm run build` produced 16 pages; `git diff --check` passed. Local browser inspection covered 320 × 568, 390 × 844, 768 × 1024, 1280 × 720, and 1440 × 900. No horizontal document overflow was detected at these widths, and the name, Works action, and contact footer remained reachable through normal scrolling.
- This is the static v0 checkpoint. Full motion and the inner-page redesign remain pending visual approval. No deployment was performed.

## 2026-09-13 — Editorial redesign / Stages 2–6

- Extended the approved cover direction across the site while preserving the existing Works index, project records, Sketchbook modes, photography reader, and Unreliable Projector. Shared navigation now uses the same order and current-page treatment on Home, Works, Sketchbook, About, project pages, and the Projector; every primary page has a working skip link and one `main-content` landmark.
- Reworked Works into a compact All-first index with persistent filters, URL state, counts, polite status updates, a load-safe desktop preview, and natural-ratio mobile cards. Added the small `npm run check:filters` regression check for All, Featured, a real category, invalid input, and empty results.
- Corrected project evidence framing: summaries lead each project, illustration and placeholder captions remain factual, and interface captures are never implied where they are absent. Simplified About, separated its statement and practice list, and turned contact details into an acid-yellow action band.
- Refined Sketchbook with inspected, factual descriptions for all 12 images, overview and one-at-a-time modes, bounded image fades, and a modal that moves focus inside and restores the opener on close. The photography reader retains its original page turn, uses a 1 ms reduced-motion setting, and only reveals enhanced controls after initialization so the unmodified page sequence remains the no-JavaScript fallback.
- Added a restrained motion vocabulary: 480 ms cover-plane registration, 140 ms link responses, a cancellable 200 ms Works result transition, 180 ms Sketchbook fades, and a 220 ms Projector frame change with a 6 px maximum offset. The Projector heading line spacing was increased to keep a visible separation between its two lines.
- Browser observations: Home, Works, About, I Ching Grand Strategy, Photography, Sketchbook, and Projector were inspected at 390 × 844 and 1440 × 900 with no horizontal document overflow. Home, Works, and the long-title I Ching page were also checked at 320 × 568, 768 × 1024, 1024 × 768, and 1280 × 720. Home contains zero work media; Works places its first mobile project at 601 px on the 390 px viewport and 587 px on the 320 px viewport.
- Interaction observations: an invalid Works category returned to All and removed the invalid query; Photography filtering produced one result and kept focus on the filter. The photography reader advanced from page 01 to 02. Sketchbook changed from overview to file 02 in single mode, opened the modal, closed with Escape, removed closed-dialog controls from the accessibility tree, and restored focus to the image opener. Projector reel and frame controls changed the visible work, updated the live status, and kept focus on CHANGE FRAME after shuffling. No browser warnings or errors were recorded.
- Verification: `npm run check` passed with 0 diagnostics; `npm run check:filters` passed; `npm run build` produced 16 pages; `git diff --check` passed; the built-site link and asset scan found 0 missing internal targets across 16 HTML files. Calculated contrast is 17.51:1 for ink on paper, 14.47:1 for ink on acid yellow, 5.45:1 for accessible red metadata on paper, and 4.51:1 for that metadata red on acid yellow; the brighter Cinnabar Red remains the large graphic color.
- Remaining measurement limits: the browser harness did not provide a direct reduced-motion, JavaScript-disabled, or 200% browser-zoom toggle, so those paths were verified from implementation and effective narrow viewports rather than claimed as device-level simulations. LCP, CLS, and INP were not benchmarked. No deployment was performed.

## 2026-09-13 — Section 12 category galleries and liquid cover

- Replaced the Works filters, directory rows, counts, and linked preview with five normal category destinations. `/works/` is now a graphic category-entry page; each destination resolves to a reusable image-and-title gallery while every existing project detail URL remains unchanged.
- Added `/works/ai-systems/` with the four existing AI Systems projects in their established order. The gallery uses three columns at 1440 px, two at 768 px, and one at 390 px and 320 px. Images use intrinsic dimensions and `height: auto`: the three 1672 × 941 thumbnails retain that source ratio, and the 4:3 visualization preview remains 4:3.
- Added the same minimal usable gallery route for Web & Archives, Image Studies, Photography, and Moving Image so every category exposed on the entry page has a real destination. Project titles sit directly beneath their images; cards do not add descriptions, shadows, or a secondary preview.
- Replaced Home's rigid color planes after enhancement initialization with local SVG contours. Pointer proximity deforms the nearest edge with viscous lag, then settles to the static red/yellow geometry. The effect uses one component-local animation loop and stops at rest, outside the viewport, or while the document is hidden.
- Added a bounded tap response that ignores scroll gestures. The initially supplied keyboard ripple button was subsequently removed at the user's request. Name typography, navigation, contact links, and VIEW WORKS remain semantic HTML outside the decorative SVG. Reduced-motion and failed/no-JavaScript initialization retain the complete static cover.
- Browser observations: desktop idle and deformed Home states were inspected at 1440 × 900; the SVG path changed during the keyboard ripple while document-positioned text and action geometry remained unchanged. Works and AI Systems were inspected at 1440, 768, 390, and 320 px with no horizontal overflow. Browser Back-compatible links and all five category routes were present, and no browser warning or error was recorded.
- Verification: `npm run check`, `npm run check:portfolio`, `npm run build`, and `git diff --check` passed. The build produced 21 pages, and the built-site scan found 0 missing internal targets across all 21 HTML files. The scoped regression check covers category membership and liquid-path resting, distant-pointer, deformation, and finite-output behavior.
- Measurement limits: the browser harness did not expose direct reduced-motion, JavaScript-disabled, touch-device, 200% zoom, or motion-recording controls. Those paths were reviewed in the implementation but are not claimed as device-level simulations. LCP, CLS, and INP were not benchmarked. No deployment was performed.

## 2026-09-14 — Section 13 Games directory

- Replaced the Works entry-page Image Studies tile with Games and added `/works/games/`. Its displayed count is derived from the two currently assigned works rather than from the three directory headings.
- Added three always-visible groups: Game Projects, Character Design, and Game Research & Insights. I Ching Grand Strategy now belongs to Game Projects while retaining AI Systems; Pixel Monster Studies moved to Character Design. The research group honestly displays `00 FILES / NO FILES INDEXED` because no verified research project record is present.
- Restored the useful directory-and-preview pattern only for Games. Desktop shows linked editorial rows beside a sticky, intrinsic-ratio preview; pointer hover and keyboard focus update its image, title, type, and year. Tablet and mobile remove the side preview and retain direct project links in a single vertical directory.
- Preserved `/works/image-studies/` with Sacrificial Lamb Instruction Manual as a compatibility page. The project remains reachable and was not silently reclassified as a game.
- Browser observations: Works displayed the Games tile with `02` projects. At 1440 px, Games showed the directory/preview split and keyboard focus changed the preview from I Ching Grand Strategy to Pixel Monster Studies. At 768, 390, and 320 px, the preview was removed, all three groups and both project links remained visible, long titles wrapped, and no horizontal overflow occurred. Entering I Ching Grand Strategy and using Browser Back returned normally to `/works/games/`. No browser warnings or errors were recorded.
- Verification: `npm run check` passed with 0 diagnostics; `npm run check:portfolio` passed its Games membership and multi-category assertions; `npm run build` produced 22 pages; `git diff --check` passed; the built-site scan found 0 missing internal targets across all 22 HTML files.
- Remaining content dependency: a real Game Research & Insights record still requires its verified title, year, summary, and preview material. No deployment was performed.

## 2026-09-14 — Games directory-to-gallery refinement

- Changed Games from a project-row/side-preview page into the requested two-stage browse flow. `/works/games/` now presents three numbered directory links; each opens its own image-and-title gallery.
- `/works/games/game-projects/` contains only I Ching Grand Strategy. `/works/games/character-design/` contains only Pixel Monster Studies. `/works/games/game-research-insights/` resolves to an honest empty gallery. All three galleries return to Games before the visitor returns to Works.
- Swapped the top-level category colors: Games now uses Cinnabar Red `#E5483B`, while Web & Archives uses paper `#FDF9F2`.
- Browser observations: the Games directory showed counts `01`, `01`, and `00`; each route displayed the correct project or empty state and a `/works/games/` back link. The directory introduced no horizontal overflow at desktop or 390 px. No browser warnings or errors were recorded.
- Verification: `npm run check`, `npm run check:portfolio`, `npm run build`, and `git diff --check` passed. The build produced 25 pages, and the built-site scan found 0 missing internal targets across all 25 HTML files. No deployment was performed.

## 2026-09-14 — Game Research directory refinement

- Replaced the empty Game Research & Insights gallery with a dedicated research-directory page. Its structure reserves number, study, method/type, and year columns for verified future records and uses direct canonical project links when records exist.
- The current zero-record state remains factual: `00 / NO STUDIES INDEXED YET`. It does not create a thumbnail, placeholder study, invented date, or implied research result.
- Browser observations: the full four-column directory header appeared at 1440 px; the 390 px layout reduced it to number, study, and year, kept the empty-state note readable, and introduced no horizontal overflow. No browser warnings or errors were recorded.

## 2026-09-14 — Primary Works hierarchy

- Reduced the public Works entry to AI Systems, UI/UX, Games, and Photography. Web & Archives is now labeled UI/UX and resolves through `/works/ui-ux/`; Moving Image no longer appears as a top-level tile.
- Rebalanced the category field into the requested hierarchy: AI Systems uses Acid Yellow, UI/UX uses ink black with paper text, Games uses Cinnabar Red, and Photography uses paper white. The first three are the emphasized practices.
- Preserved `/works/web-archives/`, `/works/moving-image/`, their project details, and their content records as compatibility archive routes.
- Browser observations: the four-tile desktop composition and single-column 390 px composition matched the intended colors and introduced no horizontal overflow. UI/UX displayed La Table du Temps and Detective Archive Prototype. No browser warnings or errors were recorded.

## 本次更新：2026-09-06

- 所处阶段：P0–P2。
- 已完成：素材核对；首页静态样稿 `/preview/poster-b/`；B 配色、海报首屏 A、三个真实精选与手机布局。用户已确认迁入，正式首页 `/` 现复用同一组件。已加入一个主动作：点击、Hover 或键盘聚焦首屏眼睛时，画面短暂靠近并出现印刷式位移。已补充精选图的抬起／OPEN 状态。
- 改动文件：`src/components/home/PosterHome.astro`、`src/pages/index.astro`、`src/pages/preview/poster-b.astro`、`src/styles/poster-home.css`、本文件。
- 使用素材与出处：项目内 `public/images/works/photography-notes/book/spread-03.jpg`、`public/images/works/sketchbook/FREE_saywhateverI_7.jpg`、`public/images/works/sketchbook/FREE_saywhateverI_5.jpg`。
- 验证结果：`ASTRO_TELEMETRY_DISABLED=1 npm run check` 通过（0 errors / 0 warnings / 0 hints）；`ASTRO_TELEMETRY_DISABLED=1 npm run build` 通过（15 pages，包含 `/preview/poster-b/`）；`git diff --check` 通过。已在本地浏览器以桌面视口观察首屏与精选区：主标题、两张首屏碎片、三张精选图像和链接均正常显示。移动端 CSS 已实现独立单列顺序；当前浏览器环境未提供固定手机视口，仍需在 360px 与 390px 设备级视觉复核。
- 用户已认可的决定：B 配色；海报首屏 A；第一轮使用摄影和绘画。
- 尚未认可的样稿选择：蓝色眼睛穿入姓名；当前三件素材的顺序、名称与具体排版。
- 待补材料或具体阻碍：真实联系方式；AI／交互项目的最终界面截图；摄影年份核对。
- 下一步：检查 P2 的鼠标、键盘、触摸与减少动态模式；随后进入 P3，优化 Works 默认展示与第一件完整详情页。

## 本次更新：2026-09-06（P3 / Works）

- 所处阶段：P3，进行中。
- 已完成：Works 首次进入时以 Featured 直接显示真实项目；筛选器保留为辅助浏览；“SHOW ALL WORKS”现在直接展开全部条目并保留筛选入口。
- 改动文件：`src/components/works/WorksIndex.astro`、本文件。
- 验证结果：`ASTRO_TELEMETRY_DISABLED=1 npm run check` 与 `ASTRO_TELEMETRY_DISABLED=1 npm run build` 通过。浏览器实测：默认 Featured 显示 7 个条目；AI·Systems 筛选显示 4 个条目并更新 URL；全部作品回退显示 10 个条目且保留筛选入口。已修正 Works 页原先过期的“06”硬编码，改为由真实 featured 数据计算。
- 下一步：检查摄影详情页的真实状态、正文与翻页体验，决定首件案例层面的内容修改范围。

## 本次更新：2026-09-06（P3 / Photography）

- 所处阶段：P3，进行中。
- 已完成：摄影详情页将封面标识与状态改为已证实的“PORTFOLIO EDITION / 46 SPREADS”，不再把已有图册称为可替换材料。翻页组件可通过 Tab 获得焦点，以接收已有的左右方向键操作。
- 改动文件：`src/components/works/ProjectArchive.astro`、`src/components/works/PhotographyFlipbook.astro`、本文件。
- 验证结果：`ASTRO_TELEMETRY_DISABLED=1 npm run check` 与 `ASTRO_TELEMETRY_DISABLED=1 npm run build` 通过；`git diff --check` 通过。翻页的设备级交互验收仍待下一次浏览器检查。
- 待补材料：摄影年份 metadata 与正文标题的冲突仍未核实，因此未擅自改写。
- 下一步：补齐联系路径与 About 的真实可用入口，或在用户提供联系方式后完成 P4。

## 本次更新：2026-09-06（P4 / B 配色迁移）

- 所处阶段：P4，进行中。
- 已完成：Works、所有项目详情、Sketchbook 与 About 已迁移至 B 配色：纸白 `#FDF9F2` 为底、墨黑 `#171318` 作为正文与结构线、朱红 `#E5483B` 标记元信息、荧光黄绿 `#DDF000` 仅用于筛选／行悬停。首页继续使用已确认的海报实现，不受该内页样式影响。
- 改动文件：`src/styles/archive-b.css`、`src/pages/works.astro`、`src/pages/works/[slug].astro`、`src/pages/sketchbook.astro`、`src/pages/about.astro`、本文件。
- 结构调整：Works 分类区取消原本强制的 55svh 空白，精选列表会更早进入视野；四个内页首段增加朱红方块，作为与首页同源的印刷标记。
- 验证结果：`ASTRO_TELEMETRY_DISABLED=1 npm run check` 通过（0 errors / 0 warnings / 0 hints）；`ASTRO_TELEMETRY_DISABLED=1 npm run build` 通过（15 pages）；`git diff --check` 通过。浏览器已实测 `/works/`、`/works/photography-notes/`、`/sketchbook/` 与 `/about/`：配色覆盖生效，精选筛选仍显示 7 项，摄影图册与详情媒体正常出现，Sketchbook 横向画册正常显示，About 的联系方式仍是明确待补状态。
- 下一步：在用户提供真实联系方式后完成联系入口；随后可进入 P5，为有真实截图的 AI／交互项目编排独立案例页。

## 本次更新：2026-09-06（P3 / 技术案例状态）

- 已完成：项目详情不再以统一的“可替换材料”描述所有非摄影作品。Scentscape、La Table du Temps、I Ching Grand Strategy 与 Agent Product Comparison 根据已有内容中已证实的原型状态，显示“WORKING PROTOTYPE / SCREEN CAPTURES PENDING”；其余尚无完整材料的条目显示“MATERIALS BEING INDEXED”。
- 改动文件：`src/components/works/ProjectArchive.astro`、本文件。
- 内容边界：未添加或暗示不存在的界面截图、线上链接或成效数据。详情页继续使用当前设计占位预览，直到替换为用户提供的真实项目画面。
- 验证结果：`ASTRO_TELEMETRY_DISABLED=1 npm run check`、`ASTRO_TELEMETRY_DISABLED=1 npm run build` 与 `git diff --check` 均通过。浏览器已检查 Scentscape 详情：状态和预览 caption 均显示为“WORKING PROTOTYPE / SCREEN CAPTURES PENDING”，正文与原有 GitHub 链接仍可用。
- 下一步：提供真实联系方式后完成联系入口。P5 是执行规范中必须单独选择的高阶实验阶段，未在本轮自动启动。

## 本次更新：2026-09-06（P5 / Unreliable Projector）

- 已完成：新增独立实验页 `/lab/projector/`，不覆盖已确认的首页海报，也不替代稳定的 Works 索引。它把现有作品按 SYSTEMS、IMAGES、STORIES 三种可见状态重组；访客可切换卷轴、选择具体作品或主动改变当前画面，并始终可以回到普通 Works 索引。
- 改动文件：`src/components/works/UnreliableProjector.astro`、`src/pages/lab/projector.astro`、`src/styles/projector-lab.css`、`src/components/works/WorksIndex.astro`、`src/styles/archive-b.css`、本文件。
- 内容边界：实验页仅读取现有作品集合、原有预览素材、名称、年份和摘要；各个占位预览仍保留其真实的截图待补状态。无自动播放、无实时生成，也没有虚构新的作品或界面。
- 无 JavaScript 时，首个 SYSTEMS 条目仍会以完整可读的静态画面显示；“普通索引”链接始终可用。减少动态模式会关闭过渡效果。
- 交互细节：访客主动切换卷轴、选择作品或点击 CHANGE FRAME 时，当前画面以 280ms 的两帧印刷位移进入；不自动轮播。移动浏览器 theme color 已改为 B 系统的墨黑。

## 本次更新：2026-09-06（P6 / 本地发布前审计）

- 已完成：重新执行 `ASTRO_TELEMETRY_DISABLED=1 npm run check`（0 errors / 0 warnings / 0 hints）、`ASTRO_TELEMETRY_DISABLED=1 npm run build`（16 个页面）与 `git diff --check`。对 `dist/` 的 16 个 HTML 页面执行站内 `href`／`src` 解析检查，结果为 0 个缺失目标。
- 已核对的外部项目链接：`agent-product-comparison-viz`、`2D-Strategy-Game`、`La-Table-du-Temps`、`Scentscape` 的 GitHub URL 均在静态页面中保留；本轮未进行线上部署或把它们宣称为已打开的实时验证。
- 已完成的浏览器观察：桌面浏览器中实际查看了首页、Works、摄影详情、Sketchbook、About、Scentscape 详情和放映机首帧。
- P6 可访问性补充：Sketchbook 的弹层关闭后现在显式回到原触发图片；放映机的卷轴和换帧控制器最小高度为 44px。
- 联系入口：用户于 2026-09-06 提供并授权使用 `YETONG001@e.ntu.edu.sg` 与 `https://github.com/aassllaann`。已加入首页 footer 与 About 的联系区；邮箱使用 `mailto:`，GitHub 在新标签打开。
- 验证结果：重新执行 `ASTRO_TELEMETRY_DISABLED=1 npm run check`（0 errors / 0 warnings / 0 hints）、`ASTRO_TELEMETRY_DISABLED=1 npm run build`（16 个页面）与 `git diff --check` 均通过。浏览器已确认 About 里存在可访问的邮箱和 GitHub 链接。
- 待完成的验收：当前浏览器工具未提供固定 360px／390px／768px 视口，也未能完成放映机切换后的设备级复核；因此不把移动布局、键盘全过程、200% 缩放、LCP／CLS／INP 或线上链接可达性写为已通过。
- 下一步：使用实际手机／桌面设备完成剩余响应式与键盘验收；获得明确发布授权后再部署。

## 第二轮规划记录：2026-09-06（仅文档，未实施）

- 用户最新范围：将内页节奏、摄影入口、Sketchbook 整体浏览、首页访客文案、选择反馈与焦点五项写入新一轮指导规范；明确要求不操作网站。
- 已完成：在根目录《作品集升级执行规范.md》第 15 节补充页面目标、实施边界、逐项验收、文件范围及执行顺序，并在第 14 节通用启动指令前标注最新授权边界。
- 本轮只修改上述规范与本进度文档；没有修改网站代码、素材或部署。未运行网站构建，因为本次交付仅为 Markdown 指导文档。
- 状态：第二轮方案已记录，所有代码任务均待实施。尤其放映机隐藏规则与交互切换不能沿用此前“已完成”的表述作为实测证据，实施时须核查。
- 下一步：用户明确要求实施第二轮后，按第 15.7 节顺序推进；此前已提供的邮箱与 GitHub 继续有效，无需再次索取。

## 本次更新：2026-09-06（第二轮 / 内页阅读节奏与交互收敛）

- 已完成：首页精选说明替换为面向访客的媒介与观看主题文案；About 缩短标题区；摄影详情移除图册前重复封面，将摘要放入书名区并直接进入图册；Sketchbook 增加默认 OVERVIEW 与 ONE AT A TIME；放映机收紧标题区、修复 `[hidden]` 内容显示、收敛换帧动效并分离焦点与选中状态。
- 改动文件：`src/components/home/PosterHome.astro`、`src/components/about/AboutArchive.astro`、`src/components/works/ProjectArchive.astro`、`src/components/works/PhotographyFlipbook.astro`、`src/components/works/UnreliableProjector.astro`、`src/pages/sketchbook.astro`、`src/styles/archive-b.css`、`src/styles/projector-lab.css`、新增 `src/styles/sketchbook-browser.css`、本文件及根目录执行规范。
- 交互证据：浏览器中 Sketchbook 已实测 Overview→One at a time，首张 Previous 为禁用，Next 更新为 FILE / 02 OF 12；放大弹层按 Esc 后焦点返回原触发图片。放映机初始仅显示一张画面，CHANGE FRAME 后切换到新的单一画面、更新简短播报，焦点仍留在 CHANGE FRAME 按钮。摄影页已实际观察到“书名＋摘要→READING MODE 图册”的顺序；About 与 Sketchbook 开场亦已观察。
- 验证结果：`ASTRO_TELEMETRY_DISABLED=1 npm run check` 通过（0 errors / 0 warnings / 0 hints）；`ASTRO_TELEMETRY_DISABLED=1 npm run build` 通过（16 pages）；`git diff --check` 通过。
- 未完成验收：固定 360px／390px／768px／1440px、320px 横向溢出、200% 缩放、完整键盘流程、`prefers-reduced-motion` 与无 JavaScript 回退仍需设备级核对。未部署。
- 下一步：处理真实 AI／交互项目截图后更新详情页；或在准备发布前执行完整跨视口验收。
