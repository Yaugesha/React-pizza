import Button from "../../ui/button";
import UpdateItemQuantity from "./UpdateItemQuantity";
import "./cartItem.scss";

type CartItemProps = {
  name: string;
  ingredients: Array<string>;
  count: number;
  price: number;
};

function CartItem({ name, count, price, ingredients }: CartItemProps) {
  return (
    <li className="cart-item">
      <p className="cart-item__info">{`${count}× ${name}`}</p>
      <div className="cart-item__settings">
        <p className="cart-item__price">€{price * count}.00</p>
        <UpdateItemQuantity
          name={name}
          unitPrice={price}
          count={count}
          ingredients={ingredients}
        />
        <Button text="DELETE" type="small" callback={() => {}} />
      </div>
    </li>
  );
}

export default CartItem;
