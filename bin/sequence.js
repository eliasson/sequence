#!/usr/bin/env node
//
// Sequence - A simple sequence diagram tool
//
// Copyright (C) - markus.eliasson@gmail.com
//

const fs = require('fs');
const sequence = require('../dist/sequence');

const readSource = (file) => fs.readFileSync(file, 'utf-8');

function usage() {
    console.log('sequence diagram.seq');
    process.exit(1);
}

function main() {
    if(process.argv.length < 3) usage();

    const source = readSource(process.argv[2]);
    const result = sequence.compile(source);

    if(!result.isValid()) {
        console.error(`Failed to generate output:`);
        console.error(`${result.parserResult.parser._syntaxErrors}`)
    } else {
        console.log(result.output);
    }
}

main();
