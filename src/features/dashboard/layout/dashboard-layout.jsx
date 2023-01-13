import { useState, useEffect } from "react";
import useToken from "../../../hooks/useToken";
import read from "../../../CRUD/read";
import jwt from "jwt-decode";
import { DashboardDrawer } from "./dashboard-drawer";
import { DashboardToolbar } from "./dashboard-toolbar";
import {
  DashboardHome,
  Profile,
  Bank,
  ContactUS,
  DashboardContracts,
  PersonalSetting,
} from "../pages";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState();
  const [token, setToken] = useToken();
  const [userAccount, setUserAccount] = useState();
  const [contracts, setContracts] = useState();
  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    if (!(contracts && loggedUser && userAccount)) {
      const username = jwt(token).username;
      read
        .fetchOne("users", username)
        .then((res) => setLoggedUser({ ...res }))
        .finally(() => {
          read
            .fetchOne("accounts", username)
            .then((res) => setUserAccount({ ...res }))
            .finally(() => {
              read
                .fetchOne("contracts", username)
                .then((res) => setContracts([...res]));
            });
        });
    }
  });

  let component;

  switch (path) {
    default:
      component = <Profile user={loggedUser} account={userAccount}></Profile>;
      break;
    case "home":
      component = (
        <DashboardHome
          loggedUser={loggedUser}
          account={userAccount}
        ></DashboardHome>
      );
      break;
    case "profile":
      component = <Profile user={loggedUser} account={userAccount}></Profile>;
      break;
    case "mail":
      component = <ContactUS user={loggedUser}></ContactUS>;
      break;
    case "bank":
      component = <Bank user={loggedUser} account={userAccount}></Bank>;
      break;
    case "contracts":
      component = (
        <DashboardContracts
          user={loggedUser}
          account={userAccount}
          contracts={contracts}
          setContracts={setContracts}
        ></DashboardContracts>
      );
      break;
    case "settings":
      component = (
        <PersonalSetting
          user={loggedUser}
          contracts={contracts}
          setContracts={(setter) => {
            setContracts(setter);
          }}
        ></PersonalSetting>
      );
      break;
  }

  if (contracts && loggedUser && userAccount) {
    return (
      <>
        <DashboardToolbar
          setPath={setPath}
          setOpen={setOpen}
          setToken={setToken}
          path={path}
          user={loggedUser}
        ></DashboardToolbar>
        <div className="bg-[#0b0f19] min-h-[100vh] max-h-max pt-12 text-white">
          {component}
        </div>
        <DashboardDrawer open={open}></DashboardDrawer>
      </>
    );
  }
}
