import { useState } from 'react'
import "./css/estilos.css"

function Velocidad() {
    const [distancia, setDistancia] = useState('')
    const [tiempo, setTiempo] = useState('')
    const [resultado, setResultado] = useState(null)
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(false)

    const handleSubmit = async () => {
        setError(null)
        setResultado(null)
        setCargando(true)

        try {
            const respuesta = await fetch('http://localhost:3001/fisica/velocidad', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    distancia: Number(distancia),
                    tiempo: Number(tiempo)
                })
            })

            const datos = await respuesta.json()
            await new Promise(resolve => setTimeout(resolve, 500))
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
        <div className="formulario-velocidad">
            <h3>Calcular Velocidad</h3>

            <label>Distancia</label>
            <input
                type="number"
                placeholder="Valor de distancia"
                value={distancia}
                onChange={(e) => setDistancia(e.target.value)}
            />

            <label>Tiempo</label>
            <input
                type="number"
                placeholder="Valor de tiempo"
                value={tiempo}
                onChange={(e) => setTiempo(e.target.value)}
            />

            <button onClick={handleSubmit} disabled={cargando}>
                {cargando ? 'Esperame...' : 'Calcula tu respuesta'}
            </button>

            {resultado && <p className="resultado">{resultado.resultado}</p>}
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export default Velocidad