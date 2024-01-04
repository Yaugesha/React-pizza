import Button from "../../ui/button";
import "./cartItem.scss";

type CartItemProps = {
  item: { name: string; count: number; price: number };
};

function CartItem({ item }: CartItemProps) {
  return (
    <li className="cart-item">
      <p className="cart-item__info">{`${item.count}× ${item.name}`}</p>
      <div className="cart-item__settings">
        <p className="cart-item__price">€{item.price * item.count}.00</p>
        {/* counter */}
        <Button text="DELETE" />
      </div>
    </li>
  );
}

export default CartItem;
