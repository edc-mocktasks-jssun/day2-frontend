"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

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
        <h1 className="text-3xl font-bold text-blue-900 mb-2">Welcome Back</h1>
        <p className="text-gray-500 mb-6">Log in to your LaunchPad account.</p>

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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-4 py-3
                       focus:outline-none focus:border-blue-900"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3
                       rounded-lg font-semibold transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </div>

        <p className="text-center text-gray-500 mt-6 text-sm">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-900 font-semibold">Sign up</Link>
        </p>
      </div>
    </div>
  );
}