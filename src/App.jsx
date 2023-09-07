import "./App.css";

import "./components/Header/header.css";

import Nav from "./components/Nav";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  // const [exercises, setExercise] = useState(null);

  // const getExercise = async (searchTerm) => {
  //   // const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${searchTerm}`;
  //   const url = `https://exerciseapi3.p.rapidapi.com/exercise/primary_muscle/${searchTerm}`;
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "35bbfee14dmshdf2e85bd40a18a1p1f3574jsn3492cfda8fbd",
  //       "X-RapidAPI-Host": "exerciseapi3.p.rapidapi.com",
  //     },
  //   };

  //   // make fetch request and store response
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //     let a = result;
  //     console.log(a);
  //     setExercise(a);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   //set the Movie state to the movie
  // };

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
