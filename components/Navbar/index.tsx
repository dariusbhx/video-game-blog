import Link from "next/link";
import styles from "./Navbar.module.scss";
function Navbar() {
  return (
    <ul className={`${styles.container}`}>
      <li className={`${styles.btn}`}>
        <Link href="/">
          <h1>Video Game Review</h1>
        </Link>
      </li>
      <div className = {`${styles.rightContainer}`}>
        <li className={`${styles.btn} ${styles.rightAlign}`}>
          <Link href="/createpost">Create a Review</Link>
        </li>
      </div>
    </ul>
  );
}

export default Navbar;
