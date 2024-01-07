import Button from "../../ui/button";
import { CartItemP } from "../../utils/interfaces";
import UpdateItemQuantity from "./UpdateItemQuantity";
import "./cartItem.scss";

function CartItem({ id, name, quantity, price }: CartItemP) {
  return (
    <li className="cart-item">
      <p className="cart-item__info">{`${quantity}× ${name}`}</p>
      <div className="cart-item__settings">
        <p className="cart-item__price">€{price * quantity}.00</p>
        <UpdateItemQuantity itemId={id} currentQuantity={quantity} />
        <Button text="DELETE" type="small" callback={() => {}} />
      </div>
    </li>
  );
}

export default CartItem;
