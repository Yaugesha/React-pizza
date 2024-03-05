import { Form, useLoaderData } from "react-router-dom";
import Button from "../../../ui/button";
import { ingredient } from "../../../utils/types";

function EditIngredient() {
  const ingredient: ingredient = useLoaderData() as ingredient;

  return (
    <div className="form">
      <p className="form__header">
        Fill out rhe form below to change ingredient!
      </p>
      <Form method="PATCH">
        <div className="form-field">
          <label className="form-field__label" htmlFor="name">
            Ingredient
          </label>
          <input
            name="name"
            type="text"
            defaultValue={ingredient.name}
            required
          />
          <input name="id" type="hidden" defaultValue={ingredient.id} />
        </div>
        <Button text="Edit ingredient" />
      </Form>
    </div>
  );
}

export default EditIngredient;
