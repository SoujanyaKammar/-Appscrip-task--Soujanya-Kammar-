import Link from 'next/link';
import styles from '../styles/Product.module.css';

export default function Womens() {
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
        <h2>Women's Collection</h2>
        <div className={styles.productList}>
          <div className={styles.product}>
            <img src="/womens-dress.jpg" alt="Women's Dress" />
            <p>Women's Dress - $50</p>
          </div>
          <div className={styles.product}>
            <img src="/womens-jeans.jpg" alt="Women's Jeans" />
            <p>Women's Jeans - $45</p>
          </div>
          <div className={styles.product}>
            <img src="/womens-blouse.jpg" alt="Women's Blouse" />
            <p>Women's Blouse - $30</p>
          </div>
          <div className={styles.product}>
            <img src="/womens-heels.jpg" alt="Women's Heels" />
            <p>Women's Heels - $70</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Online Shopping for Clothes. All rights reserved.</p>
      </footer>
    </div>
  );
}
