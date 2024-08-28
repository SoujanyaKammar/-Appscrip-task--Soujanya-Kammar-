import Link from 'next/link';
import styles from '../styles/Product.module.css';

export default function Mens() {
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
        <h2>Men's Collection</h2>
        <div className={styles.productList}>
          <div className={styles.product}>
            <img src="/mens-shirt.jpg" alt="Men's T-Shirt" />
            <p>Men's T-Shirt - $25</p>
          </div>
          <div className={styles.product}>
            <img src="/mens-jeans.jpg" alt="Men's Jeans" />
            <p>Men's Jeans - $40</p>
          </div>
          <div className={styles.product}>
            <img src="/mens-jacket.jpg" alt="Men's Jacket" />
            <p>Men's Jacket - $75</p>
          </div>
          <div className={styles.product}>
            <img src="/mens-sneakers.jpg" alt="Men's Sneakers" />
            <p>Men's Sneakers - $60</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Online Shopping for Clothes. All rights reserved.</p>
      </footer>
    </div>
  );
}
