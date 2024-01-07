import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { menuItem } from "../../utils/types";

function Menu() {
  const menu: Array<menuItem> = useLoaderData();

  return (
    <>
      <ul>
        {menu.map((pizza) => {
          return <MenuItem item={pizza} key={pizza.id} />;
        })}
      </ul>
    </>
  );
}

export async function loader(): Promise<Array<menuItem>> {
  const menu = await getMenu();
  return menu;
}

export default Menu;
