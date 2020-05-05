#!/usr/bin/env node

const commandParser = require('./src/command-parser')

commandParser.parse(process.argv)
