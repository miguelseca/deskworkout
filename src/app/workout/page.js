"use client";
import { EXERCISES } from "@/data/exercises";
import { useEffect, useState } from "react";
import { SOUNDS } from "@/data/sounds";

export default function Workout() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [isWorking, setIsWorking] = useState(false);

  const [sound, setSound] = useState(0);
  const [minutes, setMinutes] = useState(10);
  const [exercise, setExercise] = useState(EXERCISES[0]);

  const [timerIntervalId, setTimerIntervalId] = useState(null);
  const [workoutIntervalId, setWorkoutIntervalId] = useState(null);

  useEffect(() => {
    const theSound = JSON.parse(localStorage.getItem("selectedSound"));
    const theMinutes = JSON.parse(localStorage.getItem("selectedMinutes"));

    if (theSound) {
      setSound(theSound);
    } else {
      setSound(0);
    }

    setMinutes(1);
    // if (theMinutes) {
    //   setMinutes(theMinutes);
    // } else {
    //   setMinutes(10);
    // }
  }, []);

  function startWorkout() {
    if (!isWorking) {
      console.log("STARTING");
      setShowCard(false);
      setIsWorking(true);
      const workoutInterval = setTimeout(() => {
        alarm()
      }, minutes * 60000);

      setWorkoutIntervalId(workoutInterval);
      setTimer();
    }
  }

  function cancelWorkout() {
    console.log("CANCELING");
    clearInterval(workoutIntervalId);
    setWorkoutIntervalId(null);
    clearInterval(timerIntervalId);
    setTimerIntervalId(null);
    setIsWorking(false);
  }

  function continueWorkout() {
    setShowCard(false);
    cancelWorkout();
  }

  function setTimer() {
    clearInterval(timerIntervalId);
    setTimerIntervalId(null);
    setTimeLeft(minutes * 60);
    const timerInterval = setInterval(() => {
      setTimeLeft((a) => a - 1);
    }, 1000);
    setTimerIntervalId(timerInterval);
  }

  function alarm() {
    setExercise(EXERCISES[Math.floor(Math.random() * EXERCISES.length)]);
    setShowCard(true);
    const audio = new Audio(
      "/sounds/" + SOUNDS[sound].name + SOUNDS[sound].type
    );
    audio.play();
    cancelWorkout();
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <div className="shadow-md p-8 rounded-lg mt-10 w-80 h-32">
            {isWorking && (
              <p>
                {"time until next exercise:" +
                  Math.floor(timeLeft / 60) +
                  " : " +
                  (timeLeft - Math.floor(timeLeft / 60) * 60)}
              </p>
            )}
            {showCard && <p>{exercise.name}</p>}
          </div>
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
        </div>
      </div>
    </>
  );
}
