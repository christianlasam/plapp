"use client";

import NavButtons from "@/components/ui/nav-buttons";
import {Button} from "@/components/ui/button";  
import { Select, SelectTrigger, SelectContent, SelectGroup, SelectItem, SelectValue } from "@/components/ui/select";
import liftsData from "@/src/data/lifts.json";
import { createContext, useContext, useState } from "react";
const workoutContext = createContext<string>("");
const liftContext = createContext<string>("");


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
    return (
        <workoutContext.Provider value={type}>
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
                <Main />
            </div>
        </workoutContext.Provider>
    );
}

function Main() {
    const mainLifts = Object.keys(liftsData.Main);
    const accessoryLifts = Object.keys(liftsData.Accessory);
    const type = useContext(workoutContext);
    const [workout, setWorkout] = useState("");
    return (
        <liftContext.Provider value={workout}>
            <Select>
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Select a Workout" />
              </SelectTrigger>
              <SelectContent>
                {type === "Main" ? (
                  <SelectGroup>
                    {mainLifts.map((l) => (
                      <SelectItem key={l} value={l}>
                        {l}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                ) : (
                  <SelectGroup>
                    {accessoryLifts.map((l) => (
                      <SelectItem key={l} value={l}>
                        {l}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                )}
                
              </SelectContent>
            </Select>
        </liftContext.Provider>
    );
}
    