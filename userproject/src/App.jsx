import { useContext } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { UserContext } from "./context";

function App() {
  const data = useContext(UserContext);
  return (
    <>
      <div className="flex flex-col flex-wrap justify-center items-center min-h-screen w-full rounded-2xl bg-slate-400">
        <h1 className="text-center text-gray-700 text-2xl font-light antialiased mb-12">
          Context Basic
        </h1>
        {!data.user && <Login />}
        <Profile />
      </div>
    </>
  );
}

export default App;
