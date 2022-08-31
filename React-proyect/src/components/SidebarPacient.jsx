import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import IndexPacient from "../pages/pagePacient/IndexPacient";
import { dinamicTitle } from "../utils/Title";
import Notfound from "./Notfound";
import CentroSalud from "../pages/pagePacient/CentroSalud";
import Perfil from "../pages/pagePacient/perfil";
import Cita from "../pages/pagePacient/Cita";

const SidebarPacient = () => {
  const condicional = ({ isActive }) =>
    isActive ? "sidebar-linked " : "default";

  dinamicTitle("InnerHealth | MainPaciente");
  return (
    <div>
      <div id="sidebar" className="active sidebar">
        <div className="sidebar-wrapper active">
          <div className="sidebar-header">
            <div className="d-flex justify-content-between">
              <div className="logo">
                <h1>InnerHealth</h1>
              </div>
              <div className="toggler">
                <a href="#" className="sidebar-hide d-xl-none d-block">
                  <i className="bi bi-x bi-middle"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="sidebar-menu">
            <ul className="menu">
              <li className="sidebar-title">Menu-Health</li>

              <li className="sidebar-item active">
                <NavLink to="/InnerHealth" className="default">
                  <i className="bi bi-house-heart icono"></i>
                  <span className="letras-title">Inicio</span>
                  <span className="letras">InnerHome</span>
                </NavLink>
              </li>
              <li className="sidebar-item active">
                <NavLink to="/InnerHealth/MiPerfil" className={condicional}>
                  <i className="bi bi-person-circle icono"></i>
                  <span className="letras-title">Mi Perfil</span>
                  <span className="letras">Editar Perfil.</span>
                </NavLink>
              </li>
              <li className="sidebar-item active">
                <NavLink to="/InnerHealth/AgendarCita" className={condicional}>
                  <i className="bi bi-journal-check icono"></i>
                  <span className="letras-title">Agendar Cita</span>
                  <span className="letras">Solicita Atencion.</span>
                </NavLink>
              </li>

              <li className="sidebar-item active">
                <NavLink
                  to="/InnerHealth/CentrosInnerHealth"
                  className={condicional}
                >
                  <i className="bi bi-geo icono"></i>
                  <span className="letras-title">Centros InnerHealth</span>
                  <span className="letras">Ubicar Centros de Salud.</span>
                </NavLink>
              </li>

              <li className="sidebar-item active">
                <NavLink
                  to="/InnerHealth/Configuracion"
                  className={condicional}
                >
                  <i className="bi bi-gear-wide-connected icono"></i>
                  <span className="letras-title">Configuracion</span>
                  <span className="letras">configura Tu Comodidad.</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <button type="button" class="btn btn-outline-danger logout">
              <i class="bi bi-door-open"></i>
              Cerrar Sesion
            </button>
          </Link>
          <button className="sidebar-toggler btn x">
            <i data-feather="x"></i>
          </button>
        </div>
      </div>
      <Routes>
        <Route index element={<IndexPacient />} />
        <Route path="/CentrosInnerHealth" element={<CentroSalud />} />
        <Route path="/AgendarCita" element={<Cita />} />
        <Route path="/MiPerfil" element={<Perfil />} />
        <Route path="/configuracion" element={<h1>configuracion</h1>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default SidebarPacient;
