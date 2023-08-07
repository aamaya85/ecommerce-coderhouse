import React from "react";
import { useForm } from "@mantine/form";
import { FormCheckout } from "./FormCheckout";

export const FormCheckoutContainer = ({ handleCreateOrder }) => {

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      email_repeat: "",
    },
    validate: {
      name: (value) => (value.trim().length ? null : "Nombre es obligatorio"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
      email_repeat: (value, values) =>
        value !== values.email ? "El correo debe coincidir" : null,
    },
  });

  return (
    <FormCheckout form={form} handleSumbit={handleCreateOrder}/>
  );
};
