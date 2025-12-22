export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur border-b border-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-lg">GQ</span>

        <ul className="flex gap-6 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer">Inicio</li>
          <li className="hover:text-white cursor-pointer">Proyectos</li>
          <li className="hover:text-white cursor-pointer">Contacto</li>
        </ul>
      </div>
    </nav>
  );
}
