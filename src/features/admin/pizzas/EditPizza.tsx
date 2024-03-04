import { useState } from "react";
import { findPizza, updatePizza } from "../../../services/apiRestaurant";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { ingredient, menuItem } from "../../../utils/types";
import { loader as ingredientsLoader } from "./CreatePizza";
import {
  addIngredient,
  getPizzaIngredientsData,
  handleSetImage,
} from "./helper";
import Button from "../../../ui/button";
import "./createPizza.scss";

function EditPizza() {
  const [ingredients, pizzaData] = useLoaderData() as [ingredient[], menuItem];
  const pizza = pizzaData;

  const [pizzaIngredients, setIngredients] = useState<Array<ingredient>>(
    getPizzaIngredientsData(pizza, ingredients)
  );

  const [isSoldOut, setSoldOut] = useState<boolean>(pizza.soldOut);
  const [image, setImage] = useState<string>(pizza.imageUrl);

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
    if (target.image.files[0]) {
      data.append("pizza[image]", target.image.files[0]);
    }

    const updatedPizza = updatePizza(data, pizza.id);
    console.log(updatedPizza);
  };

  return (
    <div className="form">
      <p className="form__header">
        Fill out rhe form below to edit {pizza.name} pizza!
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
              defaultValue={pizza.name}
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
              defaultValue={pizza.unitPrice}
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
                    defaultChecked={pizza.ingredients.includes(ingredient.name)}
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

        <Button text="Edit pizza" />
      </form>
    </div>
  );
}

export const findPizzaLoader = async ({ params }: LoaderFunctionArgs) => {
  if (params.id === undefined) {
    throw new Error("params.id is undefined");
  }
  const pizza = await findPizza(params.id);
  return pizza;
};

export const loader = (params: LoaderFunctionArgs) => {
  return Promise.all([ingredientsLoader(), findPizzaLoader(params)]);
};

export default EditPizza;
