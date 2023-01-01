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
  Avatar,
  Button,
  Popover,
} from "@mui/material";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import MenuIcon from "@mui/icons-material/Menu";
import { navButtons, dashboardButtons } from "../data/layout";
import logo_sm from "../assets/images/logo small.png";
import arabic from "../assets/icons/arabic.png";
import english from "../assets/icons/english.png";
import avatar from "../assets/icons/account.png";
import Auth from "../contexts/Auth/auth";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Settings } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";

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

  const toggleDrawer = (toggle) => {
    setToggle(toggle);
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
              toggleDrawer(true);
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
              toggleDrawer(false);
            }}
          >
            <Box
              role="presentation"
              onClick={() => {
                toggleDrawer(false);
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

export function DashboardToolbar(props) {
  const [open, setOpen] = useState(false);
  const [avatarEl, setAvatarEl] = useState(null);
  const [langEl, setLangEl] = useState(null);

  const DrawerTheme = createTheme({
    components: {
      MuiDrawer: {
        styleOverrides: {
          paperAnchorLeft: {
            backgroundColor: "#111827",
            fontSize: "2rem",
            color: "#d1d5db",
            minWidth: "280px",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          text: {
            width: "80%",
            alignSelf: "center",
            marginTop: "12px",
            display: "flex",
            justifyContent: "flex-start",
            alignContent: "flex-start",
            paddingRight: "30%",
            height: "50px",
          },
          selected: {
            backgroundColor: "#242a38",
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#9ca3af",
      },
      success: {
        main: "#10b981",
      },
    },
  });

  const PopoverTheme = createTheme({
    components: {
      MuiPopover: {
        styleOverrides: {
          paper: {
            backgroundColor: "#111827",
            color: "#d1d5db",
            width: "max-content",
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            padding: "0px",
            width: "100%",
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            display: "flex",
            justifyContent: "flex-start",
            gap: "12px",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          text: {
            display: "flex",
            justifyContent: "flex-start",
            gap: "12px",
            color: "#e5eaf0",
            paddingTop: "13px",
            paddingBottom: "13px",
            paddingLeft: "20px",
            width: "100%",
          },
        },
      },
    },
  });

  return (
    <>
      <div className="h-16 bg-[#111827] flex justify-between px-3 border-b-[1px] border-[#1d2636]">
        <Button
          onClick={() => {
            setOpen(true);
          }}
          className="relative top-3 h-9 w-9"
        >
          <MenuIcon fontSize="small" className="text-[#9ca3af]"></MenuIcon>
        </Button>
        <div className="flex justify-around w-[150px] py-auto h-full">
          <Button
            className="relative top-3 w-min h-min p-2"
            onClick={(e) => setLangEl(e.currentTarget)}
          >
            <img src={english} width={28} alt="flag" />
          </Button>
          <IconButton
            disableRipple={true}
            onClick={(e) => setAvatarEl(e.currentTarget)}
          >
            <Avatar
              className="my-auto"
              src={props.profile ? props.profile : avatar}
            ></Avatar>
          </IconButton>
          <ThemeProvider theme={PopoverTheme}>
            <Popover
              open={Boolean(avatarEl)}
              onClose={() => setAvatarEl(null)}
              anchorEl={avatarEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <div className="flex justify-start gap-3 pl-3 py-2 pr-10">
                <IconButton disableRipple={true}>
                  <Avatar src={props.profile ? props.profile : avatar}></Avatar>
                </IconButton>
                <div className="flex flex-col justify-around">
                  <p className="font-smibold text-lg text-[#e5eaf0]">
                    firstname sirname
                  </p>
                  <p className="font-smibold text-sm text-[#9ca3af]">
                    username
                  </p>
                </div>
              </div>
              <Divider className="bg-[#9ca3af]"></Divider>
              <Button onClick={()=>props.setPath('profile')}>
                <AccountCircleIcon></AccountCircleIcon>
                Profile
              </Button>
              <Divider className="bg-[#9ca3af]"></Divider>
              <Button>
                <LogoutIcon></LogoutIcon>
                Logout
              </Button>
            </Popover>
            <Popover
              open={Boolean(langEl)}
              onClose={() => setLangEl(null)}
              anchorEl={langEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <List>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <img src={english} width={26} alt="" />
                    </ListItemIcon>
                    <ListItemText> Engilish</ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon>
                      <img src={arabic} width={26} alt="" />
                    </ListItemIcon>
                    <ListItemText>Arabic</ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Popover>
          </ThemeProvider>
        </div>
      </div>

      <ThemeProvider theme={DrawerTheme}>
        <Drawer
          open={open}
          anchor="left"
          onClose={() => {
            setOpen(false);
          }}
        >
          <div className="w-full h-[100px] px-5 py-3 flex justify-between">
            <img src={logo_sm} width={80} alt="" />
            <p className="text-[#9ca3af]  pt-6 self-center">Gold Robots</p>
          </div>
          <Divider className="bg-[#4b4e54]"></Divider>
          <div className="flex flex-col h-full pb-5">
            {dashboardButtons.map((button) => {
              return (
                <ThemeProvider>
                  <Button
                    variant="text"
                    onClick={() => {
                      props.setPath(button.path);
                    }}
                    color={props.path === button.path ? "success" : "primary"}
                    disableRipple={true}
                  >
                    <span className="mr-3">{button.icon}</span>
                    <span>{button.name}</span>
                  </Button>
                </ThemeProvider>
              );
            })}
            <Button
              onClick={() => {
                props.setPath("mail");
              }}
              color={props.path === "mail" ? "success" : "primary"}
              disableRipple={true}
              className="!mt-auto "
            >
              <span className="mr-3">
                <EmailIcon></EmailIcon>
              </span>
              <span>Contact us</span>
            </Button>
          </div>
        </Drawer>
      </ThemeProvider>
    </>
  );
}
