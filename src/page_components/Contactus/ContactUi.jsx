import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactUi() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setMessage("Success! Message sent successfully");
      reset();
    } catch (error) {
      setIsSuccess(false);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="text-white border-none rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">Let's Talk</h2>
          <p className="text-zinc-400 mb-6">Most experts in any area are self-taught</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <input
                  placeholder="Your Name"
                  className={`w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md text-white ${
                    errors.name ? "border-red-500" : "focus:border-zinc-700"
                  }`}
                  {...register("name", {
                    required: "Full name is required",
                  })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md text-white ${
                    errors.email ? "border-red-500" : "focus:border-zinc-700"
                  }`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className={`w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md text-white ${
                    errors.phone ? "border-red-500" : "focus:border-zinc-700"
                  }`}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9+\-\s()]+$/,
                      message: "Please enter a valid phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  className={`w-full p-3 bg-zinc-900 border border-zinc-800 rounded-md text-white min-h-[150px] ${
                    errors.message ? "border-red-500" : "focus:border-zinc-700"
                  }`}
                  {...register("message", {
                    required: "Message is required",
                  })}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out"
                disabled={isSubmitting}
                onClick={handleSubmit(onSubmit)}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-800 border-t-white" />
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
              {message && (
                <p
                  className={`text-center text-sm ${
                    isSuccess ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
            <div className="space-y-6">
              <div className="bg-zinc-900 p-4 rounded-lg flex items-start gap-4">
                <MapPin className="text-emerald-600 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Office Address</h3>
                  <p className="text-zinc-400">25 North Street, Dubai</p>
                </div>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg flex items-start gap-4">
                <Mail className="text-emerald-600 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Official Mail</h3>
                  <p className="text-zinc-400">info@elito.com</p>
                </div>
              </div>
              <div className="bg-zinc-900 p-4 rounded-lg flex items-start gap-4">
                <Phone className="text-emerald-600 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Official Phone</h3>
                  <p className="text-zinc-400">+1 256 987 239</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

