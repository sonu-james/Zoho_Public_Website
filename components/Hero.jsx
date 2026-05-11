
export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600')",
      }}
    >
      <div className="bg-black/60 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-[10px] gold-text mb-4">
            UAE Luxury Living
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight max-w-4xl">
            Discover Premium Properties In Dubai
          </h1>

          <p className="text-gray-300 mt-6 max-w-2xl text-lg">
            Villas, penthouses, beachfront homes, and luxury apartments.
          </p>

          <button className="mt-10 bg-yellow-600 hover:bg-yellow-500 px-8 py-4 rounded-full text-black font-bold">
            Explore Properties
          </button>
        </div>
      </div>
    </section>
  );
}
