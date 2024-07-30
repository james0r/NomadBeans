import {
  integer,
  text,
  boolean,
  date,
  pgTable,
  serial,
  uuid
} from "drizzle-orm/pg-core"

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
})

export const cafe = pgTable("cafe", {
  id: uuid("id").primaryKey().defaultRandom().notNull(),
  name: text("name").notNull(),
  createdAt: date('createdAt').defaultNow().notNull(),
})