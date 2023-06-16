import NavBar from "./components/NavBar";
import Timer from "./components/Timer";

function App() {
  return (
    <main className="flex h-screen justify-center bg-pomodoro text-white">
      <div className="h-full w-full md:max-w-4xl flex-col space-y-10">
        <NavBar />
        <Timer/>
      </div>
    </main>
  );
}

export default App;
