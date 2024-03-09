import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../../../store";
import "./header.scss";

function Header() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const userName = useSelector((state: store) => state.user.username);
  const navigate = useNavigate();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    navigate(`/order/${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <header className="header">
      <Link to="/">REACT PIZZA CO.</Link>
      <form onSubmit={handleSubmit}>
        <input
          className="header__order-input"
          type="text"
          placeholder="Search order #"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(e.target.value);
          }}
        />
      </form>
      <h2>{userName}</h2>
    </header>
  );
}

export default Header;
