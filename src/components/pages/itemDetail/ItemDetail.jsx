import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem } from "@mantine/core";
import { CounterContainer } from "../../common/counter/CounterContainer";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

export const ItemDetail = ({item, handleAddProduct, handleQuantity}) => {

  const { classes } = useStyles();
  return (
    <Center maw={600} mx="auto">
      <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image
            src={item.img}
            fit="scale-down"
            height={250}
            alt={item.title}
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="md">
          <div>
            <Text fw={500}>{item.title}</Text>
            <Text fz="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
          <Badge variant="outline">{item.category}</Badge>
        </Group>

        <Card.Section className={classes.section}>
          <Group spacing={30}>
              <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
                $ {item.price}
              </Text>
              
              <CounterContainer max={item.stock} handleQuantity={handleQuantity}/>

              <Button radius="md" variant="light" style={{ flex: 1 }} onClick={handleAddProduct}>
                Agregar al carrito
              </Button>
              <Button radius="md" style={{ flex: 1 }}>
                Comprar
              </Button>
          </Group>
        </Card.Section>
      </Card>
    </Center>
  );
};
