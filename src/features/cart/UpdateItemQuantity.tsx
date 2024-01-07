import { useDispatch } from "react-redux";
import Button from "../../ui/button";
import { updateItemQuantityP } from "../../utils/interfaces";
import "./updateItemQuantity.scss";

function UpdateItemQuantity({ itemId, currentQuantity }: updateItemQuantityP) {
  const dispatch = useDispatch();

  return (
    <div className="item-quantity">
      <Button
        text="-"
        type="round"
        callback={() => {
          currentQuantity === 1
            ? dispatch({
                type: "cart/deleteItem",
                payload: itemId,
              })
            : dispatch({
                type: "cart/decrimentItem",
                payload: itemId,
              });
        }}
      />
      <span>{currentQuantity}</span>
      <Button
        text="+"
        type="round"
        callback={() => {
          dispatch({
            type: "cart/incrimentItem",
            payload: itemId,
          });
        }}
      />
    </div>
  );
}

export default UpdateItemQuantity;
