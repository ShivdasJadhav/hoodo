import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import userRoute from "./routes/users.route.js";
import authRoute from "./routes/auth.route.js";
import entryRoute from "./routes/entries.route.js";
import routineRoute from "./routes/routines.route.js";
import mealRoute from "./routes/meals.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.use(cookieParser());
app.use(express.json());
app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(morgan("common"));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/entries", entryRoute);
app.use("/api/v1/routines", routineRoute);
app.use("/api/v1/meals", mealRoute);

app.listen(process.env.PORT_NO, () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DB & Service In Running🚆");
    })
    .catch((err) => {
      console.log("failed to initiate services", err);
    });
});
