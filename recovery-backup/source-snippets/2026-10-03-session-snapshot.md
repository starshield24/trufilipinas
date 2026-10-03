# Recovery Snapshot — 2026-10-03

This file records source snippets, exact changes, and recovery facts established in the ChatGPT/Sintra session. It is a recovery aid, not a complete source-code backup. Sintra remains the source of truth for the full project.

## 1. One-Liner Composer — current design

File:
- src/components/home/home-thought-composer.tsx

Confirmed saved changes:
- Main inner box border: `4px solid #D4AA37`
- Gold glow animation strengthened:
  - rest: `0 0 18px 4px rgba(212,170,55,0.55)` plus existing layers
  - peak: `0 0 28px 8px rgba(255,215,80,0.75)` plus existing layers
- Main box background:
```css
linear-gradient(180deg, #5A3B0F 0%, #3F2A10 50%, #5A3B0F 100%)
```
- Subtitle color: `rgba(255,255,255,0.95)`
- Textarea placeholder:
```css
.htc-textarea::placeholder {
  color: rgba(255,255,255,0.90) !important;
}
```
- Character counter fallback color: `rgba(255,255,255,0.85)`
- Character counter warning color above 85% remains `#FFD95A`

Outer modal:
- File: src/components/home/composer-trigger-row.tsx
- Removed outer "Create a Post" panel/header/drag handle/outer close.
- The actual HomeThoughtComposer remains centered in the backdrop.
- No outer blue panel remains.

## 2. One-Liner comments — current implementation and design

Existing comment backend:
- src/lib/live-feed-comments-api.ts
- Table: `live_feed_comments`
- Fields: `id`, `post_id`, `user_id`, `content`, `created_at`
- API functions: `fetchComments`, `insertComment`, `deleteComment`, `notifyPostOwner`
- Comment max length: 200 characters.

Current UI files:
- src/components/live-feed/comments-drawer.tsx
- src/components/live-feed/comment-card.tsx (newly created in this session)

One-Liner cards:
- src/components/home/latest-one-liner-card.tsx
- CommentsDrawer is opened from the Comment interaction.
- `onCommentsOpenChange` pauses/resumes One-Liner autoplay.
- Comment counts are loaded from `live_feed_comments` and shown on the card.

Latest One-Liner autoplay:
```js
useEffect(() => {
  if (posts.length <= 1) return;
  timerRef.current = setInterval(() => {
    setFade(false);
    setTimeout(() => {
      setIdx((prev) => (prev + 1) % posts.length);
      setFade(true);
    }, 300);
  }, 5000);
  return () => { if (timerRef.current) clearInterval(timerRef.current); };
}, [posts.length]);
```
Current behavior: autoplay pauses while CommentsDrawer is open and resumes after close.

## 3. Comments modal — exact saved design changes

File:
- src/components/live-feed/comments-drawer.tsx

The former Bottom-Sheet was changed to a centered modal by adding to the existing `modal-panel` style:
```tsx
position: "fixed",
top: "50%",
left: "50%",
transform: "translate(-50%, -50%)",
```

The same `modal-panel` also has:
```tsx
border: "4px solid #D4AA37",
background: "linear-gradient(180deg, #5A3B0F 0%, #3F2A10 50%, #5A3B0F 100%)",
```

Existing shadow was extended to:
```css
box-shadow: 0 -20px 60px rgba(18, 32, 63, 0.25), 0 0 28px 8px rgba(255,215,80,0.75);
```

Header border changed from blue to:
```text
border-b border-[rgba(212,170,55,0.25)]
```

Comment-list area now explicitly has:
```tsx
background: "transparent"
```

Individual comment cards changed their border from:
```text
border border-[rgb(18,32,63)]/10
```
to:
```text
border border-[rgba(212,170,55,0.25)]
```

Because the original comments-drawer file was too large for Sintra's writer, the comment card was extracted into:
- src/components/live-feed/comment-card.tsx

The drawer now imports and renders:
```tsx
<CommentCard
  key={c.id}
  c={c}
  currentUserId={currentUserId}
  postOwnerId={postOwnerId}
  deletingId={deletingId}
  handleDelete={handleDelete}
/>
```

The final saved change in `comment-card.tsx` is:
```tsx
style={{ background: "rgba(46,32,16,0.65)" }}
```
on the outer comment-card div.

No comment logic was intentionally changed during these design steps.

## 4. Push notification language — deployed

Supabase Edge Function:
- send-push
- version 55 active at the time of the session.

Relevant current status-update logic:
```ts
.select("username, name, gender")
...
const authorName = authorProfile?.username || authorProfile?.name || "Someone";
const gender = String(authorProfile?.gender || "").trim().toLowerCase();
const pronoun = gender === "female" ? "her" : gender === "male" ? "his" : "their";
...
body: authorName + " updated " + pronoun + " status.",
```

Behavior:
- female -> "updated her status"
- male -> "updated his status"
- unset/other -> "updated their status"

The earlier German hardcoded status notification was replaced with English.

## 5. Landing page — public feed privacy fix

File:
- src/app/page.tsx

Current public landing-page section order:
1. NowNewBanner
2. Hero
3. TrustpilotBadge
4. InstallGuide
5. VideoCallShowcase
6. WhyVideoChat
7. HowItWorks
8. GroupChatRooms
9. TonightsEvents
10. Safety
11. BlogPreview
12. Faq

`TrendingPostsSection` was removed from the rendered landing page so real current Social Viewer posts/photos are not exposed publicly. The existing HowItWorks section was moved into that former position.

Only src/app/page.tsx was changed for this specific landing-page fix.

## 6. Blog / SEO changes recorded

Christmas article:
- Title/H1: Christmas Loneliness, Love and the Hope of Finding Someone Special
- URL: /blog/christmas-loneliness-filipino-dating-video-chat
- SEO title: Christmas Loneliness & Filipino Dating | TruFilipinas
- Meta description: Feeling lonely this Christmas? Discover how Filipino dating, video chat and genuine online connection can bring two people closer — even miles apart.

Homepage:
- Trustpilot -> InstallGuide -> VideoCallShowcase order was set in src/app/page.tsx.
- trufilipinas-dating-feels-like-social-media received a header image using existing VIDEO_CHAT_IMG.

GSC snapshot supplied in chat, 3 months Web search:
- Clicks 525
- Impressions 3,720
- CTR 14.1%
- Average position 11.3

Visible query examples included:
- trufilipinas: 115 clicks / 150 impressions / 76.7% CTR / pos 1.0
- filipina video chat: 15 / 86 / 17.4% / pos 4.4
- filipino video chat: 13 / 43 / 30.2% / pos 5.5
- filipina video call: 8 / 32 / 25.0% / pos 5.5
- filipina video call free: 6 / 24 / 25.0% / pos 5.0
- video chat filipina: 5 / 20 / 25.0% / pos 7.2
- video chat filipinas: 5 / 19 / 26.3% / pos 3.9
- pinay video chat: 4 / 22 / 18.2% / pos 4.1
- chat video philippine: 4 / 13 / 30.8% / pos 3.6
- filipino video call: 4 / 12 / 33.3% / pos 4.2
- filipinas chat: 2 / 7 / 28.6% / pos 11.9
- pinay live chat: 1 / 39 / 2.6% / pos 7.6
- long distance philippines: 1 / 9 / 11.1% / pos 22.1
- filipina chat: 1 / 8 / 12.5% / pos 21.1

## 7. Favicon / Cloudflare recovery facts

Favicon worker:
- Cloudflare Worker: `quiet-hat-e2da`
- workers.dev: `quiet-hat-e2da.starshield24socialmedia.workers.dev`
- Route: `www.trufilipinas.com/favicon.ico`
- Failure mode: fail open.

Worker behavior:
```js
if (url.pathname !== "/favicon.ico") {
  return fetch(request);
}

const response = await fetch(GOLD_COIN);

if (!response.ok) {
  return new Response("Favicon unavailable", { status: 502 });
}

const headers = new Headers(response.headers);
headers.set("Content-Type", "image/jpeg");
headers.set("Cache-Control", "public, max-age=86400");

return new Response(response.body, {
  status: 200,
  headers,
});
```

The favicon source is the TruFilipinas gold coin asset. Current served asset is a JPEG with a white background.

Cloudflare nameservers:
- ashton.ns.cloudflare.com
- martha.ns.cloudflare.com

## 8. Profile-like duplicate cleanup

Supabase cleanup performed:
```sql
DELETE FROM public.inbox_likes a
USING public.inbox_likes b
WHERE a.post_id IS NULL
  AND b.post_id IS NULL
  AND a.sender_id = b.sender_id
  AND a.receiver_id = b.receiver_id
  AND a.id > b.id;

CREATE UNIQUE INDEX IF NOT EXISTS inbox_likes_profile_like_unique
ON public.inbox_likes (sender_id, receiver_id)
WHERE post_id IS NULL;
```

Verified duplicates: 0.

## 9. Broadcaster Invite Friends — NOT finished

Files involved:
- src/hooks/use-broadcaster-data.ts
- src/components/live-stream/live-stream-broadcaster.tsx
- src/components/live-stream/broadcaster-bottom-controls.tsx
- src/app/api/livestream/guest/invite/route.ts
- src/app/api/livestream/guest/respond/route.ts
- src/components/live-stream/guest-invite-overlay.tsx

Saved changes:
- use-broadcaster-data.ts now exposes viewer user IDs and viewer profile data:
  user_id, username, name, photo_url
- live-stream-broadcaster.tsx passes `viewers={viewers}` to BroadcasterBottomControls.

NOT finished:
- broadcaster-bottom-controls.tsx was not successfully modified.
- Therefore the parent/child `viewers` prop mismatch remained at the end of that work.
- Invite button still only opens the local placeholder InvitePanel.
- Existing guest invite API infrastructure exists, but invite-button wiring, realtime listener, and post-accept Daily/split-screen guest join are unfinished.

Do not treat Invite Friends as functional.

## 10. PWA / viewport history — do not casually revisit

Saved global changes:
- src/app/layout.tsx: `viewportFit: "cover"` -> `"auto"`
- src/app/globals.css: `html { overflow-y: auto; }` -> `overflow-y: visible;`

Installed PWA issue remained after these tests. Do not assume these changes solved the historical Meeting Place / /watch bottom safe-area issue.

Other facts:
- manifest: id /, start_url /home, scope /, display standalone, portrait, background/theme #12203F.
- sw.js is a push-notification service worker and does not cache HTML/CSS/JS.
- service-worker.js was 404.

## 11. Publishing

Sintra has previously reported:
`[usePublishV2Website] Failed to publish website: AxiosError: Network Error`
with publish endpoint `api.sintra.ai/.../publish` and `net::ERR_CONNECTION_CLOSED`.

This is a Sintra publishing/network-layer issue when it occurs. Do not interpret it as a code error without new evidence.

## 12. Recovery warning

This repository does NOT contain a complete TruFilipinas source tree. It contains recovery manifests, snippets, and selected source/state backups created during the debugging sessions. Full production source remains in Sintra.

The current session's most important newly recoverable files are:
- src/components/live-feed/comments-drawer.tsx — design changes summarized above
- src/components/live-feed/comment-card.tsx — newly extracted component; exact complete source was not copied into this snapshot because only the relevant structure and final style were available in the chat
- src/components/home/home-thought-composer.tsx — design changes summarized above
- src/components/home/composer-trigger-row.tsx — outer modal simplification summarized above

Last reviewed: 2026-10-03.
