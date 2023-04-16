import PaginaIndex from "./pages";
import PaginaArchivo from "./pages/archivo";
import EstilosGlobales from "./styles/EstilosGlobales";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Pagina404 from "./pages/404";
import { DarkModeContextProvider } from "./context/DarkModeContext";

function App() {
  return (
    <DarkModeContextProvider>
      <BrowserRouter>
        <EstilosGlobales />
        <Routes>
          <Route path="/" element={<PaginaIndex />}></Route>
          <Route path="/archivo" element={<PaginaArchivo />}></Route>
          <Route path="/*" element={<Pagina404 />} />
        </Routes>
      </BrowserRouter>
    </DarkModeContextProvider>
  );
}

export default App;
