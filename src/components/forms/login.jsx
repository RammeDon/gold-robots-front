import { FormControl, TextField } from "@mui/material";

export function Login(props) {
  return (
    <FormControl className="flex flex-col h-[200px] justify-around">
      <TextField
        value={props.state.username}
        onChange={(e) =>
          props.setState((current) => {
            return { ...current, username: e.target.value };
          })
        }
        variant="outlined"
        label="username"
      />
      <TextField
        value={props.state.password}
        onChange={(e) =>
          props.setState((current) => {
            return { ...current, password: e.target.value };
          })
        }
        variant="outlined"
        label="password"
        type="password"
      />
    </FormControl>
  );
}
