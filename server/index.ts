import { openapi } from "@elysiajs/openapi";
import { Elysia } from "elysia";
import { waitlistRouter } from "./routers/waitlist";

export const app = new Elysia({ prefix: "/api" })
  .onError(({ code, error, set }) => {
    if (code === "VALIDATION") {
      set.status = 422;
      return {
        success: false,
        message: "Validation failed",
        errors: error.all,
      };
    }

    if (code === "NOT_FOUND") {
      set.status = 404;
      return { success: false, message: "Resource not found" };
    }

    console.error(error);
    set.status = 500;
    return { success: false, message: "Internal Server Error" };
  })
  .use(openapi())
  .use(waitlistRouter)
  .get("/health", () => ({ status: "ok" }));

export type App = typeof app;
