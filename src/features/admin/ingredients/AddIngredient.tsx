import { Form } from "react-router-dom";
import Button from "../../../ui/button";
import { RequestData } from "../../../utils/interfaces";
import { ingredientNew } from "../../../utils/types";
import { createIngredient } from "../../../services/apiRestaurant";

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

export const action = async ({ request }: { request: RequestData }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const ingredient = {
    ingredient: data,
  } as unknown as ingredientNew;

  const newIngredient = await createIngredient(ingredient);
  console.log(newIngredient);
};
