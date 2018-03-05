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

    const file = process.argv[2];
    const source = readSource(file);
    const result = sequence.compile(source);

    if(!result.isValid()) {
        result.diagnostics.forEach(diag => {
            console.error(`Error: ${diag.message}`)
        });
    } else {
        console.log(result.output);
    }
}

main();
