import { OrderItemP } from "../../utils/interfaces";
import "./orderItem.scss";

function OrderItem({ item }: OrderItemP) {
  return (
    <li className="order-item">
      <div className="order-item__info">
        <p>
          <strong>{item.quantity}×</strong> {item.name}
        </p>
        <p className="order-item__price">€{item.totalPrice}.00</p>
      </div>
      {/* <p className="order-item__ingridients">{item.ingredients}</p> */}
    </li>
  );
}

export default OrderItem;
