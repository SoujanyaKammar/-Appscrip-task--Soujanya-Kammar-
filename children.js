import Link from 'next/link';
import styles from '../styles/Product.module.css';

export default function children() {
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
        <h2>Children Collection</h2>
        <div className={styles.productList}>
          <div className={styles.product}>
            <img src="/children-shirt.jpg" alt="children's T-Shirt" />
            <p>children's T-Shirt - $25</p>
          </div>
          <div className={styles.product}>
            <img src="/children-jeans.jpg" alt="children's Jeans" />
            <p>children's Jeans - $40</p>
          </div>
          <div className={styles.product}>
            <img src="/children-jacket.jpg" alt="children's Jacket" />
            <p>children's Jacket - $75</p>
          </div>
          <div className={styles.product}>
            <img src="/children-sneakers.jpg" alt="children's Sneakers" />
            <p>children's Sneakers - $60</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Online Shopping for Clothes. All rights reserved.</p>
      </footer>
    </div>
  );
}
