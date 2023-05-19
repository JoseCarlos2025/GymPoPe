import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from './Pages/Home/Home';
import Price from "./Pages/Prices/prices";
import Contact from "./Pages/Contact us/contact";
import Comentarios from "./Pages/Comentarios/Comentarios";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/prices" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
=======
        <Route path="/comentarios" element={<Comentarios />} />
>>>>>>> 23661c60c9ed176d420407a9bfb58f9deaa17d8f
      </Routes>
    </BrowserRouter>
  );
}

export default App;
