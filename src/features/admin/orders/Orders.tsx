import { Link, useLoaderData } from "react-router-dom";
import { cartItem, order } from "../../../utils/types";
import Button from "../../../ui/button";
import { formatDate } from "../../../utils/time";
import "./orders.scss";

function Orders() {
  const orders: Array<order> = useLoaderData() as Array<order>;

  return (
    <div className="table-container">
      <p className="table-heder">Table with all Orders</p>
      <div className="orders-table">
        {orders.map((order) => {
          return (
            <div className="orders-table__row">
              <span className="orders-table__id">
                <Link to={`${order.id}`}>#{order.id}</Link>
              </span>
              <details className="orders-table__client-data">
                <summary title="Client data">Client data</summary>
                <span className="orders-table__cell">
                  Customer: {order.customer}
                </span>
                <span className="orders-table__cell">Phone: {order.phone}</span>
                <span className="orders-table__cell">
                  Adress: {order.address}
                </span>
              </details>
              <details className="orders-table__cart-data">
                <summary title="Cart data">Cart data</summary>
                <div className="orders-table__cell">
                  {order.cart.map((cartItem: cartItem) => {
                    return (
                      <span>
                        {cartItem.name} x {cartItem.quantity}
                      </span>
                    );
                  })}
                </div>
                <span className="orders-table__cell">
                  Price: {order.orderPrice}$
                </span>
              </details>
              <details className="orders-table__delivery-data">
                <summary title="Delivery data">{order.status}</summary>
                <span className="orders-table__cell">
                  Created: {formatDate(order.createdAt)}
                </span>
                <span className="orders-table__cell">
                  Estimated delivery: {formatDate(order.estimatedDelivery)}
                </span>
                {order.priority && (
                  <span className="orders-table__cell">With priority</span>
                )}
              </details>
              <span className="orders-table__cell">
                <Link to={`./edit/${order.id}`}>Edit</Link>
              </span>
              <span className="orders-table__cell">
                <Button text="Delete" type="small" />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
