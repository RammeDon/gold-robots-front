import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../../../assets/images/logo.png";


export function Header() {
    const scrollToBottom = () => {
      window.scrollTo({ behavior: "smooth", top: 999999 });
    };
  
    if (window.innerWidth > 420) {
      return (
        <div className="w-full h-[100vh] header-background flex justify-center flex-col">
          <div className="font-bold flex flex-col w-[700px] mx-auto mt-auto fliter brightness-150">
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
    } else {
      return (
        <div className="w-[100vw] header-background flex justify-center flex-col pt-12">
          <div className="flex flex-col mx-auto mt-auto fliter brightness-150">
            <img src={logo} alt="" width={200} className="self-center" />
            <span className="font-thin text-white text-[1.3rem] mb-20">
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
  }