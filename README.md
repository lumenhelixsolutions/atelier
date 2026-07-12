# atelier

<p align="center">
  <a href="https://lumenhelix.com">
    <img src="docs/assets/lumenhelix-logo.svg" alt="LumenHelix Solutions" width="180">
  </a>
</p>

<h3 align="center">Portfolio shell for agent formation — DropClass v1</h3>

<p align="center">
  <a href="https://lumenhelixsolutions.github.io/atelier/">
    <img src="https://img.shields.io/badge/Launch_Page-atelier-00D4FF?style=flat-square&logo=githubpages&logoColor=white" alt="Launch Page">
  </a>
  <a href="https://lumenhelix.com">
    <img src="https://img.shields.io/badge/Built_by-LumenHelix-7C3AED?style=flat-square" alt="Built by LumenHelix">
  </a>
  <img src="https://img.shields.io/badge/license-MIT-8A95A8?style=flat-square" alt="License">
</p>

---

**atelier** is part of the [LumenHelix Solutions](https://lumenhelix.com) portfolio — applied symbolic dynamics & reversible computation for deterministic, traceable AI systems.

Atelier is the LumenHelix portfolio shell for agent formation. v1 powers DropClass — Coursera student agents and Class Central discovery — with a React + Vite UI and a FastAPI host that mounts agent routes locally.

## Why this exists

- **Ship faster.** Reusable templates cut setup time to minutes.
- **Stay traceable.** Reversible decisions mean you can always see why something changed.
- **Own your stack.** Local-first, no mandatory cloud, no lock-in.

## Quick start

Install and run atelier in under two minutes.

### macOS / Linux

```bash
# Clone
git clone https://github.com/lumenhelixsolutions/atelier.git
cd atelier

# Install & run
cd api && python3 -m venv ../.venv && ../.venv/bin/pip install -r requirements.txt
cd ../app && npm install && npm run dev
```

### Windows (PowerShell)

```powershell
# Clone
git clone https://github.com/lumenhelixsolutions/atelier.git
Set-Location atelier

# Install & run
cd api
python -m venv ..\.venv
..\.venv\Scripts\pip install -r requirements.txt
cd ..\app
npm install
npm run dev
```

### Windows (Git Bash / WSL)

```bash
git clone https://github.com/lumenhelixsolutions/atelier.git
cd atelier
cd api && python3 -m venv ../.venv && ../.venv/bin/pip install -r requirements.txt
cd ../app && npm install && npm run dev
```

> **Device note:** atelier is tested on Windows 11, macOS Sonoma, Ubuntu 22.04/24.04, and modern mobile browsers.

## Full documentation

Visit the launch page for architecture, API reference, and deployment guides:  
**https://lumenhelixsolutions.github.io/atelier/**

## Features

| Feature | What it gives you |
|---------|-------------------|
| Agent scaffolding | Drop-in patterns for memory, tools, skills, and workflows. |
| Portfolio publishing | Generate a public project page from your repo metadata. |
| Reversible by design | Every change is traceable so you can roll back without guesswork. |
| Local-first stack | React + Vite frontend, FastAPI backend, zero required cloud. |

## Architecture at a glance

```
atelier/
├── api/      FastAPI host — mounts DropClass routes
├── app/      React (Vite) UI — /formation, supervisor dashboard
└── scripts/  PowerShell starters
```

## Development

```bash
# API on port 8100
cd api && python -m uvicorn main:app --host 127.0.0.1 --port 8100
# UI on port 5180 (new terminal)
cd app && npm run dev
```

## Roadmap

- [ ] Plugin API for HOOT and other portfolio modules
- [ ] Obsidian vault sync for agent memory
- [ ] One-command production build pipeline

## Support & consulting

Need deterministic AI systems with full traceability? LumenHelix builds reversible computation kernels, governance layers, and end-to-end AI integrations.

- **Website:** https://lumenhelix.com
- **Services:** AI diagnostics, B.Y.O. support packages, governance audits
- **Research:** TEN² kernel, R.U.B.I.C. boundary discipline, C.O.R.E. constraint lens

## License

Released under the MIT License.

---

<p align="center">
  <sub>Engineered by <a href="https://lumenhelix.com">LumenHelix Solutions</a> — Applied Symbolic Dynamics & Reversible Computation.</sub>
</p>
