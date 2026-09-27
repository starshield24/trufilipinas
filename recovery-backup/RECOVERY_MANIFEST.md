# Recovery Manifest — 2026-09-27

This is a deliberately conservative inventory. "Known" means the file/path and relevant current implementation details were actually available in the conversation; it does not mean the complete current file is reconstructed.

| File | Status | Notes |
|---|---|---|
| src/app/layout.tsx | PARTIAL / VERIFIED DETAILS | Root viewport-fit=cover, iOS PWA meta tags, body/html background #12203F were documented. |
| src/app/globals.css | PARTIAL / VERIFIED DETAILS | html/body overflow and .chat-container details documented. |
| src/components/layout-shell.tsx | PARTIAL / VERIFIED DETAILS | Header routing and main padding logic documented. |
| src/components/app-header.tsx | PARTIAL / VERIFIED DETAILS | Current safe-area top padding and header row padding documented. |
| src/components/app-header-with-title.tsx | PARTIAL / VERIFIED DETAILS | Current fixed title overlay and safe-area positioning documented. |
| src/components/site-header.tsx | PARTIAL / VERIFIED DETAILS | Safe-area/sticky header history documented. |
| src/components/live-stream/live-stream-viewer.tsx | PARTIAL / VERIFIED DETAILS | Current fixed inset root and documented historical safe-area variant documented. |
| src/components/meeting-place/meeting-place-page.tsx | PARTIAL / VERIFIED DETAILS | Current fixed/inset root and flex structure documented. |
| src/hooks/use-visual-viewport-height.ts | PARTIAL / VERIFIED DETAILS | --vvh / --vvh-offset behavior documented. |

## Important limitation
Do NOT manufacture missing source code from summaries. When a complete file becomes available in chat, add it here as a complete snapshot.

## Current regression facts
- Static fullscreen pages use fixed/inset:0 roots.
- Home uses normal flow with min-h-[100dvh] and currently works.
- Meeting Place pages and /watch show the bottom strip on iPhone/PWA.
- A test changing Manila bottom padding to 0 did not remove the strip.
- Fixed-containing-block audit found no transformed/filtering ancestor creating a different fixed containing block.
- No documented temporal correlation was found between the historical safe-area change and the first appearance of the blue strip.
