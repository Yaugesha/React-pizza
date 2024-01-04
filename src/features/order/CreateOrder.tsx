import { Form } from "react-router-dom";
import Button from "../../ui/button";
import "./createOrder.scss";

function CreateOrder() {
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
          <Button text="Get position" />
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
        <Button text="ORDER NOW FROM" />
      </Form>
    </div>
  );
}

export default CreateOrder;
