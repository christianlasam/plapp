import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export default function ErrorAlert({ state }: { state: any }) {
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
