import {
  integer,
  text,
  boolean,
  date,
  pgTable
} from "drizzle-orm/pg-core"

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
})

export const cafe = pgTable("cafe", {
  id: integer("id").primaryKey(),
  name: text("text").notNull(),
  createdAt: date('date').defaultNow().notNull(),
})