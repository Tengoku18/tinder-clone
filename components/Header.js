import React from "react";
import { UserIcon, FireIcon, ChatAlt2Icon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="flex justify-around mt-7 md:mt-10">
      <UserIcon className="text-gray-800 h-8 w-6 md:w-8 " />

      <FireIcon className="text-red-400 h-8 w-6 md:w-8 " />

      <ChatAlt2Icon className="text-gray-800 h-8 w-6 md:w-8" />
    </div>
  );
}

export default Header;
