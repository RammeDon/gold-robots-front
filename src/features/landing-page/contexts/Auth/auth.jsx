import { useEffect, useState } from "react";
import create from "../../../../CRUD/create";
import read from "../../../../CRUD/read";
import { Button, Dialog, Link, Snackbar, Alert } from "@mui/material";
import { Login, Register } from "../../components/forms";

export default function Auth(props) {
  const { open, setOpen } = props;
  const [type, setType] = useState("login");
  const [loginState, setLoginState] = useState({ username: "", password: "" });
  const [registerState, setRegisterState] = useState({
    title: 0,
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    birthDay: "",
    country: 0,
    language: 0,
  });

  const [openAlert, setOpenAlert] = useState();

  const handelSubmission = async () => {
    if (type === "login") {
      await create
        .loginUser({
          username: loginState.username,
          password: loginState.password,
        })
        .then((token) => {
          if (token) {
            props.setToken(token);
            props.setPath("login");
            console.log("token");
          }
        })
        .finally(() => {
          read.fetchOne("users", loginState.username).then((res) => {
            props.setLoggedUser(res);
          });
          console.log("mmd", loginState);
        });
    } else if (type === "register") {
      console.log(registerState);
      create
        .createUser(registerState)
        .then((res) => {
          setOpenAlert(true);
          console.log("registerd");
        })
        .finally(() => {
          create.createAccount(registerState).then(() => {
            console.log("account created");
          });
        });
    }
    setOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  let form;
  switch (type) {
    default:
      form = <Login state={loginState} setState={setLoginState}></Login>;
      break;
    case "login":
      form = <Login state={loginState} setState={setLoginState}></Login>;
      break;
    case "register":
      form = (
        <Register state={registerState} setState={setRegisterState}></Register>
      );
      break;
  }

  return (
    <>
      <Dialog open={open} title={type === "login" ? "Login" : "Register"}>
        <div className="p-12 flex flex-col justify-around align-middle">
          <h1 className="self-center">{type}</h1>
          <form className="self-center flex flex-col justify-around min-h-max w-full">
            {form}
            <div className="mt-5 flex justify-around align-middle">
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => {
                  setOpen(false);
                }}
              >
                close
              </Button>
              <Button onClick={handelSubmission} variant="contained">
                submit
              </Button>
            </div>
          </form>
          <p className="self-center">
            please{" "}
            <Link
              role="button"
              onClick={() => {
                setType("login");
              }}
            >
              Login
            </Link>{" "}
            or{" "}
            <Link
              role="button"
              onClick={() => {
                setType("register");
              }}
            >
              Register
            </Link>
          </p>
        </div>
      </Dialog>
      <Snackbar open={openAlert} onClose={handleClose} autoHideDuration={4000}>
        <Alert
          severity="success"
          onClose={handleClose}
          sx={{ width: "100%", position: "relative", top: "80vh" }}
        >
          Registration successful welcome to GoldRobots!
        </Alert>
      </Snackbar>
    </>
  );
}
