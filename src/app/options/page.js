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

export default function Options() {
  function dropDownSelected() {
    alert("key");
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Slider
          label="Temperature"
          step={0.01}
          maxValue={1}
          minValue={0}
          defaultValue={0.4}
          className="max-w-md"
        />

        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">Select sound: </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            onAction={(key) => dropDownSelected()}
          >
            <DropdownItem key="new">New file</DropdownItem>
            <DropdownItem key="copy">Copy link</DropdownItem>
            <DropdownItem key="edit">Edit file</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </main>
    </>
  );
}
