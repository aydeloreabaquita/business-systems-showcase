# Relay — Business Systems Showcase

A working, independent sales prototype for showing small businesses how enquiries, ownership, scheduling, and follow-ups could fit into one operations workspace.

## Run the demo

Open **index.html** in a modern browser. No install, API keys, or build step is required. For clipboard support and a consistent browser origin, run `python -m http.server 8080` in this folder and visit `http://localhost:8080`.

## Four discovery concepts

| Company preset | Demonstrated workflow | Discussion starter |
| --- | --- | --- |
| Skinov8ive Medical Esthetics | Enquiry → Contacted → Scheduled → Completed | How are administrative consultation enquiries and callbacks handled? |
| Arbor Resources Ltd | Enquiry → Quoting → Order confirmed → Completed | How do buyer specifications move from enquiry to quote and order? |
| Tri-Con Concrete Finishing Co. Ltd. | Enquiry → Estimating → Scheduled → Completed | Where do estimates lose momentum before scheduling? |
| SMOX Cleaning Services | Enquiry → Site review → Scheduled → Completed | How are service requests and team handoffs tracked? |

These workflows are proposals, not claims about existing company systems or unmet needs. No affiliation or endorsement is implied. All customer names, project names, values, owners, dates, and records are fictional. SMOX's services, location, and currency are unverified; its preset is a generic cleaning concept. CAD is a placeholder for that preset.

## Working features

- Four isolated company workspaces, with fictional seed data.
- New request form with required fields and nonnegative estimated values.
- Four-stage pipeline with status controls and live summary totals.
- Search by customer, service, or owner.
- Editable follow-up drafts and a copy button. **Nothing is sent.** Draft edits are temporary and regenerate when the workspace rerenders.
- CSV export with formula-prefix protection.
- Browser local storage and per-company reset.
- Responsive layout, labeled inputs, keyboard focus states, and native modal dialog.

## A three-minute sales walkthrough

1. Select the prospect's company concept.
2. Describe the proposed handoff using the sample cards.
3. Add a fictional enquiry and move it to the next stage.
4. Show how totals update and how follow-up drafts support the next conversation.
5. Ask which steps should be changed to match the real team.

Position this as a discovery demo. Do not promise revenue gains, time savings, integrations, or compliance based on this prototype.

## Prototype boundaries

This is a frontend demonstration, not a production CRM, booking engine, estimating tool, inventory system, or clinical system. It has no login, server, database, team synchronization, calendar reservations, emails, SMS, payments, real pricing, or automated scheduling. Data stays in the browser profile and can be cleared by the browser. Local browser storage is not appropriate for confidential information. Use fictional data only, especially in the esthetics preset; do not enter patient details or health information.

Google Fonts is optional: the stylesheet requests DM Sans and Manrope, with local sans-serif fallbacks. Remove the first CSS line for an entirely offline demo with no font requests.

Before production, agree requirements, then implement authentication, role permissions, a secure backend, retention and deletion policies, backups, audit logs, validated integrations, and acceptance tests. Review applicable privacy and consent obligations with qualified advisors.

## Repository layout

`index.html` — accessible page and request dialog  
`styles.css` — responsive visual design  
`app.js` — presets, pipeline, persistence, drafts, search, export  
`docs/discovery.md` — prospect research and next-meeting questions

## Publishing a preview

This static project can be served by any static host. For GitHub Pages, select the repository's `main` branch and `/ (root)` in Settings → Pages if available for the repository visibility and plan. Publishing is a separate action; a repository upload alone does not create a live site.

## Validation

Run `node --check app.js` for JavaScript syntax and `node tests/check-demo.cjs` for the dependency-free behavior checks. The tests exercise the app with a minimal document harness: four presets, rendering, metrics, drafts, filtering, status changes, persistence, malformed storage recovery, and CSV escaping. These checks passed during preparation. Browser visual acceptance remains unverified because the preview browser could not reach the local server.

Browser acceptance checks: switch all four presets; create a request; change status and verify totals; reload to check persistence; search; review drafts; export CSV; reset one preset and confirm other presets retain their changes. Test a narrow viewport and keyboard navigation.

No license grant is included. Choose a license before inviting reuse.
