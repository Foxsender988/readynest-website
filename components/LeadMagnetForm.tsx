"use client";

import { useState } from "react";
import { ClipboardList, CheckCircle, AlertCircle } from "lucide-react";

export default function LeadMagnetForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Checklist Request",
          email,
          service: "Safety Checklist Download",
          message: "User requested the free home safety checklist.",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-6 text-center">
        <CheckCircle size={40} className="text-gold mb-3" />
        <p className="font-semibold text-charcoal text-lg mb-1">Check your inbox!</p>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
          We&apos;ll send the checklist within a few hours.
        </p>
        {/* TODO: Set up automated checklist delivery — currently manual fulfillment via info@readynestpa.com */}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
      <label htmlFor="lm-email" className="block text-sm font-medium text-charcoal mb-0.5">
        Your email address
      </label>
      <input
        id="lm-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        required
        className="w-full px-4 py-3 rounded-lg border border-soft-gray text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold"
      />

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 text-xs bg-red-50 px-3 py-2 rounded-lg border border-red-200">
          <AlertCircle size={14} />
          Something went wrong. Call Slav at{" "}
          <a href="tel:+12677179119" className="underline font-medium">267-717-9119</a>.
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
            <ClipboardList size={16} />
            Send Me the Checklist
          </>
        )}
      </button>

      <p className="text-gray-400 text-xs text-center">No spam, ever. Just the checklist.</p>
    </form>
  );
}
