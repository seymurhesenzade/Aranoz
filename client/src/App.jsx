import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/index.jsx"
import AddProductPage from "./pages/AddProductPage/index.jsx";
import NotFoundPage from "./pages/NotFoundPage/index.jsx";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/AddProductPage" element={<AddProductPage />} />
        <Route path="/NotFoundPage" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
