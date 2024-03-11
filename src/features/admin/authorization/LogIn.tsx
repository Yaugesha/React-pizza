import { useState } from "react";
import { login } from "../../../services/apiAdmin";
import Button from "../../../ui/button";
import "./auth.scss";

function LogIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="auth-form">
      <div className="auth-form__field">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="auth-form__field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <Button
        text="Log in"
        callback={async () => {
          login({ email, password });
        }}
      />
    </div>
  );
}

export default LogIn;
