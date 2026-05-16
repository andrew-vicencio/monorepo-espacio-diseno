"use client";

import React, { useState } from "react";
import {
  Input,
  Field,
  Textarea,
  Fieldset,
  Button,
  Select,
} from "@headlessui/react";
import clsx from "clsx";

interface ContactFormProps extends React.HTMLAttributes<HTMLDivElement> {
  primary?: boolean;
  secondary?: boolean;
  close?: () => void;
}

type SubmitState = "idle" | "loading" | "success" | "error";

const inputBase = clsx(
  "mt-1 block w-full rounded-md py-2.5 px-3.5 text-sm",
  "bg-white text-dark-grey placeholder:text-light-grey",
  "border border-slate-200",
  "focus:outline-none focus:ring-2 focus:ring-espacio-green/50 focus:border-espacio-green",
  "transition-colors duration-150"
);

const ContactForm: React.FC<ContactFormProps> = ({
  close,
  primary = false,
  secondary = false,
  ...props
}) => {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      firstName: (data.get("firstName") as string) ?? "",
      lastName: (data.get("lastName") as string) ?? "",
      email: (data.get("Email") as string) ?? "",
      phone: (data.get("phone") as string) ?? "",
      company: (data.get("company") as string) ?? "",
      referral: (data.get("referral") as string) ?? "",
      comments: (data.get("comments") as string) ?? "",
    };

    try {
      const res = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        setSubmitState("success");
        form.reset();
        if (close) close();
      } else {
        const json = (await res.json()) as { errors?: { message: string }[] };
        setErrorMessage(
          json.errors?.[0]?.message ?? "Something went wrong. Please try again."
        );
        setSubmitState("error");
      }
    } catch {
      setErrorMessage(
        "Unable to send your message. Please check your connection and try again."
      );
      setSubmitState("error");
    }
  };

  if (submitState === "success") {
    return (
      <div className="rounded-lg border border-espacio-green/30 bg-iced-green px-6 py-8 text-center">
        <p className="font-montserrat text-lg font-light text-dark-grey">
          Thank you for reaching out!
        </p>
        <p className="mt-2 font-source-sans text-sm text-dark-grey/80">
          We&apos;ve received your message and will get back to you within 1–2
          business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Fieldset className="flex flex-col gap-4">
        {/* Name row */}
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <label className="font-source-sans text-xs font-semibold uppercase tracking-wider text-current opacity-70 mb-1 block">
              First Name *
            </label>
            <Input
              name="firstName"
              aria-required
              required
              disabled={submitState === "loading"}
              className={inputBase}
              placeholder="First name"
            />
          </Field>
          <Field>
            <label className="font-source-sans text-xs font-semibold uppercase tracking-wider text-current opacity-70 mb-1 block">
              Last Name *
            </label>
            <Input
              name="lastName"
              aria-required
              required
              disabled={submitState === "loading"}
              className={inputBase}
              placeholder="Last name"
            />
          </Field>
        </div>

        {/* Email + phone row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field>
            <label className="font-source-sans text-xs font-semibold uppercase tracking-wider text-current opacity-70 mb-1 block">
              Email *
            </label>
            <Input
              aria-required
              required
              name="Email"
              type="email"
              disabled={submitState === "loading"}
              className={inputBase}
              placeholder="your@email.com"
            />
          </Field>
          <Field>
            <label className="font-source-sans text-xs font-semibold uppercase tracking-wider text-current opacity-70 mb-1 block">
              Phone *
            </label>
            <Input
              aria-required
              required
              name="phone"
              type="tel"
              disabled={submitState === "loading"}
              className={inputBase}
              placeholder="+63 9XX XXX XXXX"
            />
          </Field>
        </div>

        {/* Company + referral row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field>
            <label className="font-source-sans text-xs font-semibold uppercase tracking-wider text-current opacity-70 mb-1 block">
              Company
            </label>
            <Input
              name="company"
              disabled={submitState === "loading"}
              className={inputBase}
              placeholder="Your company"
            />
          </Field>
          <Field>
            <label className="font-source-sans text-xs font-semibold uppercase tracking-wider text-current opacity-70 mb-1 block">
              How did you hear about us?
            </label>
            <Select
              name="referral"
              disabled={submitState === "loading"}
              className={clsx(inputBase, "cursor-pointer")}
            >
              <option value="">Select one...</option>
              <option value="referral">Referral</option>
              <option value="linkedin">LinkedIn</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
            </Select>
          </Field>
        </div>

        {/* Message */}
        <Field>
          <label className="font-source-sans text-xs font-semibold uppercase tracking-wider text-current opacity-70 mb-1 block">
            Message *
          </label>
          <Textarea
            aria-required
            required
            name="comments"
            disabled={submitState === "loading"}
            className={clsx(inputBase, "resize-y min-h-[100px]")}
            rows={4}
            placeholder="Tell us about your project..."
          />
        </Field>

        {/* Error feedback */}
        {submitState === "error" && (
          <p
            role="alert"
            className="font-source-sans text-sm text-espacio-red rounded-md border border-espacio-red/30 bg-red-50 px-4 py-2.5"
          >
            {errorMessage}
          </p>
        )}

        {/* Submit buttons */}
        {primary && (
          <Button
            type="submit"
            disabled={submitState === "loading"}
            className={clsx(
              "mt-2 w-full sm:w-auto font-source-sans font-semibold uppercase tracking-wider text-sm",
              "text-white bg-espacio-red rounded-md px-8 py-3.5 border-2 border-espacio-red",
              "hover:bg-white hover:text-espacio-red transition-colors duration-200",
              "disabled:opacity-60 disabled:cursor-not-allowed"
            )}
          >
            {submitState === "loading" ? "Sending..." : "Send Message"}
          </Button>
        )}
        {secondary && (
          <Button
            type="submit"
            disabled={submitState === "loading"}
            className={clsx(
              "mt-2 w-full font-source-sans font-semibold uppercase tracking-wider text-sm",
              "text-white rounded-md px-8 py-3.5 border-2 border-white",
              "hover:bg-white hover:text-espacio-red transition-colors duration-200",
              "disabled:opacity-60 disabled:cursor-not-allowed"
            )}
          >
            {submitState === "loading" ? "Sending..." : "Send Message"}
          </Button>
        )}
      </Fieldset>
    </form>
  );
};

export default ContactForm;
