import { date, integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const waitlistTable = pgTable("waitlist", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	email: varchar().notNull().unique(),
	createdAt: date().notNull().defaultNow(),
});
