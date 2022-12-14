import { ColorProvider } from "./ context/color";
import "./App.css";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors></SelectColors>
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
