# Founders Window Care & Detailing — foundersclt.com

Marketing site for Founders Window Care & Detailing (Charlotte, NC), built with Next.js 16. Every page is statically generated at build time.

The look follows the live foundersclt.com: Montserrat, deep green bands, and gold buttons and accent words. The copy, photos and 28 pages come from the Oakwood site export.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (also type-checks)
npm run lint
```

## Where things live

| What | Where |
| --- | --- |
| Business details, phone, hours, nav menus, social links | `src/lib/site.ts` |
| Copy shared by every page (service tiles, 3-step process, areas list) | `src/lib/site.ts` |
| Per-page copy, one file per page | `src/content/pages/<slug>.ts` |
| Photos (with alt text and focal points) | `src/lib/images.ts` → files in `public/images/` |
| Section components | `src/components/blocks/` |
| Styles | `src/app/globals.css` |
| Form handling (quote + hiring) | `src/app/actions.ts`, `src/lib/email.ts` |

A page file is an ordered list of blocks (`hero`, `intro`, `services`, `faq`, …). The types in `src/lib/content.ts` describe what each block accepts. To reorder sections, reorder the blocks. To add a page, create a file in `src/content/pages/`, register it in `src/content/pages/index.ts`, and it is served at `/<slug>`.

In hero titles and section headings, `*asterisks*` mark the words shown in gold, for example `"How We Make Your Home Sparkle *Simple*"`.

## Lead emails

Both forms email the owner through [Resend](https://resend.com). Copy `.env.example` to `.env.local` (or set these in your host's environment settings):

- `RESEND_API_KEY`: required. Without it the forms tell visitors to call instead.
- `LEAD_EMAIL_TO`: who receives leads (default `denis@foundersclt.com`).
- `LEAD_EMAIL_FROM`: a sender on a domain verified in Resend.

Spam submissions that fill the hidden honeypot field are dropped silently.
