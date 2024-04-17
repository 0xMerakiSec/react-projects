import { useState } from "react";

function App() {
  const [color, setColor] = useState("#ffba08");

  // function changeColor(color) {
  //   setColor(color);
  // }

  return (
    <div
      className="w-full h-screen duration-200 bg-gray-400"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-200 px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("#f4978e")}
            className="outline-none px-4 py-1 rounded-full shaodw-lg text-black bg-white"
          >
            Pink
          </button>

          <button
            onClick={() => setColor("#2ec4b6")}
            className="outline-none px-4 py-1 rounded-full shaodw-lg text-black bg-white"
          >
            Blue
          </button>

          <button onClick={() => setColor("#ffba08")}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
