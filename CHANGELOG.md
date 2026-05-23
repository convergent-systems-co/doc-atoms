# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial scaffolding modeled on `convergent-systems-co/agent-atoms`.
- `ATOMS.yml` at `atoms-spec/v1.1.0` declaring the five atom types
  (`tutorial`, `explanation`, `runbook`, `how-to`, `reference-guide`),
  `documents/` composition namespace, ML-DSA-65 signing baseline,
  bootstrap lifecycle, dual Apache-2.0 + CC-BY-4.0 licensing, and
  `aish` + `olympus` as runtime consumers.
- JSON Schemas for atoms (`schemas/atom-v1.json`) and document
  compositions (`schemas/composition-v1.json`) shaped for the
  explanatory domain.
- Astro static site at `web/` with `doc-atoms.com` branding and the
  explicit boundary with `schema-atoms` (doc-atoms is narrative,
  schema-atoms is normative).
- Cloudflare Pages deploy workflow + Terraform module retained from
  template (project name updated to `doc-atoms`).
