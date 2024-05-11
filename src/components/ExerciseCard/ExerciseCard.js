import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";

export default function ExerciseCard({ exercise }) {
  return (
    <Card className="py-4 m-10 px-8 flex ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">{exercise.name}</h4>
      </CardHeader>

      <CardBody className="overflow-visible">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={"/images/" + exercise.imageURL + ".bmp"}
          width={200}
        />
      </CardBody>

      <CardFooter className="">
        <p className="text-tiny w-64 text-justify">{exercise.description}</p>
      </CardFooter>
    </Card>

    // <Card className="exerciseCard flex justify-center p-4 m-10">

    // <CardHeader className="pb-0 pt-2 px-4 flex-col items-start w-64">
    //     <h6 className="font-bold text-large">{exercise.name}</h6>
    //         <p className="text-tiny uppercase font-bold">Daily Mix</p>
    //         <small className="text-default-500">12 Tracks</small>
    //         <h4 className="font-bold text-large">Frontend Radio</h4>
    //       </CardHeader>

    //   <CardBody className="overflow-visible">
    //     <Image
    //       alt="Card background"
    //       className="object-cover rounded-xl"
    //       src={"/images/" + exercise.imageURL + ".bmp"}
    //       width={150}

    //     />
    //   </CardBody>
    //   <CardFooter className="">
    //     <p className="text-tiny w-32 text-justify">{exercise.description}</p>
    //   </CardFooter>
    // </Card>
  );
}
