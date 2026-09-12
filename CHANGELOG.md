# Trellu Changelog

## 2.0.0

* **BREAKING**: Migrate from legacy build setup to SvelteKit + Vite
* **BREAKING**: Update to Svelte 5 with modern event and prop syntax
* Restructure project following community SvelteKit patterns (src/lib, src/routes)
* Update all components to Svelte 5 syntax (onclick, onkeydown, $props())
* Move static assets to correct SvelteKit static folder
* Fix SSR/browser-only runtime incompatibilities
* Fix asset path resolution for fonts and icons in production
* Improve accessibility for icon-only buttons with aria-labels
* Remove legacy packages (Rollup, sirv-cli, @spaceavocado/svelte-router)
* Production build validated with svelte-check and npm run build

## 1.2.5
* Refactor UUID generator

## 1.2.4
* Fix control in label
* Upgrade Dependencies

## 1.2.3
* Fix in PWA, add popup for install in IOS
* Fixes security vulnerability
* Beautify edit form

## 1.2.2

* Remove dynamic theme color in board page
* Minify bundle css for production
* Upgrade dependencies

## 1.2.1

* Fix icons load on offline mode
* Fix in PWA, add navigate fallback on service worker

## 1.2.0

* Add feature for update the background of board
* Add background image in board

## 1.1.4

* Fix scrollbar color

## 1.1.3

* Fix card edit on mobile, adding tolerance for card move

## 1.1.2

* Remove fade transition in views

## 1.1.1

* Change board colors tone

## 1.1.0

* Add background color in board
* Add redirect to home on error 404
* Fix, update list and card in store

## 1.0.0

* Trellu Release
