const fs = require('fs')
const { promisify } = require('util')
const path = require('path')
const glob = require('glob-promise')

const readFile = promisify(fs.readFile)

module.exports = {
  async load (dir) {
    const jobPaths = await glob('jobs/*/', { cwd: dir })

    const jobs = await Promise.all(jobPaths
      .map(jobPath => path.join(dir, jobPath))
      .map(jobPath => buildJobConfiguration(jobPath)))

    return { jobs }
  }
}

async function buildJobConfiguration (jobPath) {
  const definition = await readDefinition(jobPath)
  const scripts = await readScripts(jobPath)

  return { definition, scripts }
}

async function readDefinition (jobPath) {
  const definitionContent = await readFile(path.join(jobPath, 'definition.json'), 'utf8')
  return JSON.parse(definitionContent)
}

async function readScripts (jobPath) {
  const scriptPaths = await glob('scripts/*/', { cwd: jobPath })

  return await Promise.all(scriptPaths
    .map(scriptPath => path.join(jobPath, scriptPath))
    .map(scriptPath => readScriptDir(scriptPath)))
}

async function readScriptDir (scriptPath) {
  const matcherScript = await readFile(path.join(scriptPath, 'matcher.js'), 'utf8')
  const executionScript = await readFile(path.join(scriptPath, 'execution.js'), 'utf8')

  return {
    matcher: matcherScript,
    execution: executionScript
  }
}
