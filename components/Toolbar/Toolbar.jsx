import styles from '../Toolbar/Toolbar.module.css';
import { useRouter } from 'next/router';

export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('/feed/1')}>Feed</div>
    </div>
  );
};
