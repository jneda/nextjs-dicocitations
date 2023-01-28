import styles from './layout.module.css';

export default function Layout({ children }) {
  return <div className={styles.container}>
    <header className={styles.header}>
      <h1>Citations à la carte</h1>
    </header>
    <main>
      {children}
    </main>
    <footer className={styles.footer}>
      <span>&copy; houlala.dev</span>
    </footer>
  </div>;
}
