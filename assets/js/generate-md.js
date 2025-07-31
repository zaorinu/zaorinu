const fs = require("fs");
const yaml = require("js-yaml");

const data = yaml.load(fs.readFileSync("assets/contact.yml", "utf8"));

let markdown = `${data.autogen_header}\n\n`;
markdown += "| Project                        | How to Contact                            |\n";
markdown += "|-------------------------------|------------------------------------------|\n";

for (const entry of data.projects) {
  markdown += `| ${entry.name} | ${entry.contact} |\n`;
}

markdown += `\n---\n\n${data.important_note}\n\n`;
markdown += `<div style="text-align: right;">\n  <a href="readme.md">go back</a>\n</div>\n`;

fs.writeFileSync("contact.md", markdown);
