import { Box, Card, Grid, Typography } from "@mui/material";
import {
  ChartLine,
  PerformanceChart,
  PercentageChart,
  CounterChart,
  BarChart,
} from "../../components/ui/charts";
import read from "../../CRUD/read.js";
import { useState, useEffect } from "react";

export default function DashboardHome(loggedUser) {

  const [account, setAccount] = useState({})

  useEffect(() => {
    getData()
    
  });

  const getData = async () => {
    // setAccount(await read.fetchOne("accounts", "ramme")) 
    read.fetchOne("accounts", "ramme")
    .then(res => console.log("OBJECT" , res))
    .then(res => setAccount((perv) => {if(res) Object.assign(perv, res)}))
    .then(res => console.log(account))
    // console.log("loaded: " , account)
  }


  return (
    <div className="">
      <Balance account={account}></Balance>
      <Charts></Charts>
      <Trades></Trades>
    </div>
  );
}

const Balance = (account) => (
  <Box
    sx={{
      backgroundColor: "#0b0f19",
      px: 3,
    }}
  >
    <Card sx={{ backgroundColor: "#111827", color: "#cbd1d7" }}>
      <Grid container>
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            alignItems: "center",
            borderRight: (theme) => ({
              md: `1px solid ${theme.palette.divider}`,
            }),
            borderBottom: (theme) => ({
              md: "none",
              xs: `1px solid ${theme.palette.divider}`,
            }),
            display: "flex",
            justifyContent: "space-between",
            p: 3,
          }}
        >
          <div className="w-full">
            <Typography
              sx={{ color: "#cbd1d7", textAlign: "center" }}
              color="textSecondary"
              variant="overline"
            >
              Today's money
            </Typography>
            <Typography variant="h5">{account.todayMoney}</Typography>
          </div>
        </Grid>
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            alignItems: "center",
            borderRight: (theme) => ({
              md: `1px solid ${theme.palette.divider}`,
            }),
            borderBottom: (theme) => ({
              xs: `1px solid ${theme.palette.divider}`,
              md: "none",
            }),
            display: "flex",
            justifyContent: "space-between",
            p: 3,
          }}
        >
          <div>
            <Typography sx={{ color: "#cbd1d7" }} variant="overline">
              Today's trades
            </Typography>
            <Typography sx={{ color: "#cbd1d7" }} variant="h5">
              230
            </Typography>
          </div>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              height: 54,
              width: 177,
            }}
          >
            <ChartLine />
          </Box>
        </Grid>
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            alignItems: "center",
            borderRight: (theme) => ({
              md: `1px solid ${theme.palette.divider}`,
            }),
            borderBottom: (theme) => ({
              xs: `1px solid ${theme.palette.divider}`,
              md: "none",
            }),
            display: "flex",
            justifyContent: "space-between",
            p: 3,
          }}
        >
          <div>
            <Typography sx={{ color: "#cbd1d7" }} variant="overline">
              New trades
            </Typography>
            <Typography sx={{ color: "#cbd1d7" }} variant="h5">
              10
            </Typography>
          </div>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              height: 54,
              width: 177,
            }}
          >
            <ChartLine />
          </Box>
        </Grid>
        <Grid
          item
          md={3}
          xs={12}
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            p: 3,
          }}
        >
          <div className="w-full">
            <Typography
              sx={{ color: "#cbd1d7", textAlign: "center" }}
              variant="overline"
            >
              Total balance
            </Typography>
            <Typography
              sx={{ color: "#cbd1d7", textAlign: "center" }}
              variant="h5"
            >
              $3,452,423.00
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Card>
  </Box>
);

const Charts = () => (
  <div className="w-full mt-12 pb-12 px-5">
    <Grid container sx={{ justifyContent: "space-between",rowGap:5 }}>
      <Grid md={4} sm={12}>
        <Card
          sx={{
            backgroundColor: "#111827",
            color: "white",
            width: "auto",
            padding: "12px",
            height: "410px",
          }}
        >
          <Typography sx={{ color: "white" }}>Balance overview</Typography>
          <PerformanceChart></PerformanceChart>
        </Card>
      </Grid>
      <Grid md={4} sm={12}>
        <Card
          sx={{
            backgroundColor: "#111827",
            color: "white",
            width: "auto",
            paddingTop: "20px",
            height: "410px",
          }}
        >
          <Typography sx={{ color: "white" }}>Percentage in trade</Typography>
          <PercentageChart></PercentageChart>
        </Card>
      </Grid>
      <Grid md={3} sm={12}>
        <Card
          sx={{
            backgroundColor: "#111827",
            color: "white",
            width: "auto",
            height: "410px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CounterChart></CounterChart>
        </Card>
      </Grid>
    </Grid>
  </div>
);

const Trades = () => (
  <Card
    sx={{
      width: "100%",
      padding: "5px",
      marginTop: "12px",
      backgroundColor: "#111827",
    }}
  >
    <Typography sx={{ color: "white", paddingTop: "20px" }}>
      Active Trades
    </Typography>
    <BarChart></BarChart>
  </Card>
);
