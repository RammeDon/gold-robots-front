import { Box, Card, Grid, Typography } from "@mui/material";
import {
  ChartLine,
  PerformanceChart,
  PercentageChart,
  CounterChart,
  BarChart,
} from "../../components/ui/charts";

export function DashboardHome() {
  return (
    <div className="">
      <Balance></Balance>
      <Charts></Charts>
      <Trades></Trades>
    </div>
  );
}

const Balance = () => (
  <Box
    sx={{
      backgroundColor: "#0b0f19",
      px: 3,
    }}
  >
    <Card sx={{ backgroundColor: "#111827", color: "#cbd1d7" }}>
      <Grid container>
        <Grid md={12} sm={12}>
            <Typography fontSize={30} sx={{ color: "white" }}>
              Welcome Back !
            </Typography>
            <div className="flex gap-5 justify-center text-2xl text-[#9ca3af]">
              <span>username</span>
              <span>ID</span>
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
            <Typography variant="h5">$100,000.00</Typography>
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
    <Grid container sx={{ justifyContent: "space-between", rowGap: 5 }}>
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
          <Typography sx={{ color: "white" }}>Remaning days</Typography>
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
