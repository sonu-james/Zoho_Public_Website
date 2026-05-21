"use client";

import { useState } from "react";
import axios from "axios";

import {
  Phone,
  Mail,
  MapPin,
  User,
  MessageSquare,
} from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({

      name: "",
      email: "",
      phone: "",
      message: "",

    });

  const handleSubmit =
    async (e: any) => {
      e.preventDefault();
      setLoading(true);
      try {
        await axios.post(
          "http://localhost:5000/api/leads/create",
          formData
        );

        alert(
          "Inquiry Submitted Successfully"
        );

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }

      catch (error) {
        console.log(error);
        alert(
          "Submission Failed"
        );
      }
      finally {
        setLoading(false);
      }
    };
  return (

    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex
    items-center
    justify-center
    px-6
    py-16
    ">

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

        <div className="
        relative
        bg-gradient-to-br
        from-yellow-500
        to-yellow-600
        p-12
        text-black
        ">

          <h1 className="
          text-5xl
          font-bold
          ">
            Let’s Connect
          </h1>
          <p className="
          mt-5
          text-lg
          opacity-80
          ">
            Contact our UAE property consultants.
          </p>

          <div className="
          mt-14
          space-y-8
          ">
            <div className="
            flex
            gap-5
            ">
              <Phone />
              <div>
                <h4>
                  Phone
                </h4>
                <p>
                  +971 50 1234567
                </p>
              </div>
            </div>


            <div className="
            flex
            gap-5
            ">
              <Mail />
              <div>
                <h4>
                  Email
                </h4>
                <p>
                  info@propertyuae.com
                </p>
              </div>
            </div>

            <div className="
            flex
            gap-5
            ">
              <MapPin />
              <div>
                <h4>
                  Office
                </h4>
                <p>
                  Dubai Marina UAE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}

        <div className="
        bg-white
        p-12
        ">
          <h2 className="
          text-4xl
          font-bold
          text-slate-900
          ">
            Send Message
          </h2>
          <form
            onSubmit={handleSubmit}
            className="
            mt-10
            space-y-6
            "
          >
            {/* Name */}
            <div className="
            relative
            ">
              <User
                className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
                "
              />
              <input
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name:
                      e.target.value
                  })
                }
                placeholder="Full Name"
                className="
                w-full
                border
                rounded-2xl
                pl-14
                p-4
                outline-none
                focus:ring-2
                focus:ring-yellow-500
                text-black
                "
              />
            </div>

            {/* Email */}
            <div className="
            relative
            ">
              <Mail
                className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
                "
              />
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email:
                      e.target.value
                  })
                }
                placeholder="Email"
                className="
                w-full
                border
                rounded-2xl
                pl-14
                p-4
                text-black
                "
              />
            </div>
            {/* Phone */}
            <div className="
            relative
            ">
              <Phone
                className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
                "
              />

              <input  value={formData.phone} onChange={(e) =>setFormData({...formData,phone:e.target.value})}
                placeholder="Phone"
                className="
                w-full
                border
                rounded-2xl
                pl-14
                p-4
                text-black
                "
              />
            </div>
            {/* Message */}
            <div className="
            relative
            ">
              <MessageSquare
                className="
                absolute
                left-4
                top-5
                text-gray-400
                "
              />
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message:
                      e.target.value
                  })
                }
                placeholder="Message"
                className="
                w-full
                border
                rounded-2xl
                pl-14
                pt-5
                p-4
                resize-none
                text-black
                "
              />
            </div>
            <button
              disabled={loading}
              className="
              w-full
              bg-yellow-500
              py-5
              rounded-2xl
              font-semibold
              hover:bg-yellow-400
              "
            >
              {
                loading
                  ?
                  "Submitting..."
                  :
                  "Send Inquiry →"
              }
            </button>
          </form>
        </div>
      </div>
    </main>
  );

}