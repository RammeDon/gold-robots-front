import { useState } from "react";
import {
  Divider,
  Drawer,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import { adminButtons } from "../../data/layout";
import logo_sm from "../../assets/images/logo small.png";

export default function LeftDrawer(props) {
  const [open, setOpen] = useState(false);

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
    <ThemeProvider theme={PopoverTheme}>
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
              {adminButtons.map((button) => {
                return (
                  <ThemeProvider>
                    <Button
                      variant="text"
                      onClick={() => {
                        props.setActivePanel(button.path);
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
            </div>
          </Drawer>
        </ThemeProvider>
  );
}
