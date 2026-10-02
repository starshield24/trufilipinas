# Supabase Recovery Backup

Project ref: `mzzftteiycxmazgjjqqm`
Project status at backup: ACTIVE_HEALTHY
Region: ap-south-1
Postgres: 17.6.1.121

## Scope
This backup records the Supabase infrastructure/configuration needed to reconstruct the TruFilipinas backend.

It intentionally does **not** contain:
- production table rows
- auth users/session/refresh-token data
- Supabase Vault secrets
- API/service-role keys
- other credentials

Production data remains in Supabase. The goal here is a safe reconstruction/recovery package.
