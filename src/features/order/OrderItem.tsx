import "./orderItem.scss";

function OrderItem() {
  return (
    <li className="order-item">
      <div className="order-item__info">
        <p>
          <strong>3×</strong> Prosciutto e Rucola
        </p>
        <p className="order-item__price">€48.00</p>
      </div>
      <p className="order-item__ingridients">
        Tomato, Mozzarella, Prosciutto, Arugula
      </p>
    </li>
  );
}

export default OrderItem;
