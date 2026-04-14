# Obsidian KiCad

View KiCad design files directly inside Obsidian using [KiCanvas](https://kicanvas.org/).

This plugin registers custom views for KiCad project files so you can preview schematics and PCBs without leaving your vault.

## Features

- Open `.kicad_sch` files in a KiCad viewer inside Obsidian.
- Open `.kicad_pcb` files in a KiCad viewer inside Obsidian.
- Automatic dark/light theme selection based on the current Obsidian theme.
- Full embedded controls provided by KiCanvas.
- Desktop-only plugin (as defined in `manifest.json`).

## Current Status

- The plugin is focused on **view-only** support.
- There are currently no user-facing plugin settings.
- Supported file types are currently:
  - `.kicad_sch`
  - `.kicad_pcb`

## Usage

1. Install and enable the plugin in Obsidian.
2. Open a KiCad schematic (`.kicad_sch`) or board (`.kicad_pcb`) file from your vault.
3. Obsidian opens the file in the KiCad view powered by KiCanvas.

## Development

### Requirements

- Node.js 18+ recommended
- npm

### Setup

```bash
npm install
```

### Run in watch mode

```bash
npm run dev
```

### Build production bundle

```bash
npm run build
```

## Manual Installation

Copy the following files to:

`<YourVault>/.obsidian/plugins/kicad/`

- `main.js`
- `manifest.json`
- `styles.css`

Then reload Obsidian and enable **Kicad** in Community Plugins.
