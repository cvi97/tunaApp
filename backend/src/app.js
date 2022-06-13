import express from "express";
import tunasRoutes from "./routes/tunas";
import usersRoutes from "./routes/users";

const app = express();
app.use(express.json());
app.use(tunasRoutes);
app.use(usersRoutes);

export default app;