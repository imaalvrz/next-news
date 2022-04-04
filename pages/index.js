import styles from '../styles/Home.module.css';
import { Toolbar } from '../components/Toolbar/Toolbar';
import indexPic from '../public/png-transparent-silhouette-of-woman-carrying-sword-and-balance-scale-illustration-due-process-lawyer-court-criminal-law-lady-justice-silhouette-law-supreme-court.png';

export default function Home() {
  return (
    <>
      <Toolbar />
      <div>
        <div className={styles.main}>
          <h1>Next.js news App</h1>
          <h3>Your one stop shop for the latest news articles.</h3>
        </div>
      </div>
    </>
  );
}
