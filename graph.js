const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const random = require("random");

const FILE_PATH = "./data.json";


const makeCommit = n => {
  if (n === 0) return simpleGit().push();
  const x = random.int(5,2);
  const y = random.int(4,1);
  const DATE = moment("2022-12-5")
    .add(x, "days")
    .add(y, "hours")
    .subtract(5, "days")
    .add(1, "days")
    .format();
  const data = {
    date: DATE,
  };
  console.log(DATE );
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, makeCommit.bind(this, --n))
      .push();
  });
};

makeCommit(20);