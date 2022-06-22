import { config as dotenv } from "dotenv";
// Load environment variables from .env file, where API keys and passwords are configured
dotenv();

// Parameters for database connection
export const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
};