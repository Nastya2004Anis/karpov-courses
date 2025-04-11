import { categoryNames } from "./utils.js";
import { categoryIds } from "./utils.js";

export const Navigation = ({ onNavClick, currentCategory, className = '' }) => (
	<nav className={`grid navigation ${className}`}>
	  <a className="navigation__logo" data-href="index" href="#">
		<img className="navigation__logo-image" src="./images/logo.png" alt="Логотип" />
	  </a>
	  <ul className="navigation__list">
		{Object.keys(categoryIds).map((item) => (
		  <li className="navigation__item" key={item}>
			<a
			  onClick={onNavClick}
			  className={`navigation__link ${currentCategory === item ? 'navigation__link--active' : ''}`}
			  data-href={item}
			  href="#"
			>
			  {categoryNames[item]}
			</a>
		  </li>
		))}
	  </ul>
	</nav>
  );