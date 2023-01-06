import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

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
          fill
          className="object-contain object-left cursor-pointer"
        />
      </div>
      {/* Middle - Search Bar */}
      <div className="flex items-center  md:border-2 rounded-full p-2 md:shadow-sm">
        <input className="flex-grow bg-transparent outline-none text-gray-600 placeholder-gray-400" type="text" placeholder="Start Your Search" />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:mx-2" />
      </div>
      {/* Right */}
      <div></div>
    </header>
  );
}

export default Header;
