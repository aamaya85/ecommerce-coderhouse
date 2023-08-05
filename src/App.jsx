import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/routes/AppRoutes";
import CartContextComponent from "./context/CartContext";

const App = () => {
  return (
    <BrowserRouter>
      <CartContextComponent>
        <AppRoutes />
      </CartContextComponent>
    </BrowserRouter>
  );
};

export default App;
