# Atelier

Shared portfolio shell for **agent formation** — v1 is [DropClass](../dropclass/) (Coursera student agents, Class Central discovery).

**Stack:** React (Vite) + FastAPI · local-first · `127.0.0.1`

## Why "Atelier"

French for *workshop* — a place where agents are formed into **talents**, not just given skills. Other portfolio modules (e.g. HOOT) can mount here later; v1 is DropClass-first.

## Name alternatives considered

| Name | Verdict |
|------|---------|
| **Atelier** | ✅ Chosen — formation/workshop metaphor |
| Campus | Too institutional |
| Seminar | Too narrow |
| Guildhall | Too game-y |

## Quick start (after deps)

```powershell
# API — port 8100
cd api
python -m venv ..\.venv
..\.venv\Scripts\pip install -r requirements.txt
..\.venv\Scripts\python -m uvicorn main:app --host 127.0.0.1 --port 8100

# UI — port 5180
cd app
npm install
npm run dev
```

Open http://127.0.0.1:5180

## Layout

```
atelier/
  api/          FastAPI host — mounts DropClass routes
  app/          React UI — /formation, supervisor dashboard
  scripts/      PowerShell starters
```

## Related

- DropClass engine: `../dropclass/`
- Plan: `../dropclass/docs/plans/2026-06-22-dropclass-mvp-plan.md`