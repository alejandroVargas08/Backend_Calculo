import { useState } from 'react'
import fisicaImg from '../assets/caracteristicas-de-la-fisica.jpg'
import cienciaImg from '../assets/images.jpeg'
import pizarraImg from '../assets/recursos-para-la-asignatura-de-fisica.jpg'
import './css/estilos.css'

const conceptos = [
    { id: 'tiempo', titulo: 'Tiempo', texto: 'El tiempo marca el compás eterno de los eventos.' },
    { id: 'velocidad', titulo: 'Velocidad', texto: 'Nos revela qué tan rápido conquistamos la distancia.' },
    { id: 'aceleracion', titulo: 'Aceleración', texto: 'El latido dinámico que acelera o frena nuestros trayectos.' },
    { id: 'fuerza', titulo: 'Fuerza', texto: 'Un empuje o tirón invisible capaz de alterar el estado de cualquier cuerpo.' },
    { id: 'peso', titulo: 'Peso', texto: 'El abrazo constante de la gravedad terrestre recordándonos nuestra conexión con el suelo que pisamos.' },
    { id: 'ec', titulo: 'Energía Cinética', texto: 'La pura celebración del movimiento: la fuerza viva que almacena un cuerpo en desplazamiento.' }
]

function Inicio({ cambiarPagina }) {
    const [abierto, setAbierto] = useState(null)
    const toggle = (id) => setAbierto(abierto === id ? null : id)

    return (
        <div className="pizarra">
            <section className="pizarra-hero">
                <div className="pizarra-hero-texto">
                    <span className="pizarra-tiza-marca">tema 01</span>
                    <h1>Física</h1>
                    <p>
                        Desde que el ser humano miró por primera vez hacia las estrellas y se
                        preguntó por qué las cosas caen, la física ha sido el gran mapa con el que
                        intentamos descifrar los secretos del universo. Lejos de ser un conjunto
                        de fórmulas aburridas en una pizarra, la física es la narrativa del
                        movimiento: la partitura invisible según la cual baila todo lo que existe,
                        desde la órbita de los planetas hasta el rebote de una pelota en el
                        pavimento.
                    </p>
                </div>
                <img src={fisicaImg} alt="Bocetos de tiza: manzana cayendo, fricción, poleas" className="pizarra-hero-img" />
            </section>

            <section className="pizarra-conceptos">
                <h2>Seis ideas, un mismo lenguaje</h2>
                <div className="pizarra-grid">
                    {conceptos.map((c, i) => (
                        <button
                            key={c.id}
                            type="button"
                            className={`pizarra-tarjeta ${abierto === c.id ? 'esta-abierta' : ''}`}
                            onClick={() => toggle(c.id)}
                            aria-expanded={abierto === c.id}
                        >
                            <span className="pizarra-tarjeta-top">
                                <span className="pizarra-numero">{String(i + 1).padStart(2, '0')}</span>
                                <span className="pizarra-titulo">{c.titulo}</span>
                            </span>
                            <span className="pizarra-tarjeta-cuerpo" hidden={abierto !== c.id}>
                                <span className="pizarra-texto">{c.texto}</span>
                                {cambiarPagina && (
                                    <span
                                        className="pizarra-link"
                                        onClick={(e) => { e.stopPropagation(); cambiarPagina(c.id) }}
                                    >
                                        Calcular {c.titulo} →
                                    </span>
                                )}
                            </span>
                        </button>
                    ))}
                </div>
            </section>

            <section className="pizarra-fila">
                <img src={cienciaImg} alt="Iconos de laboratorio: microscopio, matraces, ADN" className="pizarra-fila-img" />
                <p>
                    La historia de la física también dio un salto revolucionario cuando
                    aprendimos a entender la energía. La energía cinética (E<sub>c</sub>) es la
                    pura celebración del movimiento: la fuerza viva que almacena un cuerpo en
                    desplazamiento, desde una bicicleta cruzando la esquina hasta un tren bala
                    surcando el paisaje.
                </p>
            </section>

            <section className="pizarra-fila pizarra-fila-invertida">
                <img src={pizarraImg} alt="Fórmulas y gráficas escritas con tiza" className="pizarra-fila-img" />
                <div>
                    <p>
                        Esta herramienta digital nace precisamente con ese espíritu: conectar la
                        historia de la curiosidad humana con la inmediatez de la tecnología. Ya no
                        se trata de sufrir con despejes manuales interminables, sino de convertir
                        los números en una experiencia interactiva.
                    </p>
                    <p className="pizarra-cierre">
                        Explora, calcula y deja que la física cobre vida en tu pantalla.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Inicio