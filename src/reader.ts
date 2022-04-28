import fs from "fs";
import path from "path";
const cwd = process.cwd();

const reader = () => {
  try {
    const data = fs.readFileSync(
      path.join(cwd, "/examples/users.csv"),
      "utf8"
    );
    const rows = data.split("\n");
    const columns = rows[0].split(";");
    console.log({ columns });

    const rowsData = rows.map(row => row.split(';'));
    console.log({ rowsData });
  } catch (err) {
    console.error(err);
  }
};

reader();
