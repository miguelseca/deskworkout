"use client";
import React from "react";
import { Slider } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { SOUNDS } from "@/data/sounds";
import { useEffect, useState } from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { Switch } from "@nextui-org/switch";

export default function Options() {
  const [sound, setSound] = useState(0);
  const [minutes, setMinutes] = useState(10);

  useEffect(() => {
    const theSound = JSON.parse(localStorage.getItem("selectedSound"));
    const theMinutes = JSON.parse(localStorage.getItem("selectedMinutes"));

    if (theSound) setSound(theSound);
    if (theMinutes) setMinutes(theMinutes);
  }, []);

  function dropDownSelected(key) {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedSound", key);
    }
    setSound(key);
  }

  function onChangeMinutes(value) {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedMinutes", value);
    }
    setMinutes(value);
  }

  return (
    <>
      <div className="container mx-auto p-6">
        <div className="bg-zinc-800/90 shadow-md rounded-md p-6 mb-4">
          <h3 className="text-xl font-semibold mb-4">Workout time interval</h3>
          <Slider
            label=" "
            step={5}
            maxValue={60}
            minValue={10}
            defaultValue={10}
            value={minutes}
            getValue={(minutes) => `${minutes} minutes`}
            onChange={onChangeMinutes}
            className="max-w-md"
          />
        </div>

        <div className="bg-zinc-800/90 shadow-md rounded-md p-6 mb-4">
          <h3 className="text-xl font-semibold mb-4">
            Alarm sound: {SOUNDS[sound].name}{" "}
          </h3>

          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Select sound</Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              onAction={(key) => dropDownSelected(key)}
            >
              {SOUNDS.map((item, index) => {
                return <DropdownItem key={index}>{item.name}</DropdownItem>;
              })}
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className="bg-zinc-800/90 shadow-md rounded-md p-6 mb-4">
          <CheckboxGroup
            label="Workout selection"
            defaultValue={["buenos-aires", "london"]}
          >
            <Checkbox value="buenos-aires">Core Workout</Checkbox>
            <Checkbox value="sydney">Stretch</Checkbox>
            <Checkbox value="san-francisco">Eye Exercises</Checkbox>
            <Checkbox value="tokyo">Yoga-like Exercises</Checkbox>
          </CheckboxGroup>
        </div>

        <div className="bg-zinc-800/90 shadow-md rounded-md p-6">
          <Switch defaultSelected>Can repeat exercises?</Switch>
        </div>


      </div>
    </>
  );
}
