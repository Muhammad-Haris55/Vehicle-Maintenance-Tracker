import Dashboard from "./Components/Dashboard";
import Vehicile from "./Components/Vehicile";
import Remindes from "./Components/Remindes";
import Setup from "./Components/Setup";
import Addcar from "./Components/Addcar";
import Documentation from "./Components/Documentation";
import { Routes, Route, useRoutes, } from "react-router-dom";
function App() {
  return (
    <>
      {/* useRoutes(['/Reminders', '/Engine oil'].map(path => ({"/", { Remindes }}))) */}
      <Routes>
        {["/Reminders", "/Engine_oil", "/Fuel_filter","/Spark_plugs","/Battery","/Timing_belt","/Tire_rotation","/Wheel_alignment","/Fuel_filter","/Air_filter","/Cabin_filter"].map((path, index) => 
        <Route path={path} element={<Remindes/>} key={index} />
    )}
    {["/Documentation","/VEHICLE_INSURANCE","/ECO_TEST","/VEHICLE_BOOK","/DRIVEN_LISCENE"].map((path,index)=>
      <Route path={path} element={<Documentation/>}></Route>
    )}
        <Route path="/" element={<Dashboard />}></Route>
      
        <Route path="/Vehiclepage" element={<Vehicile />}></Route>
        <Route path="/Setup" element={<Setup />}></Route>
        <Route path="/Add" element={<Addcar />}></Route>
        {/* <Route path="/Documentaion" element={<Documentation />}></Route> */}
      </Routes>
      {/* <Dashboard/> */}

    </>
  );
}

export default App;
