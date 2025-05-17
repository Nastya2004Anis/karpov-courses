import React, { FC, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { MainArticle } from "../MainArticle/MainArticle";
import { SmallArticle } from "../SmallArticle/SmallArticle";
import './Articles.css';
import { NewsAPI } from "../../types";
import { categoryIds } from '../../utils';

export const Articles: FC = () => {
	
  const { category = "index" } = useParams();

  const [articles, setArticles] = React.useState<NewsAPI>({
    items: [],
    categories: [],
    sources: [],
  });


  React.useEffect(() => {
    fetch(
      "https://frontend.karpovcourses.net/api/v2/ru/news/" +
        (categoryIds[category] || "")
    )
      .then((response) => response.json())
      .then((response: NewsAPI) => {
        setArticles(response);
      });
  }, [category]);

  return (
    <section className="articles">
      <div className="container grid">
        <section className="articles__big-column">
          {articles.items.slice(0, 3).map((item) => {
            const category = articles.categories.find(({ id }) => item.category_id === id);
            const source = articles.sources.find(({ id }) => item.source_id === id);

            return (
              <MainArticle
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                category={category?.name || ""}
                description={item.description}
                source={source?.name || ""}
              />
            );
          })}
        </section>

        <section className="articles__small-column">
          {articles.items.slice(3, 12).map((item) => {
            const source = articles.sources.find(({ id }) => item.source_id === id);

            return (
              <SmallArticle
                key={item.id}
                id={item.id}
                title={item.title}
                date={item.date}
                source={source?.name || ''}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
};
