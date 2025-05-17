import React, {FC} from 'react'; 
import { Link } from 'react-router-dom';
import './SmallArticles.css';
import {beautifyDate} from "../../utils"; 

interface Props {
	id: number;
	title: string;
	source: string;
	date: string;
}
export const SmallArticle: FC<Props> = ({ id, title, source, date }) => {
	
	return(
	<Link to={`/article/${id}`} className="small-article">

	<article className="small-article__container" >
	  <h2 className="small-article__title">{title}</h2>
	  <span className="article-date">
		{beautifyDate(date)}
		  </span>
	  <span className="article-source">{source}</span>
	</article>
	</Link>
	);
};