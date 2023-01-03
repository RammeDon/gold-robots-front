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
import { useEffect, useState } from "react";
import bitcion from "../../assets/icons/bitcion.png";
import paypal from "../../assets/icons/paypal.png";
import skrill from "../../assets/icons/skrill.png";
import perfect_money from "../../assets/icons/perfect-money.png";
import visa from "../../assets/icons/visa.png";
import binance from "../../assets/icons/binance.png";
import create from "../../CRUD/create.js"
import read from "../../CRUD/read.js"
import update from "../../CRUD/update.js"

export function Bank(props) {
  const [action, setAction] = useState(1);


  // const bankDetail = {
  //   bankNames : [props.account.bankNames[0], props.account.bankNames[1]],
  //   accountNumber : [props.account.accountNumber[0], props.account.accountNumber[1]],
  //   swiftCode : [props.account.swiftCode[0], props.account.swiftCode[1]],
  //   country : [props.account.country[0], props.account.country[1]],
  //   currency: [props.account.currency[0], props.account.currency[1]],
  // }

  const [bank1, setBank1] = useState(props.account.bankNames[0])
  const [bank2, setBank2] = useState(props.account.bankNames[1])
  const [accoutN1, setAccoutN1] = useState(props.account.accountNumbers[0])
  const [accoutN2, setAccoutN2] = useState(props.account.accountNumbers[1])
  const [swiftCode1, setSwiftCode1] = useState(props.account.swiftCode[0])
  const [swiftCode2, setSwiftCode2] = useState(props.account.swiftCode[1])
  const [country1, setCountry1] = useState(props.account.country[0])
  const [country2, setCountry2] = useState(props.account.country[1])
  const [currency1, setCurrency1] = useState(props.account.currency[0])
  const [currency2, setCurrency2] = useState(props.account.currency[1])

  const submit1 = () => {

    const updateDetails = {
      bankNames: [bank1, props.account.bankNames[1]] ,
      accountNumbers: [accoutN1, props.account.accountNumbers[1]],
      swiftCode: [swiftCode1, props.account.swiftCode[1]],
      country: [ country1,  props.account.country[1]],
      currency: [currency1,  props.account.currency[1] ]
    }

    update.updateAccount(updateDetails, props.account.username)

    console.log("updating...", updateDetails)
  }

  const submit2 = () => {
    const updateDetails = {
      bankNames: [props.account.bankNames[0], bank2],
      accountNumbers: [props.account.accountNumbers[0], accoutN2],
      swiftCode: [props.account.swiftCode[0],  swiftCode2],
      country: [props.account.country[0], country2],
      currency: [props.account.currency[0], currency2]
    }

    update.updateAccount(updateDetails, props.account.username)

    console.log("updating 2..." , props.account.username)
  }


  console.log("user", props.account)

  const seprate = () => {
    if (window.innerWidth > 420) {
      return <div className="w-[1px] bg-[#cbd1d7]"></div>;
    }
  };

  let component;

  switch (action) {
    default:
      component = <History user={props.user}></History>;
      break;
    case 1:
      component = <History user={props.user}></History>;
      break;
    case 0:
      component = (
        <Action user={props.user} action={action} color="success" variant="filled"></Action>
      );
      break;
    case 2:
      component = (
        <Action user={props.user} action={action} color="error" variant="outlined"></Action>
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
                <Typography fontSize={20}>
                  Bank Name
                </Typography>
                <TextField onChange={e => setBank1(e.target.value)} InputLabelProps={{style: { color: '#fff' },}} id="filled-basic" label={props.account.bankNames[0]} variant="filled" />

              </Card>
              <div className="flex flex-col gap-3">
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography fontSize={15}>
                    <b className="mr-2">Account number:</b>{" "}
                  </Typography>
                  <TextField onChange={e => setAccoutN1(e.target.value)} InputLabelProps={{style: { color: '#fff' },}} id="filled-basic" label={props.account.accountNumbers[0]} variant="filled" />

                </Card>
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography>
                    <b>Swift code</b>
                  </Typography>
                  <TextField onChange={e => setSwiftCode1(e.target.value)} InputLabelProps={{style: { color: '#fff' },}} id="filled-basic" label={props.account.swiftCode[0]} variant="filled" />
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
                      <b>Country</b>
                    </Typography>
                    <TextField onChange={e => setCountry1(e.target.value)} InputLabelProps={{style: { color: '#fff' },}} id="filled-basic" label={props.account.country[0]} variant="filled" />
                  </Card>
                  <Card
                    sx={{
                      backgroundColor: "#0b0f19",
                      color: "white",
                      p: 1.5,
                      w: "20%",
                    }}
                  >
                    <Typography>Currency</Typography>
                    <TextField onChange={e => setCurrency1(e.target.value)} InputLabelProps={{style: { color: '#fff' },}} id="filled-basic" label={props.account.currency[0]} variant="filled" />
                  </Card>
                </div>
              </div>
              <Button
                onClick={submit1}
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
                <Typography fontSize={20}>
                  
                  Bank Name
                </Typography>
                <TextField onChange={e => setBank2(e.target.value)} InputLabelProps={{style: { color: '#fff' },}} id="filled-basic" label={props.account.bankNames[1]} variant="filled" />

              </Card>
              <div className="flex flex-col gap-3">
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography fontSize={15}>
                    <b className="mr-2">Account number:</b>{" "}
                  </Typography>
                  <TextField onChange={e => setAccoutN2(e.target.value)} InputLabelProps={{style: { color: '#fff' },}} id="filled-basic" label={props.account.accountNumbers[1]} variant="filled" />
                </Card>
                <Card
                  sx={{ backgroundColor: "#0b0f19", color: "white", p: 1.5 }}
                >
                  <Typography>
                    <b>Swift code:</b>
                  </Typography>
                  <TextField onChange={e => setSwiftCode2(e.target.value)} InputLabelProps={{style: { color: '#fff' },}} id="filled-basic" label={props.account.swiftCode[1]} variant="filled" />
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
                      <b>Country:</b>
                    </Typography>
                    <TextField onChange={e => setCountry2(e.target.value)} InputLabelProps={{style: { color: '#fff' },}} id="filled-basic" label={props.account.country[1]} variant="filled" />
                  </Card>
                  <Card
                    sx={{
                      backgroundColor: "#0b0f19",
                      color: "white",
                      p: 1.5,
                      w: "20%",
                    }}
                  >
                    <Typography>Currency</Typography>
                    <TextField onChange={e => setCurrency2(e.target.value)} InputLabelProps={{style: { color: '#fff' },}} id="filled-basic" label={props.account.currency[1]} variant="filled" />
                  </Card>
                </div>
              </div>
              <Button
                onClick={submit2}
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

function History(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState([]);
  const [pH, setPH] = useState([])


  useEffect(() => {
    read.fetchOne("paymenthistories", props.user.username).then(res => setPH([...res]))
  }, [])

  console.log("history", pH)

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
            {pH
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
                          case "accepted":
                            return (
                              <TableCell
                                align="center"
                                sx={{ color: "#10b981" }}
                              >
                                {value}
                              </TableCell>
                            );
                          case "pending":
                            return (
                              <TableCell
                                align="center"
                                sx={{ color: "#fbab49" }}
                              >
                                {value}
                              </TableCell>
                            );
                          case "rejected":
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
  // deposite and withdraw

  const [details, setDetails] = useState({
    username: props.user.username,
    paymentSystem: "",
    amount: "0",
    paymentType: props.action === 0 ? "Deposit" : "Withdraw"

  })


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

  const handleSubmit = () => {
    // if (props.action === 0) {
    //   setDetails((current) => ({
    //     ...current,
    //     paymentType: "deposite"
    //   }))
    // } else if (props.action === 2) {
    //   setDetails((current) => ({
    //     ...current,
    //     paymentType: "withdraw"
    //   }))
    // }

    console.log(details)

     create.createPaymentHistory(details)
  }

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
            onChange={(e)=> {
              setDetails((current) => ({
                ...current,
                paymentSystem: e.target.value
              }))
            }}
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
          onChange={(e)=> {
            setDetails((current) => ({
              ...current,
              amount: e.target.value
            }))
          }}
        />
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </form>
    </ThemeProvider>
  );
}
