import { ItemListContainer } from "./../pages/itemList/ItemListContainer"
import { ItemDetailContainer } from "./../pages/itemDetail/ItemDetailContainer"
import { CartContainer } from "../pages/cart/CartContainer";

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categoryName?",
    Element: ItemListContainer,
  },
  {
    id: "detail",
    path: "/item/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
];
