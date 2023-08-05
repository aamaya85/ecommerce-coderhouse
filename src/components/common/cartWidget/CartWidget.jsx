import { useContext } from "react";
import { BiCart } from "react-icons/bi";
import { Indicator } from "@mantine/core";
import "./CartWidget.css"
import { CartContext } from "../../../context/CartContext";
  
const CartWidget = () => {

  const { cart } = useContext(CartContext)
  
  return (
    <Indicator inline label={cart} size={16}>
      <BiCart className="cart" size={"2em"} />
    </Indicator>
  );
};

export default CartWidget;
