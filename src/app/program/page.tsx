import NavButtons from "@/components/ui/nav-buttons";
import {Button} from "@/components/ui/button";
export default function Program() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex justify-center items-center p-6">
                <NavButtons active={1} />
            </div>
            <div className="flex justify-center items-center p-6">
                <Button>Create Program</Button>
            </div>
        </div>
        
    );
}