"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import clsx from "clsx";

type FormData = {
  name: string;
  email: string;
  phone: string;
  forWhom: string;
  service: string;
  address: string;
  preferredContact: string;
  message: string;
};

const services = [
  "Bathroom Safety",
  "Entry & Exit Safety",
  "Stairs & Hallways",
  "Smart Home Safety",
  "Trash Valet",
  "Bathroom Essentials Package",
  "Entry & Stairs Package",
  "Full Home Safety Package",
  "A La Carte",
  "Multiple Services",
  "Not Sure — Need Assessment",
];

const forWhomOptions = ["Myself", "A parent or family member", "Other"];
const contactOptions = ["Phone call", "Text message", "Email"];

interface ContactFormProps {
  dark?: boolean;
  defaultService?: string;
}

export default function ContactForm({ dark = false, defaultService = "" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: { service: defaultService },
  });

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

  const groupLabelClass = clsx(
    "block text-sm font-medium mb-2",
    dark ? "text-white/80" : "text-charcoal"
  );

  const pillClass = clsx(
    "flex items-center px-4 min-h-[44px] rounded-lg border text-sm font-medium transition-all cursor-pointer select-none",
    "peer-checked:bg-gold peer-checked:text-white peer-checked:border-gold",
    dark
      ? "border-white/20 text-white/70 hover:border-gold/60"
      : "border-soft-gray text-charcoal hover:border-gold"
  );

  const errorClass = "text-red-400 text-xs mt-1.5";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle size={48} className="text-gold mb-4" />
        <h3 className={clsx("font-serif text-2xl mb-2", dark ? "text-white" : "text-charcoal")}>
          Request Received!
        </h3>
        <p className={clsx("text-sm max-w-sm leading-relaxed", dark ? "text-white/70" : "text-gray-500")}>
          Thank you — Slav will be in touch within 24 hours to schedule your free home safety assessment.
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
        <label htmlFor="cf-name" className={labelClass}>
          Full Name <span className="text-gold">*</span>
        </label>
        <input
          id="cf-name"
          type="text"
          placeholder="Jane Smith"
          className={clsx(inputClass, errors.name && "border-red-400")}
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className={errorClass}>{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="cf-email" className={labelClass}>
          Email Address <span className="text-gold">*</span>
        </label>
        <input
          id="cf-email"
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
        <label htmlFor="cf-phone" className={labelClass}>
          Phone Number
        </label>
        <input
          id="cf-phone"
          type="tel"
          placeholder="(267) 555-0100"
          className={inputClass}
          {...register("phone")}
        />
      </div>

      {/* Who is this for */}
      <div>
        <p className={groupLabelClass}>
          Who is this for? <span className="text-gold">*</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {forWhomOptions.map((option) => (
            <label key={option} className="flex items-center cursor-pointer">
              <input
                type="radio"
                value={option}
                className="sr-only peer"
                {...register("forWhom", { required: "Please select who this is for" })}
              />
              <span className={pillClass}>{option}</span>
            </label>
          ))}
        </div>
        {errors.forWhom && <p className={errorClass}>{errors.forWhom.message}</p>}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="cf-service" className={labelClass}>
          Service Needed <span className="text-gold">*</span>
        </label>
        <select
          id="cf-service"
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

      {/* Address */}
      <div>
        <label htmlFor="cf-address" className={labelClass}>
          Address of Home{" "}
          <span className={clsx("font-normal text-xs", dark ? "text-white/40" : "text-gray-400")}>
            (optional)
          </span>
        </label>
        <input
          id="cf-address"
          type="text"
          placeholder="123 Main St, Doylestown, PA"
          className={inputClass}
          {...register("address")}
        />
      </div>

      {/* Preferred Contact */}
      <div>
        <p className={groupLabelClass}>
          Best way to reach you <span className="text-gold">*</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {contactOptions.map((option) => (
            <label key={option} className="flex items-center cursor-pointer">
              <input
                type="radio"
                value={option}
                className="sr-only peer"
                {...register("preferredContact", { required: "Please select a contact method" })}
              />
              <span className={pillClass}>{option}</span>
            </label>
          ))}
        </div>
        {errors.preferredContact && <p className={errorClass}>{errors.preferredContact.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Anything else we should know?
        </label>
        <textarea
          id="cf-message"
          rows={4}
          placeholder="Describe any safety concerns, specific areas of the home, or mobility considerations..."
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
            Book Free Assessment
          </>
        )}
      </button>
    </form>
  );
}
