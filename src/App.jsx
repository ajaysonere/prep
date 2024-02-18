import "./App.css";
import Booking from "./components/Booking";
import Cardspecial from "./components/Cardspecial";
import Cities from "./components/Cities";
import Hero from "./components/Hero";
import Referral from "./components/Referral";
import Services from "./components/Services";
import Special from "./components/Special";

function App() {
  return (
    <>
      <Hero />
      <Special />
      <Cardspecial />
      <Cities />
      <Services />
      <Booking />
      <Referral />
    </>
  );
}

export default App;
