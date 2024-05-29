import "./Logo.css";
import logo from '../../img/logotup1.png';
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
    </div>
  )
}