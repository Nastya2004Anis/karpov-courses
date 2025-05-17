import React, { FC } from "react";
import { NavLink } from 'react-router-dom';
import "./Navigation.css";
import { categoryNames } from "../../utils";
import { categoryIds } from "../../utils";
import logo from "../../images/logo.png";

interface Props {
  className?: string;
  placement: "header" | "footer";
}

export const Navigation: FC<Props> = ({
  className = "",
  placement = "header",
}) => (
  <nav className={`grid navigation navigation--${placement}`}>
    <NavLink to="/" className="navigation__logo">
      <img className="navigation__logo-image" src={logo} alt="Логотип" />
    </NavLink>
    
    <ul className="navigation__list">
      {Object.keys(categoryIds).map((item) => (
        
        <li className="navigation__item" key={item}>

         <NavLink
  to={`/${item}`}
  className={({ isActive }) =>
    `navigation__link ${isActive ? "navigation__link--active" : ""}`
  }
>
  {categoryNames[item]}
</NavLink>

        </li>
      ))}
    </ul>
  </nav>
);
