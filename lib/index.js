#!/usr/bin/env node

"use strict";

const path = require("path");
const bootstrap = require("commitizen/dist/cli/git-cz").bootstrap;
const { program } = require("commander");
const inquirer = require("inquirer");

const defaultPathConfig = path.join(__dirname, "conventions/default.js");
const jiraPathConfig = path.join(__dirname, "conventions/jira.js");

program
  .name("o-semantic")
  .description("CLI to create semantic commits")
  .version("1.0.0");

program
  .option("-d, --default", "use default convention")
  .option("-j, --jira", "use jira convention");

program.showHelpAfterError("(add --help or -h for additional information)");
program.parse(process.argv);

function init() {
  const options = program.opts();
  process.argv = process.argv.slice(0, 2);

  if (Object.keys(options).length) {
    getConventionalCommitConfig(options);
    return;
  }

  // if no CLI's args passed, ask the user to choose a convention
  inquirer
    .prompt([
      {
        type: "list",
        name: "type",
        message: "Select the type of convention:",
        choices: [
          { name: "Default Conventional Commits", value: "default" },
          { name: "Jira Conventional Commits", value: "jira" },
        ],
      },
    ])
    .then((answers) => {
      getConventionalCommitConfig({ [answers.type]: true });
    })
    .catch((err) => {
      console.error(err.message);
    });
}

function createCommit(convention = defaultPathConfig) {
  bootstrap({
    cliPath: path.join(__dirname, "../node_modules/commitizen"),
    config: {
      path: convention,
    },
  });
}

function getConventionalCommitConfig(type) {
  if (type.jira) {
    createCommit(jiraPathConfig);
    return;
  }
  createCommit();
}

init();
