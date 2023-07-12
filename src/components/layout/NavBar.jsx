import { createStyles, Header, Container, Group, rem } from "@mantine/core";
import CartWidget from "../common/cartWidget/CartWidget";
import { Link, Outlet } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  Header: {
    backgroundColor: "#78ffeb",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(22)}`,
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
    { path: "/category", label: "Todos" },
    { path: "/category/audio", label: "Audio" },
    { path: "/category/accesories", label: "Accesorios" },
    { path: "/category/instruments", label: "Instrumentos" },
  ];

  const menuItems = links.map((link, idx) => (
    <Link key={idx} to={link.path} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <div>
    <Header height={120} mb={60} style={{backgroundColor: "#78ffeb", boxShadow: '1px 2px 9px #F4AAB9', position: "sticky"}}>
      <Container className={classes.header}>
        <div style={{ height: "100%", padding: 12 }}>
          <Link to="/">
            <img
              style={{ height: "100%" }}
              src="https://res.cloudinary.com/dzzlp6dxw/image/upload/v1687315837/music-modric-logo_aqdvtd.png"
              alt="music-modric-logo"
            />
          </Link>
        </div>
        <Group>
          <Group spacing={5}>
            { menuItems }
          </Group>
          <CartWidget />
        </Group>
      </Container>
    </Header>
    <div className={classes.bar}></div>
    <Outlet />
    </div>
  );
};

export default NavBar;
