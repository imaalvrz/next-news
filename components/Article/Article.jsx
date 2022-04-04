import styles from '../Article/Article.module.css';
import { useRouter } from 'next/router';

export const Article = ({ article }) => {
  console.log(article);
  const router = useRouter();

  return (
    <>
      <div className={styles.main}>
        <div className={styles.post}>
          <h1 onClick={() => router.push(`${article.url}`)}>{article.title}</h1>
          <p>{article.description}</p>
          {!!article.urlToImage && (
            <img src={article.urlToImage}/>
          )}
        </div>
      </div>
    </>
  );
};
