import Button from "../../../ui/button";
import "./auth.scss";

function LogIn() {
  return (
    <div className="auth-form">
      <div className="auth-form__field">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
      </div>
      <div className="auth-form__field">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      <Button text="Log in" />
    </div>
  );
}

export default LogIn;
