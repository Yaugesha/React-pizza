import { useState } from "react";
import { createPizza, getIngredients } from "../../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import { ingredient } from "../../../utils/types";
import Button from "../../../ui/button";
import "./createPizza.scss";
import { addIngredient, handleSetImage } from "./helper";

function CreatePizza() {
  const ingredients: Array<ingredient> = useLoaderData() as Array<ingredient>;

  const [pizzaIngredients, setIngredients] = useState<Array<ingredient>>([]);
  const [isSoldOut, setSoldOut] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");

  const handleSubmitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      unitPrice: { value: string };
      image: { files: Array<File> };
    };

    const data = new FormData();

    data.append("pizza[name]", target.name.value);
    data.append("pizza[unitPrice]", target.unitPrice.value);
    data.append("pizza[soldOut]", JSON.stringify(isSoldOut));
    data.append("pizza[ingredients]", JSON.stringify(pizzaIngredients));
    data.append("pizza[image]", target.image.files[0]);

    const newPizza = createPizza(data);
    console.log(newPizza);
  };

  return (
    <div className="form">
      <p className="form__header">
        Fill out rhe form below to create new pizza!
      </p>
      <form method="POST" onSubmit={handleSubmitForm}>
        <div className="form-field">
          <label className="form-field__label" htmlFor="name">
            Pizza name
          </label>
          <div className="form-field__input-container">
            <input
              className="form-field__input"
              type="text"
              name="name"
              required
            />
          </div>
        </div>
        <div className="form-field">
          <label className="form-field__label" htmlFor="unitPrice">
            Price
          </label>
          <div className="form-field__input-container">
            <input
              className="form-field__input"
              type="number"
              name="unitPrice"
              required
            />
          </div>
        </div>
        <div className="form-field image-field">
          <label className="form-field__label" htmlFor="image">
            Image
          </label>
          <input
            className="form-field__image-input"
            name="image"
            accept="image/*"
            onChange={(e) => {
              handleSetImage(e, setImage);
            }}
            type="file"
          />
          {image && <img src={image} alt="pizza image" />}
        </div>
        <div className="form-choice-field">
          <span className="form-choice-field__label">Ingredients</span>
          <div className="form-choice-field__values-container">
            {ingredients.map((ingredient) => {
              return (
                <div
                  className="form-choice-field__value-container"
                  key={ingredient.id}
                >
                  <input
                    type="checkBox"
                    name={`ingredient`}
                    onClick={() => {
                      addIngredient(
                        ingredient,
                        pizzaIngredients,
                        setIngredients
                      );
                    }}
                  />
                  <div className="form-choice-field__value">
                    {ingredient.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="form-field">
          <input
            className="form-field__checkbox"
            type="checkBox"
            name="soldOut"
            onChange={() => {
              setSoldOut(!isSoldOut);
            }}
          />
          <label className="form-field__label_checkbox" htmlFor="soldOut">
            Sold out
          </label>
        </div>

        <Button text="Create pizza" />
      </form>
    </div>
  );
}

export async function loader(): Promise<Array<ingredient>> {
  const ingredients = await getIngredients();
  return ingredients;
}

export default CreatePizza;
