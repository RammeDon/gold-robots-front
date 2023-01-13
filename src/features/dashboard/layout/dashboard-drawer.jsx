import {
  createTheme,
  ThemeProvider,
  Drawer,
  Divider,
  Button,
} from "@mui/material";
import { Email } from "@mui/icons-material";
import logo_sm from "../../../assets/images/logo small.png";
import { drawerButtons } from "../data/layout";

export function DashboardDrawer(props) {
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

  return (
    <ThemeProvider theme={DrawerTheme}>
      <Drawer
        open={props.open}
      anchor="left"
        onClose={() => {
          props.setOpen(false);
        }}
      >
        <div className="w-full h-[100px] px-5 py-3 flex justify-between">
          <img src={logo_sm} width={80} alt="" />
          <p className="text-[#9ca3af]  pt-6 self-center">Gold Robots</p>
        </div>
        <Divider className="bg-[#4b4e54]"></Divider>
        <div className="flex flex-col h-full pb-5">
          {drawerButtons.map((button) => {
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
              <Email></Email>
            </span>
            <span>Contact us</span>
          </Button>
        </div>
      </Drawer>
    </ThemeProvider>
  );
}
