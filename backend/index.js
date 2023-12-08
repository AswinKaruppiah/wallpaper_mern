import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import photo from "./routes/photo.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import Admin from "./routes/admin.js";

const app = express();
dotenv.config();

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
// app.use("/uploads", express.static("uploads"));
//example url
// http://localhost:8800/uploads\Mon Dec 26 2022-1779929.jpg
// uploads\Mon Dec 26 2022-1779929.jpg

//DB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
  } catch (err) {
    console.log(err);
  }
};
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

//api
app.use(express.json());
//it allows us to relax the security applied to an API.
app.use(cors({ credentials: true, origin: true }));

app.use(cookieParser());

app.use("/", photo);
app.use("/admin", Admin);

app.listen(3001, () => {
  connect();
  console.log("sever starts");
});
