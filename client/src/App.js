import './App.css';
import { useContext } from "react";
import { DrizzleContext } from "@drizzle/react-plugin";

function App() {
  console.log(DrizzleContext);
const drizzleData = useContext(DrizzleContext.Context)
console.log(drizzleData);
  return (
    <div className="App">
    <h3> Hello World </h3>
    </div>
  );
}

export default App;
