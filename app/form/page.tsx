"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<FormData>;

export default function FormPage() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
        <div className="text-center bg-gray-800 rounded-2xl p-12 max-w-md">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold mb-2 text-indigo-400">Thank You!</h2>
          <p className="text-gray-400">
            We've received your message, {form.name}. We'll get back to
            you at {form.email} within 24 hours.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
            className="mt-6 bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-lg transition"
          >
            Send Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-16">
      <div className="max-w-lg mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-indigo-400">Get In Touch</h1>
        <p className="text-gray-400 mb-8">Fill out the form below and we'll respond within 24 hours.</p>

        <div className="space-y-5">
          {/* NAME */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Shriti Gupta"
              className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white
                         placeholder-gray-500 focus:outline-none transition
                         ${errors.name ? "border-red-500" : "border-gray-700 focus:border-indigo-500"}`}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium mb-1">Email Address *</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="shriti@example.com"
              className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white
                         placeholder-gray-500 focus:outline-none transition
                         ${errors.email ? "border-red-500" : "border-gray-700 focus:border-indigo-500"}`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* PHONE */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number *</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="9876543210"
              maxLength={10}
              className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white
                         placeholder-gray-500 focus:outline-none transition
                         ${errors.phone ? "border-red-500" : "border-gray-700 focus:border-indigo-500"}`}
            />
            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block text-sm font-medium mb-1">Message *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your startup idea..."
              rows={4}
              className={`w-full bg-gray-800 border rounded-lg px-4 py-3 text-white
                         placeholder-gray-500 focus:outline-none transition resize-none
                         ${errors.message ? "border-red-500" : "border-gray-700 focus:border-indigo-500"}`}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-indigo-500 hover:bg-indigo-600 py-3 rounded-lg
                       font-semibold transition text-lg"
          >
            Send Message →
          </button>
        </div>
      </div>
    </div>
  );
}