import { useState } from "react";
import Button from "../../../ui/button";
import "./auth.scss";
import { signup } from "../../../services/apiAdmin";

function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
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
        <label htmlFor="phone">Phone</label>
        <input
          type="phone"
          name="phone"
          onChange={(e) => {
            setPhone(e.target.value);
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
        text="Sign Up"
        callback={async () => {
          signup({ email, password, phone });
        }}
      />
    </div>
  );
}

export default SignUp;
