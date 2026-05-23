# doc-atoms — Goals

> Explanatory documentation as atoms — tutorials, explanations, runbooks, how-tos, and reference guides. The narrative/teaching catalog of the ecosystem.

---

## What this catalog makes civilization-grade

Documentation is the place where ecosystems either propagate or die. Most projects scatter their docs across READMEs, blog posts, wiki pages, and Slack threads — formats with no schema, no signing, no machine-readability, and no clear distinction between *normative* claims (what conformance requires) and *explanatory* ones (how to think about, use, or operate the thing).

`doc-atoms` makes the explanatory layer first-class: typed, versioned, signed, composable, and machine-readable. The complement is `schema-atoms`, which holds the normative layer.

## What it catalogs

### Atom types

- **`tutorial`** — Guided learning. Opinionated path from zero to working. Owns the *teaching* surface.
- **`explanation`** — Clarifying narrative. Concept-level "why" rather than "how". Owns the *understanding* surface.
- **`runbook`** — Operational procedure. Ordered steps for a known scenario (incident, deploy, restore). Owns the *operational* surface.
- **`how-to`** — Focused task answer. Problem-shaped, not concept-shaped. Owns the *problem-solving* surface.
- **`reference-guide`** — Lookup-shaped material organized for non-linear reading. Owns the *lookup* surface.

### Compositions: `documents`

A document composition assembles multiple atoms into a complete artifact — an onboarding guide (tutorial + how-tos + reference), an incident-response collection (runbooks + escalation references), a learning path (sequenced tutorials), etc.

### Rules

doc-atoms intentionally has **no `rules/` namespace**. Documentation is explanatory; it does not constrain other atoms. If a constraint exists, it lives in `schema-atoms` as a normative spec.

## Distinction from schema-atoms

| | `schema-atoms` | `doc-atoms` |
|---|---|---|
| Force | Normative | Explanatory |
| Atom types | `spec`, `schema` | `tutorial`, `explanation`, `runbook`, `how-to`, `reference-guide` |
| When they conflict | Spec wins | Doc gets fixed |
| Versioning posture | Amended via defined process | Versioned, freely revised as the subject moves |

`atoms-spec/v1.1.0` Part II names this boundary explicitly: "Specs are normative and versioned and amended. Documentation is explanatory, narrates or teaches, and is not normative."

## Runtime consumers

- **`aish`** — Shell that resolves `runbook` and `how-to` atoms for operator-facing help.
- **`olympus`** — Orchestration runtime that resolves `tutorial` and `explanation` atoms for in-context teaching to agents and operators.

## Status & priority

**Current status:** `bootstrap` (per `ATOMS.yml#lifecycle.current`)

**Priority tier:** Tier 2 — fill missing-from-fleet catalogs.

## Roadmap

### v0.1 — Bootstrap

**Goal:** Catalog exists, schema accepted, distinction from `schema-atoms` documented.

**Success criterion:** A first tutorial atom and a first runbook atom validate, sign, and resolve end-to-end.

**Work:**

- [x] Scaffolding modeled on `agent-atoms`
- [x] Atom + composition JSON Schemas for the five doc atom types
- [x] `ATOMS.yml` at `atoms-spec/v1.1.0`
- [ ] Seed atoms: 3 tutorials, 3 explanations, 3 runbooks, 3 how-tos, 1 reference-guide
- [ ] Cross-link with `schema-atoms`: every spec gets at least one explanation atom

### v0.2 — Adoption

**Goal:** `aish` and `olympus` consume doc-atoms in production.

### v1.0 — Operational

**Goal:** Documentation across the `convergent-systems.co` ecosystem authored as doc-atoms by default.

## Civilization-grade property checklist

| Property | Mechanism in this catalog |
|---|---|
| Typed | JSON Schema in `schemas/` validates every atom and composition |
| Versioned | Every atom carries a semver `version`; compositions pin by version |
| Machine-readable | `exports/catalog.json` published on every release |
| Composable | Compositions reference atoms by URI; CI verifies references resolve |
| Signed | ML-DSA-65 signatures per `atoms-spec/v1.1.0` |
| Open | Apache-2.0 (code) + CC-BY-4.0 (data) |
| Durable | No external runtime dependencies; site is static |

## Related

- **Spec:** [atoms-spec](https://github.com/convergent-systems-co/atoms-spec) (`atoms-spec/v1.1.0`)
- **Sibling:** [schema-atoms](https://github.com/convergent-systems-co/schema-atoms) — the normative complement
- **Tools:** [atoms-tools](https://github.com/convergent-systems-co/atoms-tools)
- **Umbrella:** [atoms](https://github.com/convergent-systems-co/atoms) — every catalog as a git submodule
- **Manifest:** [`ATOMS.yml`](./ATOMS.yml)
- **Standard:** [`README.md`](./README.md)
