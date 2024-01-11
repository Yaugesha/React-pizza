import { Form, redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store, { store as Store } from "../../store";
import Button from "../../ui/button";
import { createOrder } from "../../services/apiRestaurant";
import { getCartPrice } from "../../utils/cartGetters";
import { fetchAddress } from "../user/userSlice";
import "./createOrder.scss";
import { orderNew } from "../../utils/types";

function CreateOrder() {
  const user = useSelector((store: Store) => store.user);
  const cart = useSelector((store: Store) => store.cart);
  const dispatch = useDispatch();

  const address = user.address;
  const isLoadingAddress = user.status === "loading";

  const handleSetPriority = (e: React.MouseEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    dispatch({ type: "cart/changePriority", payload: target.checked });
  };

  if (!cart.items.length) return;

  return (
    <div className="form">
      <p className="form__header">Ready to order? Let's go!</p>
      <Form method="POST">
        <div className="form-field">
          <label className="form-field__label" htmlFor="customer">
            First Name
          </label>
          <div className="form-field__input-container">
            <input
              className="form-field__input"
              type="text"
              name="customer"
              defaultValue={user.username}
              required
            />
          </div>
        </div>
        <div className="form-field">
          <label className="form-field__label" htmlFor="phone">
            Phone number
          </label>
          <div className="form-field__input-container">
            <input
              className="form-field__input"
              type="text"
              name="phone"
              required
            />
          </div>
        </div>
        <div className="form-field">
          <label className="form-field__label" htmlFor="address">
            Address
          </label>
          <div className="form-field__input-container">
            <input
              className="form-field__input"
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
          </div>
          {!user.position.latitude && !user.position.longitude && (
            <span className="input-button">
              <Button
                text="Get position"
                type="small"
                callback={async () => {
                  //e.preventDefault();
                  await store.dispatch(fetchAddress());
                }}
              />
            </span>
          )}
        </div>
        <div
          className="form-field"
          style={{ marginBottom: "48px", gap: "20px" }}
        >
          <input
            className="form-field__checkbox"
            type="checkbox"
            name="priority"
            onClick={handleSetPriority}
          />
          <label className="form-field__label_checkbox" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart.items)} />
        </div>
        <Button text={`ORDER NOW FROM €${getCartPrice(cart)}.00`} />
      </Form>
    </div>
  );
}

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  } as orderNew;

  const newOrder = await createOrder(order);
  //clear cart
  return redirect(`/order/${newOrder.id}`);
};

export default CreateOrder;
