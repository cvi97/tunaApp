import express from "express";
import tunasRoutes from "./routes/tunas";

const app = express();
app.use(tunasRoutes);

export default app;