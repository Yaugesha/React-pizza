import MenuItem from "./MenuItem";
import pizza from "./menu.json";

function Menu() {
  return (
    <>
      <ul>
        {pizza.data.map((pizza) => {
          return <MenuItem item={pizza} key={pizza.id} />;
        })}
      </ul>
    </>
  );
}

export default Menu;
