import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import { EXERCISES } from "@/data/exercises";

import "./style.css";

export default function Exercises() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between pt--1">
        <div className="container mx-auto flex flex-wrap justify-center">
          {EXERCISES.map((exercise,index) => {
            return (
              <Card className="exerciseCard w-64 shadow-md m-4 p-4" key={index}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h6 className="font-bold text-large">{exercise.name}</h6>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={"/images/" + exercise.imageURL + ".bmp"}
                    width={150}
                    height={150}
                  />
                </CardBody>
                <CardFooter className="">
                  <p className="text-tiny">{exercise.description}</p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </>
  );
}
