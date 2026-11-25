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
| Quote form (Flyra embed) | `src/components/QuoteCard.tsx`, form id in `src/lib/site.ts` |
| Job application form | `src/lib/leads.ts`, `src/components/LeadForm.tsx` |

A page file is an ordered list of blocks (`hero`, `intro`, `services`, `faq`, …). The types in `src/lib/content.ts` describe what each block accepts. To reorder sections, reorder the blocks. To add a page, create a file in `src/content/pages/`, register it in `src/content/pages/index.ts`, and it is served at `/<slug>`.

In hero titles and section headings, `*asterisks*` mark the words shown in gold, for example `"How We Make Your Home Sparkle *Simple*"`.

## Leads

### Quote requests (Flyra)

The quote form is the "Website Quote Request" form in [Flyra](https://app.flyra.io), embedded in an iframe. It appears beside the headline on every landing page (`hero` blocks with `variant: "home"`), in the closing "quote" section, in the "Get Free Quote" dialog, and in the `intro` section of pages without a landing hero. Its fields, where leads go, the confirmation message, and any redirect after submitting (for example to `/thank-you`) are all set in Flyra; the site only embeds it. To use a different Flyra form, change `quoteFormId` in `src/lib/site.ts`.

The page's query string (UTM tags, ad click ids) is passed on to Flyra. If the page has the Meta pixel (`fbq`) or Google Ads (`gtag`) loaded, a submitted quote is reported to them as a conversion.

### Job applications (Web3Forms)

The hiring page's application form emails the owner through [Web3Forms](https://web3forms.com), submitted from the visitor's browser (Web3Forms only accepts server-side submissions on a paid plan). Copy `.env.example` to `.env.local` (or set it in your host's environment settings):

- `WEB3FORMS_ACCESS_KEY`: required. Applications go to the inbox the key was created for. Without it the form tells visitors to call instead. The value is built into the site, so redeploy after changing it.

The key is public by design. In the Web3Forms dashboard, restrict it to `foundersclt.com` so other sites can't use it.

Spam submissions that fill the hidden honeypot field are dropped silently.
