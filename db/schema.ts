import { date, pgTable, varchar } from "drizzle-orm/pg-core";
import { resourceId } from "./resource-id";

export const waitlistTable = pgTable("waitlist", {
  id: resourceId("wait", "id").primaryKey(),
  email: varchar().notNull().unique(),
  createdAt: date().notNull().defaultNow(),
});
