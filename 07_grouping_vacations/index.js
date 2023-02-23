const fs = require("fs/promises");

async function getData() {
  const data = await fs.readFile("./vactions.json");
  return JSON.parse(data.toString());
}

async function groupVacations() {
  const data = await getData();
}
