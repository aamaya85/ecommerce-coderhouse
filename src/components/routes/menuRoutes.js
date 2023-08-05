import { ItemListContainer } from "./../pages/itemList/ItemListContainer"
import { ItemDetailContainer } from "./../pages/itemDetail/ItemDetailContainer"

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
];
