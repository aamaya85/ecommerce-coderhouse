import { BiCart } from "react-icons/bi";
import { Indicator } from "@mantine/core";

const CartWidget = () => {
  return (
    <Indicator inline label={4} size={16}>
      <BiCart size={"2em"} />
    </Indicator>
  );
};

export default CartWidget;
