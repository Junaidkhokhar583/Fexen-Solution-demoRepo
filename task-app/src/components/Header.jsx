export function Header() {
  return (
    <>

      <nav className="flex justify-around fixed top-0 border-b border-[#e5e7eb]/80 z-50 translate-y-0 w-full p-4 right-0 left-0 bg-white/95 text-black ">

        <a href="#" className="flex self-center w-50 min-w-42.5 h-10">
          <img
            src="/logo-dark.png"
            alt="logo.png"
            className="object-contain"
          ></img>
        </a>

        <ul className="py-4 flex justify-between lg:flex gap-12.5 text-sm font-light font-inter text-nowrap items-center">
          <a href="#"><li>Work</li></a>
          <a href="#"><li>Career</li></a>
          <a href="#"><li>Insights</li></a>
        </ul>

        <a href="#" className="self-center">
          <button className="px-5 text-nowrap py-1.5 cursor-pointer font-inter rounded-[60px] text-sm font-medium border border-black text-black bg-transparent hover:text-black/80 ">
            Contact
          </button>
        </a>
      </nav>

    </>
  );
}
