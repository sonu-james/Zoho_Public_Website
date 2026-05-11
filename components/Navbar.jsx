
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-yellow-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-bold gold-text">
          Dubai Estates
        </h1>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <a href="/">Home</a>
          <a href="/properties">Properties</a>
          <a href="/agents">Agents</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
