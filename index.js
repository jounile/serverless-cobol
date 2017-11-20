'use strict'

const cobolscript = require('cobolscript')
const SCRIPT = './serverless.cbl'

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var program = cobolscript.compileProgramFile(SCRIPT)
    program.run(cobolscript.getRuntime())


    context.res = {
        status: 200,
        body: program.toString(),
        headers: { 'Content-Type': 'application/xml' },
        isRaw: true
    };

    context.done();

};
