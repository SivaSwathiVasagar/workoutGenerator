import "./App.css";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
