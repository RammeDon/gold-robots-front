import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import NewsPage from "../news/NewsPage.jsx";
import Investment from "../investment/InvestmentPage.jsx";

import {
  Card,
  Tooltip,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Box,
  Button,
  Link,
} from "@mui/material";
import { css } from "@emotion/styled";

import "./landing-page.css";

import logo from "../images/logo.png";
import logo_sm from "../images/logo small.png";
import zlato from "../images/zlato.jpg";
import stribro from "../images/stribro.jpg";
import kovy from "../images/strategické kovy.jpg";

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // scroller() {
  //   let lastST = 0;
  //   window.addEventListener("scroll", (event) => {
  //     const st = window.scrollY || document.documentElement.scrollTop;
  //     if (st > lastST) {
  //       window.scrollBy({ behavior: "smooth", top: -100 });
  //     } else {
  //       window.scrollBy({ behavior: "smooth", top: 100 });
  //     }
  //     console.log(st);
  //     // lastST = st <= 0 ? 0 : st;
  //   });
  // }

  componentDidMount() {
    // this.scroller();
  }

  

  render() {
    let component;
    switch (this.state.path) {
      
      default:
        component= <LandingPage/>
        break;
      case "home":
        component=  <LandingPage/>
        break;
      case "services":
        component= <div>Servicers works!</div>
        break;
      case "news":
        component= <NewsPage/>
        break;
      case "contracts":
        component= <div>Contracts works!</div>
        break;
      case "investment":
        component= <Investment/>
        break;
      case "about":
        component= <div>About works!</div>
        break;
    }
    return(
      <>
        <Toolbar navigate={(path)=> {this.setState({path: path})}}></Toolbar>
        {component}
      </>
    )
    
  }
}

function LandingPage() {

  return(
    <>
      <Header></Header>
      <Golds id="golds"></Golds>
      <Dollars id="dollars"></Dollars>
      <Footer></Footer>
    </>
  )
}

function Header() {
  const scrollToBottom = () => {
    window.scrollTo({ behavior: "smooth", top: 99999 });
  };

  return (
    <div className="w-full h-[100vh] header-background flex justify-center flex-col">
      <div className="font-bold flex flex-col w-[700px] mx-auto mt-auto">
        <img src={logo} alt="" width={300} className="self-center" />
        <div className="w-full h-[1px] bg-gray-400"></div>
        <span className="font-semibold text-white text-[2rem]">
          We design all in one tech solution for the complex needs of the{" "}
          <b>capital management</b> industry.
        </span>
      </div>
      <button className="header-btn mx-auto mt-auto relative bottom-12">
        <KeyboardArrowDownIcon
          className="-rotate-45 font-lg"
          fontSize="large"
          onClick={scrollToBottom}
        ></KeyboardArrowDownIcon>
      </button>
    </div>
  );
}

function Toolbar(props) {
  const navButtons = [
    {
      name: "Home",
      path: "home",
      selected: true,
    },
    {
      name: "Services",
      path: "servics",
    },
    {
      name: "Gold News",
      path: "news",
    },
    {
      name: "Contracts",
      path: "contracts",
    },
    {
      name: "Investment",
      path: "investment",
    },
    {
      name: "About US",
      path: "about",
    },
  ];

  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState();


  const navClick = (event) => {
    if (selected) {
      selected.className = "nav-btn";
      event.target.className = "nav-btn-selected";
      setSelected(event.target);
    } else {
      navButtons[0].selected = false;
      event.target.className = "nav-btn-selected";
      setSelected(event.target);
    }
  };

  const openOnClick = () => {
    setOpen(true);
  };

  return (
    <div className="w-full border-b-[.5px] border-gray-400 p-5 flex justify-between bg-transparent backdrop-blur-sm z-10 absolute top-0">
      <img src={logo_sm} alt="" width={80} />
      <div className="flex justify-around w-2/3 flex-row-reverse px-10">
        <Tooltip title="login/register">
          <IconButton onClick={openOnClick}>
            <LoginSharpIcon className="text-gray-300"></LoginSharpIcon>
          </IconButton>
        </Tooltip>
        <Auth
          open={open}
          setOpen={(value) => {
            setOpen(value);
          }}
        />
        {navButtons.map((button, i) => {
          return (
            <button className="nav-btn" onClick={() => {props.navigate(button.path);} } key={i}>
              <span className="mr-5">{button.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Dollars() {
  return (
    <div className="flex flex-col w-full dollars h-[100vh] justify-center">
      <h1 className="font-bold text-[3rem] text-white mb-5">
        Weakness of the U.S. Dollar
      </h1>
      <div className="bg-white w-1/2 self-center h-[1px]"></div>
      <p className="text-white self-center w-1/2 text-[1.5rem] ">
        Although the U.S. dollar is one of the world’s most important reserve
        currencies, when the value of the dollar falls against other currencies
        as it did between 1998 and 2008, this often prompts people to flock to
        the security of gold, which raises gold prices . The price of gold
        nearly tripled between 1998 and 2008, reaching the $1,000-an-ounce
        milestone in early 2008 and nearly doubling between 2008 and 2012,
        hitting above the $2,000 mark.1 The decline in the U.S. dollar occurred
        for a number of reasons, including the country’s large budget and trade
        deficits and a large increase in the money supply.
      </p>
    </div>
  );
}

function Golds() {
  const Cards = [
    {
      name: "zlato",
      Image: zlato,
      description: "lorem ipsum",
    },
    {
      name: "stribro",
      Image: stribro,
      description: "lorem ipsum",
    },
    {
      name: "strategické kovy",
      Image: kovy,
      description: "lorem ipsum",
    },
  ];

  return (
    <div className="w-full h-[30vw] flex flex-col">
      <div className="flex flex-col align-middle">
        <p className="mt-3 text-[2rem] text-slate-500">Types of Gold</p>
        <div className="w-[300px] h-[1px] bg-slate-400 self-center mt-5"></div>
        <div className="flex justify-around w-full p-5">
          {Cards.map((card) => {
            return (
              <Card sx={{ maxHeight: 345 }}>
                <CardMedia
                  sx={{ height: 145, width: 300 }}
                  image={card.Image}
                />
                <CardContent>
                  <Typography component="div" variant="h5">
                    {card.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth", top: -9999 });
  };

  return (
    <div className="w-full bg-gray-800 h-[300px] flex flex-col">
      <div className="w-full h-1/2 bg-slate-200"></div>
      <div className="w-full h-1/2 flex justify-around align-middle">
        <div className="flex flex-col w-1/3 justify-center">
          <p className="text-sm text-gray-300">
            © 2022 All Rights Reserved Goldrobots
          </p>
          <p className="text-gray-400">
            {" "}
            Mon-Fri 9:00AM - 5:00PM | No: 200, Floor: 25, Burj Khalifa Dubai,
            United Arab Emirate | +1-206-905-7657{" "}
          </p>
        </div>
        <div className="w-1/3 flex justify-center align-middle">
          <button className="header-btn self-center" onClick={scrollToTop}>
            <KeyboardArrowDownIcon className="up"></KeyboardArrowDownIcon>
          </button>
        </div>
        <div className="w-1/3 flex justify-around align-middle">
          <InstagramIcon
            className="text-gray-200 self-center"
            fontSize="large"
          ></InstagramIcon>
          <FacebookOutlinedIcon
            className="text-gray-200 self-center"
            fontSize="large"
          ></FacebookOutlinedIcon>
          <TwitterIcon
            className="text-gray-200 self-center"
            fontSize="large"
          ></TwitterIcon>
        </div>
      </div>
    </div>
  );
}

function Auth(props) {
  const { open, setOpen } = props;

  const [type, setType] = useState("login");
  const [countriesList, setCountries] = useState([]);
  const [login, setLogin] = useState({ username: "", password: "" });
  const [register, setRegister] = useState({
    title: 0,
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phonenumber: "",
    country: 0,
  });

  useEffect(() => {
    fetch("https://api.countrystatecity.in/v1/countries").then((res) =>
      setCountries([...res])
    );
  });

  const handelSubmission = (type, event) => {
    if (type === "login") {
      setLogin(event.target.value);
    } else {
      setRegister(event.target.value);
    }
  };

  let form;
  switch (type) {
    default:
      form = (
        <FormControl>
          <TextField
            variant="outlined"
            label="username"
            className="invisible"
          />
          <TextField variant="outlined" label="password" />
        </FormControl>
      );
      break;
    case "login":
      form = (
        <FormControl className="flex flex-col h-[200px] justify-around">
          <TextField variant="outlined" label="username" />
          <TextField variant="outlined" label="password" />
        </FormControl>
      );
      break;
    case "register":
      form = (
        <Box>
          <FormControl className="flex flex-col h-[700px] justify-around w-full">
            <InputLabel id="title">title</InputLabel>
            <Select labelId="title" label="title" required={true}>
              <MenuItem value={0}>Mr.</MenuItem>
              <MenuItem value={1}>Ms.</MenuItem>
              <MenuItem value={2}>Co.</MenuItem>
            </Select>
            <div className="flex justify-between w-full gap-5">
              <TextField
                variant="outlined"
                label="first name"
                required={true}
                className="w-1/2"
              />
              <TextField
                variant="outlined"
                label="last name"
                required={true}
                className="w-1/2"
              />
            </div>
            <TextField variant="outlined" label="username" required={true} />
            <TextField variant="outlined" label="email" required={true} />
            <TextField
              variant="outlined"
              label="password"
              required={true}
              type="password"
            />
            <TextField
              variant="outlined"
              label="confirm password"
              required={true}
              type="password"
            />
            <TextField
              variant="outlined"
              label="phone number"
              required={true}
            />
            <InputLabel id="country"></InputLabel>
            <Select label="country" labelId="country" required={true}>
              {countriesList.map((country, i) => {
                if (country) {
                  return (
                    <MenuItem value={country.id} key={i}>
                      {country.name}
                    </MenuItem>
                  );
                }
              })}
            </Select>
          </FormControl>
        </Box>
      );
      break;
  }

  return (
    <Dialog open={open} title={type}>
      <div className="w-[500px] p-12 flex flex-col justify-around align-middle">
        <h1 className="self-center">{type}</h1>
        <form
          onSubmit={handelSubmission}
          className="self-center flex flex-col justify-around min-h-max w-full"
        >
          {form}
          <div className="mt-5 flex justify-around align-middle">
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                setOpen(false);
              }}
            >
              close
            </Button>
            <Button type="submit" variant="contained">
              submit
            </Button>
          </div>
        </form>
        <p className="self-center">
          please{" "}
          <Link
            onClick={() => {
              setType("login");
            }}
          >
            Login
          </Link>{" "}
          or{" "}
          <Link
            onClick={() => {
              setType("register");
            }}
          >
            Register
          </Link>
        </p>
      </div>
    </Dialog>
  );
}
