import React from "react";
import refokusLogo from "../assets/svg/refokus.svg";
import Button from "./common/Button";
const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-between items-center text-zinc-500 py-6 border-b border-zinc-700">
      <div className="flex items-center">
        <img className="w-4 mr-3" src={refokusLogo} alt="" />
        <h1 className="font-bold text-base text-zinc-100">Refokus</h1>
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, key) =>
            elem.length === 0 ? (
              <span className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a
                key={key}
                className="text-sm lg:text-base flex items-center gap-1 font-regular"
                href="#"
              >
                {key === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00ff19" }}
                    className="inline-block w-2 h-2 rounded-full bg-green-500"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button title="Get Started" />
    </div>
  );
};

export default Navbar;
