import "./App.css";
import Main from "./components/Main/Main";
import MarketTrendCard from "./components/MarketTrendCard/MarketTrendCard";
import Navbar from "./components/Navbar/Navbar";
import MarketTrend from "./Pages/MarketTrend/MarketTrend";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <MarketTrend />
    </div>
  );
}

export default App;
