# FitChain - Building Blocks to a Healthy World
[FitChain App](https://fit-chain.herokuapp.com/)
<br/>

[![fit-chain commit activity](https://img.shields.io/github/commit-activity/m/haz3141/fit-chain)](https://github.com/haz3141/fit-chain/)
<br/>
[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)](https://github.com/haz3141/fit-chain/)


![Screenshot](https://raw.githubusercontent.com/haz3141/fit-chain/master/client/src/images/screenshot.PNG)

## Table of Contents

* [Overview](#overview)
* [Usage](#usage)
* [Dependencies](#dependencies)
* [Application Structure](#application-structure)
* [FAQ](#frequently-asked-questions)
* [Change Log](#change-log)
* [Contributing](#contributing)
* [Authors](#authors)
* [License](#license)

## Overview

This app allows users to keep track of common everyday health related data such as exercising or eating a meal.

This app was created to help motivate users into staying active by rewarding the user for posting their health related activities to the FitChain blockchain network with a digital token that is distributed amongst the users of the FitChain network.

In this model users submit activities correlating to three specific types of data:

* Calorie Consumption
* Cardio Activity
* Weight Lifting

These submissions are recorded to the blockchain and users are rewarded for their submissions to the network with tokens to be used within the FitChain network and ecosystem.

## Usage

### UI Features

FitChain activity blocks are displayed in chronological order on the dashboard. Users may view all blocks on the network or choose to view just their own.

Users may submit new activities by clicking the Create Activity button, setting the details of the activity in the popup dialog box, and then clicking submit.

### Starting & Building the App

To start the application in development mode simply run:

* npm install
* npm start

from the command line.

Then you must run a blockchain node at: http://localhost:8080

The production version of the app is automatically deployed to Heroku.

### Environment Variables

Environment variables that control the operation of the app are defined in the
`.env` file in the application root. These variables and their usage are shown
in the following table.

Environment variables maintained in the `.env` file are made available to the
application code via `process.env.<variable-name>`.

Remember that even though this keeps secure tokens like client id's and secrets
out of application code it does not make them secure.

| Environment Variable    | Description | Example Setting |
|:------------------------|:------------|:----------------|
| MONGODB_URI | Connection to a MongoDB | N/a |
| SECRET_KEY | Signing key for JWT authentication/verification | N/a

## Dependencies

### Libraries

This app has the following dependencies

| Module/Library | Environment | Description | Related Files |
|:---------------|:------------|:------------|:--------------|
| @material-ui/core | Development | Material Design React components | N/a |
| @material-ui/icons | Development | Material Design React components | N/a |
| prop-types     | Runtime     | Type checking for props | N/a |
| react          | Runtime     | UI Library  | N/a           |
| react-dom      | Runtime     | DOM renderer for React | N/a |
| express | Runtime | Web Framework for Node | N/a |
| logger | Runtime    | Logging Library | N/a  |
| mongoose     | Runtime     | MongoDB Object Modeling Tool | N/a |
| cookie-parser | Runtime | Express Middleware to Parse Cookie | N/a |
| cors | Runtime | Express Middleware to Enable CORS | N/a |
| dotenv | Runtime | Use .env for Environment Variables | N/a |
| axios | Runtime | Frontend API Calls | N/a |

In addition to these libraries, which the app explicitly depends on,
Create React App includes other libraries such as Babel and Webpack. For more
information about Create React App and it's dependencies consult its
[documentation](https://github.com/facebook/create-react-app).

### External Dependencies

In addition to libraries FitChain also depends on a blockchain node to be running. The [alpha-coin-blockchain](https://github.com/haz3141/alpha-coin-blockchain/)
GitHub repo contains the necessary files to start the local blockchain node.

## Application Structure

The component structure of the FitChain application is shown in the
following diagram.

* Coming Soon...

<!-- ![React Component Structure](https://github.com/jdmedlock/meteorite/blob/development/docs/me_component_structure.png) -->

## Frequently Asked Questions

TBD

## Change Log

For more information see [Change Log](#)

## Contributing

See [Contributing](#)
and our [Collaborator Guide](#).

## Authors

Developers on this project can be found on the [Contributors](https://github.com/haz3141/fit-chain/graphs/contributors) page of this repo.

## License

[MIT](https://tldrlegal.com/license/mit-license)
