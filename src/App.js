import "./App.css";
import HomeMain from "./components/sections/Hero/HomeMain";
import About from "./components/sections/About/About";
import Navigation from "./components/layout/Navigation";
import Portfolio from "./components/sections/Portfolio/Portfolio";
const App = () => {
  return (
    <div className="App">
      <Navigation />
      <HomeMain />
<About/>
      <Portfolio />
    </div>
  );
};

export default App;
