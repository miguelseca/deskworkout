import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
} from "@nextui-org/react";

export default function EmptyCard() {
  return (
    <Card className="py-4 m-10 px-8 flex bg-gradient-to-r from-rose-500 to-pink-500">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start bg-">
        <p className="text-tiny uppercase font-bold">Empty Card</p>
      </CardHeader>

      <CardFooter className="">
        <p className="text-tiny w-64 text-justify">Hello</p>
      </CardFooter>
    </Card>

   
  );
}
