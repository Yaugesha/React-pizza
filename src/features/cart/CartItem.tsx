import { useDispatch } from "react-redux";
import Button from "../../ui/button";
import { CartItemP } from "../../utils/interfaces";
import UpdateItemQuantity from "./UpdateItemQuantity";
import "./cartItem.scss";

function CartItem({ id, name, quantity, price }: CartItemP) {
  const dispatch = useDispatch();

  return (
    <li className="cart-item">
      <p className="cart-item__info">{`${quantity}× ${name}`}</p>
      <div className="cart-item__settings">
        <p className="cart-item__price">€{price * quantity}.00</p>
        <UpdateItemQuantity itemId={id} currentQuantity={quantity} />
        <Button
          text="DELETE"
          type="small"
          callback={() => {
            dispatch({
              type: "cart/deleteItem",
              payload: id,
            });
          }}
        />
      </div>
    </li>
  );
}

export default CartItem;
