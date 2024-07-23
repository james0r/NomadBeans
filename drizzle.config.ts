import "dotenv/config";
import dotenv from 'dotenv';
import { defineConfig } from "drizzle-kit";

dotenv.config({
  path: '.env.local',
});

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEON_DATABASE_URL!,
  },
});