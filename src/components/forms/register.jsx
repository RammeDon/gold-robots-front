import { useState, useEffect } from "react";
import read from "../../CRUD/read";
import { Box, Select, TextField, MenuItem, InputLabel } from "@mui/material";

export function Register(props) {
  const [countriesList, setCountries] = useState([]);

  useEffect(() => {
    read.fetchCountries().then((res) => setCountries(res));
  }, []);

  return (
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
        value={props.state.title}
        onChange={(e) =>
          props.setState((current) => {
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
          value={props.state.firstname}
          onChange={(e) =>
            props.setState((current) => {
              return { ...current, firstname: e.target.value };
            })
          }
        />
        <TextField
          variant="outlined"
          label="last name"
          required={true}
          className="w-1/2"
          value={props.state.lastname}
          onChange={(e) =>
            props.setState((current) => {
              return { ...current, lastname: e.target.value };
            })
          }
        />
      </div>
      <TextField
        variant="outlined"
        label="username"
        required={true}
        value={props.state.username}
        onChange={(e) =>
          props.setState((current) => {
            return { ...current, username: e.target.value };
          })
        }
      />
      <TextField
        variant="outlined"
        label="email"
        required={true}
        value={props.state.email}
        onChange={(e) =>
          props.setState((current) => {
            return { ...current, email: e.target.value };
          })
        }
      />
      <TextField
        variant="outlined"
        label="password"
        required={true}
        type="password"
        value={props.state.password}
        onChange={(e) =>
          props.setState((current) => {
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
        value={props.state.phone}
        onChange={(e) =>
          props.setState((current) => {
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
        value={props.state.birthDay}
        onChange={(e) =>
          props.setState((current) => {
            return { ...current, birthDay: e.target.value };
          })
        }
      />
      <InputLabel id="country">country</InputLabel>
      <Select
        labelId="country"
        required={true}
        value={props.state.country}
        onChange={(e) =>
          props.setState((current) => {
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
        value={props.state.language}
        onChange={(e) =>
          props.setState((current) => {
            return { ...current, language: e.target.value };
          })
        }
      >
        <MenuItem value={0}>english</MenuItem>
        <MenuItem value={1}>arrabic</MenuItem>
      </Select>
    </Box>
  );
}
