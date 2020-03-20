# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

<!--
## [X.Y.X] - YYYY-MM-DD

### Added

for new features.

### Changed

for changes in existing functionality.

### Deprecated

for soon-to-be removed features.

### Removed

for now removed features.

### Fixed

for any bug fixes.

### Security

in case of vulnerabilities.
-->

## [0.0.8] - 2020-03-20

### Added

- added `cuisine` to recipe block
- added `calories` to recipe block
- added `category` to recipe block
- added `diets` to recipe block
- multiple site social links in Misc Settings

### Changed

- split recipe method into sub-steps
- Blog Post preview: moved category to description
- upgraded Sanity to latest version
- allow more than one URLs associated to a Person

### Fixed

- removed `git add` from `lint-staged` scripts

## [0.0.7] - 2020-03-18

### Added

- org name and founder fields

### Changed

- refactored email text fields with better validation
- reduced max lenght of bog post titles
- person's bio changed from portable text to simple text

## [0.0.6] - 2020-03-12

### Removed

- nav items from Site Settings

## [0.0.5] - 2020-03-09

### Removed

- Canonical URL (will be provided via `.env` instead)

## [0.0.4] - 2020-03-09

### Removed

- Related blog posts

## [0.0.3] - 2020-03-09

### Added

- Added more info in CHANGELOG about previous releases
- Related blog posts
- Recipe block title / description
- Recipe "servings" label (in misc content)

### Removed

- Recipe generic title (from misc content)
- `:categoryName` suggestion in Home page category section titles

## [0.0.2] - 2020-03-06

### Added

- Custom Orphan Assets Dashboard widget

### Fixed

- Fixed staging site name in the Netlify dashboard widget

## [0.0.1] - 2020-03-04

### Added

- Initial project setup (scripts, linters, netlify config)
- Initial CMS setup: schemas, test doucments, dashboard, desk document lists..

[Unreleased]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.8...HEAD
[0.0.8]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.7...v0.0.8
[0.0.7]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/ciampo/offbeat-appetite-sanity/releases/tag/v0.0.1
