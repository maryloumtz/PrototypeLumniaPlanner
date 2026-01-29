# PrototypeLumniaPlanner

Configuration d'environnement pour Angular 20 + Angular Material + Tailwind CSS.

## Prerequis
- Node.js compatible Angular 20 (versions prises en charge: ^20.19.0, ^22.12.0 ou ^24.0.0).
- npm (fourni avec Node.js).

## Setup rapide (nouveau projet)
```bash
# 1) Installer Node.js compatible (ex: via nvm)
nvm install
nvm use

# 2) Installer Angular CLI (global)
npm install -g @angular/cli

# 3) Creer le projet
ng new lumnia-planner --style=css --routing
cd lumnia-planner

# 4) Ajouter Angular Material
ng add @angular/material

# 5) Ajouter Tailwind CSS (automatique via Angular CLI)
ng add tailwindcss

# 6) Lancer l'app
ng serve
```

## Setup dans un projet existant
```bash
npm install
ng add @angular/material
ng add tailwindcss
ng serve
```

## Fichiers de config a partager (GitHub)
- `.nvmrc` : version Node.js de reference pour l'equipe.
- `.editorconfig` : conventions d'edition partagees.
- `.vscode/extensions.json` : extensions recommandees VS Code.
- `.vscode/settings.json` : preferences d'atelier (format, lint, etc.).

## Notes
- Angular 20 requiert une version Node.js supportee (ex: ^20.19.0, ^22.12.0, ^24.0.0).
- Tailwind CSS peut etre installe via `ng add tailwindcss` (configuration automatique).
- Angular Material s'installe via `ng add @angular/material`.
