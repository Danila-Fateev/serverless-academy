const fs = require("fs").promises;

async function getUnique() {
  console.time("First task duration");

  const out0 = await fs.readFile("./db/out0.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out1 = await fs.readFile("./db/out1.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out2 = await fs.readFile("./db/out2.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out3 = await fs.readFile("./db/out3.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out4 = await fs.readFile("./db/out4.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out5 = await fs.readFile("./db/out5.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out6 = await fs.readFile("./db/out6.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out7 = await fs.readFile("./db/out7.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out8 = await fs.readFile("./db/out8.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out9 = await fs.readFile("./db/out9.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out10 = await fs.readFile("./db/out10.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out11 = await fs.readFile("./db/out11.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out12 = await fs.readFile("./db/out12.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out13 = await fs.readFile("./db/out13.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out14 = await fs.readFile("./db/out14.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out15 = await fs.readFile("./db/out15.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out16 = await fs.readFile("./db/out16.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out17 = await fs.readFile("./db/out17.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out18 = await fs.readFile("./db/out18.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out19 = await fs.readFile("./db/out19.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const allUsernames = [
    ...out0,
    ...out1,
    ...out2,
    ...out3,
    ...out4,
    ...out5,
    ...out6,
    ...out7,
    ...out8,
    ...out9,
    ...out10,
    ...out11,
    ...out12,
    ...out13,
    ...out14,
    ...out15,
    ...out16,
    ...out17,
    ...out18,
    ...out19,
  ];
  const uniqueName = [...new Set(allUsernames)];

  console.log("Number of unique usernames: ", uniqueName.length);
  console.timeEnd("First task duration");
}

async function existInAllFiles() {
  console.time("Second task duration");

  const out0 = await fs.readFile("./db/out0.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out1 = await fs.readFile("./db/out1.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out2 = await fs.readFile("./db/out2.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out3 = await fs.readFile("./db/out3.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out4 = await fs.readFile("./db/out4.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out5 = await fs.readFile("./db/out5.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out6 = await fs.readFile("./db/out6.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out7 = await fs.readFile("./db/out7.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out8 = await fs.readFile("./db/out8.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out9 = await fs.readFile("./db/out9.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out10 = await fs.readFile("./db/out10.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out11 = await fs.readFile("./db/out11.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out12 = await fs.readFile("./db/out12.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out13 = await fs.readFile("./db/out13.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out14 = await fs.readFile("./db/out14.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out15 = await fs.readFile("./db/out15.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out16 = await fs.readFile("./db/out16.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out17 = await fs.readFile("./db/out17.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out18 = await fs.readFile("./db/out18.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out19 = await fs.readFile("./db/out19.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const files = [
    out0,
    out1,
    out2,
    out3,
    out4,
    out5,
    out6,
    out7,
    out8,
    out9,
    out10,
    out11,
    out12,
    out13,
    out14,
    out15,
    out16,
    out17,
    out18,
    out19,
  ];

  const notUniqueNames = out0.filter((name) =>
    files.every((file) => file.includes(name))
  );

  console.log(
    "Number of usernames that exist in all files:",
    [...new Set(notUniqueNames)].length
  );
  console.timeEnd("Second task duration");
}

async function existInAtleastTen() {
  console.time("Third task duration");

  const out0 = await fs.readFile("./db/out0.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out1 = await fs.readFile("./db/out1.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out2 = await fs.readFile("./db/out2.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out3 = await fs.readFile("./db/out3.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out4 = await fs.readFile("./db/out4.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out5 = await fs.readFile("./db/out5.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out6 = await fs.readFile("./db/out6.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out7 = await fs.readFile("./db/out7.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out8 = await fs.readFile("./db/out8.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out9 = await fs.readFile("./db/out9.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out10 = await fs.readFile("./db/out10.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out11 = await fs.readFile("./db/out11.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out12 = await fs.readFile("./db/out12.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out13 = await fs.readFile("./db/out13.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out14 = await fs.readFile("./db/out14.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out15 = await fs.readFile("./db/out15.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out16 = await fs.readFile("./db/out16.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out17 = await fs.readFile("./db/out17.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out18 = await fs.readFile("./db/out18.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const out19 = await fs.readFile("./db/out19.txt").then((data) => {
    const str = data.toString("utf-8").split(" ");
    const splittedStr = str[0].split("\n");
    return splittedStr;
  });

  const files = [
    out0,
    out1,
    out2,
    out3,
    out4,
    out5,
    out6,
    out7,
    out8,
    out9,
    out10,
    out11,
    out12,
    out13,
    out14,
    out15,
    out16,
    out17,
    out18,
    out19,
  ];
  const allUsernames = files.flat();

  const notUniqueNames = allUsernames.filter((name, index) => {
    if (index > Math.floor(allUsernames.length / 2)) return;
    let amount = 0;
    files.forEach((file) => {
      if (amount >= 10) {
        return;
      }
      if (file.includes(name)) {
        amount += 1;
      }
    });
    console.log(index);
    if (amount >= 10) {
      return true;
    }
    return false;
  });

  console.log(
    "Number of usernames that exist in at least 10 files:",
    [...new Set(notUniqueNames)].length
  );
  console.timeEnd("Third task duration");
}

getUnique();
existInAllFiles();
existInAtleastTen();
