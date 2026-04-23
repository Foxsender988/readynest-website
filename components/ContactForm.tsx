"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import clsx from "clsx";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const services = [
  "Pre-Listing Prep",
  "Move-In Prep",
  "Move-Out Prep",
  "Junk Removal",
  "Exterior Cleaning",
  "Other",
];

interface ContactFormProps {
  dark?: boolean;
}

export default function ContactForm({ dark = false }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass = clsx(
    "w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gold",
    dark
      ? "bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/15"
      : "bg-white border-soft-gray text-charcoal placeholder-gray-400 focus:border-gold"
  );

  const labelClass = clsx(
    "block text-sm font-medium mb-1.5",
    dark ? "text-white/80" : "text-charcoal"
  );

  const errorClass = "text-red-400 text-xs mt-1";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle size={48} className="text-gold mb-4" />
        <h3 className={clsx("font-serif text-2xl mb-2", dark ? "text-white" : "text-charcoal")}>
          Message Sent!
        </h3>
        <p className={clsx("text-sm", dark ? "text-white/70" : "text-gray-500")}>
          We&apos;ll be in touch within 24 hours to schedule your free walk-through.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-gold text-sm underline hover:no-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name <span className="text-gold">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Jane Smith"
          className={clsx(inputClass, errors.name && "border-red-400")}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address <span className="text-gold">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="jane@example.com"
          className={clsx(inputClass, errors.email && "border-red-400")}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          })}
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="(267) 555-0100"
          className={inputClass}
          {...register("phone")}
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className={labelClass}>
          Service Needed <span className="text-gold">*</span>
        </label>
        <select
          id="service"
          className={clsx(inputClass, errors.service && "border-red-400")}
          {...register("service", { required: "Please select a service" })}
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && <p className={errorClass}>{errors.service.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your home and what you need..."
          className={clsx(inputClass, "resize-none")}
          {...register("message")}
        />
      </div>

      {/* Error state */}
      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 px-4 py-3 rounded-lg">
          <AlertCircle size={16} />
          Something went wrong. Please try again or call us at 267-717-9119.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-gold text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-[#a07d46] disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send My Request
          </>
        )}
      </button>
    </form>
  );
}
