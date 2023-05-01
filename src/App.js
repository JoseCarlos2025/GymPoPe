import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from './Pages/Home/Home';
import Price from "./Pages/Prices/prices";
import Contact from "./Pages/Contact us/contact";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/prices" element={<Price/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
