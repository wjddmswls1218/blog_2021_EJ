import express from "express";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 7000;

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));

app.listen(PORT, () => {
  console.log(`${PORT} SEVER START`);
});
