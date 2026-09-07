import { useState } from 'react'

function Distancia() {
    const [velocidad, setVelocidad] = useState('')
    const [tiempo, setTiempo] = useState('')
    const [resultado, setResultado] = useState(null)
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(false)

    const handleSubmit = async () => {
        setError(null)
        setResultado(null)
        setCargando(true)

        try {
        const respuesta = await fetch('http://localhost:3000/fisica/distancia', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            velocidad: Number(velocidad),
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
        <h3>Calcular Distancia</h3>

        <label>Velocidad:</label>
        <input
            type="number" placeholder='Valor de Velocidad'
            value={velocidad}
            onChange={(e) => setVelocidad(e.target.value)}
        />
        <br />
        <label>Tiempo:</label>
        <input
            type="number" placeholder='Valor de Tiempo'
            value={tiempo}
            onChange={(e) => setTiempo(e.target.value)}
        />
        <br />

        <button onClick={handleSubmit} disabled={cargando}>
            {cargando ? "Esperame..." : 'Calcula tu respuesta'}
        </button>

        {resultado && <p className="resultado">{resultado.resultado}</p>}
        {error && <p className="error">Error: {error}</p>}
        </div>
    )
}

export default Distancia