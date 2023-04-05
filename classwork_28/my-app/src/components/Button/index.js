import styles from "./styles.module.css";

const Button = ({ children, onClick }) => (
    <button onClick={onClick} className={styles.button}>{children}</button>
);

export default Button;
