import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navbar}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/stories">Stories</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <h1>Welcome to Our Online Clothing Store</h1>
        <p>Your one-stop shop for all things fashion. Explore our latest collections and find your style.</p>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Online Shopping for Clothes. All rights reserved.</p>
      </footer>
    </div>
  );
}
