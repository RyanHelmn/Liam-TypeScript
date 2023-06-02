import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./Input.tsx";
import { Label } from "./Label.tsx";
import { getErrorMessage } from "../utils/FormUtils.ts";
import { Button } from "./Button.tsx";
import { TextArea } from "./TextArea.tsx";

const schema = z.object({
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(1, { message: "Message is required" }),
});

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    // Simulate a network request that takes 1000 ms to complete
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  });

  return (
    <section className="container py-6 md:py-12">
      <h2 className="text-3xl font-semibold">Fill in this form</h2>
      <form
        onSubmit={onSubmit}
        className="max-w-screen-md grid md:grid-cols-2 items-start gap-10"
      >
        <fieldset>
          <Label htmlFor="firstName">First Name</Label>
          <Input {...register("firstName")} id="firstName" />
          {errors.firstName?.message && (
            <p>{getErrorMessage(errors.firstName.message)}</p>
          )}
        </fieldset>

        <fieldset>
          <Label htmlFor="lastName">Last Name</Label>
          <Input {...register("lastName")} id="lastName" />
          {errors.lastName?.message && (
            <p>{getErrorMessage(errors.lastName.message)}</p>
          )}
        </fieldset>

        <fieldset className="md:col-span-2">
          <Label htmlFor="email">Email</Label>
          <Input {...register("email")} id="email" type="email" />
          {errors.email?.message && (
            <p>{getErrorMessage(errors.email.message)}</p>
          )}
        </fieldset>

        <fieldset className="md:col-span-2">
          <Label htmlFor="message">Message</Label>
          <TextArea {...register("message")} id="message" />
          {errors.message?.message && (
            <p>{getErrorMessage(errors.message.message)}</p>
          )}
        </fieldset>

        <Button type="submit" className="col-span-2" submitting={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </section>
  );
}
