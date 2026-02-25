export function Card({ dPath, hText, pText, buttons }) {
  return (
    <>
      <div className="relative cursor-pointer border border-[#F5F5F5] group w-full h-full sm:h-99.25 min-w-75 transform transition-transform md:hover:scale-105 rounded-[10px] overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F8F8] rounded-[10px]"></div>
        <div className="absolute -inset-16 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <img src="/card-comp-bg.webp"></img>
        </div>
        <div className="flex flex-col justify-around gap-4 w-full h-fit sm:h-99.25 min-w-75 relative z-10 p-6 md:group-hover:text-white transition-colors duration-300">
          <span className="mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="46"
              height="47"
              viewBox="0 0 46 47"
            >
              <path d={dPath} fill="grey"></path>
              <defs>
                <linearGradient
                  id="paint0_linear_910_3199"
                  x1="22.8146"
                  y1="-0.00390625"
                  x2="22.8146"
                  y2="46.9961"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop></stop>
                  <stop offset="1" stop-opacity="0.3"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span>
            <h2 className="text-xl md:text-[22px] font-medium font-s1-pro-display ">
              {hText}
            </h2>
            <p className="text-black md:group-hover:text-[#CFCFCF] transition-colors duration-300">
              {pText}
            </p>
          </span>

          <div className="flex flex-wrap gap-2">
            {buttons.map((button, index) => (
              <a href="#" key={index}>
                <button className="bg-[#FAFAFA] cursor-pointer text-black text-[15px] leading-6.25 font-s1-pro-display px-3 border border-[#CFCFCF] py-1 rounded-[5px] md:hover:bg-gray-200 transition-colors">
                  {button.text}
                </button>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
