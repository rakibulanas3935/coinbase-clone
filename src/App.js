import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Home/Header";
import Navigation from "./Components/Home/Navigation";

import Investments from "./Components/Pages/Investments/Investments";
import Library from "./Components/Pages/Library/Library";
import Story from "./Components/Story/Story";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Header></Header>
      <Story></Story>
      <Investments></Investments>
      <Library></Library>
      <Footer></Footer>
    </div>
  );
}

export default App;
