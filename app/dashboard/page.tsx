"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        router.push("/login");
        return;
      }

      setUser(session.user);
      setLoading(false);
    };

    checkUser();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-6 py-16 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-blue-900">Your Dashboard</h1>
        <button
          onClick={handleLogout}
          className="border border-gray-200 text-gray-600 px-4 py-2
                     rounded-lg hover:border-red-300 hover:text-red-500 transition"
        >
          Log Out
        </button>
      </div>

      <div className="border border-gray-200 rounded-2xl p-6 mb-6">
        <p className="text-sm text-gray-400 mb-1">Logged in as</p>
        <p className="font-semibold text-gray-900 text-lg">{user?.email}</p>
        <p className="text-xs text-gray-400 mt-1">User ID: {user?.id}</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Ideas Submitted", value: "3" },
          { label: "Team Members", value: "1" },
          { label: "Days Active", value: "2" },
        ].map((s) => (
          <div key={s.label} className="border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-blue-900">{s.value}</p>
            <p className="text-sm text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4">
        <p className="text-blue-900 font-medium">🔒 This page is protected</p>
        <p className="text-blue-700 text-sm mt-1">
          Only logged-in users can see this. If you log out and try to visit
          /dashboard, you'll be redirected to /login automatically.
        </p>
      </div>
    </div>
  );
}