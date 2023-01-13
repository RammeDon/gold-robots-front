import { useState } from "react";
import {
  Tooltip,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import MenuIcon from "@mui/icons-material/Menu";
import { navButtons } from "../data/layout";
import logo_sm from "../../../assets/images/logo small.png";
import Auth from "../contexts/Auth/auth";

export function Toolbar(props) {
  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState();

  const [toggle, setToggle] = useState(false);

  const navClick = (event) => {
    if (selected) {
      selected.className = "nav-btn";
      event.target.className = "nav-btn-selected";
      setSelected(event.target);
    } else {
      navButtons[0].selected = false;
      event.target.className = "nav-btn-selected";
      setSelected(event.target);
    }
  };

  const openOnClick = () => {
    setOpen(true);
  };

  const DrawerTheme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paperAnchorRight: {
            backgroundColor: "#081825",
            fontSize: "2rem",
            color: "#e5e7eb",
          },
        },
      },
    },
  });

  if (window.innerWidth > 420) {
    return (
      <div
        className="w-full border-b-[.5px] border-gray-400 p-5 flex justify-between bg-transparent backdrop-blur-sm z-10 absolute top-0"
        id="top-navbar"
      >
        <img src={logo_sm} alt="" width={80} className="relative bottom-2" />
        <div className="flex justify-around w-2/3 px-10">
          {navButtons.map((button, i) => {
            return (
              <button
                className="nav-btn"
                onClick={(event) => {
                  props.navigate(button.path);
                  navClick(event);
                }}
                key={i}
              >
                <span className="mr-5">{button.name}</span>
              </button>
            );
          })}
          <Tooltip title="login/register">
            <IconButton onClick={openOnClick}>
              <LoginSharpIcon className="text-gray-300"></LoginSharpIcon>
            </IconButton>
          </Tooltip>
          <Auth
            setLoggedUser={(data) => {
              props.setLoggedUser({ ...data });
            }}
            setPath={props.navigate}
            setToken={props.setToken}
            open={open}
            setOpen={(value) => {
              setOpen(value);
            }}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="w-full border-b-[.5px] border-gray-400 p-3 flex justify-between bg-transparent backdrop-blur-sm z-10 absolute top-0"
        id="top-navbar"
      >
        <img src={logo_sm} alt="" width={50} className="relative bottom-2" />
        <div className="flex justify-around w-1/4">
          <IconButton
            onClick={() => {
              setToggle(true)
            }}
          >
            <MenuIcon className="text-white"></MenuIcon>
          </IconButton>
          <IconButton onClick={openOnClick}>
            <LoginSharpIcon className="text-white"></LoginSharpIcon>
          </IconButton>
        </div>
        <Auth
          open={open}
          setOpen={(value) => {
            setOpen(value);
          }}
        />
        <ThemeProvider theme={DrawerTheme}>
          <Drawer
            anchor="right"
            open={toggle}
            onClose={() => {
              setToggle(false);
            }}
          >
            <Box
              role="presentation"
              onClick={() => {
                setToggle(false);
              }}
            >
              <List className="flex flex-col">
                {navButtons.map((button, i) => (
                  <>
                    <ListItem key={i}>
                      <ListItemButton
                        onClick={() => {
                          props.navigate(button.path);
                        }}
                      >
                        <ListItemIcon>{button.icon}</ListItemIcon>
                        <ListItemText primary={button.name} />
                      </ListItemButton>
                    </ListItem>
                    <Divider className="bg-gray-400" />
                  </>
                ))}
              </List>
            </Box>
          </Drawer>
        </ThemeProvider>
      </div>
    );
  }
}
