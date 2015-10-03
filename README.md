# /r/NRL Styleguide

This is the build for the /r/NRL styleguide

## Pre-requisites

* npm
* ruby

## Setup

Run these commands to set up the project on your machine

### Node Modules

1. `npm install -g gulp gulp cli`
2. `npm install`

### Ruby Gems

1. `gem install bundler`
2. `bundle install`
 
## Building new dist/index.css file

To build the new styleguide into the `dist` folder, run the following command:

`gulp`

### Individual Gulp Tasks

#### SCSS Lint

The purpose of this task is to ensure SCSS/CSS code quality:

`gulp scsslint`

#### ES Lint

The purpose of this task is to ensure JavaScript code quality

`gulp eslint`

## To do

1. Pre-push hook Travis build
