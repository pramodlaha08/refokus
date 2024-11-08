import React from "react";
import { IoMdArrowForward } from "react-icons/io";
const Card = ({ width, start, para, hover }) => {
  console.log(hover)
  return (
    <div className={`${width} hover:${hover} bg-zinc-800 p-5 rounded-xl min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-sm">one heading </h3>
          <IoMdArrowForward />
        </div>
        <h2 className="text-3xl font-medium mt-5">something heading</h2>
      </div>
      <div className="w-full mt-60">
        {start && (
          <>
            <h1 className="text-8xl tracking-wider font-semibold">start a project</h1>
            <button className="rounded-full border border-zinc-50 mt-5 px-5">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
