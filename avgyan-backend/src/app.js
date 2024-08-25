import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "32kb" }));
app.use(express.urlencoded({ extended: true, limit: "32kb" }));

app.use(cookieParser());

//routes import
import userRoutes from "./routes/user.routes.js";
import contentRouter from "./routes/content.routes.js";
//routes declaration
app.use("/api/user", userRoutes);
app.use("/api/user/content", contentRouter);

export { app };
