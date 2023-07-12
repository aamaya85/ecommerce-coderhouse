import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import { NotFound } from "./components/pages/notFound/NotFound";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName?" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
