import { useLoaderData } from "react-router-dom";
import Button from "../../ui/button";
import OrderItem from "./OrderItem";
import { order, orderItem } from "../../utils/types";
import { calcMinutesLeft, formatDate } from "../../utils/time";
import "./order.scss";

function Order() {
  const order: order = useLoaderData() as order;

  const deliveryIn = calcMinutesLeft(order.estimatedDelivery);

  return (
    <div className="order">
      <div className="order__info">
        <h2 className="order__id">Order #{order.id} status</h2>
        <div className="order__status">
          {order.priority && <div className="order__status_red">priority</div>}
          <div className="order__status_green">{order.status} order</div>
        </div>
      </div>
      <div className="order__delivery">
        <p className="order__delivery-status">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(order.estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="order__estimated-time">
          (Estimated delivery: {formatDate(order.estimatedDelivery)})
        </p>
      </div>
      <ul className="order__list">
        {order.cart.map((orderItem: orderItem) => {
          return <OrderItem item={orderItem} key={orderItem.id} />;
        })}
      </ul>
      <div className="order__bill">
        <p className="bill__pizza-price">Price pizza: €{order.orderPrice}.00</p>
        {order.priority && (
          <p className="bill__priority-price">
            Price priority: €{order.priorityPrice}.00
          </p>
        )}
        <p className="bill__delivery-price">
          To pay on delivery: €
          {order.priority
            ? order.orderPrice + order.priorityPrice
            : order.orderPrice}
          .00
        </p>
      </div>
      {!order.priority && (
        <div className="order__priority-button">
          <Button text="MAKE PRIORITY" callback={() => {}} />
        </div>
      )}
    </div>
  );
}

export default Order;
