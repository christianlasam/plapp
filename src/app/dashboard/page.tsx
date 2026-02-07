import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center items-center p-6">
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
      </div>
    </div>
  );
}