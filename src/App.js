import "./App.css";
import HomeMain from "./components/sections/Hero/HomeMain";
import Team from './components/sections/Team/Team';
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
      <Team/>
    </div>
  );
};

export default App;
