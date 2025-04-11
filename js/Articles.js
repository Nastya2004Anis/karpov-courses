import { MainArticle } from "./MainArticle.js"
import { SmallArticle } from "./SmallArticle.js"

export const Articles = ({articles}) => {
	return (
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
	)
  }