import { useState } from "react";
import "./css/Menu.css";

function MenuHamburguesa({ cambiarPagina, paginaActiva }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  const seleccionarPagina = (pagina) => {
    cambiarPagina(pagina);
    setMenuAbierto(false);
  };

  const paginas = [
    { id: "inicio", nombre: "Inicio" },
    { id: "velocidad", nombre: "Velocidad" },
    { id: "distancia", nombre: "Distancia" },
    { id: "tiempo", nombre: "Tiempo" },
    { id: "peso", nombre: "Peso" },
    { id: "aceleracion", nombre: "Aceleracion" },
    { id: "fuerza", nombre: "Fuerza" },
    { id: "Ec", nombre: "EC" },
  ];

  return (
    <>
      <div
        className={`menu-overlay ${menuAbierto ? "open" : ""}`}
        onClick={toggleMenu}
      />

      <nav className="navbar">
        <div className="brand">Operaciones</div>

        <button
          className={`hamburger-btn ${menuAbierto ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`menu-panel ${menuAbierto ? "open" : ""}`}>
        {paginas.map((pagina) => (
          <div
            key={pagina.id}
            className={`menu-item ${paginaActiva === pagina.id ? "active" : ""}`}
            onClick={() => seleccionarPagina(pagina.id)}
          >
            {pagina.nombre}
          </div>
        ))}
      </div>
    </>
  );
}

export default MenuHamburguesa;