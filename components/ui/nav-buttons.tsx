import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export default function NavButtons({ active }: { active: number }) {
  return (
    <div className="flex">
      <div className="flex justify-center items-center p-6">
        <ButtonGroup>
          <Button
            asChild={active !== 1}
            variant="outline"
            size="lg"
            disabled={active === 1}
          >
            {active === 1 ? "Program" : <Link href="/program">Program</Link>}
          </Button>
          <Button variant="outline" size="lg" className="font-gloock text-2xl">
            Plapp
          </Button>
          <Button
            asChild={active !== 2}
            variant="outline"
            size="lg"
            disabled={active === 2}
          >
            {active === 2 ? "Analyze Form" : <Link href="/analyze">Analyze Form</Link>}
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}