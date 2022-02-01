import * as React from "react";
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
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import KG from "../image/kyrgyzstan.png";

const pages = ["Home", "Blogs", "Favorite"];
const userMenu = ["Admin Page", "Create Blog", "Logout"];

const NaviBar = () => {
  const { authWithGoogle, user, logout } = React.useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
    <AppBar position="static" style={{ background: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img src={KG} alt="pic" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((item) => {
                if (item === "Blogs") {
                  return (
                    <Link
                      to="/blogs/all"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <MenuItem key={item} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{item}</Typography>
                      </MenuItem>
                    </Link>
                  );
                }
                if (item === "Home") {
                  return (
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <MenuItem key={item} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{item}</Typography>
                      </MenuItem>
                    </Link>
                  );
                } if(item === "Favorite") {
                  return (
                    <Link
                      to="/blogs/favorit"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <MenuItem key={item} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{item}</Typography>
                      </MenuItem>
                    </Link>
                  );
                }
                return (
                  <MenuItem key={item} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{item}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            color="black"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img src={KG} alt="pic" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((item) => {
              if (item === "Blogs") {
                return (
                  <Link
                    to="/blogs/all"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button
                      key={item}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      {item}
                    </Button>
                  </Link>
                );
              }
              if (item === "Home") {
                return (
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button
                      key={item}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      {item}
                    </Button>
                  </Link>
                );
              } if (item === "Favorite") {
                return (
                  <Link
                    to="/blogs/favorit"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button
                      key={item}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      {item}
                    </Button>
                  </Link>
                );
              }
              return (
                <Button
                  key={item}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {item}
                </Button>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <IconButton sx={{ p: 0 }}>
                {user ? (
                  <>
                    <MenuItem>
                      <Avatar
                        title="Open settings"
                        onClick={handleOpenUserMenu}
                        src={user.photoURL}
                        alt="user photo"
                      />
                    </MenuItem>
                  </>
                ) : (
                  <Button color="inherit" onClick={authWithGoogle}>
                    Войти
                  </Button>
                )}
              </IconButton>
            </Tooltip>
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
              {userMenu.map((item) => {
                if (item === "Logout") {
                  return (
                    <MenuItem key={item}  onClick={handleCloseUserMenu}> 
                      <Typography onClick={logout} textAlign="center">{item}</Typography>
                    </MenuItem>
                  );
                }
                if (item === "Create Blog") {
                  return (
                    <MenuItem key={item} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/add"
                        >
                          {item}
                        </Link>
                      </Typography>
                    </MenuItem>
                  );
                }
                if (item === "Admin Page") {
                  return (
                    <MenuItem key={item} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/admin"
                        >
                          {item}
                        </Link>
                      </Typography>
                    </MenuItem>
                  );
                }
                return (
                  <MenuItem key={item} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{item}</Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NaviBar;
