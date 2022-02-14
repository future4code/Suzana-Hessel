import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { HomePage, PilotsPage, StarshipsPage } from "./pages/index";

export const Router = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pilots" element={<PilotsPage />} />
        <Route path="/starships" element={<StarshipsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
