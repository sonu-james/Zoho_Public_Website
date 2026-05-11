
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SearchBar />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="gold-text uppercase tracking-[5px]">
              Featured Collection
            </p>

            <h2 className="text-5xl font-bold mt-3">
              Luxury Properties
            </h2>
          </div>

          <button className="border border-yellow-600 px-6 py-3 rounded-full">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
