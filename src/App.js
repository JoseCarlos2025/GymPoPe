import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from './Pages/Home/Home';
import Price from "./Pages/Prices/prices";
import Contact from "./Pages/Contact us/contact";
import Comentarios from "./Pages/Comentarios/Comentarios";
import News from "./Pages/News/News";
import RSS from "./Pages/RSS/RSS";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/prices" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comentarios" element={<Comentarios />} />
        <Route path="/News" element={<News />} />
        <Route path="/rss" element={<RSS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
