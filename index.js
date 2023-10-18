import express from "express";
import "dotenv/config";
import cors from "cors";

import taskRouter from "./routes/cars.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(taskRouter);
// eslint-disable-next-line no-undef
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-undef
  console.log(`App started on port ${process.env.PORT}`);
});
