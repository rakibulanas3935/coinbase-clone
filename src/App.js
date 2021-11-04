import "./App.css";
import Footer from "./Components/Footer/Footer";
import Investments from "./Components/Pages/Investments/Investments";
import Library from "./Components/Pages/Library/Library";
import Story from "./Components/Story/Story";

function App() {
  return (
    <div className="App">
      <Story></Story>
      <Investments></Investments>
      <Library></Library>
      <Footer></Footer>
    </div>
  );
}

export default App;
