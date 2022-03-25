import React from "react";
import { UserIcon, FireIcon, ChatAlt2Icon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="flex justify-around mt-10">
      <UserIcon className="text-gray-600 h-8 w-8 " />

      <FireIcon className="text-red-400 h-8 w-8 " />

      <ChatAlt2Icon className="text-gray-600 h-8 w-8" />
    </div>
  );
}

export default Header;
