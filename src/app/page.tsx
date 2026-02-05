import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export default function Landing() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-9xl pb-5 font-gloock text-center">Plapp</h1>
      <p className="text-4xl text-center">A new frontier for powerlifting</p>
      <ButtonGroup>
        <Button asChild variant="outline" size="lg">
          <Link href="/login">Sign In</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/login">Create Account</Link>
        </Button>
      </ButtonGroup>
    </div>
  );
}
