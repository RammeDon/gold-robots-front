import { useState } from "react";
import {
  createTheme,
  Button,
  IconButton,
  Avatar,
  ThemeProvider,
  Popover,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Menu, AccountCircle, Logout } from "@mui/icons-material";
import avatar from "../../../assets/icons/account.png";
import english from "../../../assets/icons/english.png";
import arabic from "../../../assets/icons/arabic.png";

export function DashboardToolbar(props) {
  const [avatarEl, setAvatarEl] = useState(null);
  const [langEl, setLangEl] = useState(null);

  const logout = () => {
    props.setToken(null);

    window.location.href = "/";
  };

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
            props.setOpen(true);
          }}
          className="relative top-3 h-9 w-9"
        >
          <Menu fontSize="small" className="text-[#9ca3af]"></Menu>
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
                    {props.user.firstname} {props.user.lastname}
                  </p>
                  <p className="font-smibold text-sm text-[#9ca3af]">
                    {props.user.username}
                  </p>
                </div>
              </div>
              <Divider className="bg-[#9ca3af]"></Divider>
              <Button onClick={() => props.setPath("profile")}>
                <AccountCircle></AccountCircle>
                Profile
              </Button>
              <Divider className="bg-[#9ca3af]"></Divider>
              <Button
                onClick={() => {
                  logout();
                }}
              >
                <Logout></Logout>
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
    </>
  );
}
