import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[10rem] font-semibold tracking-tight">refokus</h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3 ">
            <h4 className="text-zinc-400 mb-3 font-semibold">Socials</h4>
            {["Instagram", "Twitter (x?)", "LinkedIn"].map((elem, index) => (
              <a
                key={index}
                className="block text-zinc-600 mt-2 font-medium tracking-wide"
              >
                {elem}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="text-zinc-400 mb-3 font-semibold">Socials</h4>
            {["Instagram", "Twitter (x?)", "LinkedIn"].map((elem, index) => (
              <a
                key={index}
                className="block text-zinc-600 mt-2 font-medium tracking-wide"
              >
                {elem}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end">
            <p className="text-sm tracking-tight text-right">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              className="w-32 mt-10"
              src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
