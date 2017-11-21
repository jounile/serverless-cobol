'use strict'

const cobolscript = require('cobolscript')
const SCRIPT = '../../home/site/wwwroot/HelloCobol/serverless.cbl'

const hookConsoleLog = (logs) => { console.log = (d) => logs.push(d) }

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var logs = []

    hookConsoleLog(logs)

    var program = cobolscript.compileProgramFile(SCRIPT)
    program.run(cobolscript.getRuntime())

    context.res = {
        status: 200,
        body: '<h1>' + logs.join('\n') + '</h1>',
        headers: { 'Content-Type': 'text/html' },
        isRaw: true
    };

    context.done();

};