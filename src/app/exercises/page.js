import { EXERCISES } from "@/data/exercises";
import ExerciseCard from "@/components/ExerciseCard/ExerciseCard";

export default function Exercises() {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {EXERCISES.map((exercise, index) => {
          return <ExerciseCard exercise={exercise} selectable={true} key={index}></ExerciseCard>;
        })}
      </div>
    </>
  );
}
