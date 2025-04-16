import React from 'react'; 
import './MainArticle.css';

export const MainArticle = ({ title, image, category, description, source }) => (
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