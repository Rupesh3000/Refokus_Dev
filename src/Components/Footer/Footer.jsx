import React from "react";

function Footer() {
  return (
    <div className=" container mx-auto py-10 flex justify-between mt-28 gap-12 overflow-hidden">
      <div className="basis-1/2 text-gray-300">
        <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
          refokus.
        </h1>
      </div>
      <div className="md:flex">
        <div className="flex gap-10">
          <div>
            <h4 className=" mb-10 text-white capitalize">socials</h4>
            {["instagram", "twitter", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-300">
                {item}
              </a>
            ))}
          </div>
          <div>
            <h4 className=" mb-10 text-white capitalize">socials</h4>
            {["instagram", "twitter", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize text-zinc-300">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-end ">
          <p className="text-right text-white">
            Refokus is pioneering digital agency driven by design and empowered
            by technology.
          </p>
          <img
            className="w-32 mt-12"
            src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;

// <div className="basis-1/2 flex gap-2 justify-between">
//   <div className="">

//   </div>
//   <div className="">
//     <h4 className=" mb-10 text-white capitalize">socials</h4>
//     {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
//       <a key={index} className="block mt-2 capitalize text-zinc-300">
//         {item}
//       </a>
//     ))}
//   </div>

// </div>;
