import { ingredient, menuItem } from "../../../utils/types";

export const addIngredient = (
  newIngredient: ingredient,
  pizzaIngredients: ingredient[],
  setIngredients: (value: React.SetStateAction<ingredient[]>) => void
) => {
  pizzaIngredients.includes(newIngredient)
    ? setIngredients([
        ...pizzaIngredients.filter(
          (ingredient) => ingredient !== newIngredient
        ),
      ])
    : setIngredients([...pizzaIngredients, newIngredient]);
};

export const handleSetImage = (
  e: React.FormEvent<HTMLInputElement>,
  setImage: (value: React.SetStateAction<string>) => void
) => {
  e.preventDefault();
  const target = e.target as HTMLInputElement;

  if (target.files && target.files.length > 0) {
    setImage(URL.createObjectURL(target.files[0]));
  }
};

export const getPizzaIngredientsData = (
  pizza: menuItem,
  ingredients: ingredient[]
) => {
  return pizza.ingredients.map((ingredientName: string) => {
    return ingredients.find(
      (ingredient: ingredient) => ingredient.name === ingredientName
    );
  }) as ingredient[];
};
