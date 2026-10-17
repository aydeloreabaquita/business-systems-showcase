# Relay — Scheduling & Customer Management

A business-neutral, interactive sales demo. Show the same workspace to any service business: customer information, team calendar, appointment history, staff working hours, and staff email automation previews.

## Try it

Open index.html in a modern browser. No install, build, account, or API keys required. Alternatively run `python -m http.server 8080` in this folder and visit http://localhost:8080.

## Walkthrough

1. Add a fictional customer with contact details and administrative notes.
2. Create an appointment, choose its date, time, duration, and staff member.
3. View the weekly team calendar, filter by staff, and move between weeks.
4. Click an appointment to edit it, mark it completed, cancel it, or reassign it.
5. Open Customers & history and choose a customer to see past and upcoming appointments.
6. Edit recurring staff working days and hours. Overlapping appointments and appointments outside working hours are rejected. Availability changes that conflict with upcoming appointments are rejected.
7. Open Email automations. Toggle assignment, update, and reminder rules. New and changed appointments create previews for the assigned staff member; reassignments also preview a cancellation to the previous staff member. Click Simulate upcoming reminders to preview reminders for appointments starting within 24 hours. Repeated reminder runs do not duplicate the same appointment/time/staff reminder.

## Demo boundaries

All sample customers and staff are fictional; example.com addresses do not represent recipients. This is a local frontend prototype. Email previews are stored locally and never sent. Reminders run only when you click the simulation button. The calendar does not sync with external calendars. History shows appointment records in their current state, not a complete audit log. Staff schedules represent recurring weekly working hours, without holidays, breaks, or exceptions. Times follow the viewer's device time zone, shown on the calendar.

Customer and appointment data persists in this browser profile. Reset replaces scheduling demo data only. Earlier company-preset storage is not imported or used. Use fictional information only; do not enter confidential or clinical data.

Production work would add secure accounts, permissions, a shared database, audit history, real email delivery, reliable background scheduling, time zone handling, calendar integrations, backups, privacy controls, and acceptance testing. Customize these requirements with the business before implementation.

## Files and checks

- index.html: workspace and customer/appointment forms
- app.js: calendar, customer history, schedules, conflict validation, simulated email rules, local persistence
- styles.css: responsive design; Google Fonts are optional and have sans-serif fallbacks
- tests/check-demo.cjs: dependency-free behavior checks
- docs/discovery.md: sales walkthrough and discovery questions

Run `node --check app.js` and `node tests/check-demo.cjs`. Automated checks use a minimal document harness, not a real browser. Visual acceptance testing is still required before presenting on a target device.

No company affiliation is implied. No license grant is included.

## Dashboard, appointment list, and regular customers

The Dashboard is the default view, with today's appointments, the next five upcoming bookings, and customers with daily, weekly, or monthly visit frequencies. Appointments lists all bookings still marked Scheduled, including past dates awaiting a status update, in date/time order. Its Add Appointment button opens the existing booking form.

Customer profiles and the add/edit form include phone, address, and visit frequency (As needed, Every day, Every week, Every month). Frequency is a customer preference label; it does not automatically generate repeating bookings. Existing saved customer records are preserved and default to a blank address and As needed frequency.

The Connect Gmail account button opens an explanatory demo dialog. It does not authenticate with Google, request permissions, store tokens, or send mail. A live connection needs a configured Google OAuth client and an approved email-sending implementation before activation.
