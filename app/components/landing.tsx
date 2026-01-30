export default function Landing() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-8xl pb-5 font-gloock text-center">Plapp</h1>
      <p className="text-2xl font-gloock text-center">A new frontier for powerlifting</p>
      <div className="flex py-5 justify-center">
        <button type="submit" className="bg-white text-black rounded p-1">
          Log In
        </button>
        <button type="submit" className="bg-white text-black rounded p-1">
          Sign Up
        </button>
      </div>
    </div>
  );
}
