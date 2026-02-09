"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import { selectLift } from "../../../lib/lifts";
import NavButtons from "@/components/ui/nav-buttons";

export default function Analyze() {
  const [lift, setLift] = useState("");
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col justify-center items-center p-6">
         <NavButtons active={2} />
        <Card className="flex w-full max-w-sm">
          <CardHeader>
            <CardTitle>Upload Video</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <input
                id="video"
                type="file"
                accept="video/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Select onValueChange={setLift} value={lift}>
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Select a Workout" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="squat">Squat</SelectItem>
                  <SelectItem value="bench">Bench</SelectItem>
                  <SelectItem value="deadlift">Deadlift</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button type="submit" className="w-full" onClick={() => selectLift(lift)}>
              Upload
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
