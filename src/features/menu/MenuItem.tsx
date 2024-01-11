import Button from "../../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../store";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { MenuItemP } from "../../utils/interfaces";
import { getItemQuantity } from "../../utils/cartGetters";
import { cartItem } from "../../utils/types";
import "./menuItem.scss";

function MenuItem({ item }: MenuItemP) {
  const cart = useSelector((store: store) => store.cart);
  const dispatch = useDispatch();

  return (
    <li className="menu-item">
      <img
        className={`menu-item__image ${
          item.soldOut && "menu-item__image_sold-out"
        }`}
        src={item.imageUrl}
        alt={item.name}
      />
      <div className="menu-item__description">
        <p style={{ fontWeight: "500" }}>{item.name}</p>
        <p className="menu-item__ingredients">
          {item.ingredients.map((ingredient: string, index: number) => {
            const isLastIngredient = index === item.ingredients.length - 1;
            return isLastIngredient ? ingredient : `${ingredient}, `;
          })}
        </p>
        <div className="menu-item__price">
          {item.soldOut ? (
            <p className="menu-item__sold-out">SOLD OUT</p>
          ) : (
            <>
              <p style={{ fontSize: "14px" }}>€{item.unitPrice}.00</p>
              {cart.items.find((cartItem: cartItem) => {
                return cartItem.name === item.name;
              }) !== undefined ? (
                <div className="menu-item__quantity">
                  <UpdateItemQuantity
                    itemId={item.pizzaId}
                    currentQuantity={getItemQuantity(cart, item.pizzaId)}
                  />
                  <Button
                    text={"DELETE"}
                    type="small"
                    callback={() => {
                      dispatch({
                        type: "cart/deleteItem",
                        payload: item.pizzaId,
                      });
                    }}
                  />
                </div>
              ) : (
                <Button
                  text={"ADD TO CART"}
                  type="small"
                  callback={() => {
                    dispatch({
                      type: "cart/addItem",
                      payload: { ...item },
                    });
                  }}
                />
              )}
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
