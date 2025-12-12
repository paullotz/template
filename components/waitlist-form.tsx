"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { client } from "@/lib/client";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  email: z.email("Not a valid email").min(1, "Email is required"),
});

export const WaitlistForm = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (email: string) => {
      return await client.waitlist.post({ email });
    },
    onSuccess: () => {
      toast.success("You have signed up for our waitlist!");
    },
    onError: () => {
      toast.error("Something went wrong! Please try again.");
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (values) => {
    mutate(values.email);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col sm:flex-row gap-3 items-start">
          <FormField
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <FormItem className="flex-1 w-full">
                <div className="relative">
                  {fieldState.error && (
                    <span className="absolute -top-4 left-1 text-[10px] text-red-400 font-medium tracking-wide animate-in fade-in slide-in-from-bottom-1">
                      {fieldState.error.message}
                    </span>
                  )}
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="cto@unicorn.com"
                      className="h-12 bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-500 focus-visible:ring-zinc-700"
                    />
                  </FormControl>
                </div>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="h-12 bg-white text-black hover:bg-zinc-200 font-medium px-8 w-full sm:w-auto"
            disabled={isPending}
          >
            {isPending ? (
              <Loader className="animate-spin h-4 w-4" />
            ) : (
              "Join Waitlist"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
