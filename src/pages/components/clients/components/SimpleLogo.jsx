import Image from 'next/image';
import styles from './SimpleLogo.module.scss';

export default function SimpleLogo({ name, companyName, width = 200, height = 100 }) {
  return (
    <div className={styles.logoContainer}>
      <Image
        src={`/logos/companies/${name}.png`}
        alt={companyName || name}
        width={width}
        height={height}
        className={styles.logo}
        priority
      />
    </div>
  );
}
