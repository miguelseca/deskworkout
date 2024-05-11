import React from "react";

export default function WorkoutControls({
  startWorkout,
  cancelWorkout,
  continueWorkout,
}) {
  return (
    <>
      <button
        onClick={startWorkout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
      >
        Start Workout
      </button>
      <button
        onClick={cancelWorkout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
      >
        Cancel Workout
      </button>
      <button
        onClick={continueWorkout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
      >
        Continue Workout
      </button>
    </>
  );
}
