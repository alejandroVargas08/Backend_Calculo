import { useState } from 'react'

function Tiempo() {
  const [distancia, setDistancia] = useState('')
  const [velocidad, setVelocidad] = useState('')
  const [resultado, setResultado] = useState(null)
  const [error, setError] = useState(null)
  const [cargando, setCargando] = useState(false)

  const handleSubmit = async () => {
    setError(null)
    setResultado(null)
    setCargando(true)

    try {
      const respuesta = await fetch('http://localhost:3001/fisica/tiempo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          distancia: Number(distancia),
          velocidad: Number(velocidad),
        }),
      })

      const datos = await respuesta.json()
      setCargando(false)

      if (!respuesta.ok) {
        setError(datos.mensaje)
      } else {
        setResultado(datos)
      }
    } catch (err) {
      setCargando(false)
      setError('No se pudo conectar con el servidor')
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Calcular Tiempo</h2>

      <label>Distancia:</label>
      <input
        type="number"
        placeholder="Valor de distancia"
        value={distancia}
        onChange={(e) => setDistancia(e.target.value)}
        className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600"
      />

      <label>Velocidad:</label>
      <input
        type="number"
        placeholder="Valor de velocidad"
        value={velocidad}
        onChange={(e) => setVelocidad(e.target.value)}
        className="w-full p-2 mb-3 rounded bg-gray-700 border border-gray-600"
      />

      <button
        onClick={handleSubmit}
        disabled={cargando}
        className="w-full p-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {cargando ? 'Calculando...' : 'Calcular'}
      </button>

      {resultado && (
        <p className="mt-4 p-3 rounded bg-gray-700 text-green-400">{resultado.resultado}</p>
      )}
      {error && <p className="mt-4 p-3 rounded bg-gray-700 text-red-400">Error: {error}</p>}
    </div>
  )
}

export default Tiempo