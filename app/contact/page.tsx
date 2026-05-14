"use client";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10">
        {/* LEFT SECTION */}
        <div className="bg-slate-900 border border-slate-800 rounded-[32px] p-10 flex flex-col justify-between">
          <div>
            <p className="uppercase tracking-[6px] text-yellow-500 text-sm">
              Contact Us
            </p>

            <h1 className="text-5xl font-bold leading-tight mt-6">
              Let’s Build Your
              <span className="text-yellow-500">
                {" "}
                Dream Property
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-8 mt-8">
              Connect with our UAE luxury real estate
              consultants for villas, penthouses,
              apartments, and premium investment
              opportunities in Dubai.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            {/* PHONE */}
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center">
                <Phone className="text-yellow-500" />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Phone Number
                </h3>

                <p className="text-gray-400 mt-2">
                  +971 50 123 4567
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center">
                <Mail className="text-yellow-500" />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Email Address
                </h3>

                <p className="text-gray-400 mt-2">
                  sales@dubaiestates.com
                </p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center">
                <MapPin className="text-yellow-500" />
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  Office Location
                </h3>

                <p className="text-gray-400 mt-2">
                  Dubai Marina, UAE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-yellow-500/10 blur-3xl rounded-full" />

          <div className="relative bg-slate-900 border border-slate-800 rounded-[32px] p-10">
            <p className="uppercase tracking-[6px] text-yellow-500 text-sm">
              Send Inquiry
            </p>

            <h2 className="text-4xl font-bold mt-5">
              Book A Consultation
            </h2>

            <form className="mt-10 space-y-6">
              {/* NAME */}
              <div>
                <label className="text-gray-300 text-sm">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 transition"
                />
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-gray-300 text-sm">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@gmail.com"
                    className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 transition"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="+971 50 000 0000"
                    className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 transition"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-gray-300 text-sm">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your dream property..."
                  className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500 transition resize-none"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 text-black font-semibold py-4 rounded-2xl text-lg"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}