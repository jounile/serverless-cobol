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
        body: logs.join('\n'),
        headers: { 'Content-Type': 'application/xml' },
        isRaw: true
    };

    context.done();

};