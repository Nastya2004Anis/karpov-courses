const categoryIds = {
	index: 0,
	sport: 2,
	technologies: 1,
	politics: 6,
	fashion: 3
  };
  
  const categoryNames = {
	index: 'Главная',
	fashion: 'Мода',
	technologies: 'Технологии',
	sport: 'Спорт',
	politics: 'Политика'
  };
  
  const Navigation = ({ onNavClick, currentCategory, className = '' }) => (
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
  
  const MainArticle = ({ title, image, category, description, source }) => (
	<article className="main-article">
	  <div className="main-article__image-container">
		<img className="article-img main-article__image" src={image} alt="Фото новости" />
	  </div>
	  <div className="main-article__content">
		<span className="article-category">{category}</span>
		<h2 className="main-article__title">{title}</h2>
		<p className="main-article__text">{description}</p>
		<span className="article-source main-article__caption">{source}</span>
	  </div>
	</article>
  );
  
  const SmallArticle = ({ title, source, date }) => (
	<article className="small-article">
	  <h2 className="small-article__title">{title}</h2>
	  <span className="article-date">
		{new Date(date).toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' })}
	  </span>
	  <span className="article-source">{source}</span>
	</article>
  );
  
  const App = () => {
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
			<Navigation onNavClick={onNavClick} currentCategory={category} className="header__navigation" />
		  </div>
		</header>
  
		<main>
		  <section className="articles">
			<div className="container grid">
			  <section className="articles__big-column">
				{articles.items.slice(0, 3).map((item) => (
				  <MainArticle
					key={item.title}
					title={item.title}
					description={item.description}
					image={item.image}
					//image={item.image?.startsWith('http') ? item.image : './images/placeholder.png'}

					category={
					  articles.categories.find((c) => c.id === item.category_id)?.name || 'Без категории'
					}
					source={
					  articles.sources.find((s) => s.id === item.source_id)?.name || 'Неизвестный источник'
					}
				  />
				))}
			  </section>
			  <section className="articles__small-column">
				{articles.items.slice(3, 12).map((item) => (
				  <SmallArticle
					key={item.title}
					title={item.title}
					date={item.date}
					source={
					  articles.sources.find((s) => s.id === item.source_id)?.name || 'Неизвестный источник'
					}
				  />
				))}
			  </section>
			</div>
		  </section>
		</main>
  
		<footer className="footer">
		  <div className="container">
			<Navigation onNavClick={onNavClick} currentCategory={category} className="footer__navigation" />
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
  
  ReactDOM.render(<App />, document.getElementById('root'));
  