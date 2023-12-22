import "@fontsource/prompt";
import "@fontsource-variable/orbitron";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Gallery from "./pages/Gallery";
import NoPage from "./pages/NoPage";
import Cars from "./pages/gallery/Cars";
import Events from "./pages/gallery/Events";
import Outdoor from "./pages/gallery/Outdoor";
import Random from "./pages/gallery/Random";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />}></Route>
      <Route path="/gallery/cars" element={<Cars />} />
      <Route path="gallery/events" element={<Events />} />
      <Route path="gallery/outdoors" element={<Outdoor />} />
      <Route path="gallery/random" element={<Random />} />

      <Route path="/about" element={<About />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
