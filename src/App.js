import "./App.css";
import HomeMain from "./components/sections/HomeMain";
import Navigation from "./components/layout/Navigation";

const App = () => {
  return (
    <div className="App">
      <Navigation />

      <HomeMain />
    </div>
  );
};

export default App;
