import "./App.css";
import HomeMain from "./components/sections/Hero/HomeMain";
import Navigation from "./components/layout/Navigation";
import Portfolio from "./components/sections/Portfolio/Portfolio";
const App = () => {
  return (
    <div className="App">
      <Navigation />
      <HomeMain />
      <Portfolio/>
    </div>
  );
};

export default App;
