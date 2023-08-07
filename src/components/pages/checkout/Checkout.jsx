import { React } from "react";
import { FormCheckoutContainer } from "../form/FormCheckoutContainer";

export const Checkout = ({handleCreateOrder}) => {

  return (
    <FormCheckoutContainer handleCreateOrder={handleCreateOrder} />
  );
};
