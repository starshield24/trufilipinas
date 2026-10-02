# Sintra Source Snippet — Structural Audit (2026-10-01)

Source: Sintra-provided analysis captured in conversation files.

## Meeting Place structure

```tsx
<div style={{
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden"
}}>
```

Content layer:

```tsx
<div style={{
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden"
}}>
```

Message list:

```tsx
<div className="relative flex-1 min-h-0">
  <div className="absolute inset-0 overflow-y-auto overflow-x-hidden px-4 py-3">
```

Manila bottom controls:

```tsx
<div
  className="border-t border-white/10 bg-white/10 backdrop-blur-sm px-4 shrink-0"
  style={{
    paddingTop: "0.75rem",
    paddingBottom: "env(safe-area-inset-bottom, 0px)"
  }}
>
```

## Live Stream Viewer root

```tsx
<div style={{
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "black",
  zIndex: 50,
  overflow: "hidden"
}}>
```

Video:

```tsx
<video style={{
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "contain",
  objectPosition: "center center",
  backgroundColor: "black"
}} />
```

Chat overlay wrapper:

```tsx
<div style={{
  position: "absolute",
  left: 0,
  bottom: 72,
  width: "73%",
  maxWidth: 390,
  zIndex: 10
}}>
```

## Important status

These snippets are a recovery record of what Sintra reported. They are NOT claimed to be a complete source snapshot and should not be treated as authoritative over a later verified source read.
