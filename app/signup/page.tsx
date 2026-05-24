"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="border border-gray-200 rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Create Account</h1>
        <p className="text-gray-500 mb-6">Join LaunchPad today — it's free.</p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3
                       focus:outline-none focus:border-blue-900"
          />
          <input
            type="password"
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3
                       focus:outline-none focus:border-blue-900"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3
                       rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </div>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-900 font-semibold">Log in</Link>
        </p>
      </div>
    </div>
  );
}