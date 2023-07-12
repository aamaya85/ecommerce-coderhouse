import { BiCart } from "react-icons/bi";
import { Indicator } from "@mantine/core";
import "./CartWidget.css"
  
const CartWidget = () => {
  return (
    <Indicator inline label={4} size={16}>
      <BiCart className="cart" size={"2em"} />
    </Indicator>
  );
};

export default CartWidget;
