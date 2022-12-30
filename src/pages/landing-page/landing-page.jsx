import { Header, Dollars, Golds, Reasoning } from "./components";

import "./landing-page.css";

export default function LandingPage() {
  return (
    <>
      <Header></Header>
      <Golds id="golds"></Golds>
      <Dollars id="dollars"></Dollars>
      <Reasoning></Reasoning>
    </>
  );
}
