import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import { EXERCISES } from "@/data/exercises";

import "./style.css";
import ExerciseCard from "@/components/ExerciseCard/ExerciseCard";




export default function Exercises() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="container mx-auto flex flex-wrap justify-center">
          {EXERCISES.map((exercise, index) => {
            return <ExerciseCard exercise={exercise} key={index}></ExerciseCard>;
          })}
        </div>
      </main>
    </>
  );
}
