import "./App.css";
import Explore from "./components/Explore/Explore";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Features from "./Pages/Features/Features";
import GetStarted from "./Pages/GetStarted/GetStarted";
import MarketTrend from "./Pages/MarketTrend/MarketTrend";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <MarketTrend />
      <Features />
      <Explore />
      <GetStarted />
    </div>
  );
}

export default App;
