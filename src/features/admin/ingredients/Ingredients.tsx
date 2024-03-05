import { Link, useLoaderData } from "react-router-dom";
import { ingredient } from "../../../utils/types";
import Button from "../../../ui/button";
import "./ingresients.scss";
import { deleteIngredient } from "../../../services/apiRestaurant";

function Ingredients() {
  const ingredients: Array<ingredient> = useLoaderData() as Array<ingredient>;

  return (
    <div className="table-container">
      <p className="table-heder">Table with all ingredients</p>
      <Link to="./create">
        <span className="link">Add new ingredient</span>
      </Link>
      <div className="table">
        {ingredients.map((ingredient) => {
          return (
            <div className="table-row" key={ingredient.id}>
              <span className="table-row__main-cell">{ingredient.name}</span>
              <span className="table-row__2-cell">
                In pizzas: {ingredient.numberOfPizzas}
              </span>
              <span className="table-row__3-cell">
                Popularity: {ingredient.popularity}%
              </span>
              <span className="table-row__4-cell">
                <Link to={`./edit/${ingredient.id}`}>Edit</Link>
              </span>
              <span className="table-row__5-cell">
                <Button
                  text="Delete"
                  type="small"
                  callback={() => {
                    confirm(
                      "Are you sure it will delete this ingredient from all existing pizzas?"
                    ) && deleteIngredient(ingredient.id);
                  }}
                />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Ingredients;
