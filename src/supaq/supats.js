import * as util from 'util';
import { exec as exec_base } from 'child_process';
const exec = util.promisify(exec_base);
// import fs from 'fs'
// import program from 'commander'
// import bonus, { queriesStarter } from './lib/bonus.js'
// import imports, { dots } from './lib/imports.js'
// import { getUserQueries, justTables } from './lib/tinkering.js'
// import { genBaseQueries, parseSchema } from './lib/jsc.js'
// To make it much much simpler, the path MUST BE an absolute path relative to the root of the directory
let fullPath = `./config.ts`;
const regTs = /(.*)\.ts$/;
const regJs = /(.*)\.js$/;
const matchTs = fullPath.match(regTs);
const matchJs = fullPath.match(regJs);
async function getPath() {
    /**
     * @type {null |string}
     */
    let path = null;
    if (matchJs) {
        path = matchJs[1];
    }
    else {
        if (matchTs) {
            path = matchTs[1];
        }
        else {
            path = fullPath;
        }
        const command = `tsc ${path}.ts --target es2022 --moduleResolution node --strict false --skipLibCheck`;
        try {
            // console.log(`command ${command} will be executed`)
            const { stdout, stderr } = await exec(command);
            // console.log(`command ${command} has been executed, stdout: ${stdout}, stderr: ${stderr}`)
        }
        catch (error) {
            console.error(error);
            // everything went good, no worries, some compiler options just need an adjustment
        }
        // I choose not to handle errors as it will be errors anyway because of type-fest which can't be imported 
    }
    return path;
}
async function main() {
    let path = await getPath();
    path = `${path}.js`;
    // console.log(`will import ${path}`)
    try {
        console.log(`will import ${path}`);
        const { default: config } = await import(path);
        console.log(config);
    }
    catch (error) {
        console.error(error);
    }
}
async function test() {
    const { stdout, stderr } = await exec('dir');
    console.log(stdout, stderr);
}
main();
// test()
