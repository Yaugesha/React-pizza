import { Form } from "react-router-dom";
import "./home.scss";
import Button from "./button";

function Home() {
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
        />
      </Form>
      <Button text="START ORDRING" />
    </div>
  );
}

export default Home;
