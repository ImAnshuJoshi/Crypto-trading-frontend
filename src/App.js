import "./App.css";
import Explore from "./components/Explore/Explore";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Features from "./Pages/Features/Features";
import GetStarted from "./Pages/GetStarted/GetStarted";
import Learn from "./Pages/Learn/Learn";
import MarketTrend from "./Pages/MarketTrend/MarketTrend";
import MarketUpdate from "./Pages/MarketUpdate/MarketUpdate";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <MarketTrend />
      <Features />
      <Explore />
      <MarketUpdate />
      <GetStarted />
      <Learn />
      <Footer />
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle4"></div>
    </div>
  );
}

export default App;
