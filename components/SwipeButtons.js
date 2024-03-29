import React from "react";
import {
  RefreshIcon,
  XIcon,
  StarIcon,
  HeartIcon,
  LightningBoltIcon,
} from "@heroicons/react/solid";

function SwipeButtons() {
  return (
    <div className="flex justify-around mt-10 mx-2 lg:mt-20 lg:mx-20">
      {/* this is flfkf */}
      <RefreshIcon className="text-yellow-300 bg-slate-100 shadow-md rounded-full px-2 py-1 h-10 w-10 md:h-12 md:w-12" />

      <XIcon className="text-gray-800 bg-slate-100 shadow-md rounded-full px-2 py-1 h-10 w-10 md:h-12 md:w-12" />

      <StarIcon className="text-blue-500 bg-slate-100 shadow-md rounded-full px-2 py-1 h-10 w-10 md:h-12 md:w-12" />

      <HeartIcon className="text-red-600 bg-slate-100 shadow-md rounded-full px-2 py-1h-10 w-10 md:h-12 md:w-12" />

      <LightningBoltIcon className="text-blue-600 bg-slate-100 shadow-md rounded-full px-2 py-1 h-10 w-10 md:h-12 md:w-12" />
    </div>
  );
}

export default SwipeButtons;
