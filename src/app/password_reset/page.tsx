"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { reset } from "./actions";
import ErrorAlert from "@/components/ui/error-alert";
import { useActionState } from "react";

export default function Reset() {
  const [state, formAction, isPending] = useActionState(reset, undefined);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-8xl py-10 pb-30 font-gloock text-center">Plapp</h1>
      <Card className="flex w-full max-w-sm">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="login" method="POST" action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name="email" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" form="login" className="w-full">
            Reset
          </Button>
        </CardFooter>
      </Card>
      <ErrorAlert state={state} />
    </div>
  );
}
