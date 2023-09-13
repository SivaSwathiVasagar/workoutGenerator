import "./App.css";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/workoutGenerator/" element={<Home />} />
        <Route path="/workoutGenerator/blog" element={<Blog />} />
        <Route path="/workoutGenerator/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
