import React from "react";
import Logo from "../../assets/img/logo.png";
import "./Menu.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo RootsFlix"></img>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;
