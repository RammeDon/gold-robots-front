import { IconButton } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ behavior: "smooth", top: -9999 });
  };

  if (window.innerWidth > 420) {
    return (
      <div className="w-full bg-gray-800 h-[150px] flex flex-col">
        <div className="w-full h-full flex justify-around align-middle">
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
            <IconButton
              onClick={() =>
                window.open("https://wa.me/message/PKZ4I7ELXFTAH1")
              }
            >
              <WhatsAppIcon
                className="text-gray-200 self-center"
                fontSize="large"
              ></WhatsAppIcon>
            </IconButton>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full bg-gray-800 flex flex-col">
        <div className="w-full h-full flex flex-col justify-center">
          <div className="flex justify-center align-middle my-5">
            <button className="header-btn self-center" onClick={scrollToTop}>
              <KeyboardArrowDownIcon className="up"></KeyboardArrowDownIcon>
            </button>
          </div>
          <div className="flex justify-around align-middle my-3">
            <InstagramIcon
              className="text-gray-200 self-center"
              fontSize="large"
            ></InstagramIcon>
            <FacebookOutlinedIcon
              className="text-gray-200 self-center"
              fontSize="large"
            ></FacebookOutlinedIcon>
            <IconButton
              onClick={() =>
                window.open("https://wa.me/message/PKZ4I7ELXFTAH1")
              }
            >
              <WhatsAppIcon
                className="text-gray-200 self-center"
                fontSize="large"
              ></WhatsAppIcon>
            </IconButton>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-400 text-[0.5rem]">
              {" "}
              Mon-Fri 9:00AM - 5:00PM | No: 200, Floor: 25, Burj Khalifa Dubai,
              United Arab Emirate | +1-206-905-7657{" "}
            </p>
            <p className="text-[0.8rem] text-gray-300">
              © 2022 All Rights Reserved Goldrobots
            </p>
          </div>
        </div>
      </div>
    );
  }
}
