import { optsMetaDefault } from "../src/options";

const header = `/**
 * generated by script/generator.ts
 */\n`;

let code = "";

code += header;
code += "export interface IOptionsTxt {\n";
for (const k of Object.keys(optsMetaDefault)) {
    const value = optsMetaDefault[k];
    let name = value.config || value.attr;
    // tslint:disable-next-line: no-bitwise
    if (~name.indexOf("+"))
        name = `"${name}"`
    code += `  ${name}?: _${value.type};\n`;
}
code += "}\n\n";

code += header;
code += "export interface IOptionsId {\n";
for (const k of Object.keys(optsMetaDefault)) {
    const value = optsMetaDefault[k];
    code += `  ${k}?: _${value.type};\n`;
}
code += "}\n\n";

code += header;
code += "export interface IDHCPOptionsFncId {\n";
for (const k of Object.keys(optsMetaDefault)) {
    const value = optsMetaDefault[k];
    code += `  ${k}?: ${value.type};\n`;
}
code += "}\n\n";

console.log(code);
