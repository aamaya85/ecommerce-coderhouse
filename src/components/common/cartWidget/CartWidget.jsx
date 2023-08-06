import { useContext } from "react";
import { BiCart } from "react-icons/bi";
import { Indicator } from "@mantine/core";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartWidget.css"
  
const CartWidget = () => {

  const { getTotalItems } = useContext(CartContext)
  const totalItems = getTotalItems()

  const indicatorComponent = () => {
    const showBadge = totalItems > 0
    const cartWidgetComponent = <BiCart className="cart" size={"2em"} />
    if (showBadge){
      return (<Indicator inline label={totalItems} size={18}>{cartWidgetComponent}</Indicator>)
    }
    return (<Indicator disabled>{cartWidgetComponent}</Indicator>)
  }

  return (
    <Link to="cart">
      {indicatorComponent()}
    </Link>
  )

};

export default CartWidget;