# TruFilipinas Recovery Backup

Created: 2026-09-27

This folder is a recovery snapshot assembled from code and technical information actually available in ChatGPT conversations.

Important:
- This is NOT claimed to be a complete copy of the Sintra project.
- Sintra does not provide a project-wide source export according to the current project history.
- Only code/content that has actually been available in the conversation should be added here.
- Never treat reconstructed or partial files as a replacement for the live project without verification.

## Current priority
Investigate and fix the iOS/PWA bottom blue strip / apparent vertical layout displacement on static fullscreen pages while preserving the working Home page.

## Known affected areas
- Meeting Place: Manila, Cebu, Boracay, Angeles
- Live Stream viewer: /watch
- Home currently works and must not be disturbed.

## Backup rule
Before any major change:
1. Save the affected current file(s) here.
2. Commit to GitHub.
3. Make the change in Sintra.
4. Test.
5. Commit the verified result separately.

## Source completeness
See RECOVERY_MANIFEST.md for the current status of each known file.

## Mandatory backup workflow for future Sintra work

Whenever Sintra returns actual source code, a full file, a relevant code block, or a before/after implementation as part of our troubleshooting or development work:

1. Preserve the returned code in this repository before relying on it for another change.
2. Store it under recovery-backup/source/ using the real project path where possible.
3. If the returned code is only a partial excerpt, store it as a clearly marked partial snapshot rather than presenting it as a complete file.
4. Record the date and the Sintra task/context in a manifest entry.
5. Commit every meaningful snapshot so Git history becomes our recovery history.
6. Never overwrite a previous snapshot silently. New states get new commits or dated snapshot files.
7. Before changing a file in Sintra, save the current code we have received from Sintra in GitHub first.
8. If Sintra later gives us a complete file, add the complete file and mark the manifest accordingly.

The goal is to build a usable recovery copy incrementally from every real code artifact Sintra gives us. This repository is not assumed to be a complete mirror of the Sintra project until every file has been captured.