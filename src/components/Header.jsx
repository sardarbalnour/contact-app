import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="#">Sardar website</a> | React.js course
      </p>
    </div>
  );
}

export default Header;
