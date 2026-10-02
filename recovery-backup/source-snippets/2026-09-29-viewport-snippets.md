# Sintra Source Snippet — Viewport / Safe Area

Captured from Sintra's read-only investigation.

Root viewport export:

```tsx
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const
}
```

PWA metadata:

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

Visual viewport hook:

```ts
function getMetrics(): ViewportMetrics {
  const vv = window.visualViewport;
  if (vv) {
    return {
      height: vv.height,
      offsetTop: vv.offsetTop,
    };
  }
  return { height: window.innerHeight, offsetTop: 0 };
}
```

The hook writes:

```ts
document.documentElement.style.setProperty("--vvh", `${metrics.height}px`);
document.documentElement.style.setProperty("--vvh-offset", `${metrics.offsetTop}px`);
```

Sintra's investigation also recorded that no known affected-page consumer of `--vvh` / `--vvh-offset` was found.
