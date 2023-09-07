import React from "react";

export default function GetExercise({ exercises }) {
  const loaded = () => {
    const Exercise = [...exercises.exercises];
    let beginnerArray = [];
    let intermediateArray = [];
    let advancedArray = [];
    let allExercisesArray = [];
    Exercise.filter((Exercises) => {
      if (Exercises.experience == "Beginner") {
        beginnerArray.push(Exercises);
      } else if (Exercises.experience == "Intermediate") {
        intermediateArray.push(Exercises);
      } else {
        advancedArray.push(Exercises);
      }
    });

    for (let j = 0; j < 1; j++) {
      if (beginnerArray.length > 0) {
        allExercisesArray.push(beginnerArray[0]);
      }
    }
    for (let j = 0; j < 1; j++) {
      if (intermediateArray.length > 0) {
        allExercisesArray.push(intermediateArray[0]);
      }
    }
    for (let j = 0; j < 1; j++) {
      if (advancedArray.length > 0) {
        allExercisesArray.push(advancedArray[0]);
      }
    }

    console.log("beginnerArray", beginnerArray.length);
    console.log("intermediateArray", intermediateArray.length);
    console.log("advancedArray", advancedArray.length);
    console.log("allExercisesArray", allExercisesArray.length);
    console.log("allExercisesArray", allExercisesArray);

    return (
      <div className="GetExercise">
        <h3>Here is the list</h3>
        {allExercisesArray.map((allExercises) => (
          <div className="AllExercise">
            <h3>Name: {allExercises.name}</h3>
            <h4>Experience: {allExercises.experience}</h4>
            <p>Equipment: {allExercises.equipment}</p>
            <p>Force type: {allExercises.force_type}</p>
            <p>Primary Muscles: {allExercises.primary_muscles}</p>
            <p>Secondary Muscles: {allExercises.secondary_muscles}</p>
            <p>Mechanics: {allExercises.mechanics}</p>
            <p> ************************************************************</p>
          </div>
        ))}
      </div>
    );
  };
  const loading = () => {
    return <h1>No excercise to Display</h1>;
  };

  //Ternary operator will determine which functions JSX we will return
  return exercises ? loaded() : loading();
}
