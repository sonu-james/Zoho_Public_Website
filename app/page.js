import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">

      <Navbar />

      <Hero />

      <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-20">
        <SearchBar />
      </div>



      {/* Featured Properties */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="
        flex
        flex-col
        md:flex-row
        justify-between
        md:items-center
        gap-6
        mb-16
        ">

          <div>

            <p className="
            text-yellow-500
            uppercase
            tracking-[6px]
            text-sm
            ">
              Featured Collection
            </p>


            <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            mt-4
            ">
              Luxury Properties
            </h2>


            <p className="
            text-slate-400
            mt-5
            max-w-xl
            ">
              Discover premium villas,
              apartments and investment
              opportunities across UAE.
            </p>

          </div>



          <button className="
          border
          border-yellow-500
          px-8
          py-4
          rounded-full
          hover:bg-yellow-500
          hover:text-black
          transition
          ">
            View All
          </button>

        </div>



        {/* Property Cards */}

        <div className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        ">

          <PropertyCard
            title="Palm Jumeirah Villa"
            location="Dubai, UAE"
            price="AED 14.5M"
          />


          <PropertyCard
            title="Burj Khalifa Penthouse"
            location="Downtown Dubai"
            price="AED 22M"
          />


          <PropertyCard
            title="Dubai Marina Apartment"
            location="Dubai Marina"
            price="AED 6.8M"
          />

        </div>

      </section>

    </main>
  );
}