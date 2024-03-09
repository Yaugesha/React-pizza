import Button from "../../../ui/button";
import "./auth.scss";

function SignUp() {
  return (
    <div className="auth-form">
      <div className="auth-form__field">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />
      </div>
      <div className="auth-form__field">
        <label htmlFor="phone">Phone</label>
        <input type="phone" name="phone" />
      </div>
      <div className="auth-form__field">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
      </div>
      <div className="auth-form__field">
        <label htmlFor="password_confirmation ">Confirm Password</label>
        <input type="password_confirmation " name="password_confirmation " />
      </div>
      <Button text="Sign Up" />
    </div>
  );
}

export default SignUp;
