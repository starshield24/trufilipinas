# TruFilipinas Supabase Recovery

This directory is the infrastructure-side companion to the TruFilipinas source recovery backups.

## Included
- project metadata
- migration inventory
- storage bucket configuration
- database schema/inventory snapshots
- RLS/policy and trigger inventory
- Edge Function inventory/source snapshots where safe

## Excluded
- production data
- authentication/session data
- Vault secrets
- service-role/private keys
- credentials

The GitHub repository is public, so secrets and production personal data must never be committed here.
