import "../styles/Header.css";

function Header({ header }) {
  return (
    <div className="Header">
      <h2>{header}</h2>
      <hr />
    </div>
  );
}

export default Header;
