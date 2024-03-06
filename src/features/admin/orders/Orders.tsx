import { Link, useLoaderData } from "react-router-dom";
import { cartItem, order } from "../../../utils/types";
import Button from "../../../ui/button";

function Orders() {
  const orders: Array<order> = useLoaderData() as Array<order>;

  return (
    <div className="table-container">
      <p className="table-heder">Table with all pizzas</p>
      <Link to="./create">
        <span className="link">Create new pizza</span>
      </Link>
      <div className="orders-table">
        {orders.map((order) => {
          return (
            <div className="orders-table__row">
              {/*Client data*/}
              <span className="orders-table__cell">{order.customer}</span>
              <span className="orders-table__cell">{order.phone}</span>
              <span className="orders-table__cell">{order.address}</span>
              {/*Cart data*/}
              <span className="orders-table__cell">
                {order.cart.map((cartItem: cartItem) => {
                  return <div>{cartItem.name}</div>;
                })}
              </span>
              <span className="orders-table__cell">{order.orderPrice}</span>
              <br />
              {/*Delivery data*/}
              <span className="orders-table__cell">{order.createdAt}</span>
              <span className="orders-table__cell">
                {order.estimatedDelivery}
              </span>
              <span className="orders-table__cell">{order.priority}</span>
              <span className="orders-table__cell">{order.status}</span>
              <br />

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
