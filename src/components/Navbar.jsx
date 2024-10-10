import React from "react";
import refokusLogo from '../assets/svg/refokus.svg'
const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex items-center text-zinc-500 py-6">
      <img className="w-4" src={refokusLogo} alt="" />
      <div className="links flex gap-14 ml-20">
        {['Home', 'Work', 'Culture'].map((elem, key) => <a key={key} className="text-sm" href="#">{ elem }</a>)}
      </div>
    </div>
  );
};

export default Navbar;
