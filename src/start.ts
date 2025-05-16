// type Article = {
//     id: number;
//     name: string;
// }
interface Base {
    text: string;
}

interface Article extends Base{
    id: number;
    name: string;
}
const gerArticle = (article: Article) => {
    console.log(
    article.name,
    article.id,
    article.text,
);
}