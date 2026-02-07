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

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Analyze() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col justify-center items-center p-6">
        <ButtonGroup>
          <Button asChild variant="outline" size="lg">
            <Link href="/login">Program</Link>
          </Button>
          <Button variant="outline" size="lg" className="font-gloock text-2xl">
            Plapp
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/analyze">Analyze Form</Link>
          </Button>
        </ButtonGroup>
        <Card className="flex w-full max-w-sm">
          <CardHeader>
            <CardTitle>Upload Video</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <input
                type="file"
                accept="video/*"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Select>
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
            <Button type="submit" className="w-full">
              Upload
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
