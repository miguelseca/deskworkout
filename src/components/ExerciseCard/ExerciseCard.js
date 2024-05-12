"use client"
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";
import "./style.css";

export default function ExerciseCard({ exercise, selectable }) {
  return (
    <Card 
      className={
        selectable
          ? "exerciseCard py-2 m-4 px-2 bg-zinc-800/90"
          : "py-2 m-4 px-2 bg-zinc-800/90"
      }
    >
      <CardHeader className="pb-0 pt-2 px-4">
        <h6 className="font-bold text-large">{exercise.name}</h6>
      </CardHeader>

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
          {exercise.description}
        </small>
      </CardFooter>
    </Card>
  );
}
