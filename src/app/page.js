"use client";
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between pt--1">
        
        
        
        <Card className="py-4 m-10 px-8" >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">Daily Mix</p>
            <small className="text-default-500">12 Tracks</small>
            <h4 className="font-bold text-large">Frontend Radio</h4>
          </CardHeader>

        
          <CardBody className="overflow-visible">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        

          <CardFooter className="">
        <p className="text-tiny text-justify">cenas</p>
      </CardFooter>



        </Card>
      </main>
    </>
  );
}
