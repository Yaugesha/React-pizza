import Button from "../../ui/button";
import OrderItem from "./OrderItem";
import "./order.scss";

function Order() {
  return (
    <div className="order">
      <div className="order__info">
        <h2 className="order__id">Order #ID status</h2>
        <div className="order__status">PREPARING ORDER</div>
        {/* <div>PRIORITY</div> */}
      </div>
      <div className="order__delivery">
        <p className="order__delivery-status">Only "time" minutes left 😃</p>
        <p className="order__estimated-time">
          (Estimated delivery: Jan 4, 07:20 PM)
        </p>
      </div>
      <ul className="order__list">
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </ul>
      <div className="order__bill">
        <p className="bill__pizza-price">Price pizza: €48.00</p>
        <p className="bill__delivery-price">To pay on delivery: €48.00</p>
      </div>
      <div className="order__priority-button">
        <Button text="MAKE PRIORITY" />
      </div>
    </div>
  );
}

export default Order;
