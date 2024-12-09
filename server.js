const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

// database
// mongoose.set("strictQuery", true);
// mongoose
//   .connect(process.env.DATABASE_URL)
//   .then(() => console.log("DB Connected"))
//   .catch((err) => console.log("error connecting to mongodb", err));

app.listen(8000, () => {
  console.log(`server is running.`);
});
