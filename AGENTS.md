# Repository Guidelines

## Project Structure & Module Organization
The source modules live in `src/`: `airports.js` holds the canonical `Map` of three-letter IATA codes to `[latitude, longitude]`, and `main.js` re-exports the dataset as the public entry point. Type definitions are centralized in `main.d.ts` and must be kept in sync with `src/` when adding airports or metadata. The Rollup bundle emitted to `dist/` is generated code—never edit files there directly. Tests reside in `test/index.test.js`, and `rollup.config.js` configures the ESM build that publishes to npm.

## Build, Test, and Development Commands
- `pnpm install` installs dependencies; commit the lockfile after upgrades.  
- `pnpm run build` first formats JavaScript and JSON via Prettier, then creates `dist/bundle.js` with Rollup.  
- `pnpm test` (or `node test/index.test.js`) validates every airport entry and surface invalid coordinates. Always rebuild before testing so the script imports the latest bundle.

## Coding Style & Naming Conventions
JavaScript is authored as ES modules with two-space indentation, single quotes discouraged, and trailing commas disabled (see the Prettier flags in the `prebuild` script). Use descriptive constant names, keep airport codes uppercase, and prefer structured data additions over ad-hoc conditionals. Run `pnpm run build` or `pnpm exec prettier --write '**/*.{js,json}' '!dist/**'` before committing to guarantee consistent formatting.

## Testing Guidelines
`test/index.test.js` is a lightweight integrity check that iterates the bundled dataset, so it must stay dependency-free and quick to execute. Ensure new entries keep coordinates within valid ranges and preserve the three-character code format. When extending test coverage, place supplementary scripts under `test/` and make sure they exit non-zero on failure so CI can flag issues.

## Commit & Pull Request Guidelines
Keep commit messages short and imperative (e.g., `Add ORD coordinates`, `Update rollup config`). Group related data edits and note tooling changes separately. Pull requests should explain the data source or rationale for modifications, reference any related issues, and confirm that `pnpm run build` and `pnpm test` pass. Include before/after snippets or dataset counts when adjusting airport listings to simplify review.
