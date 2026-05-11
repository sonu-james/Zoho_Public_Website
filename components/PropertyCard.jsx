
export default function PropertyCard({ title, location, price }) {
  return (
    <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-yellow-600 transition">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200"
        alt="property"
        className="h-72 w-full object-cover"
      />

      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <span className="gold-text font-bold">{price}</span>
        </div>

        <p className="text-gray-400">{location}</p>

        <button className="mt-6 border border-yellow-600 text-yellow-500 px-5 py-2 rounded-full hover:bg-yellow-600 hover:text-black transition">
          View Details
        </button>
      </div>
    </div>
  );
}
