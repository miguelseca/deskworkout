import React from "react";
import { Button } from "@nextui-org/react";

export const metadata = {
  title: '...',
  description: '...',
}

export default function WorkoutControls({
  isWorking,
  showCard,
  startWorkout,
  cancelWorkout,
  continueWorkout,
}) {
  return (
    <div className="flex flex-row gap-10">
      {!isWorking && !showCard && (
        <Button
          onClick={startWorkout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        >
          Start Workout
        </Button>
      )}

      {showCard && (
        <Button
          onClick={continueWorkout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        >
          Continue Workout
        </Button>
      )}

      {(isWorking || showCard) && (
        <Button
          onClick={cancelWorkout}
          className="bg-blue-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mt-4 w-full"
        >
          Cancel Workout
        </Button>
      )}
    </div>
  );
}
