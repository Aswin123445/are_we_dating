import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Advisor from './pages/advisor';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advisor" element={<Advisor />} />
      </Routes>
    </BrowserRouter>
  );
}
