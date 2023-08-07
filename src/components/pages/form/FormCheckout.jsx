import React from "react";
import { TextInput, Group, Button } from "@mantine/core";  

export const FormCheckout = ({ form, handleSumbit }) => {

  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleSumbit(values))}>
        <TextInput
          mb="sm"
          withAsterisk
          label="Nombre"
          {...form.getInputProps("name")}
        />
        <TextInput
          mb="sm"
          withAsterisk
          label="Email"
          {...form.getInputProps("email")}
        />

        <TextInput
          mb="sm"
          withAsterisk
          label="Repeat email"
          {...form.getInputProps("email_repeat")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Enviar</Button>
        </Group>
      </form>
    </>
  );
};
