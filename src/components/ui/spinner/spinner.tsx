import styles from "./spinner.module.css";

export const Spinner = () => {
  return (
    <div className={styles.loadingWrapper} aria-label="Loading..">
      <div className={styles.loader} role="status" aria-label="Loading" />
    </div>
  );
};
