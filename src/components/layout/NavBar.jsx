import { createStyles, Header, Container, Group, rem } from "@mantine/core";
import CartWidget from "../common/CartWidget";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",

    alignItems: "center",
    height: "100%",
  },
  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

const NavBar = () => {
  const { classes } = useStyles();

  const links = [
    { link: "/about", label: "About us" },
    { link: "/audio", label: "Audio" },
    { link: "/instruments", label: "Instruments" },
  ];

  const menuItems = links.map((link) => (
    <a key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </a>
  ));

  return (
    <Header height={120} mb={120}>
      <Container className={classes.header}>
        <div style={{ height: "100%", padding: 12 }}>
          <img
            style={{ height: "100%" }}
            src="https://res.cloudinary.com/dzzlp6dxw/image/upload/v1687315837/music-modric-logo_aqdvtd.png"
            alt="music-modric-logo"
          />
        </div>
        <Group>
          <Group spacing={5}>{menuItems}</Group>
          <CartWidget />
        </Group>
      </Container>
    </Header>
  );
};

export default NavBar;
