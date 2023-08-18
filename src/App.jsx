import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Dashboard from "./views/Dashboard";
import Faculties from "./views/Faculties";

function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element = {<Dashboard/>} />
      <Route path='/faculties' element = {<Faculties/>} />
     </Routes>
    </>
  );
}

export default App;
