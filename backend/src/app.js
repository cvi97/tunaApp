import express from "express";
import cors from "cors";
import morgan from "morgan";
import tunasRoutes from "./routes/tunas";
import usersRoutes from "./routes/users";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(tunasRoutes);
app.use(usersRoutes);

export default app;