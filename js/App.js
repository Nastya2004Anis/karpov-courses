import { categoryIds } from "./utils.js";
import { Navigation } from "./Navigation.js";
import { Articles } from "./Articles.js";

export const App = () => {
	const [category, setCategory] = React.useState('index');
	const [articles, setArticles] = React.useState({ items: [], categories: [], sources: [] });
  
	const onNavClick = (e) => {
	  e.preventDefault();
	  setCategory(e.currentTarget.dataset.href);
	};
  
	React.useEffect(() => {
	  const categoryId = categoryIds[category];
	  if (categoryId !== undefined) {
		fetch(`https://frontend.karpovcourses.net/api/v2/ru/news/${categoryId}`)
		  .then((res) => res.json())
		  .then((data) => setArticles(data))
		  .catch((err) => console.error('Ошибка при получении новостей:', err));
	  }
	}, [category]);
  
	return (
	  <React.Fragment>
		<header className="header">
		  <div className="container">
			<Navigation placement="header" onNavClick={onNavClick} currentCategory={category} className="header__navigation" />
		  </div>
		</header>
  
		<main>
		  <Articles articles ={articles} />
		</main>
  
		<footer className="footer">
		  <div className="container">
			<Navigation placement="footer" onNavClick={onNavClick} currentCategory={category} className="footer__navigation" />
			<div className="footer__bottom">
			  <p className="footer__text">
				Сделано на Frontend курсе в{' '}
				<a className="footer__link" href="https://karpov.courses/frontend" target="_blank">
				  Karpov.Courses
				</a>
			  </p>
			  <p className="footer__text footer__text--gray">© 2021</p>
			</div>
		  </div>
		</footer>
	  </React.Fragment>
	);
  };