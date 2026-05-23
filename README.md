# doc-atoms

> Explanatory documentation as atoms — tutorials, explanations, runbooks, how-tos, and reference guides. The narrative/teaching catalog of the ecosystem.

`doc-atoms` is a `*-Atoms` catalog in the [Convergent Systems](https://convergent-systems.co) ecosystem. It defines what exists in its domain — typed, versioned, machine-readable, composable, and open — so runtimes (and humans) can stand on shared infrastructure instead of reinventing it.

## What this catalog is (and is not)

`doc-atoms` holds **explanatory** content. Tutorials teach. Explanations clarify. Runbooks walk an operator through a procedure. How-tos answer a focused task. Reference guides organize material for lookup.

`doc-atoms` is **not** [`schema-atoms`](https://github.com/convergent-systems-co/schema-atoms). That distinction is load-bearing:

| | `schema-atoms` | `doc-atoms` |
|---|---|---|
| Atom types | `spec`, `schema` | `tutorial`, `explanation`, `runbook`, `how-to`, `reference-guide` |
| Force | **Normative** — defines what conformance requires | **Explanatory** — narrates, teaches, illustrates |
| Versioning | Versioned and amended via a defined process | Versioned, but updated freely as the subject moves |
| If it conflicts with a spec | Cannot — it *is* the spec | Spec wins; the doc gets fixed |

Per `atoms-spec/v1.1.0` Part II: *"Specs are normative and versioned and amended. Documentation is explanatory, narrates or teaches, and is not normative."*

## Structure

```
doc-atoms/
├── ATOMS.yml              # Catalog manifest (spec_version: atoms-spec/v1.1.0)
├── documents/             # Compositions — assembled documents
├── docs/                  # Human-readable docs about this catalog itself
├── exports/               # CI-generated machine-readable exports
├── governance/            # Governance atoms (higher-quorum signing)
├── keys/                  # Per-catalog signing keys (if used)
├── schemas/               # Catalog-specific JSON Schemas
├── scripts/               # Validate / build-exports
├── web/                   # doc-atoms.com site
└── infra/                 # Terraform — Cloudflare Pages
```

### Atom types

- `tutorial` — guided learning, opinionated path from zero
- `explanation` — clarifying narrative, the "why" behind a concept
- `runbook` — operational procedure, ordered steps for a known scenario
- `how-to` — focused task answer, problem-shaped
- `reference-guide` — lookup-shaped, organized for non-linear reading

### Runtime consumers

`aish`, `olympus`

## How to consume

Machine-readable exports are published in [`exports/`](./exports/) on every release:

- `exports/manifest.json` — lightweight discovery (name, version, counts)
- `exports/catalog.json` — full catalog dump (every atom, composition)

Exports are deterministic, signed, and versioned. See [`ATOMS.yml`](./ATOMS.yml) for the manifest and the conformance spec.

## How to contribute

1. Read [`ATOMS.yml`](./ATOMS.yml) to understand the catalog's atom types and compositions.
2. Add a new atom under the appropriate type directory, or a composition under `documents/<slug>/`.
3. Confirm the change is *explanatory* — narrative, teaching, operational guidance. If it is *normative* (a contract a runtime must conform to), it belongs in `schema-atoms`, not here.
4. Open a PR. CI validates schema, references, and exports.
5. Larger structural changes go through the XAIP process.

## Ecosystem

- **Federation:** [convergent-systems.co](https://convergent-systems.co)
- **Spec:** [github.com/convergent-systems-co/atoms-spec](https://github.com/convergent-systems-co/atoms-spec) — `atoms-spec/v1.1.0`
- **Tools:** [github.com/convergent-systems-co/atoms-tools](https://github.com/convergent-systems-co/atoms-tools)
- **Umbrella:** [github.com/convergent-systems-co/atoms](https://github.com/convergent-systems-co/atoms) — all catalogs as submodules
- **Sibling catalog:** [schema-atoms](https://github.com/convergent-systems-co/schema-atoms) — normative specs and JSON Schemas

## License

Dual-licensed:

- **Code** — Apache-2.0, see [`LICENSE`](./LICENSE)
- **Data (atom content)** — CC-BY-4.0, see [`LICENSE-data`](./LICENSE-data)
