import { useState } from 'react'

function EnergiaCinetica() {
    const [masa, setMasa] = useState('')
    const [velocidad, setVelocidad] = useState('')
    const [resultado, setResultado] = useState(null)
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(false)

    const handleSubmit = async () => {
        setError(null)
        setResultado(null)
        setCargando(true)

        try {
        const respuesta = await fetch('http://localhost:3001/fisica/ec', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            masa: Number(masa),
            velocidad: Number(velocidad)
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
        <h3>Calcular Energía Cinética</h3>

        <label>Masa:</label>
        <input
            type="number" placeholder='Valor de Masa'
            value={masa}
            onChange={(e) => setMasa(e.target.value)}
        />
        <br />
        <label>Velocidad:</label>
        <input
            type="number" placeholder='Valor de Velocidad'
            value={velocidad}
            onChange={(e) => setVelocidad(e.target.value)}
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

export default EnergiaCinetica