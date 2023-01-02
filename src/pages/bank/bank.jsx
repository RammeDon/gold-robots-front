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

export function Bank() {
  const [action, setAction] = useState(1);

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

  return (
    <>
      <Card
        sx={{
          width: "100%",
          height: "300px",
          mb: 4,
          backgroundColor: "#111827",
          color: "white",
        }}
      >
        <Grid container sx={{ justifyContent: "center" }}>
          <Grid md={5} sm={12} sx={{ p: 3 }}>
            <Typography fontSize={30} sx={{ mb: "12px   " }}>
              Bank 1
            </Typography>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography fontSize={15}>
                    <b className="mr-2">Account number:</b> 0000 0000 0000 0000
                  </Typography>
                </Card>
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography>Bank name</Typography>
                </Card>
              </div>
              <div className="flex gap-3">
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography>
                    <b>Country:</b> Turkey
                  </Typography>
                </Card>
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography>Currency</Typography>
                </Card>
              </div>
              <Card sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}>
                <Typography>
                  <b>Swift code:</b> 0000 0000
                </Typography>
              </Card>
            </div>
          </Grid>
          <div className="w-[1px] bg-[#8d94a1] h-[300px]"></div>
          <Grid md={5} sm={12} sx={{ p: 3 }}>
            <Typography fontSize={30} sx={{ mb: "12px" }}>
              Bank 2
            </Typography>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography>
                    <b>Account number:</b> 0000 0000 0000 0000
                  </Typography>
                </Card>
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography>Bank name</Typography>
                </Card>
              </div>
              <div className="flex gap-3">
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography>
                    <b>Country:</b>Turkey
                  </Typography>
                </Card>
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography>Currency</Typography>
                </Card>
              </div>
              <Card sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}>
                <Typography>
                  <b>Swift code:</b>0000 0000
                </Typography>
              </Card>
            </div>
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
          Diposit
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
      <p className="mb-10">{props.action === 0 ? "Diposit" : "Withdraw"}</p>
      <form className="flex justify-center gap-2 pb-5">
        <FormControl>
          <InputLabel id="type" sx={{ color: "white" }} color="warning">
            Type
          </InputLabel>
          <Select
            sx={{ width: 100,color:'white' }}
            labelId="type"
            label="type"
            color="warning"
          >
            <MenuItem value={0}>Crypto</MenuItem>
            <MenuItem value={1}>Paypal</MenuItem>
            <MenuItem value={2}>Visa/Master</MenuItem>
            <MenuItem value={3}>Skrill</MenuItem>
            <MenuItem value={4}>Perfect Money</MenuItem>
            <MenuItem value={5}>Binance Pay</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="ammount"
          variant={props.variant}
          color={props.color}
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
