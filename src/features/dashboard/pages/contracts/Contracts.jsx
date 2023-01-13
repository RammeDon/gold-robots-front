import React, { useState } from "react";
import "./contracts.css";
import { contracts } from "../../../../data/contracts";
import {
  Alert,
  AlertTitle,
  Button,
  Card,
  Divider,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { DurationChart, MinimumProfitChart } from "../../components/ui/charts";
import { ProfitSharingChart } from "../../components/ui/charts/pie";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";



export function DashboardContracts(props) {
  const [contractIndex, setContractIndex] = useState(0);
  const contract = contracts[contractIndex];
  const [details, setDetails] = useState({ ammount: 0, date: "" });
  const [opneRejection, setOpenRejection] = useState(false);
  const [opneSuccess, setOpenSuccess] = useState(false);

  const chooseContracts = (e) => {
    if (props.contracts.length < 2) {
      props.setContracts((current) => {
        return [
          ...current,
          { ...contract, ...details, username: props.user.username },
        ];
      });
      setOpenSuccess(true);
      console.log(props.contracts);
    } else if (props.contracts.length === 2) {
      setOpenRejection(true);
      console.log(props.contracts);
    }
  };

  return (
    <>
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
          <Typography fontSize={15} sx={{ color: "#9096a3", mb: "12px" }}>
            In order to submit a contract you must first choose it here and then
            sumbit it in the Personal Settings page.
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
                    Choose contract
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
          open={opneRejection}
          autoHideDuration={2000}
          onClose={() => {
            setOpenRejection(false);
          }}
        >
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            ammount exceeded
          </Alert>
        </Snackbar>
        <Snackbar
          open={opneSuccess}
          autoHideDuration={2000}
          onClose={() => {
            setOpenRejection(false);
          }}
        >
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Contract choosen
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}