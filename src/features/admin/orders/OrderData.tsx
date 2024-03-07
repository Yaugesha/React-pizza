import { Link, useLoaderData } from "react-router-dom";
import { order, orderItem } from "../../../utils/types";
import "./orderData.scss";
import { calcMinutesLeft, formatDate } from "../../../utils/time";
import OrderItem from "../../order/OrderItem";

function OrderData() {
  const order: order = useLoaderData() as order;
  const deliveryIn = calcMinutesLeft(order.estimatedDelivery);

  return (
    <div className="order-data">
      <section className="order-data__delivery">
        <div className="order__info">
          <h2 className="order__id">Order #{order.id} status</h2>
          <div className="order__status">
            {order.priority && (
              <div className="order__status_red">priority</div>
            )}
            <div className="order__status_green">{order.status} order</div>
          </div>
        </div>
        <div className="order__delivery">
          <p className="order__delivery-status">
            {deliveryIn >= 0
              ? `Only ${calcMinutesLeft(
                  order.estimatedDelivery
                )} minutes left 😃`
              : "Order should have arrived"}
          </p>
          <p className="order__estimated-time">
            (Created: {formatDate(order.createdAt)}) (Estimated delivery:{" "}
            {formatDate(order.estimatedDelivery)})
          </p>
        </div>
      </section>
      <section className="order-data__cart">
        <h2>Order data</h2>
        <ul className="order__list">
          {order.cart.map((orderItem: orderItem) => {
            return (
              <Link to={`../../pizzas/${orderItem.id}`}>
                <OrderItem item={orderItem} key={orderItem.id} />
              </Link>
            );
          })}
        </ul>
      </section>
      <section className="order-data__user-data">
        <div>
          <h2>Customer data</h2>
          <p className="order-data__customer">Customer: {order.customer}</p>
          <p className="order-data__phone">
            Phone: <a href={`tel: order.phone`}>{order.phone}</a>
          </p>
          <p className="order-data__adress">
            Adress:{" "}
            <a href={`https://www.google.com/maps/place/${order.address}`}>
              {order.address}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default OrderData;
