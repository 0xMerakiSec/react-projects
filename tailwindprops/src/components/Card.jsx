// import React from "react";

function Card({ username = "MerakiSec", post = "Not assigned yet" }) {
  //console.log(props);

  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://cdn.pixabay.com/photo/2024/02/17/16/08/ai-generated-8579697_1280.jpg"
          alt="a astronout in space"
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              borum modi fugiat nesciunt expedita placeat maiores repellat
              voluptatum non in iste provident, accusantium ut dolor. Odio,
              esse.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div>{username}</div>
            <div>{post}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
