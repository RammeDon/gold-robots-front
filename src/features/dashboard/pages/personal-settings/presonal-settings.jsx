import {
  Alert,
  AlertTitle,
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import update from "../../../../CRUD/update";
import create from "../../../../CRUD/create";
import read from "../../../../CRUD/read";

export function PersonalSetting(props) {
  const [selectedContract, setSelectedContract] = useState();
  const [settings, setSettings] = useState({
    leverage: "",
    timeframe: "",
    timerange: "",
    extraDays: "",
    maxUsage: "",
  });
  const [openError, setOpenAlert] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const handelSubmission = async () => {
    const newContract = { ...selectedContract, ...settings };

    await read.fetchOne("contracts", props.user.username).then((res) => {
      console.log("fetched contracts", res);
      if (res.length < 2) {
        create.createContract(newContract).then(() => {
          console.log("created new contract");
          setOpenSuccess(true);
        });
      } else {
        setOpenAlert(true);
      }
    });
  };

  return (
    <>
      <Snackbar
        autoHideDuration={4000}
        open={openSuccess}
        onClose={() => {
          setOpenSuccess(false);
        }}
      >
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          contract submited
        </Alert>
      </Snackbar>
      <Snackbar
        autoHideDuration={4000}
        onClose={() => {
          setOpenAlert(false);
        }}
        open={openError}
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          cannot add more then two contracts
        </Alert>
      </Snackbar>
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
                    <MenuItem value={"1:100"}>1:100</MenuItem>
                    <MenuItem value={"1:200"}>1:200</MenuItem>
                    <MenuItem value={"1:300"}>1:500</MenuItem>
                    <MenuItem value={"1:400"}>1:1000</MenuItem>
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
                    <MenuItem value={"5 Days"}>5 Days</MenuItem>
                    <MenuItem value={"10 Days"}>10 Days</MenuItem>
                    <MenuItem value={"25 Days"}>25 Days</MenuItem>
                    <MenuItem value={"50 Days"}>50 Days</MenuItem>
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
                    <MenuItem value={"1 min"}>1 min</MenuItem>
                    <MenuItem value={"5 min"}>5 min</MenuItem>
                    <MenuItem value={"15 min"}>15 min</MenuItem>
                    <MenuItem value={"1 hour"}>1 hour</MenuItem>
                    <MenuItem value={"1 day"}>1 day</MenuItem>
                    <MenuItem value={"all"}>All</MenuItem>
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
                    <MenuItem value={"35 %"}>35 %</MenuItem>
                    <MenuItem value={"50 %"}>50 %</MenuItem>
                    <MenuItem value={"85 %"}>85 %</MenuItem>
                    <MenuItem value={"100 %"}>100 %</MenuItem>
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
                  Submit contract
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
