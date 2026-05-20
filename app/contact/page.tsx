"use client";

import {
  Phone,
  Mail,
  MapPin,
  User,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-6 py-16">

      <div className="
      w-full
      max-w-7xl
      bg-white/10
      backdrop-blur-xl
      border
      border-white/20
      rounded-[40px]
      overflow-hidden
      shadow-2xl
      grid
      lg:grid-cols-2
      ">

        {/* LEFT SECTION */}

        <div className="relative bg-gradient-to-br from-yellow-500 to-yellow-600 p-12 text-black">

          <div className="absolute top-0 right-0 h-60 w-60 bg-white/20 rounded-full blur-3xl" />

          <h1 className="text-5xl font-bold leading-tight relative z-10">
            Let’s Connect
          </h1>

          <p className="mt-5 text-lg opacity-80 relative z-10">
            Contact our UAE property consultants and get expert advice.
          </p>


          <div className="mt-14 space-y-8 relative z-10">

            <div className="flex items-center gap-5">

              <div className="bg-black/10 p-4 rounded-2xl">
                <Phone size={22} />
              </div>

              <div>
                <h4 className="font-semibold">
                  Phone
                </h4>

                <p>
                  +971 50 123 4567
                </p>

              </div>

            </div>



            <div className="flex items-center gap-5">

              <div className="bg-black/10 p-4 rounded-2xl">
                <Mail size={22} />
              </div>

              <div>
                <h4 className="font-semibold">
                  Email
                </h4>

                <p>
                  info@propertyuae.com
                </p>

              </div>

            </div>



            <div className="flex items-center gap-5">

              <div className="bg-black/10 p-4 rounded-2xl">
                <MapPin size={22} />
              </div>

              <div>

                <h4 className="font-semibold">
                  Office
                </h4>

                <p>
                  Dubai Marina, UAE
                </p>

              </div>

            </div>

          </div>


          <div className="mt-20 grid grid-cols-3 gap-4">

            <div>
              <h2 className="text-3xl font-bold">
                500+
              </h2>

              <p>
                Properties
              </p>
            </div>


            <div>
              <h2 className="text-3xl font-bold">
                10K+
              </h2>

              <p>
                Clients
              </p>
            </div>


            <div>
              <h2 className="text-3xl font-bold">
                15+
              </h2>

              <p>
                Cities
              </p>
            </div>

          </div>

        </div>



        {/* RIGHT SECTION */}

        <div className="bg-white p-12">

          <h2 className="text-4xl font-bold text-slate-900">

            Send Message

          </h2>


          <p className="mt-3 text-gray-500">

            Fill out the form and our team will contact you.

          </p>



          <form className="mt-10 space-y-6">


            <div className="relative">

              <User
                className="
                absolute
                top-1/2
                left-4
                -translate-y-1/2
                text-gray-400
                "
              />

              <input
                placeholder="Full Name"
                className="
                w-full
                border
                rounded-2xl
                pl-14
                p-4
                focus:ring-2
                focus:ring-yellow-500
                outline-none
                "
              />

            </div>



            <div className="relative">

              <Mail
                className="
                absolute
                top-1/2
                left-4
                -translate-y-1/2
                text-gray-400
                "
              />

              <input
                placeholder="Email"
                className="
                w-full
                border
                rounded-2xl
                pl-14
                p-4
                focus:ring-2
                focus:ring-yellow-500
                outline-none
                "
              />

            </div>



            <div className="relative">

              <Phone
                className="
                absolute
                top-1/2
                left-4
                -translate-y-1/2
                text-gray-400
                "
              />

              <input
                placeholder="Phone"
                className="
                w-full
                border
                rounded-2xl
                pl-14
                p-4
                focus:ring-2
                focus:ring-yellow-500
                outline-none
                "
              />

            </div>



            <div className="relative">

              <MessageSquare
                className="
                absolute
                top-6
                left-4
                text-gray-400
                "
              />

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="
                w-full
                border
                rounded-2xl
                pl-14
                pt-5
                p-4
                focus:ring-2
                focus:ring-yellow-500
                outline-none
                "
              />

            </div>



            <button
              className="
              w-full
              bg-yellow-500
              hover:bg-yellow-400
              duration-300
              py-5
              rounded-2xl
              font-semibold
              text-lg
              shadow-lg
              hover:scale-[1.02]
              "
            >

              Send Inquiry →

            </button>

          </form>

        </div>

      </div>

    </main>
  );
}