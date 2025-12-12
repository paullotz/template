# Next.js + Elysia + Drizzle Starter

**Template for building fast.**

A high-performance, type-safe full-stack starter template. This project leverages **Bun** for speed, **ElysiaJS** for a blazing fast backend API, **Next.js** for the frontend, and **Drizzle ORM** for type-safe database interactions.

## Tech Stack

* **Runtime & Package Manager:** [Bun](https://bun.sh/)
* **Frontend:** Next.js 16 (App Router)
* **Backend:** ElysiaJS
* **Database ORM:** Drizzle ORM
* **Styling:** Tailwind CSS
* **Language:** TypeScript

## Getting Started

### 1. Clone & Install
```bash
git clone [https://github.com/paullotz/template.git](https://github.com/paullotz/template.git)
cd template
bun install
````

### 2. Environment Setup

Rename `.env.example` to `.env` and configure your database connection:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

### 3. Database Setup

Push your Drizzle schema to the database:

```bash
npx drizzle-kit push
```

### 4. Run Development Server

```bash
bun dev
```

The app will be available at `http://localhost:3000`.

## Available Scripts

| Command | Description |
| :--- | :--- |
| `bun run dev` | Starts the Next.js frontend and Elysia backend. |
| `bun run build` | Builds the application for production. |
| `bun run start` | Starts the production server. |

## Project Structure

```text
├── app/                  # Next.js App Router pages & layouts
├── server/               # ElysiaJS API routes & server entry
├── components/           # React components (UI)
├── db/                   # Database configuration
│   ├── index.ts          # Drizzle client instance
│   └── schema.ts         # Database schema definitions
├── lib/                  # Utility functions & shared logic
├── public/               # Static assets
├── drizzle.config.ts     # Drizzle Kit configuration
└── next.config.mjs       # Next.js configuration
```

## Potential Additions

These features are recommended for production scalability:

  * **Authentication:** [Better Auth](https://www.better-auth.com/)
      * *Why:* A comprehensive, type-safe authentication library specifically designed for TypeScript.
  * **Payments:** [Stripe](https://stripe.com/)
      * *Integration:* Use the `@better-auth/stripe` plugin to sync user subscriptions with your Drizzle schema automatically.

## UI & UX Recommendations

Tools and libraries to elevate the look and feel of your application:

1.  **[Tweakcn](https://tweakcn.com/)** – Fine-tune your Shadcn/ui components easily.
2.  **[V0](https://v0.app/)** – Generative UI for rapid component prototyping.
3.  **[PatternCraft](https://patterncraft.fun/)** – CSS background pattern generator.
4.  **[Lina Adaptive Scroll Area](https://lina.sameer.sh/)** – A smarter, more aesthetic scroll area.
5.  **[Evil Charts](https://evilcharts.com/)** – Simple, minimalist charts for dashboards.
6.  **[React Wheel Picker](https://react-wheel-picker.chanhdai.com/)** – iOS-style wheel picker for web.
7.  **[Cook](https://cook.engage-dev.com/)** – A collection of refined UI recipes.
8.  **[Spaceman RTA](https://spaceman-rta-vite.netlify.app/)** – React Theme Animation for seamless mode switching.
9.  **[Shadcn TipTap](https://tiptap.niazmorshed.dev/)** – A rich text editor pre-configured with Shadcn styling.
10. **[Shadcn Prose](https://shadcn-prose.vercel.app/)** – Better typography defaults for Shadcn projects.

