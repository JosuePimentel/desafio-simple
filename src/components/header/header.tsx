import { useState } from "react";

function Header() {
  const [ openHeader, setOpenHeader ] = useState(false);

  return (
    <header className="flex items-center justify-between min-lg:justify-evenly gap-10 min-lg:h-24 h-20 py-2 px-6 absolute w-full z-10 top-0 left-0 bg-white">
      <img
        className="w-[150px]"
        src="https://frontierharvesters.com/wp-content/uploads/2024/06/Frontier-Harvesters-Logo.png"
        alt="logo simple agro"
      />

      <div className="hidden min-lg:flex gap-1 items-center justify-center">
          <a href="#" className="text-(--color-secondary-950) text-xs py-3 px-3 hover:bg-(--color-secondary-950)/10 rounded-md flex items-center justify-center font-semibold uppercase h-[-webkit-fill-available]">About us</a>
          <a href="#" className="text-(--color-secondary-950) text-xs py-3 px-3 hover:bg-(--color-secondary-950)/10 rounded-md flex items-center justify-center font-semibold uppercase h-[-webkit-fill-available]">Services</a>
          <a href="#" className="text-(--color-secondary-950) text-xs py-3 px-3 hover:bg-(--color-secondary-950)/10 rounded-md items-center justify-center font-semibold uppercase h-[-webkit-fill-available] flex gap-1">Academy <span translate="no" className="material-symbols-outlined text-sm! h-min"> keyboard_arrow_down </span></a>
          <a href="#" className="text-(--color-secondary-950) text-xs py-3 px-3 hover:bg-(--color-secondary-950)/10 rounded-md items-center justify-center font-semibold uppercase h-[-webkit-fill-available] flex gap-1">Projects <span translate="no" className="material-symbols-outlined text-sm! h-fit"> keyboard_arrow_down </span></a>
          <a href="#" className="text-(--color-secondary-950) text-xs py-3 px-3 hover:bg-(--color-secondary-950)/10 rounded-md flex items-center justify-center font-semibold uppercase h-[-webkit-fill-available]">Find Jobs</a>
      </div>

      <div className="hidden min-lg:flex gap-4 items-center">
        <span className="material-symbols-outlined relative size-14 bg-(--color-secondary-950) text-white rounded-full flex! items-center justify-center cursor-pointer">shopping_cart </span>
        <span className="uppercase text-sm cursor-pointer font-medium">log in/register</span>
      </div>

      <div className="min-lg:hidden ">
        <span className="material-symbols-outlined text-4xl! flex! items-center justify-center" translate="no" onClick={() => setOpenHeader(!openHeader)}>menu</span>
      </div>

      { openHeader && (
        <div className="absolute top-20 left-0 bg-[rgb(98,98,98)] w-full h-fit flex flex-col gap-[.5px]
        pt-[.5px]">
          <a href="#" className="text-(--color-secondary-950) text-sm w-full py-3 px-7 bg-white uppercase">About us</a>
          <a href="#" className="text-(--color-secondary-950) text-sm w-full py-3 px-7 bg-white uppercase">Services</a>
          <a href="#" className="text-(--color-secondary-950) text-sm w-full py-3 px-7 bg-white uppercase flex gap-1 justify-between items-center">Academy <span className="material-symbols-outlined text-sm"> keyboard_arrow_down </span></a>
          <a href="#" className="text-(--color-secondary-950) text-sm w-full py-3 px-7 bg-white uppercase flex gap-1 justify-between items-center">Projects <span className="material-symbols-outlined text-sm"> keyboard_arrow_down </span></a>
          <a href="#" className="text-(--color-secondary-950) text-sm w-full py-3 px-7 bg-white uppercase">Find Jobs</a>
        </div>
      )}
    </header>
  );
}
export default Header;
