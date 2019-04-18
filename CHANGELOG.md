# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2019-04-18

### Changed
* Improved installation instructions in README.md.
* Summary in LastBlogposts is now block instead of `<mark>`-ed, and is positioned in lower right corner.

## [1.1.1] - 2019-04-15

### Changed
* Progress overlays are hidden when only one blog post in cycle.

## [1.1.0] - 2019-04-15

### Added
* Static Header in top left corner which shows that blog posts are shown when in LastBlogposts view.
* ProgressBar to bottom of screen which shows how much time it is left before next blog post when in LastBlogposts view.
* PostsProgress overlay in top right corner which shows the progress of cycling posts in LastBlogposts view.

## [1.0.1] - 2019-04-13

### Changed

* Increased the interval used for cycling through all LastBlogposts in order to fit a production environment.

## [1.0.0] - 2019-04-13

### Added

* View called LastBlogposts which cycles through the last couple of blogposts published at [elsys.blog](http://elsys.blog).  Refetches at certain intervals.

[Unreleased]: https://github.com/leiklier/elsys-infoscreen/compare/1.2.0...HEAD
[1.2.0]: https://github.com/leiklier/elsys-infoscreen/compare/1.1.1...1.2.0
[1.1.1]: https://github.com/leiklier/elsys-infoscreen/compare/1.1.0...1.1.1
[1.1.0]: https://github.com/leiklier/elsys-infoscreen/compare/1.0.1...1.1.0
[1.0.1]: https://github.com/leiklier/elsys-infoscreen/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/leiklier/elsys-infoscreen/releases/tag/1.0.0