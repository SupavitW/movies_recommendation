import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan("short"));
app.use(compression());
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
    cors({
        credentials: true,
    }),
);

// DB connection
import { connectDB } from "./db/config";
connectDB();

// Router
import router from "./router";
app.use("/", router());

if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
        console.log(`The server is running on ${PORT}`);
    });
}

export default app;
