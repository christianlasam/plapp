"use client";

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
import { verify_login } from "./actions";
import { useActionState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

function ErrorAlert({ state }: { state: any }) {
  if (state) {
    return (
      <Alert variant="destructive" className="w-full max-w-sm">
        <InfoIcon />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{state}</AlertDescription>
      </Alert>
    );
  }
  return null;
}

export default function Login() {
  const [state, formAction, isPending] = useActionState(
    verify_login,
    undefined,
  );
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-8xl py-10 pb-30 font-gloock text-center">Plapp</h1>
      <Card className="flex w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="login" method="POST" action={formAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input id="username" type="username" name="username" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="/password_reset"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" name="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" form="login" className="w-full">
            Login
          </Button>
        </CardFooter>
      </Card>
      <ErrorAlert state={state} />
    </div>
  );
}
