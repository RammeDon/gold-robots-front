import { useState, useEffect } from "react";
import Dashboard from "../features/dashboard/layout/dashboard-layout";
import Landingpage from "../features/landing-page/layout/landingpage-layout";

export default function Body() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Landingpage setLoggedUser={setUser}></Landingpage>;
  } else {
    return <Dashboard user={user}></Dashboard>;
  }
}
