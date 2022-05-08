import PaginaIndex from "./pages";
import PaginaArchivo from "./pages/archivo";
import EstilosGlobales from "./styles/EstilosGlobales";
import { Routes, Route, HashRouter } from "react-router-dom";
import Pagina404 from "./pages/404";

function App() {
  return (
    <HashRouter>
      <EstilosGlobales />
      <Routes>
        <Route path="/" element={<PaginaIndex />}></Route>
        <Route path="/archivo" element={<PaginaArchivo />}></Route>
        <Route path="/*" element={<Pagina404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
