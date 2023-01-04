import {
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useEffect, useState } from "react";
import read from "../../CRUD/read";
import update from "../../CRUD/update";

export function PersonalSetting(props) {
  const [selectedContract, setSelectedContract] = useState();
  const [settings, setSettings] = useState({
    leverage: "",
    timeframe: "",
    timerange: "",
    extraDays: "",
    maxUsage: "",
  });

  const handelSubmission = () => {
    console.log(props.contracts);

    // update
    // .updateContract(
    //     { ...selectedContract, personalSettings: settings },
    //     selectedContract._id
    //   )
    //   .then(console.log("personal settings", selectedContract));
  };

  return (
    <Grid container sx={{ justifyContent: "start", gap: "12px" }}>
      <Grid md={6} sm={12}>
        <FormControl>
          <InputLabel id="contract" sx={{ color: "white" }}>
            Chosen contract
          </InputLabel>
          <Select
            sx={{ width: "300px" }}
            inputProps={{ sx: { color: "white" } }}
            labelId="contract"
            label="Chosen contract"
            value={selectedContract}
            onChange={(e) => {
              setSelectedContract(props.contracts[e.target.value]);
            }}
          >
            {props.contracts.map((contract, i) => {
              return (
                <MenuItem value={i} key={contract._id} sx={{}}>
                  {contract.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid md={12} sm={12}>
        <Card
          sx={{
            backgroundColor: "#111827",
            width: "80%",
            minHeight: "100px",
            mx: "auto",
          }}
        >
          <Grid
            container
            sx={{
              gap: "30px",
              width: "100%",
              height: "100",
              justifyContent: "center",
              p: 3,
            }}
          >
            <Grid md={5} sm={12}>
              <FormControl>
                <InputLabel sx={{ color: "white" }} id="leverage">
                  Leverage
                </InputLabel>
                <Select
                  inputProps={{ sx: { color: "white" } }}
                  sx={{ width: 300 }}
                  label="Leverage"
                  labelId="leverage"
                  value={settings.leverage}
                  onChange={(e) => {
                    setSettings((current) => ({
                      ...current,
                      leverage: e.target.value,
                    }));
                  }}
                >
                  <MenuItem value={0}>1:100</MenuItem>
                  <MenuItem value={1}>1:200</MenuItem>
                  <MenuItem value={2}>1:500</MenuItem>
                  <MenuItem value={3}>1:1000</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={5} sm={12}>
              <FormControl>
                <InputLabel sx={{ color: "white" }} id="days">
                  Add Extra Day
                </InputLabel>
                <Select
                  inputProps={{ sx: { color: "white" } }}
                  sx={{ width: 300 }}
                  label="Add Extra Day"
                  labelId="days"
                  value={settings.extraDays}
                  onChange={(e) => {
                    setSettings((current) => ({
                      ...current,
                      extraDays: e.target.value,
                    }));
                  }}
                >
                  <MenuItem value={0}>5 Days</MenuItem>
                  <MenuItem value={1}>10 Days</MenuItem>
                  <MenuItem value={2}>25 Days</MenuItem>
                  <MenuItem value={3}>50 Days</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={5} sm={12}>
              <FormControl>
                <InputLabel sx={{ color: "white" }} id="timeframe">
                  Trading timeframe
                </InputLabel>
                <Select
                  sx={{ width: 300 }}
                  label="Trading timeframe"
                  labelId="timeframe"
                  inputProps={{ sx: { color: "white" } }}
                  value={settings.timeframe}
                  onChange={(e) => {
                    setSettings((current) => ({
                      ...current,
                      timeframe: e.target.value,
                    }));
                  }}
                >
                  <MenuItem value={0}>1 min</MenuItem>
                  <MenuItem value={1}>5 min</MenuItem>
                  <MenuItem value={2}>15 min</MenuItem>
                  <MenuItem value={3}>1 hour</MenuItem>
                  <MenuItem value={4}>1 day</MenuItem>
                  <MenuItem value={5}>All</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={5} sm={12}>
              <FormControl>
                <InputLabel sx={{ color: "white" }} id="timerange">
                  Time range
                </InputLabel>
                <Select
                  sx={{ width: 300 }}
                  label="Time range"
                  labelId="timerange"
                  inputProps={{ sx: { color: "white" } }}
                  value={settings.timerange}
                  onChange={(e) => {
                    setSettings((current) => ({
                      ...current,
                      timerange: e.target.value,
                    }));
                  }}
                >
                  <MenuItem value={0}>London time</MenuItem>
                  <MenuItem value={1}>Tokyo time</MenuItem>
                  <MenuItem value={2}>New york time</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={5} sm={12}>
              <FormControl>
                <InputLabel sx={{ color: "white" }} id="MUD">
                  Max usage deposite
                </InputLabel>
                <Select
                  sx={{ width: 300 }}
                  label="Max usage deposite"
                  labelId="MUD"
                  inputProps={{ sx: { color: "white" } }}
                  value={settings.maxUsage}
                  onChange={(e) => {
                    setSettings((current) => ({
                      ...current,
                      maxUsage: e.target.value,
                    }));
                  }}
                >
                  <MenuItem value={0}>35 %</MenuItem>
                  <MenuItem value={1}>50 %</MenuItem>
                  <MenuItem value={2}>85 %</MenuItem>
                  <MenuItem value={3}>100 %</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid md={5} sm={12}>
              <Button
                sx={{ color: "white", width: 200, height: 60 }}
                color="secondary"
                variant="contained"
                onClick={handelSubmission}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}
