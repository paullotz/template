import z from "zod";

export const WaitlistSchema = z.object({
  email: z.email(),
});

export type WaitlistInput = z.infer<typeof WaitlistSchema>;
