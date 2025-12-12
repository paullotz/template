import { WaitlistForm } from "@/components/waitlist-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Something amazing is coming
          </h1>
          <p className="text-zinc-400 text-lg">
            Be the first to know when we launch
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <WaitlistForm />
        </div>

        <p className="text-zinc-600 text-sm">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
