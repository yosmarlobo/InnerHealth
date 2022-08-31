import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nave">
      <div className="container-nav-all">
        <div className="container-nav">
          <div className="items-nav flex">
            <img
              src="/logo_prueba.svg"
              alt="InnerHealth"
              width="80px
              "
              height="80px
            "
            />

            <h1 className="bienvenida">InnerHealth</h1>
          </div>
          <div className="items-nav">
            <ul className="link-nav">
              <li className="item">
                <a href="#">Home</a>
              </li>
              <li className="item">
                <a href="#especialidades">Especialidades</a>
              </li>
              <li className="item">
                <a href="/SobreNosotros">Sobre Nosotros</a>
              </li>

              <li className="item">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
