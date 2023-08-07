import { React, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useDisclosure } from '@mantine/hooks';
import { CartContext } from "../../../context/CartContext";
import { SimpleGrid, Button, Avatar, Table, Group, Text, ActionIcon, Center, Modal, useMantineTheme } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";

export const CartContainer = () => {
  const { cart, removeProduct, getTotalAmount, emptyCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  let totalAmount = getTotalAmount();

  const handleRemoveProduct = (id, quantity) => {
    removeProduct(id, quantity);
    notifications.show({
      message: "El producto se ha quitado del carrito 🙁",
      icon: <IconTrash size="1rem" />,
      color: "red",
    });
  };

  const handleEmptyCart = () => {
    emptyCart();
    close();
    notifications.show({
      message: "El carrito se ha vaciado 🙁",
      icon: <IconTrash size="1rem" />,
      color: "red",
    });
  };

  const handleOpenModal = () => {
    if (cart.length) open();
  };

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
        <Text fz="sm" ta="center">
          {item.quantity}
        </Text>
      </td>
      <td>
        <Text fz="sm" ta="center">
          {item.stock}
        </Text>
      </td>
      <td>
        <Text fz="sm" ta="center">
          $ {item.price.toLocaleString("es-AR")}
        </Text>
      </td>
      <td>
        <Center>
          <ActionIcon>
            <IconTrash
              size="2rem"
              stroke={1.5}
              onClick={() => handleRemoveProduct(item.id, quantity)}
            />
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
                <Text fz="sm" ta="center">
                  Cantidad
                </Text>
              </th>
              <th>
                <Text fz="sm" ta="center">
                  Stock
                </Text>
              </th>
              <th>
                <Text fz="sm" ta="center">
                  Precio
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Center>
      <Center m="md">
        <Text mt="md" fw="bold" fz="lg" ta="center">
          <ActionIcon>
            <IconTrash size="2rem" stroke={1.5} onClick={handleOpenModal} />
          </ActionIcon>
        </Text>
        <Text mt="md" fw="bold" fz="lg" ta="center">
          TOTAL: $ {totalAmount.toLocaleString("es-AR")}
        </Text>
      </Center>
      <Center>
        {cart.length > 0 && (
          <Link to="/checkout">
            <Button variant="outline" size="sm">
              FINALIZAR COMPRA
            </Button>
          </Link>
        )}
      </Center>
      <Modal
        opened={opened}
        onClose={close}
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
        centered
      >
        <Group position="center" spacing="md">
          <Group>
            <Text>Estás seguro que quieres vaciar el carrito?</Text>
          </Group>

          <Group spacing="xl">
            <Button variant="outline" size="sm" onClick={handleEmptyCart}>
              SI
            </Button>
            <Button variant="outline" size="sm" onClick={close}>
              NO
            </Button>
          </Group>
        </Group>
      </Modal>
    </div>
  );
};
