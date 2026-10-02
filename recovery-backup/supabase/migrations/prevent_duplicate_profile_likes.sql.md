# Prevent duplicate profile likes

Migration: `prevent_duplicate_profile_likes`

Applied to Supabase project `mzzftteiycxmazgjjqqm`.

## Purpose

Profile likes are stored in `public.profile_likes`, which already has a unique constraint on `(liker_id, liked_id)`.

Profile-like inbox notifications are stored in `public.inbox_likes` with `post_id IS NULL`. Existing duplicate rows were found there for the same `sender_id` → `receiver_id` pair.

This migration:
1. Keeps the oldest profile-like inbox row for each sender/receiver pair.
2. Removes duplicate profile-like inbox rows.
3. Adds a partial unique index so future profile-like inbox duplicates cannot be inserted.

## Migration SQL

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

## Verification

After migration:
- Duplicate profile-like sender/receiver pairs: 0
- Unique index present:
  `inbox_likes_profile_like_unique`
- Index condition: `post_id IS NULL`

No frontend/Sintra files were changed for this backend fix.
