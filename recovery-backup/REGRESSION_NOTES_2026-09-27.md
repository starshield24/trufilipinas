# TruFilipinas Regression Notes — 2026-09-27

## Symptom
On iPhone 13 Pro installed PWA, static/non-scrollable fullscreen pages appear to stop short of the physical bottom edge, exposing a strip of the page/background. The same structural issue is reported across Meeting Place rooms and the Live Stream viewer.

## Working page
Home is currently visually correct and must not be changed while testing the fullscreen pages.

## Meeting Place
Common current root:
- position: fixed
- inset: 0
- display: flex
- flex-direction: column
- overflow: hidden

Inner layout:
- header shrink-0
- message list flex-1 min-h-0
- message scroll area absolute inset-0 overflow-y-auto
- input shrink-0
- bottom controls shrink-0

Manila bottom padding was tested at 0; the strip remained.

## Live Stream
Current outer root:
- position: fixed
- inset: 0
- backgroundColor: black
- zIndex: 50
- overflow: hidden

## Historical Live Stream variant
A Sintra Brain memory documents a previous variant using:
bottom: calc(0px - env(safe-area-inset-bottom, 0px))
instead of inset: 0.

This has already been discussed/tested in the troubleshooting history and should not be treated as an untested new idea.

## Investigation already completed
- Root viewport-fit=cover is inherited globally; Home's duplicate declaration is not evidence of a route-specific difference.
- No fixed containing block was found above the affected fixed roots.
- Internal Meeting Place flex chain was audited and no obvious overflow/height discrepancy was found.
- The available Sintra history contains no timestamp proving which change introduced the strip.

## Operating rule
Do not make broad global viewport/safe-area/overflow changes while Home is working. Test one narrow change at a time.
