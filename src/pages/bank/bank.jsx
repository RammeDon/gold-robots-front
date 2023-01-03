import { Label } from "@mui/icons-material";
import {
  Button,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import { borderColor } from "@mui/system";
import { useState } from "react";
import bitcion from "../../assets/icons/bitcion.png";
import paypal from "../../assets/icons/paypal.png";
import skrill from "../../assets/icons/skrill.png";
import perfect_money from "../../assets/icons/perfect-money.png";
import visa from "../../assets/icons/visa.png";
import binance from "../../assets/icons/binance.png";

export function Bank(props) {
  const [action, setAction] = useState(1);

  const seprate = () => {
    if (window.innerWidth > 420) {
      return <div className="w-[1px] bg-[#cbd1d7]"></div>;
    }
  };

  let component;

  switch (action) {
    default:
      component = <History></History>;
      break;
    case 1:
      component = <History></History>;
      break;
    case 0:
      component = (
        <Action action={action} color="success" variant="filled"></Action>
      );
      break;
    case 2:
      component = (
        <Action action={action} color="error" variant="outlined"></Action>
      );
      break;
  }

  if (props.user && props.account) {
    return (
      <>
        <Card
          sx={{
            width: "100%",
            mb: 4,
            backgroundColor: "#111827",
            color: "white",
          }}
        >
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid md={5} sm={12} sx={{ p: 3 }}>
              <Card
                sx={{
                  backgroundColor: "#0b0f19",
                  color: "white",
                  p: 1.5,
                  mb: "12px",
                }}
              >
                <Typography fontSize={30}>
                  {props.account.bankNames[0]}
                </Typography>
              </Card>
              <div className="flex flex-col gap-3">
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography fontSize={15}>
                    <b className="mr-2">Account number:</b>{" "}
                    {props.account.accountNumbers[0]}
                  </Typography>
                </Card>
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography>
                    <b>Swift code:</b> {props.account.swiftCode[0]}
                  </Typography>
                </Card>

                <div className="flex justify-around gap-3">
                  <Card
                    sx={{
                      backgroundColor: "#0b0f19",
                      color: "white",
                      p: 1.5,
                      width: "80%",
                    }}
                  >
                    <Typography>
                      <b>Country:</b> {props.account.country}
                    </Typography>
                  </Card>
                  <Card
                    sx={{
                      backgroundColor: "#0b0f19",
                      color: "white",
                      p: 1.5,
                      w: "20%",
                    }}
                  >
                    <Typography>{props.account.currency[0]}</Typography>
                  </Card>
                </div>
              </div>
              <Button
                color="secondary"
                sx={{ color: "white", mt: "12px" }}
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
            {seprate()}
            <Grid md={5} sm={12} sx={{ p: 3 }}>
              <Card
                sx={{
                  backgroundColor: "#0b0f19",
                  color: "white",
                  p: 1.5,
                  mb: "12px",
                }}
              >
                <Typography fontSize={30}>
                  {props.account.bankNames[1]}
                </Typography>
              </Card>
              <div className="flex flex-col gap-3">
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography fontSize={15}>
                    <b className="mr-2">Account number:</b>{" "}
                    {props.account.accountNumbers[1]}
                  </Typography>
                </Card>
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography>
                    <b>Swift code:</b> {props.account.swiftCode}
                  </Typography>
                </Card>

                <div className="flex justify-around gap-3">
                  <Card
                    sx={{
                      backgroundColor: "#0b0f19",
                      color: "white",
                      p: 1.5,
                      width: "80%",
                    }}
                  >
                    <Typography>
                      <b>Country:</b> {props.account.country[1]}
                    </Typography>
                  </Card>
                  <Card
                    sx={{
                      backgroundColor: "#0b0f19",
                      color: "white",
                      p: 1.5,
                      w: "20%",
                    }}
                  >
                    <Typography>{props.account.currency[1]}</Typography>
                  </Card>
                </div>
              </div>
              <Button
                color="secondary"
                sx={{ color: "white", mt: "12px" }}
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Card>
        <div className="mt-5 flex gap-3 justify-center mb-10">
          <p
            className={action === 0 ? "text-[#7582eb]" : "text-[#cbd1d7]"}
            role="button"
            onClick={() => {
              setAction(0);
            }}
          >
            Deposit
          </p>
          <div className="w-[1px] bg-[#8d94a1] h-[30px] relative bottom-1"></div>
          <p
            className={action === 1 ? "text-[#7582eb]" : "text-[#cbd1d7]"}
            role="button"
            onClick={() => {
              setAction(1);
            }}
          >
            Payment History
          </p>
          <div className="w-[1px] bg-[#8d94a1] h-[30px] relative bottom-1"></div>
          <p
            className={action === 2 ? "text-[#7582eb]" : "text-[#cbd1d7]"}
            role="button"
            onClick={() => {
              setAction(2);
            }}
          >
            Withdraw
          </p>
        </div>
        {component}
      </>
    );
  }
}

function History() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);

  const columns = [
    { id: "ammount", name: "Ammount" },
    { id: "date", name: "Date" },
    { id: "type", name: "Type" },
    { id: "bank", name: "Bank" },
    { id: "status", name: "Status" },
  ];

  const TableTheme = createTheme({
    components: {
      MuiTable: {
        styleOverrides: {
          root: { backgroundColor: "#111827", color: "white" },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={TableTheme}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader sx={{ backgroundColor: "#111827", color: "white" }}>
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell align="center">{col.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((rows) => {
                return (
                  <TableRow hover>
                    {columns.map((col) => {
                      const value = rows[col.id];

                      if (col.id === "status") {
                        switch (value) {
                          default:
                            return (
                              <TableCell align="center">{value}</TableCell>
                            );
                          case 0:
                            return (
                              <TableCell
                                align="center"
                                sx={{ color: "#10b981" }}
                              >
                                {value}
                              </TableCell>
                            );
                          case 1:
                            return (
                              <TableCell
                                align="center"
                                sx={{ color: "#fbab49" }}
                              >
                                {value}
                              </TableCell>
                            );
                          case 2:
                            return (
                              <TableCell
                                align="center"
                                sx={{ color: "#d14343" }}
                              >
                                {value}
                              </TableCell>
                            );
                        }
                      } else {
                        return (
                          <TableCell align="center" sx={{ color: "#cbd1d7" }}>
                            {value}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(e, page) => {
          setPage(page);
        }}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(e.target.value);
          setPage(0);
        }}
      ></TablePagination>
    </ThemeProvider>
  );
}

function Action(props) {
  const ButtonTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          containedSecondary: {
            backgroundColor: "#7582eb",
            color: "#111827",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={ButtonTheme}>
      <p className="mb-10">{props.action === 0 ? "Deposit" : "Withdraw"}</p>
      <form className="flex justify-center gap-2 pb-5">
        <FormControl>
          <InputLabel id="type" sx={{ color: "white" }} color="warning">
            Type
          </InputLabel>
          <Select
            sx={{ width: 200, color: "white" }}
            labelId="type"
            label="type"
            color="warning"
          >
            <MenuItem value={0}>
              <img src={bitcion} width={25} className="mr-2" alt="" />
              Crypto
            </MenuItem>
            <MenuItem value={1}>
              {" "}
              <img src={paypal} width={25} className="mr-2" alt="" />
              Paypal{" "}
            </MenuItem>
            <MenuItem value={2}>
              <img src={visa} width={25} className="mr-2" alt="" />
              Visa/Master
            </MenuItem>
            <MenuItem value={3}>
              <img src={skrill} width={25} className="mr-2" alt="" />
              Skrill
            </MenuItem>
            <MenuItem value={4}>
              <img src={perfect_money} width={25} className="mr-2" alt="" />
              Perfect Money
            </MenuItem>
            <MenuItem value={5}>
              <img src={binance} width={25} className="mr-2" alt="" />
              Binance Pay
            </MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="ammount"
          variant={props.variant}
          color={props.color}
          sx={{ width: "300px" }}
          InputProps={{
            sx: { color: "white", borderColor: "white" },
          }}
          InputLabelProps={{ sx: { color: "white" } }}
        />
        <Button variant="contained">Submit</Button>
      </form>
    </ThemeProvider>
  );
}
