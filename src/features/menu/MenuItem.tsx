import Button from "../../ui/button";
import "./menuItem.scss";

type MenuItemProps = {
  item: {
    id: number;
    name: string;
    unitPrice: number;
    imageUrl: string;
    ingredients: string[];
    soldOut: boolean;
  };
};

function MenuItem({ item }: MenuItemProps) {
  return (
    <li className="menu-item">
      <img
        className={`menu-item__image ${
          item.soldOut && "menu-item__image_sold-out"
        }`}
        src={item.imageUrl}
        alt={item.name}
      />
      <div className="menu-item__description">
        <p style={{ fontWeight: "500" }}>{item.name}</p>
        <p className="menu-item__ingredients">
          {item.ingredients.map((ingredient: string, index: number) => {
            const isLastIngredient = index === item.ingredients.length - 1;
            return isLastIngredient ? ingredient : `${ingredient}, `;
          })}
        </p>
        <div className="menu-item__price">
          {item.soldOut ? (
            <p className="menu-item__sold-out">SOLD OUT</p>
          ) : (
            <>
              <p style={{ fontSize: "14px" }}>€{item.unitPrice}.00</p>
              <Button text={"ADD TO CART"} />
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
