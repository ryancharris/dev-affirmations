#!/usr/bin/env node

const program = require("commander");
const { addTweet } = require("./index");

program.version("1.0.0").description("CLI for Dev Affirm Slackbot");

program
  .command("add <tweetId>")
  .alias("a")
  .description("Add tweet to collection affirmations are pulled from")
  .action(tweetId => addTweet(tweetId));

program.parse(process.argv);
