const jsonLinks = [
  "https://jsonbase.com/sls-team/json-793",
  "https://jsonbase.com/sls-team/json-955",
  "https://jsonbase.com/sls-team/json-231",
  "https://jsonbase.com/sls-team/json-931",
  "https://jsonbase.com/sls-team/json-93",
  "https://jsonbase.com/sls-team/json-342",
  "https://jsonbase.com/sls-team/json-770",
  "https://jsonbase.com/sls-team/json-491",
  "https://jsonbase.com/sls-team/json-281",
  "https://jsonbase.com/sls-team/json-718",
  "https://jsonbase.com/sls-team/json-310",
  "https://jsonbase.com/sls-team/json-806",
  "https://jsonbase.com/sls-team/json-469",
  "https://jsonbase.com/sls-team/json-258",
  "https://jsonbase.com/sls-team/json-516",
  "https://jsonbase.com/sls-team/json-79",
  "https://jsonbase.com/sls-team/json-706",
  "https://jsonbase.com/sls-team/json-521",
  "https://jsonbase.com/sls-team/json-350",
  "https://jsonbase.com/sls-team/json-64",
];

async function jsonSorting() {
  let falseValues = 0;
  let trueValues = 0;
  for (let i = 0; i < jsonLinks.length; i += 1) {
    const data = await fetch(jsonLinks[i]).then((response) => {
      return response.json();
    });
    const stringifiedData = JSON.stringify(data);
    const isDone =
      stringifiedData[stringifiedData.indexOf("isDone") + 8] === "t";
    isDone ? (trueValues += 1) : (falseValues += 1);
    console.log(
      `[Success] ${jsonLinks[i]}: IsDone - ${isDone ? "True" : "False"}`
    );
  }
  console.log("Found True values:", trueValues);
  console.log("Found False values:", falseValues);
}

jsonSorting();
