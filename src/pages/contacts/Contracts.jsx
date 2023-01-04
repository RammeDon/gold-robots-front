import React, { useEffect, useState } from "react";
import "./contracts.css";
import { contracts } from "../../data/contracts";
import {
  Alert,
  AlertTitle,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Pagination,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { DurationChart, MinimumProfitChart } from "../../components/ui/charts";
import { ProfitSharingChart } from "../../components/ui/charts/pie";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export default function Contracts() {
  if (window.innerWidth > 420) {
    return (
      <div className="contracts-container">
        <div className="grid grid-cols-2 grid-rows-2 pt-32 gap-6 p-5">
          {contracts.map((contract, i) => {
            return (
              <Card
                key={i}
                className="contracts col-span-1 row-span-1"
                style={{ backgroundColor: contract.color }}
              >
                <CardContent>
                  <Typography component="div" variant="h5">
                    {contract.name}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography
                    color="text.secondary"
                    className="px-20 text-left"
                  >
                    <p className="flex">
                      <b>Minimum duration:</b>{" "}
                      <span className="ml-auto">{contract.minDuration}</span>
                    </p>
                    <p className="flex">
                      <b>Minimum desposite:</b>{" "}
                      <span className="ml-auto">{contract.minDeposite}</span>
                    </p>
                    <p className="flex">
                      <b>Garantie percentage:</b>{" "}
                      <span className="ml-auto">
                        {contract.garantiePercentage}
                      </span>
                    </p>
                    <p className="flex">
                      <b>Admin clients:</b>{" "}
                      <span className="ml-auto">{contract.adminClients}</span>
                    </p>
                    <p className="flex">
                      <b>Level:</b>{" "}
                      <span className="ml-auto">{contract.level}</span>
                    </p>
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="contracts-container">
        <div className="flex flex-col relative top-20 gap-6 p-5">
          {contracts.map((contract, i) => {
            return (
              <Card key={i} className="contracts col-span-1 row-span-1">
                <CardContent>
                  <Typography component="div" variant="h5">
                    {contract.name}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography
                    color="text.secondary"
                    className="px-20 text-left"
                  >
                    <p className="flex">
                      <b>Minimum duration:</b>{" "}
                      <span className="ml-auto">{contract.minDuration}</span>
                    </p>
                    <p className="flex">
                      <b>Minimum desposite:</b>{" "}
                      <span className="ml-auto">{contract.minDeposite}</span>
                    </p>
                    <p className="flex">
                      <b>Garantie percentage:</b>{" "}
                      <span className="ml-auto">
                        {contract.garantiePercentage}
                      </span>
                    </p>
                    <p className="flex">
                      <b>Admin clients:</b>{" "}
                      <span className="ml-auto">{contract.adminClients}</span>
                    </p>
                    <p className="flex">
                      <b>Level:</b>{" "}
                      <span className="ml-auto">{contract.level}</span>
                    </p>
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export function DashboardContracts(props) {
  const [contractIndex, setContractIndex] = useState(0);
  const contract = contracts[contractIndex];
  const [details, setDetails] = useState({ ammount: 0, date: "" });
  const [opneAlert, setOpenAlert] = useState(false);

  const chooseContracts = (e) => {
    if (props.contracts.length < 2) {
      props.setContracts((current) => [
        ...current,
        { ...contract, ...details },
      ]);
      console.log(props.contracts);
    } else if (props.contracts.length === 2) {
      setOpenAlert(true);
      console.log(props.contracts);
    }
  };

  return (
    <div className="w-[100vw] flex flex-col">
      <Card
        sx={{
          backgroundColor: "#111827",
          minWidth: "80vw",
          maxWidth: "80vw",
          pt: "12px",
          mx: "auto",
          px: "12px",
          pb: "20px",
          mb: "12px",
          minHeight: "500px",
        }}
      >
        <Typography fontSize={30} sx={{ color: "#9096a3", pb: "12px" }}>
          Contract {contract.name}
        </Typography>
        <Divider className="bg-[#9096a3]"></Divider>

        <div className="h-full w-full flex justify-between">
          <Button
            onClick={() => {
              setContractIndex((perv) => (perv === 0 ? 0 : perv - 1));
            }}
            sx={{ color: "white", height: "50", my: "auto" }}
          >
            <ChevronLeft fontSize="large"></ChevronLeft>
          </Button>

          <div>
            <Grid
              container
              sx={{ width: "100%", justifyContent: "center", mb: 5 }}
            >
              <Grid md={4} sm={12}>
                <div className="flex flex-col justify-between text-white">
                  <MinimumProfitChart
                    data={contract.minProfit}
                  ></MinimumProfitChart>
                  Minimum profit
                </div>
              </Grid>
              <Grid md={4} sm={12}>
                <div className="flex flex-col justify-between h-[290px] text-white">
                  <ProfitSharingChart
                    data={contract.profitSharing}
                  ></ProfitSharingChart>
                  Profit sharing
                </div>
              </Grid>
              <Grid md={4} sm={12}>
                <div className="flex flex-col justify-between h-[290px] text-white">
                  <DurationChart
                    data={[contract.maxTradeDays, contract.minDuration]}
                  ></DurationChart>
                  Duration
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid md={12}>
                <div className="mr-auto w-max flex">
                  <TextField
                    InputLabelProps={{ sx: { color: "white" } }}
                    InputProps={{ sx: { color: "white" } }}
                    label="ammount"
                    value={details.ammount}
                    onChange={(e) =>
                      setDetails((current) => ({
                        ...current,
                        ammount: e.target.value,
                      }))
                    }
                  ></TextField>
                  <span className="text-[#9096a3] mt-auto mb-2 ml-3">
                    Min {contract.minDeposite}
                  </span>
                </div>
              </Grid>
              <Grid md={6}>
                <div className="w-max mt-3 mr-auto flex">
                  <TextField
                    InputLabelProps={{ sx: { color: "white" } }}
                    InputProps={{ sx: { color: "white" } }}
                    type="date"
                    value={details.date}
                    onChange={(e) =>
                      setDetails((current) => ({
                        ...current,
                        date: e.target.value,
                      }))
                    }
                  ></TextField>
                  <span className="text-[#9096a3] mt-auto mb-2 ml-3">
                    Amdin Clients: {contract.adminClients}
                  </span>
                </div>
              </Grid>
              <Grid md={6}>
                <Button
                  sx={{
                    color: "white",
                    height: 60,
                    position: "relative",
                    left: "160px",
                    top: "10px",
                  }}
                  color="secondary"
                  variant="contained"
                  onClick={chooseContracts}
                >
                  Chose contract
                </Button>
              </Grid>
            </Grid>
          </div>
          <Button
            onClick={() => {
              setContractIndex((perv) => (perv === 3 ? 3 : perv + 1));
            }}
            sx={{ color: "white", height: "50px", my: "auto" }}
          >
            <ChevronRight fontSize="large"></ChevronRight>
          </Button>
        </div>
      </Card>
      <Snackbar
        open={opneAlert}
        autoHideDuration={2000}
        onClose={() => {
          setOpenAlert(false);
        }}
      >
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          ammount exceeded
        </Alert>
      </Snackbar>
    </div>
  );
}
