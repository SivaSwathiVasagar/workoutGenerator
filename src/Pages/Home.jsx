import React from "react";
import Form from "../components/Form/Form";
import GetExercise from "../components/GetExercise";
import { useState } from "react";

export default function Home() {
  const [exercises, setExercise] = useState(null);

  const getExercise = async (selectedMuscleGroup) => {
    // const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${searchTerm}`;
    const url = `https://exerciseapi3.p.rapidapi.com/exercise/primary_muscle/${selectedMuscleGroup}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "35bbfee14dmshdf2e85bd40a18a1p1f3574jsn3492cfda8fbd",
        "X-RapidAPI-Host": "exerciseapi3.p.rapidapi.com",
      },
    };

    // make fetch request and store response
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setExercise(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="Home">
      <h3>“Take care of your body. It’s the only place you have to live.”</h3>
      <h4>Welcome to my Fitness Planner!</h4>
      <p>
        Please choose the muscle group that you are planning to workout today
        from below options
      </p>
      <Form exerciseSearch={getExercise} />
      <GetExercise exercises={exercises} />
    </div>
  );
}
