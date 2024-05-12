"use client"
import React from "react";
import {
  Card,
  CardBody,
  Image,
  CardFooter,
} from "@nextui-org/react";

export default function StartCard() {
  return (
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
        what are you waiting for?
      </small>
    </CardFooter>
  </Card>
  );
}
