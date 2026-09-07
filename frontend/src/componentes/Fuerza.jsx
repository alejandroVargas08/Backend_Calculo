import { useState } from 'react'

function Fuerza() {
    const [masa, setMasa] = useState('')
    const [aceleracion, setAceleracion] = useState('')
    const [resultado, setResultado] = useState(null)
    const [error, setError] = useState(null)
    const [cargando, setCargando] = useState(false)

    const handleSubmit = async () => {
        setError(null)
        setResultado(null)
        setCargando(true)

        try {
        const respuesta = await fetch('http://localhost:3000/fisica/fuerza', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            masa: Number(masa),
            aceleracion: Number(aceleracion)
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
        <h3>Calcular Fuerza</h3>

        <label>Masa:</label>
        <input
            type="number" placeholder='Valor de Masa'
            value={masa}
            onChange={(e) => setMasa(e.target.value)}
        />
        <br />
        <label>Aceleración:</label>
        <input
            type="number" placeholder='Valor de Aceleración'
            value={aceleracion}
            onChange={(e) => setAceleracion(e.target.value)}
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

export default Fuerza