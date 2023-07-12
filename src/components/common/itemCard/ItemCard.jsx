import { Card, Image, Text, Group, createStyles, Button, rem } from '@mantine/core';
import { Navigate, useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    boxShadow: '1px 2px 9px #F4AAB9',
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  }

}));

export const ItemCard = ( {product} ) => {
  const { classes } = useStyles();
  const navigate = useNavigate()

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={product.img} height={200} fit="scale-down" alt="Tesla Model S" />
      </Card.Section>

      <Group position="apart" mt="md" mb="md">
        <div>
          <Text fw={500}>{product.title}</Text>
        </div>
      </Group>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text fz="xl" fw={700} sx={{ lineHeight: 1 }}>
              $ {(product.price).toLocaleString()}
            </Text>
          </div>

          <Button onClick={() => navigate(`/item/${product.id}`)} radius="xl" style={{ flex: 1 }}>
            Ver detalle
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}