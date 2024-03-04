import { Form } from "react-router-dom";
import Button from "../../../ui/button";

function AddIngredient() {
  return (
    <div className="form">
      <p className="form__header">
        Fill out rhe form below to create new ingredient!
      </p>
      <Form method="POST">
        <div className="form-field">
          <label className="form-field__label" htmlFor="name">
            Ingredient
          </label>
          <input name="name" type="text" required />
        </div>
        <Button text="Create ingredient" />
      </Form>
    </div>
  );
}

export default AddIngredient;
