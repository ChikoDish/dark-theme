import { useEffect } from "react";
import "./App.css";
import Toggle from "./components/Toggle";
import { keepTheme } from "./theme";

function App() {
  useEffect(() => {
    keepTheme();
  });
  return (
    <div className="App">
      <Toggle />
      <h1>How are you doing?</h1>
    </div>
  );
}

export default App;
