import { useContext, useState } from "react";
import { UserContext } from "../context";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) return;
    setUser({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex flex-col flex-wrap justify-between shadow-2xl p-8 rounded-2xl bg-slate-300 space-y-8">
      <h2 className="text-center text-xl text-gray-700 font-bold ">Login</h2>
      <input
        className="rounded-3xl p-2 focus:outline-none ring-1 focus:ring-purple-600 shadow-sm"
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        className="rounded-3xl p-2 focus:outline-none ring-1 focus:ring-purple-600 shadow-sm"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-purple-600 text-white  px-4 py-2 font-semibold text-center hover:bg-purple-500 rounded-3xl shadow-md"
        onClick={handleSubmit}
      >
        submit
      </button>
    </div>
  );
}

export default Login;
