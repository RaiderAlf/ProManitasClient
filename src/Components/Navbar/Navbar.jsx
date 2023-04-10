import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Hidden, Link } from "@mui/material";
import icon from "./../../Images/icon.png";
import { LoginButton } from "../../Views/Login/LoginButton/LoginButton";
import { LogOutButton } from "../../Views/Login/LogOutButton/LogOutButton";
import { SignUpButton } from "../../Views/Login/SignUpButton/SignUpButton";
import { useAuth0 } from "@auth0/auth0-react";

const pages = [
  { message: "Notificaciones", route: "/construction" },
  { message: "Publicar aviso", route: "/posteo" },
];
const settings = ["Ver Perfil", "Mis avisos", "Configuracion de cuenta"];

export default function SearchAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Container maxWidth="xl">
      <AppBar position="fixed">
        <Toolbar>
          <Hidden mdDown>
            <img
              src={icon}
              alt="logo"
              style={{ height: "60px", marginRight: "10px" }}
            />
          </Hidden>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              font: "inherit",
            }}
          >
            Promanitas
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {isAuthenticated &&
                pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link href={page.route}>
                      <Button color="secondary">{page.message}</Button>
                    </Link>
                  </MenuItem>
                ))}
              {!isAuthenticated && (
                <MenuItem onClick={() => loginWithRedirect()}>
                  <Typography textAlign="center">Iniciar sesion</Typography>
                </MenuItem>
              )}
              {!isAuthenticated && (
                <MenuItem href="/registryForm">
                  <Typography textAlign="center">Registrarse</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Hidden mdUp>
            <img
              src={icon}
              alt="logo"
              style={{ height: "60px", marginRight: "10px" }}
            />
          </Hidden>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              font: "inherit",
            }}
          >
            Promanitas
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {isAuthenticated &&
              pages.map((page) => (
                <Link href={page.route}>
                  <Button
                    color="secondary"
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block" }}
                  >
                    {page.message}
                  </Button>
                </Link>
              ))}
          </Box>
          {!isAuthenticated && (
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <Link>
                <Button
                  sx={{ my: 2, display: "block" }}
                  color="secondary"
                  onClick={() => loginWithRedirect()}
                >
                  Iniciar sesion
                </Button>
              </Link>
              <Link href="/registryForm">
                <Button sx={{ my: 2, display: "block" }} color="secondary">
                  Registrarse
                </Button>
              </Link>
            </Box>
          )}
          <Box sx={{ flexGrow: 0 }}>
            {isAuthenticated && (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            )}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={() => logout()}>
                <Typography textAlign="center">Cerrar Sesión</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <div style={{ paddingTop: '7%' }}>
    </div>
    </Container>
  );
}
