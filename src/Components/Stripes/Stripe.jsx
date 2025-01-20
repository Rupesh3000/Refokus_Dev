/* eslint-disable react/prop-types */
import React from "react";

function Stripe({ val }) {
  const { url, number } = val;
  return (
    <div className="px-8 py-6 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex items-center justify-between text-zinc-400 gap-7">
      <img className="h-6" src={url} alt="" />
      <span className="font-semibold text-lg">{number}</span>
    </div>
  );
}

export default Stripe;
