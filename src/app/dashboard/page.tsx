import NavButtons from "@/components/ui/nav-buttons";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center items-center p-6">
        <NavButtons active={0} />
      </div>
    </div>
  );
}
