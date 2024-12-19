// import logo from './logo.svg';
import './App.css';
import RealTime from './Components/RealTime';
import StopWatch from './Components/StopWatch';
import Timer from './Components/Timer';
// import {Routes, Route, Link, NavLink} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <RealTime /> <br/>
     {/* <StopWatch /> */}
     <br/>
     <Timer />
     {/* <Routes>
        <Route path='/' element={<RealTime />} />
        <Route path='/stopwatch' element={<StopWatch />} />
        <Route path='/timer' element={<Timer />} />
     </Routes> */}
    </div>
  );
}

export default App;
