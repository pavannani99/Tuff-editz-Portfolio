import { drizzle } from "drizzle-orm/neon-serverless";
import { neon } from "@neondatabase/serverless";
import * as schema from "../shared/schema";

// Create the database connection
const connectionString = process.env.DATABASE_URL!;
const sql = neon(connectionString);

// Create the drizzle instance
export const db = drizzle(sql, { schema });