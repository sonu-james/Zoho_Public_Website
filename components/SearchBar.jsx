
export default function SearchBar() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 -mt-20 relative z-20 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-4 gap-4">
        <input
          placeholder="Location"
          className="bg-slate-800 p-4 rounded-xl"
        />

        <select className="bg-slate-800 p-4 rounded-xl">
          <option>Property Type</option>
        </select>

        <select className="bg-slate-800 p-4 rounded-xl">
          <option>Budget</option>
        </select>

        <button className="bg-yellow-600 rounded-xl font-bold text-black">
          Search
        </button>
      </div>
    </div>
  );
}
