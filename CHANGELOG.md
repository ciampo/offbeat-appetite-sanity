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

## [0.0.18] - 2020-07-04

### Added

- Blog post reviews field

## [0.0.17] - 2020-06-30

### Added

- Singular category name

### Changed

- Updated Sanity deps
- Updated eslint and lint-staged deps

### Fixed

- Error message when there are no tags in a blog post

## [0.0.16] - 2020-05-25

### Added

- About page hero title field

### Changed

- Updated dependencies
- About page content changed to RichTextContent
- shorter character limit for blog post exerpt

## [0.0.15] - 2020-05-12

### Added

- Added more newsletter form fields

### Removed

- Hero image fields removed from home page

### Changed

- Updated dependencies

## [0.0.14] - 2020-04-29

### Changed

- Updated featured blog posts validation rule (either 1 or 3)

## [0.0.13] - 2020-04-22

### Fixed

- ingredient quantity should be a number (was string)
- require at least one recipe ingredient, home page category, gallery page images, blogpost tags

## [0.0.12] - 2020-04-22

### Added

- recipeInformationSectionTitle and recipeDescriptionSectionTitle to misc content

## [0.0.11] - 2020-04-19

### Changed

- added hotspot/crop options to video poster image
- updated depenencies

## [0.0.10] - 2020-03-23

### Added

- added org email label and social platform type
- added keywords to blog post

## [0.0.9] - 2020-03-22

### Changed

- updated depenencies

### Fixed

- Do not consider drafts when validating categories in `siteSettings`

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

[unreleased]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.17...HEAD
[0.0.17]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.16...v0.0.17
[0.0.16]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.15...v0.0.16
[0.0.15]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.14...v0.0.15
[0.0.14]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.13...v0.0.14
[0.0.13]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.12...v0.0.13
[0.0.12]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.11...v0.0.12
[0.0.11]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.10...v0.0.11
[0.0.10]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.9...v0.0.10
[0.0.9]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.8...v0.0.9
[0.0.8]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.7...v0.0.8
[0.0.7]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/ciampo/offbeat-appetite-sanity/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/ciampo/offbeat-appetite-sanity/releases/tag/v0.0.1
