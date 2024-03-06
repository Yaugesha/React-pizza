import { Link, useLoaderData } from "react-router-dom";
import { menuItem } from "../../../utils/types";
import Button from "../../../ui/button";
import "./pizzas.scss";
import { deletePizza } from "../../../services/apiRestaurant";

function Pizzas() {
  const menuItems: Array<menuItem> = useLoaderData() as Array<menuItem>;

  return (
    <div className="table-container">
      <p className="table-heder">Table with all pizzas</p>
      <Link to="./create">
        <span className="link">Create new pizza</span>
      </Link>
      <div className="pizzas-table">
        {menuItems.map((item) => {
          return (
            <div className="pizzas-table__row" key={item.id}>
              <span className="pizzas-table__cell">{item.name}</span>
              <span className="pizzas-table__cell">
                {item.ingredients.map((ingredient: string, index: number) => {
                  const isLastIngredient =
                    index === item.ingredients.length - 1;
                  return isLastIngredient ? ingredient : `${ingredient}, `;
                })}
              </span>
              {item.soldOut ? (
                <span className="pizzas-table__cell">SOLD OUT</span>
              ) : (
                <span className="pizzas-table__cell">€{item.unitPrice}</span>
              )}
              <span className="pizzas-table__cell">
                Ordered: {item.countOfOrders}
              </span>
              <span className="pizzas-table__cell">
                Prepering: {item.quantityInCurrentOrders}
              </span>
              <span className="pizzas-table__cell">
                <Link to={`./edit/${item.id}`}>Edit</Link>
              </span>
              <span className="pizzas-table__cell">
                <Button
                  text="Delete"
                  type="small"
                  callback={() => {
                    confirm(
                      "Are you sure it will delete this pizza from all delivered orders?"
                    ) && deletePizza(item.id);
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

export default Pizzas;
