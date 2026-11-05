# Foca Studio

Static site for [foca.work](https://foca.work). GitHub Pages serves this repository from the `main` branch at the root. There is no build step. `.nojekyll` is included so Pages publishes the HTML, CSS, and JS as-is.

## Deploy

1. Merge to `main`.
2. Open **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: **main**, folder: **/ (root)**.
5. Custom domain: `foca.work` (the `CNAME` file already contains that hostname).
6. After DNS points here, turn on **Enforce HTTPS**.

## DNS for foca.work

This repository does not change DNS. If `foca.work` still points at Webflow, the live site stays on Webflow until the records below replace those.

Check what the domain uses today:

```
dig foca.work A +short
dig foca.work AAAA +short
dig www.foca.work CNAME +short
```

At the DNS host for `foca.work`:

1. Remove Webflow records. Apex `A` records are often `75.2.70.75` and `99.83.190.102`. A `www` `CNAME` often points at `proxy-ssl.webflow.com` or `cdn.webflow.com`.
2. Point the apex `foca.work` at GitHub Pages:
   - `A` `@` → `185.199.108.153`
   - `A` `@` → `185.199.109.153`
   - `A` `@` → `185.199.110.153`
   - `A` `@` → `185.199.111.153`
   - `AAAA` `@` → `2606:50c0:8000::153`
   - `AAAA` `@` → `2606:50c0:8001::153`
   - `AAAA` `@` → `2606:50c0:8002::153`
   - `AAAA` `@` → `2606:50c0:8003::153`
3. If `www.foca.work` should work, set `CNAME` `www` → `yating-900.github.io`.
4. If GitHub Pages asks you to verify the domain, add the TXT record shown under **Settings → Pages**. Do not invent one.
5. If the DNS host proxies traffic (for example Cloudflare’s orange cloud), set the GitHub records to DNS-only so certificate provisioning can finish.
6. Wait for propagation, open `https://foca.work`, then enable **Enforce HTTPS**.
