import { useState } from 'react'

function MenuHamburguesa({ cambiarPagina, paginaActiva }) {
  const [abierto, setAbierto] = useState(false)

  const paginas = [
    { id: 'inicio', nombre: 'Inicio' },
    { id: 'velocidad', nombre: 'Velocidad' },
    { id: 'distancia', nombre: 'Distancia' },
    { id: 'tiempo', nombre: 'Tiempo' },
    { id: 'peso', nombre: 'Peso' },
    { id: 'aceleracion', nombre: 'Aceleracion' },
    { id: 'fuerza', nombre: 'Fuerza' },
    { id: 'Ec', nombre: 'EC' },
  ]

  const ir = (id) => {
    cambiarPagina(id)
    setAbierto(false)
  }

  return (
    <>
      {abierto && (
        <div
          onClick={() => setAbierto(false)}
          className="fixed inset-0 z-30 bg-black/50"
        />
      )}

      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Operaciones</h1>
        <button
          onClick={() => setAbierto(!abierto)}
          className="relative z-50 text-2xl"
        >
          ☰
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 z-40 h-full w-64 bg-gray-800 p-4 pt-16 transition-transform duration-300 ${
          abierto ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul>
          {paginas.map((pagina) => (
            <li
              key={pagina.id}
              onClick={() => ir(pagina.id)}
              className={
                paginaActiva === pagina.id
                  ? 'p-2 mb-1 cursor-pointer bg-gray-600 rounded'
                  : 'p-2 mb-1 cursor-pointer hover:bg-gray-700 rounded'
              }
            >
              {pagina.nombre}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default MenuHamburguesa

