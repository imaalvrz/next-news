import { Toolbar } from '../../components/Toolbar/Toolbar';
import { Article } from '../../components/Article/Article';
import styles from '../../styles/Feed.module.css';
import { useRouter } from 'next/router';

export const Feed = ({ pageNumber, articles }) => {
  // console.log(pageNumber, articles);
  const router = useRouter();
  return (
    <>
      <Toolbar />
      <div>
        {articles.map((e, index) => (
          <Article article={e} key={index} />
        ))}
        <div className={styles.paginator}>
          <div
            onClick={() => {
              if (pageNumber > 1) {
                router
                  .push(`/feed/${pageNumber - 1}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
            className={pageNumber === 1 ? styles.disabled : styles.active}
>
            Previous Page
          </div>
          <div>#{pageNumber}</div>
          <div
            onClick={() => {
              if (pageNumber < 8) {
                router
                  .push(`/feed/${pageNumber + 1}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
            className={pageNumber === 8 ? styles.disabled : styles.active}>
            Next Page
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const pageNumber = context.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 8) {
    return {
      props: {
        pageNumber: 1,
        articles: [],
      },
    };
  }

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const resJson = await res.json();
  // console.log(resJson);
  const { articles } = resJson;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
