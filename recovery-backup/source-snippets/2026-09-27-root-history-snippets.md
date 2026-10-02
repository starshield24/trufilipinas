# Sintra Source Snippet — Root Container History

Captured from Sintra's historical investigation.

## Meeting Place

Current reported root:

```tsx
<div style={{ position: "fixed", inset: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>
```

Historical record states that Manila's `position: fixed; inset: 0` pattern was introduced for full-viewport skyline/background coverage. The exact prior container code was not preserved.

## Live Stream

Documented previous state:

```tsx
{ position: 'fixed', inset: 0, backgroundColor: 'black', zIndex: 50, overflow: 'hidden' }
```

Documented experimental change:

```tsx
{
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 'calc(0px - env(safe-area-inset-bottom, 0px))',
  backgroundColor: 'black',
  zIndex: 50,
  overflow: 'hidden'
}
```

Current reported state later returned to `inset: 0`.

No exact historical source snapshot is claimed beyond these snippets.
