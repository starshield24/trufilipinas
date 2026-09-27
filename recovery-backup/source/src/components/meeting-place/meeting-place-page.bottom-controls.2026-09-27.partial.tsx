# Partial source snapshot — Manila Meeting Place Bottom Controls

Date: 2026-09-27
Status: PARTIAL EXCERPT (not a complete source file)
Original project path: src/components/meeting-place/meeting-place-page.tsx
Context: Sintra-provided current Bottom controls container immediately before the safe-area padding test.

```tsx
{/* Bottom controls */}
<div
  className="border-t border-white/10 bg-white/10 backdrop-blur-sm px-4 shrink-0"
  style={{
    paddingTop: "0.75rem",
    paddingBottom: "0"
  }}
>
  <div className="flex items-center justify-between mb-2">
    <div className="flex-1" />
    <LoungeMusicIndicator state={loungeMusicState} />
    <div className="ml-3">
      <ManilaGoLiveBtn userId={currentUserId} />
    </div>
  </div>

  <Link href="/home" className="flex items-center justify-center gap-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition">
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
    Leave chat
  </Link>
</div>
```

Next test saved by Sintra: only paddingBottom changes from "0" to "env(safe-area-inset-bottom, 0px)".