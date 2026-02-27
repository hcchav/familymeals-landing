"use client";

import { useState } from "react";
import { DollarSign, Users, Clock, CheckCircle2, Sparkles } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("Thanks! We'll notify you when we launch.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            FamilyMeals
          </div>
          <button 
            onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2.5 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-green-100 rounded-full animate-pulse">
              <span className="text-sm font-semibold text-green-700 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Launching Soon • Join 500+ Families
              </span>
            </div>
            <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              Feed Your Family for{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                $100/Week
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Stop overspending on groceries. Plan budget-friendly meals your family will actually eat — 
              in under 5 minutes.
            </p>

            {/* Email Signup Form */}
            <div id="signup-form" className="max-w-md mx-auto mb-6">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={status === "loading"}
                  className="flex-1 px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:opacity-50 text-lg"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === "loading" ? "Joining..." : "Get Early Access"}
                </button>
              </form>
              {message && (
                <p className={`mt-3 text-sm font-medium ${status === "success" ? "text-green-600" : "text-red-600"}`}>
                  {message}
                </p>
              )}
            </div>

            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              Free to join • No credit card required
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl hover:bg-green-50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Budget-First Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Set your weekly budget and get meals that fit. Every recipe shows cost per serving so you stay on track.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-green-50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Family Profiles</h3>
              <p className="text-gray-600 leading-relaxed">
                Multiple members with preferences. Auto-suggest kid-friendly alternatives for picky eaters.
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-green-50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Save Time</h3>
              <p className="text-gray-600 leading-relaxed">
                Auto-generated grocery lists organized by store section. Plan meals in under 5 minutes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 text-gray-900">
            Everything You Need to Feed Your Family on a Budget
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Powerful features designed for busy parents who want to save money without sacrificing quality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Set weekly budget → Get meals that fit",
              "Cost per serving on every recipe",
              "Real-time budget tracking",
              "Multiple family members with preferences",
              "Picky eater modes & kid alternatives",
              "Leftover integration (dinner → lunch)",
              "Grocery lists by store section",
              "Batch cooking suggestions",
              "Pantry staples optimization",
              "Meal scaling (2 → 6 servings)",
              "School lunch planning",
              "Weekly meal calendar",
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Simple, Affordable Pricing</h2>
          <p className="text-xl text-gray-600 mb-12">
            Less than the cost of one takeout meal
          </p>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-xl p-10 max-w-md mx-auto border-2 border-green-100">
            <div className="mb-8">
              <div className="text-6xl font-bold text-gray-900 mb-3">
                $3.99<span className="text-2xl text-gray-500">/month</span>
              </div>
              <div className="text-lg text-gray-600">or $29/year (save 40%)</div>
            </div>

            <ul className="text-left space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Unlimited meal plans</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 text-lg">50+ budget-friendly recipes</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Auto grocery lists</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 text-lg">Family profiles</span>
              </li>
            </ul>

            <p className="text-sm text-gray-500 font-medium">
              Free tier available • Cancel anytime
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Save Money on Groceries?
          </h2>
          <p className="text-xl mb-10 opacity-95">
            Join the waitlist and be the first to know when we launch
          </p>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === "loading"}
                className="flex-1 px-5 py-4 border-2 border-white/20 bg-white/10 text-white placeholder-white/70 rounded-xl focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50 text-lg backdrop-blur-sm"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-8 py-4 bg-white text-green-600 font-bold rounded-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg"
              >
                {status === "loading" ? "Joining..." : "Get Early Access"}
              </button>
            </form>
            {message && (
              <p className={`mt-3 text-sm font-medium ${status === "success" ? "text-white" : "text-red-200"}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            FamilyMeals
          </div>
          <p className="text-sm mb-2">
            © 2026 FamilyMeals. Built for budget-conscious parents.
          </p>
          <p className="text-xs">
            Launching soon • Follow our journey on Reddit: r/EatCheapAndHealthy
          </p>
        </div>
      </footer>
    </div>
  );
}
