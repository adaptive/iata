# IATA data

[![npm](https://img.shields.io/npm/v/@adaptivelink/iata.svg)](https://www.npmjs.com/package/@adaptivelink/iata)

A lightweight ES module that exposes a canonical map of IATA airport codes to latitude/longitude coordinates. Bundled for quick lookups, validation, and geographic tooling.

## Installation

```bash
pnpm add @adaptivelink/iata
# or
npm i @adaptivelink/iata
# or
yarn add @adaptivelink/iata
# or
bun i @adaptivelink/iata
```

## Quick Start

```js
import iata from "@adaptivelink/iata";

const airports = iata.airports; // Map<string, [latitude, longitude]>

console.log(airports.get("CDG")); // => [49.009724, 2.547778]
console.log(airports.size); // total airports in the dataset
```

The dataset is exported as an iterable `Map`, making it easy to filter, transform, or serialize the collection. Coordinates are stored in decimal degrees.

## Project Structure

- `src/` authoring source (dataset and module entry point)
- `dist/` generated Rollup bundle consumed by downstream projects
- `main.d.ts` TypeScript declarations kept in sync with `src/`
- `test/` integrity checks executed against the built bundle

## Development

```bash
pnpm install          # install dependencies
pnpm run build        # format JS/JSON then bundle to dist/
pnpm test             # validate dataset integrity against the bundle
```

Rebuild before testing so the integrity check reflects the latest source changes.

## Updating Airport Data

Add or amend entries in `src/airports.js`, preserving uppercase three-letter codes and valid latitude/longitude ranges. Update `main.d.ts` if you introduce new types or metadata. Run the build and test commands before opening a pull request.

## Contributing

See [`AGENTS.md`](AGENTS.md) for contributor guidelines, commit conventions, and review expectations.

## License

MIT © Hugo Romano
