import { Elysia } from "elysia";
import { db } from "@/db";
import { waitlistTable } from "@/db/schema";
import { WaitlistSchema } from "@/lib/types";

export const waitlistRouter = new Elysia({ prefix: "/waitlist" }).post(
	"/",
	async ({ body }) => {
		try {
			await db.insert(waitlistTable).values({ email: body.email });

			return { success: true, message: "Added to waitlist" };
		} catch (e) {
			console.error(e);
			return {
				success: false,
				message: "Failed to signup for waitlist.",
			};
		}
	},
	{
		body: WaitlistSchema,
	},
);
