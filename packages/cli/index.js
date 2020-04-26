#!/usr/bin/env node

const commandDefinition = require('./src/command-definition')

commandDefinition.parse(process.argv)
