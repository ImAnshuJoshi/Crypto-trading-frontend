import "./App.css";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Features from "./Pages/Features/Features";
import MarketTrend from "./Pages/MarketTrend/MarketTrend";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <MarketTrend />
      <Features />
    </div>
  );
}

export default App;
