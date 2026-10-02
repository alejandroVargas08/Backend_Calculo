import { useState } from 'react'
import fisicaImg from '../assets/caracteristicas-de-la-fisica.jpg'
import cienciaImg from '../assets/images.jpeg'
import pizarraImg from '../assets/recursos-para-la-asignatura-de-fisica.jpg'

const conceptos = [
  { id: 'tiempo', titulo: 'Tiempo', texto: 'El tiempo marca el compás eterno de los eventos.' },
  { id: 'velocidad', titulo: 'Velocidad', texto: 'Nos revela qué tan rápido conquistamos la distancia.' },
  { id: 'aceleracion', titulo: 'Aceleración', texto: 'El latido dinámico que acelera o frena nuestros trayectos.' },
  { id: 'fuerza', titulo: 'Fuerza', texto: 'Un empuje o tirón invisible capaz de alterar el estado de cualquier cuerpo.' },
  { id: 'peso', titulo: 'Peso', texto: 'El abrazo constante de la gravedad terrestre.' },
  { id: 'ec', titulo: 'Energía Cinética', texto: 'La fuerza viva que almacena un cuerpo en desplazamiento.' },
]

function Inicio({ cambiarPagina }) {
  const [abierto, setAbierto] = useState(null)

  const toggle = (id) => setAbierto(abierto === id ? null : id)

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Física</h1>

      <img src={fisicaImg} alt="Física" className="w-full max-h-64 object-cover rounded mb-4" />

      <p className="mb-6">
        Desde que el ser humano miró por primera vez hacia las estrellas y se preguntó por qué
        las cosas caen, la física ha sido el gran mapa con el que intentamos descifrar los
        secretos del universo. La física es la narrativa del movimiento, desde la órbita de los
        planetas hasta el rebote de una pelota en el pavimento.
      </p>

      <h2 className="text-2xl font-bold mb-3">Seis ideas, un mismo lenguaje</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {conceptos.map((c) => (
          <div
            key={c.id}
            onClick={() => toggle(c.id)}
            className="bg-gray-800 p-4 rounded cursor-pointer"
          >
            <h3 className="font-bold">{c.titulo}</h3>

            {abierto === c.id && (
              <div className="mt-2">
                <p className="text-sm mb-2">{c.texto}</p>
                {cambiarPagina && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      cambiarPagina(c.id)
                    }}
                    className="text-blue-400 underline text-sm"
                  >
                    Calcular {c.titulo}
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <img src={cienciaImg} alt="Ciencia" className="w-full md:w-64 rounded" />
        <p>
          La energía cinética (E<sub>c</sub>) es la fuerza viva que almacena un cuerpo en
          desplazamiento, desde una bicicleta cruzando la esquina hasta un tren bala.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <p>
          Esta herramienta digital conecta la historia de la curiosidad humana con la inmediatez
          de la tecnología. Explora, calcula y deja que la física cobre vida en tu pantalla.
        </p>
        <img src={pizarraImg} alt="Fórmulas" className="w-full md:w-64 rounded" />
      </div>
    </div>
  )
}

export default Inicio