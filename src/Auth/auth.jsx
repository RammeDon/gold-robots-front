import { useState, useEffect } from "react";
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
} from "@mui/material";

export default function Auth(props) {
  const { open, setOpen } = props;
  const [type, setType] = useState("login");
  const [countriesList, setCountries] = useState([]);
  const [login, setLogin] = useState({ username: "", password: "" });
  const [register, setRegister] = useState({
    title: 0,
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phonenumber: "",
    country: 0,
  });

  /** Waiting for API key */
  // useEffect(() => {
  //   const headers = new Headers();
  //   headers.append("X-CSCAPI-KEY", "API_KEY");
  //   fetch("https://api.countrystatecity.in/v1/countries", {
  //     method: "GET",
  //     headers: headers,
  //     redirect: "follow",
  //   })
  //     .then((res) => setCountries([...res]))
  //     .catch((err) => console.error(err));
  // });

  const handelSubmission = (type, event) => {
    if (type === "login") {
      setLogin(event.target.value);
      console.log(event);
    } else {
      setRegister(event.target.value);
    }
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
          <TextField variant="outlined" label="username" />
          <TextField variant="outlined" label="password" type="password" />
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
          <Select labelId="title" label="title" required={true}>
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
            />
            <TextField
              variant="outlined"
              label="last name"
              required={true}
              className="w-1/2"
            />
          </div>
          <TextField variant="outlined" label="username" required={true} />
          <TextField variant="outlined" label="email" required={true} />
          <TextField
            variant="outlined"
            label="password"
            required={true}
            type="password"
          />
          <TextField
            variant="outlined"
            label="confirm password"
            required={true}
            type="password"
          />
          <TextField variant="outlined" label="phone number" required={true} />
          <InputLabel id="country">country</InputLabel>
          <Select label="country" labelId="country" required={true}>
            {countriesList.map((country, i) => {
              if (country) {
                return (
                  <MenuItem value={country.id} key={i}>
                    {country.name}
                  </MenuItem>
                );
              }
            })}
          </Select>
          <InputLabel id="language">language</InputLabel>
          <Select label="language" labelId="language" required={false}>
            <MenuItem value={0}>english</MenuItem>
            <MenuItem value={1}>arrabic</MenuItem>
          </Select>
        </Box>
      );
      break;
  }

  return (
    <Dialog open={open} title={type === "login" ? "Login" : "Register"}>
      <div className="p-12 flex flex-col justify-around align-middle">
        <h1 className="self-center">{type}</h1>
        <form
          onSubmit={(event)=>handelSubmission(type,event)}
          className="self-center flex flex-col justify-around min-h-max w-full"
        >
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
            <Button type="submit" variant="contained">
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
  );
}
