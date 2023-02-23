const fs = require("fs/promises");

async function getData() {
  const data = await fs.readFile("./vactions.json");
  return JSON.parse(data.toString());
}

async function groupVacations() {
  const data = await getData();
  const newVac = [];

  data.forEach((el) => {
    const { user, startDate, endDate } = el;
    const exists = newVac.find((item) => item.userId === user._id);

    if (!exists) {
      const newUser = {
        userId: user._id,
        userName: user.name,
        vacations: [
          {
            startDate: startDate,
            endDate: endDate,
          },
        ],
      };
      newVac.push(newUser);
    }
    if (exists) {
      const foundUser = newVac.find((item) => item.userId === user._id);

      const newVacDate = { startDate: startDate, endDate: endDate };
      foundUser.vacations.push(newVacDate);
    }
  });
  console.log(JSON.stringify(newVac, 0, 2));
  return JSON.stringify(JSON.stringify(newVac, 0, 2));
}

groupVacations();
