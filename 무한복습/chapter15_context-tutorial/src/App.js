import "./App.css";
import ColorBox from "./contexts/components/ColorBox";
import { ColorProvider } from "./contexts/colors";
import SelectColors from "./contexts/components/SelectColors";

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
