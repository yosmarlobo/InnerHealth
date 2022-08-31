import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Events from "./Events";
import { dinamicTitle } from "../utils/Title";
import Notfound from "./Notfound";

const SidebarDr = () => {
  dinamicTitle("InnerHealth | MainDr");
  const condicional = ({ isActive }) =>
    isActive ? "sidebar-linked-Dr " : "defaultDr";
  return (
    <div>
      <h1>Holaa Dr</h1>
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
              <li className="sidebar-title">Menu-Doctor</li>

              <li className="sidebar-item active">
                <NavLink to="/InnerHealthDr" className="defaultDr">
                  <i className="bi bi-house-heart icono"></i>
                  <span className="letras-title">InnerHome</span>
                </NavLink>
              </li>
              <li className="sidebar-item active">
                <NavLink to="/InnerHealthDr/MiPerfil" className={condicional}>
                  <i className="bi bi-person-circle icono"></i>
                  <span className="letras-title">Mi Perfil</span>
                  <span className="letras">Editar Perfil.</span>
                </NavLink>
              </li>
              <li className="sidebar-item active">
                <NavLink to="/InnerHealthDr/Calendar" className={condicional}>
                  <i className="bi bi-calendar2-heart-fill icono"></i>
                  <span className="letras-title">Calendario</span>
                  <span className="letras">Chequea tus citas.</span>
                </NavLink>
              </li>

              <li className="sidebar-item active">
                <NavLink
                  to="/InnerHealthDr/InnerHealthEvents"
                  className={condicional}
                >
                  <i class="bi bi-chat-heart-fill icono"></i>
                  <span className="letras-title">Eventos</span>
                  <span className="letras">Empoderate!!</span>
                </NavLink>
              </li>

              <li className="sidebar-item active">
                <NavLink
                  to="/InnerHealthDr/Configuracion"
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
        <Route index element={<h1>Bienvenida Dr.</h1>} />
        <Route path="/Calendar" element={<h1>Mi calendario</h1>} />
        <Route path="/MiPerfil" element={<h1>hola mi perfil</h1>} />
        <Route path="/configuracion" element={<h1>configuracion</h1>} />
        <Route path="/InnerHealthEvents" element={<Events />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default SidebarDr;
