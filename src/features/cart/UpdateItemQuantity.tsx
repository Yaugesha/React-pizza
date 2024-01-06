import { useDispatch } from "react-redux";
import Button from "../../ui/button";
import { cartItem } from "./cartSlice";
import "./updateItemQuantity.scss";

function UpdateItemQuantity({ name, ingredients, unitPrice, count }: cartItem) {
  const dispatch = useDispatch();

  return (
    <div className="item-quantity">
      <Button
        text="-"
        type="round"
        callback={() => {
          count === 1
            ? dispatch({
                type: "cart/deleteItem",
                payload: { name, ingredients, unitPrice, count },
              })
            : dispatch({
                type: "cart/decrimentItem",
                payload: { name, ingredients, unitPrice, count },
              });
        }}
      />
      <span>{count}</span>
      <Button
        text="+"
        type="round"
        callback={() => {
          dispatch({
            type: "cart/incrimentItem",
            payload: { name, ingredients, unitPrice, count },
          });
        }}
      />
    </div>
  );
}

export default UpdateItemQuantity;
