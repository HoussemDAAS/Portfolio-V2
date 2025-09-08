import styles from './SimpleLogo.module.scss';

export default function SimpleLogo({ name, companyName, width = 200, height = 100 }) {
  const imageSrc = `/logos/companies/${name}.png`;
  
  return (
    <div className={styles.logoContainer}>
      <img
        src={imageSrc}
        alt={companyName || name}
        width={width}
        height={height}
        className={styles.logo}
        loading="eager"
        onError={(e) => {
          console.error('Logo failed to load:', imageSrc);
          e.target.style.display = 'none';
        }}
      />
    </div>
  );
}
