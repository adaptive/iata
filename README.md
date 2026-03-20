# IATA data

[![npm](https://img.shields.io/npm/v/@adaptivelink/iata.svg)](https://www.npmjs.com/package/@adaptivelink/iata)

A lightweight ES module that exposes a canonical map of IATA airport codes to latitude/longitude coordinates. Built for quick lookups, validation, and geographic tooling.

## Installation

```bash
bun add @adaptivelink/iata
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
- `dist/` generated Bun build output consumed by downstream projects
- `main.d.ts` TypeScript declarations kept in sync with `src/`
- `test/` Bun test suite covering the public API and dataset integrity

## Development

```bash
bun install           # install dependencies
bun run build         # run global oxfmt, then build dist/bundle.js with Bun
bun test              # run the Bun test suite in test/
```

Formatting is handled by a globally installed `oxfmt`. Install it before running the build:

```bash
oxfmt --version
```

The test suite reads from `src/` so it validates current source changes without requiring a rebuild first.

## Updating Airport Data

Add or amend entries in `src/airports.js`, preserving uppercase three-letter codes and valid latitude/longitude ranges. Update `main.d.ts` if you introduce new types or metadata. Run the build and test commands before opening a pull request.

## Contributing

See [`AGENTS.md`](AGENTS.md) for contributor guidelines, commit conventions, and review expectations.

## License

MIT © Hugo Romano
