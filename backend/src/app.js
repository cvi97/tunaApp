import express from "express";
import cors from "cors"; // allows cross-origin requests
import morgan from "morgan"; // Morgan is a middleware for express that logs requests to your console.
import swaggerJSDoc from "swagger-jsdoc"; // Swagger is a tool for documenting RESTful APIs.
import swaggerUi from "swagger-ui-express"; // Swagger UI is a collection of HTML, JavaScript, and CSS files that can be used to generate a user interface for a RESTful API.
import { options } from './swaggerOptions';

import tunasRoutes from "./routes/tunas";
import usersRoutes from "./routes/users"; 
import songsRoutes from "./routes/songs";
import eventsRoutes from "./routes/events";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(tunasRoutes);
app.use(usersRoutes);
app.use(songsRoutes);
app.use(eventsRoutes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

export default app;