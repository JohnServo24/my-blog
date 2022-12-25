import HeaderStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      <h1>Hello! Welcome to my Blog.</h1>
      <h2>This is a practice website to test my NextJS skills.</h2>
    </header>
  );
};

export default Header;
