"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <Card className="py-4 m-10 px-8">
          {/* <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader> */}

          <CardBody className="overflow-visible">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>

          <CardFooter className="">
            <p className="text-tiny w-64 text-justify">
              Welcome to DeskFit Stay active while working from home with
              DeskFit! Explore our exercises tab for a variety of desk-friendly
              workouts. On the workout tab, set the timer, and get moving. Each
              time your timer goes off, an exercise card appears with a new
              activity. Complete the exercise, click 'Done', and reset the timer
              for the next round. Prioritize your well-being and boost
              productivity today. Get healthier while working!
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
