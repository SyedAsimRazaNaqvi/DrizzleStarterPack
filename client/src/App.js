import './App.css';
import { useContext } from 'react';
import { DrizzleContext } from '@drizzle/react-plugin'; 
import ReadString from './ReadString';
import SetString from './SetString';

function App() {
  console.log("in app DrizzleContext = ",DrizzleContext)
  const drizzleData = useContext(DrizzleContext.Context)
  console.log("in app drizzleData = ",drizzleData)

  if(!drizzleData.initialized) return <h3 style={{textAlign:"center"}}>"Drizzle Loading..."</h3>;
  return (
    <div style={{textAlign:"center"}}>
      {/* <div>Hello World</div> */}
      <ReadString />
      <SetString/>
    </div>
  );
}

export default App;
