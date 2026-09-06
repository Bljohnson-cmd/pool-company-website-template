<!-- BEGIN projected-context | sources: 14le-pool@ff4271 | rendered: becaef | 2026-09-06 | do not edit -->
## Inherited: 14LE_Pool (personal)

## 14 Lake Estates pool (personal)

The pool and spa renovation at Ben's own home, 14 Lake Estates Drive, Montgomery TX 77356: one of three barter-model projects on the property. The shared barter model and the partner-site web framework belong to the landscape scope, `../../14LELandscape/AGENTS.md`, in `../../14LELandscape/context/barter-model.md`; this folder adds only what is pool-specific. The pool twist on the model: partner contractors do the structural repairs at their cost, and anything past the value of the digital services is paid as labor and materials at cost.

### Read first

- `../context/memory.md` before your first non-trivial action; `../context/memory-inbox.md` is provisional.
- `../context/pool-renovation.md`: the four documented leaks (American Leak Detection, 2023-08-01), the resort-scope estimate, and the four renovation phases. The report is `ALD_Report.pdf` and the leak diagram `Pool Diagram.jpg` in this folder; the eleven cdv_photo JPGs show the pool, spa, coping, cracks, and skimmers.
- `../context/pool-prospects.md`: the 2026-03 audit of 20 pool contractors in three tiers plus the hire-instead fallbacks. People, phone numbers, and addresses are in `../context/contacts.md` (confidential, never exported).
- The landscape project: `../../14LELandscape/AGENTS.md`. The renovation: `../../14LK_Reno/AGENTS.md`.

### Invariants

- Structural repairs (bond beam cracks, both skimmers, the spa jet line) come before any cosmetic work.
- Phase 4 of the pool plan is Zone C of the landscape plan; never re-plan the pool-area planting here.
- The prototype-first pitch applies: no outreach to a contractor without a deployed site customized to them. The Tier 1 opener is their own website being down.

### Working here

- This folder is not a git repository; `.` is (GitHub remote), with its own scope file at `AGENTS.md`. Never push without Ben.
- Personal, not a client: no client fact belongs here, and nothing here goes into client work.
<!-- END projected-context -->

# Montgomery Pool Services prototype (project)

Next.js 16 (App Router, Tailwind 4) pool-company website template, a complete five-page prototype built 2026-03-09 (commit 00765f4) for the Montgomery Pool Services pitch (the Tier 1 target whose own site is down) and the base for every pool-contractor partner site. Its own git repository with a GitHub remote (origin, Bljohnson-cmd/pool-company-website-template). The inherited block above carries the pool scope's rules and the pointer to the shared barter model; this file adds only repository facts.

- Pages under `src/app/`: home, services, gallery, about, contact. The prospect's details are in the pool scope's context (contacts.md is confidential).
- Never push without Ben; `git fetch` is fine. The working tree was clean on 2026-09-06. No deploy target is recorded [TBD].
- Prototype rule: customize branding, populate real project photos and reviews scraped from the partner's presence, deploy to a preview URL; the pitch is "80 percent done". Pool-specific components still to add: before-and-after slider, financing calculator, quote with photo upload, service-area pages.
- Memory: `context/memory.md`; propose to `context/memory-inbox.md`.
