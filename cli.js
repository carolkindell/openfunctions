#!/usr/bin/env node
const fs = require("fs");

const cli = async () => {
  const exists = fs.existsSync("openfunctions.json");
  if (!exists) {
    console.log("openfunctions.json not found");
    return;
  }

  const contents = fs.readFileSync("openfunctions.json");
  console.log("openfunctions.json found. length: ", contents.length);
};
cli();
