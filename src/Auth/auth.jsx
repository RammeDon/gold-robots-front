import { useState, useEffect } from "react";
import create from "../CRUD/create";

import {
  FormControl,
  Box,
  Select,
  Button,
  TextField,
  MenuItem,
  InputLabel,
  Dialog,
  Link,
  Snackbar,
  Alert,
} from "@mui/material";

export default function Auth(props) {
  const { open, setOpen } = props;
  const [type, setType] = useState("login");
  const [countriesList, setCountries] = useState([]);
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

  /** Waiting for API key */
  useEffect(() => {
    const headers = new Headers();
    headers.append(
      "X-CSCAPI-KEY",
      "UGZ5bnVweUloZ1lKWTZBYjk3U3VuQ2VRTDl2aUY5UTQzenJieVRLSw=="
    );
    fetch("https://api.countrystatecity.in/v1/countries", {
      method: "GET",
      headers: headers,
      redirect: "follow",
    })
      .then((res) =>
        res.json().then((countries) => setCountries(() => countries))
      )
      .catch((err) => console.error(err));
  }, []);

  const handelSubmission = () => {
    if (type === "login") {
      console.log(loginState);
    } else if (type === "register") {
      create.createUser(registerState).then((res) => setOpenAlert(true));
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
      form = (
        <FormControl>
          <TextField
            variant="outlined"
            label="username"
            className="invisible"
          />
          <TextField variant="outlined" label="password" />
        </FormControl>
      );
      break;
    case "login":
      form = (
        <FormControl className="flex flex-col h-[200px] justify-around">
          <TextField
            value={loginState.username}
            onChange={(e) =>
              setLoginState((current) => {
                return { ...current, username: e.target.value };
              })
            }
            variant="outlined"
            label="username"
          />
          <TextField
            value={loginState.password}
            onChange={(e) =>
              setLoginState((current) => {
                return { ...current, password: e.target.value };
              })
            }
            variant="outlined"
            label="password"
            type="password"
          />
        </FormControl>
      );
      break;
    case "register":
      form = (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: "12px",
          }}
        >
          <InputLabel id="title">title</InputLabel>
          <Select
            labelId="title"
            required={true}
            value={registerState.title}
            onChange={(e) =>
              setRegisterState((current) => {
                return { ...current, title: e.target.value };
              })
            }
          >
            <MenuItem value={0}>Mr.</MenuItem>
            <MenuItem value={1}>Ms.</MenuItem>
            <MenuItem value={2}>Co.</MenuItem>
          </Select>
          <div className="flex justify-between w-full gap-5">
            <TextField
              variant="outlined"
              label="first name"
              required={true}
              className="w-1/2"
              value={registerState.firstname}
              onChange={(e) =>
                setRegisterState((current) => {
                  return { ...current, firstname: e.target.value };
                })
              }
            />
            <TextField
              variant="outlined"
              label="last name"
              required={true}
              className="w-1/2"
              value={registerState.lastname}
              onChange={(e) =>
                setRegisterState((current) => {
                  return { ...current, lastname: e.target.value };
                })
              }
            />
          </div>
          <TextField
            variant="outlined"
            label="username"
            required={true}
            value={registerState.username}
            onChange={(e) =>
              setRegisterState((current) => {
                return { ...current, username: e.target.value };
              })
            }
          />
          <TextField
            variant="outlined"
            label="email"
            required={true}
            value={registerState.email}
            onChange={(e) =>
              setRegisterState((current) => {
                return { ...current, email: e.target.value };
              })
            }
          />
          <TextField
            variant="outlined"
            label="password"
            required={true}
            type="password"
            value={registerState.password}
            onChange={(e) =>
              setRegisterState((current) => {
                return { ...current, password: e.target.value };
              })
            }
          />
          <TextField
            variant="outlined"
            label="confirm password"
            required={true}
            type="password"
          />
          <TextField
            variant="outlined"
            label="phone number"
            required={true}
            value={registerState.phone}
            onChange={(e) =>
              setRegisterState((current) => {
                return { ...current, phone: e.target.value };
              })
            }
          />
          <InputLabel id="birth-day">birth day</InputLabel>
          <TextField
            variant="outlined"
            labelId="birth-day"
            required={true}
            type="date"
            value={registerState.birthDay}
            onChange={(e) =>
              setRegisterState((current) => {
                return { ...current, birthDay: e.target.value };
              })
            }
          />
          <InputLabel id="country">country</InputLabel>
          <Select
            labelId="country"
            required={true}
            value={"1"}
            onChange={(e) =>
              setRegisterState((current) => {
                return { ...current, country: e.target.value };
              })
            }
          >
            {countriesList.map((country, i) => {
              return (
                <MenuItem value={country.id} key={i}>
                  {country.name}
                </MenuItem>
              );
            })}
          </Select>
          <InputLabel id="language">language</InputLabel>
          <Select
            labelId="language"
            required={false}
            value={0}
            onChange={(e) =>
              setRegisterState((current) => {
                return { ...current, language: e.target.value };
              })
            }
          >
            <MenuItem value={0}>english</MenuItem>
            <MenuItem value={1}>arrabic</MenuItem>
          </Select>
        </Box>
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
                console.log(type);
              }}
            >
              Login
            </Link>{" "}
            or{" "}
            <Link
              role="button"
              onClick={() => {
                setType("register");
                console.log(type);
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
