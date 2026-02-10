"use client";

import NavButtons from "@/components/ui/nav-buttons";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import liftsData from "@/src/data/lifts.json";
import { createContext, useContext, useState } from "react";
//const workoutContext = createContext<string>("");
//const liftContext = createContext<string>("");
//const variationContext = createContext<string>("");

export default function Program() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center items-center p-6">
        <NavButtons active={1} />
      </div>
      <div className="flex justify-center items-center p-6">
        <Button>Create Program</Button>
      </div>
      <div className="flex justify-center items-center p-6">
        <Button>View Existing Programs</Button>
      </div>
      <CreateProgram />
    </div>
  );
}

function CreateProgram() {
  const [type, setType] = useState("");
  const [workout, setWorkout] = useState("");
  const [variation, setVariation] = useState("");

  let lifts: string[] = [];
  if (type === "Main") {
    // @ts-ignore
    lifts = Object.keys(liftsData.Main) || [];
  } else if (type === "Accessory") {
    // @ts-ignore
    lifts = Object.keys(liftsData.Accessory) || [];
  }

  let variations: string[] = [];
  if (type === "Main" && workout) {
    // @ts-ignore
    variations = liftsData.Main[workout] || [];
  } else if (type === "Accessory" && workout) {
    // @ts-ignore
    variations = liftsData.Accessory[workout] || [];
  }
  return (
    <div className="flex flex-col items-center gap-4">
      <Select onValueChange={setType} value={type}>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue placeholder="Select a Workout" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Main">Main</SelectItem>
            <SelectItem value="Accessory">Accessory</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select onValueChange={setWorkout} value={workout}>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue placeholder="Select a Workout" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {lifts.map((l) => (
              <SelectItem key={l} value={l}>
                {l}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select onValueChange={setVariation} value={variation}>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue placeholder="Select a Workout" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {variations.map((v) => (
              <SelectItem key={v} value={v}>
                {v}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
