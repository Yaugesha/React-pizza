import { Form, useNavigate } from "react-router-dom";
import "./home.scss";
import Button from "../../button";
import { useDispatch } from "react-redux";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className="main-content">
      <h1 className="main-content__title">
        The best pizza.
        <br />
        <span className="main-content__tagline">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <Form>
        <p className="main-content__form-header">
          👋 Welcome! Please start by telling us your name:
        </p>
        <input
          className="main-content__form-input"
          type="text"
          placeholder="Your full name"
          onChange={handleInput}
        />
      </Form>
      <Button
        text="START ORDERING"
        disabled={username.length === 0}
        callback={() => {
          dispatch({ type: "user/updateName", payload: username });
          navigate("/menu");
        }}
      />
    </div>
  );
}

export default Home;
