"use client";

import Head from "next/head";
import { Card, CardBody, Image, CardFooter } from "@nextui-org/react";
import { EXERCISES } from "@/data/exercises";
import { useEffect, useState } from "react";
import { SOUNDS } from "@/data/sounds";
import StartCard from "@/components/StartCard/StartCard";
import ExerciseCard from "@/components/ExerciseCard/ExerciseCard";
import WorkoutControls from "@/components/WorkoutControls/WorkoutControls";

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

  useEffect(() => {
    if (isWorking) {
      document.title = "DeskWorkout in " + Math.floor(timeLeft / 60) +
      " : " +
      (timeLeft - Math.floor(timeLeft / 60) * 60) + " minutes";
    } else {
      document.title = " Just DeskWorkout";
    }
  }, [timeLeft]);

  function startWorkout() {
    if (!isWorking) {
      console.log("STARTING");
      setShowCard(false);
      setIsWorking(true);
      const workoutInterval = setTimeout(() => {
        alarm();
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
    setShowCard(false);
  }

  function continueWorkout() {
    cancelWorkout();
    startWorkout();
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
    clearInterval(workoutIntervalId);
    setWorkoutIntervalId(null);
    clearInterval(timerIntervalId);
    setTimerIntervalId(null);
    setIsWorking(false);
  }

  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <div className="flex flex-col items-center justify-between">
        <div>
          {!showCard && !isWorking && <StartCard />}

          {!showCard && isWorking && (
            <Card className="py-2 m-4 px-2 bg-zinc-800/90">
              <CardBody className="overflow-visible">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl "
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={280}
                />
              </CardBody>

              <CardFooter>
                <small className="text-default-500 w-64 inline-block align-text-top text-justify">
                  {"time until next exercise:" +
                    Math.floor(timeLeft / 60) +
                    " : " +
                    (timeLeft - Math.floor(timeLeft / 60) * 60)}
                </small>
              </CardFooter>
            </Card>
          )}

          {showCard && <ExerciseCard exercise={exercise} />}
        </div>

        <WorkoutControls
          isWorking={isWorking}
          showCard={showCard}
          startWorkout={startWorkout}
          continueWorkout={continueWorkout}
          cancelWorkout={cancelWorkout}
        />
      </div>
    </>
  );
}
