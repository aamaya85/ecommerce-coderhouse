import { React, useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Avatar, Table, Group, Text, ActionIcon, Center, ScrollArea, Container } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { CounterContainer } from "../../common/counter/CounterContainer";

export const CartContainer = () => {
  const { cart, removeProduct, getTotalAmount } = useContext(CartContext);
  const [ quantity, setQuantity ] = useState(1)

  const handleQuantity = (q) => {
    setQuantity(q)
  }

  let totalAmount = getTotalAmount()

  const rows = cart.map((item, idx) => (
    <tr key={idx}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={item.img} radius={40} />
          <div>
            <Text fz="sm" fw={500}>
              {item.title}
            </Text>
          </div>
        </Group>
      </td>
      <td width="150">
        <Text fz="sm" ta="center">{item.quantity}</Text>
      </td>
      <td>
        <Text fz="sm" ta="center">{item.stock}</Text>
      </td>
      <td>
        <Text fz="sm" ta="center">$ {item.price.toFixed(2)}</Text>
      </td>
      <td>
        <Center>
          <ActionIcon>
            <IconTrash size="2rem" stroke={1.5} onClick={() => removeProduct(item.id, quantity)}/>
          </ActionIcon>
        </Center>
      </td>
    </tr>
  ));

  return (
    <div>
      <Center maw={800} mx="auto">
          <Table verticalSpacing="md">
            <thead>
              <tr>
                <th>Producto</th>
                <th>
                  <Text fz="sm" ta="center">Cantidad</Text>
                </th>
                <th>
                  <Text fz="sm" ta="center">Stock</Text>
                </th>
                <th>
                  <Text fz="sm" ta="center">Precio</Text>
                </th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
      </Center>
      <Text mt="md" fw="bold" fz="lg" ta="center">TOTAL: $ {totalAmount}</Text>
      </div>
  );
};
