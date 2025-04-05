import { drizzle } from "drizzle-orm/neon-serverless";
import { NeonQueryFunction, neon } from "@neondatabase/serverless";
import * as schema from "../shared/schema";

// Create the database connection string
const databaseUrl = process.env.DATABASE_URL!;

// Create the connection
const sql = neon(databaseUrl);

// Create the drizzle client
// @ts-ignore - Ignoring type issue with neon and drizzle-orm
export const db = drizzle(sql);