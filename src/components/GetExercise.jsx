import React from "react";

export default function GetExercise({ exercises }) {
  const loaded = () => {
    const Exercise = exercises.exercises[0];

    return (
      <div>
        <p>Equipment: {Exercise.name}</p>
        {/* Display other properties of the first exercise here */}
      </div>
    );
  };
  const loading = () => {
    return <h1>No excercise to Display</h1>;
  };

  //Ternary operator will determine which functions JSX we will return
  return exercises ? loaded() : loading();
}
