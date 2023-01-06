import Image from "next/image";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  UserIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white my-1 shadow-lg p-5 md:px-8">
      {/* left */}
      <div className="relative flex items-center h-10 my-auto ">
        <Image
          // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          src="https://links.papareact.com/qd3"
          alt="logo"
          priority="true"
          sizes="100vw"
          fill
          className="object-contain object-left cursor-pointer"
        />
      </div>
      {/* Middle - Search Bar */}
      <div className="flex items-center  md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="pl-4 flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start Your Search"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:mx-2" />
      </div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline-block">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 " />
          <UserCircleIcon className="h-6 " />
        </div>
      </div>
    </header>
  );
}

export default Header;
