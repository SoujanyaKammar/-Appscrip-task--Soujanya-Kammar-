import Link from 'next/link';
import styles from '../styles/Shop.module.css';

export default function Shop() {
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
        <h2>Shop</h2>
        <div className={styles.shopCategories}>
          <Link href="/mens">Men's Section</Link>
          <Link href="/womens">Women's Section</Link>
          <Link href="/children">Children's Section</Link>
          <Link href="/footwear">Footwear</Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Online Shopping for Clothes. All rights reserved.</p>
      </footer>
    </div>
  );
}
