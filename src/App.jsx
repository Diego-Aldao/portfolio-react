import PaginaIndex from "./pages";
import PaginaArchivo from "./pages/archivo";
import EstilosGlobales from "./styles/EstilosGlobales";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Pagina404 from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <EstilosGlobales />
      <Routes>
        <Route path="/" element={<PaginaIndex />}></Route>
        <Route path="/archivo" element={<PaginaArchivo />}></Route>
        <Route path="/*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
