import { Form } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../../store";
import Button from "../../ui/button";
import "./createOrder.scss";

function CreateOrder() {
  const user = useSelector((store: store) => store.user);
  return (
    <div className="form">
      <p className="form__header">Ready to order? Let's go!</p>
      <Form>
        <div className="form-field">
          <label className="form-field__label" htmlFor="first-name">
            First Name
          </label>
          <input
            className="form-field__input"
            type="text"
            name="first-name"
            defaultValue={user.username}
            required
          />
        </div>
        <div className="form-field">
          <label className="form-field__label" htmlFor="phone-number">
            Phone number
          </label>
          <input
            className="form-field__input"
            type="text"
            name="phone-number"
            required
          />
        </div>
        <div className="form-field">
          <label className="form-field__label" htmlFor="adress">
            Address
          </label>
          <input
            className="form-field__input"
            type="text"
            name="adress"
            required
          />
          <Button text="Get position" callback={() => {}} />
        </div>
        <div
          className="form-field"
          style={{ marginBottom: "48px", gap: "20px" }}
        >
          <input
            className="form-field__checkbox"
            type="checkbox"
            name="priority"
          />
          <label className="form-field__label_checkbox" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>
        <Button text="ORDER NOW FROM" callback={() => {}} />
      </Form>
    </div>
  );
}

export default CreateOrder;
