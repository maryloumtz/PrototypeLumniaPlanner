# Lumniaproto

Prototype Lumnia (Angular 20 + Angular Material + Tailwind CSS).

## Environnement de travail
- Node.js compatible Angular 20 (versions prises en charge: ^20.19.0, ^22.12.0 ou ^24.0.0).
- npm (fourni avec Node.js).

Si vous utilisez nvm:
```bash
nvm install
nvm use
```

## Installation
```bash
npm install
```

## Lancer l'app
```bash
ng serve
```

Puis ouvrir `http://localhost:4200/`.

## Generer du code
```bash
ng generate component component-name
```

## Build
```bash
ng build
```

## Publier sur GitHub Pages
1. Verifiez que le nom du depot correspond a la base dans `package.json` (`build:gh-pages`).
   - Si votre depot change, remplacez `/PrototypeLumniaPlanner/` par `/<votre-repo>/`.
2. Lancez le build GitHub Pages:
```bash
npm run build:gh-pages
```
3. Dans GitHub, activez **Settings > Pages** puis selectionnez **GitHub Actions** comme source.
4. La GitHub Action `Deploy to GitHub Pages` publiera automatiquement le site a chaque push sur `main`.

## Tests
```bash
ng test
```

## Fichiers de config a partager (GitHub)
- `.nvmrc` : version Node.js de reference pour l'equipe.
- `.editorconfig` : conventions d'edition partagees.
- `.vscode/extensions.json` : extensions recommandees VS Code.
- `.vscode/settings.json` : preferences d'atelier (format, lint, etc.).

## Notes
- Angular Material installe et configure.
- Tailwind CSS installe et configure.
