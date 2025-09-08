export default function Navbar() {
  return (
    <nav className="bg-charcoal text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        
        {/* Left - Name */}
        <h1 className="text-xl font-bold text-mint">Luis Carrillo</h1>
        
        {/* Right - Nav Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-mint transition">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-mint transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-mint transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
