export function HoverCard({ hText, pText, num }) {
  return (
    <>
      <div className=" flex gap-4 bg-white border  hover:shadow-xl cursor-pointer hover:-translate-y-3 transition-all duration-300 ease-in-out border-black  px-6 pb-12 pt-8">
        <div className="shrink-0 w-15 h-15 self-center rounded-full border-2 border-white/20 flex items-center justify-center bg-black/50">
          <div className="w-22.5 h-22.5 md:w-37 md:h-37">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 148 148"
              fill="none"
              class="w-full h-full"
            >
              <g filter="url(#filter0_d_910_3116)">
                <path
                  d="M81.0781 61.2498H86.7447C87.1204 61.2498 87.4808 61.3991 87.7465 61.6648C88.0121 61.9304 88.1614 62.2908 88.1614 62.6665V85.3332C88.1614 85.7089 88.0121 86.0692 87.7465 86.3349C87.4808 86.6006 87.1204 86.7498 86.7447 86.7498H61.2447C60.869 86.7498 60.5087 86.6006 60.243 86.3349C59.9773 86.0692 59.8281 85.7089 59.8281 85.3332V62.6665C59.8281 62.2908 59.9773 61.9304 60.243 61.6648C60.5087 61.3991 60.869 61.2498 61.2447 61.2498H66.9114V58.4165H69.7447V61.2498H78.2447V58.4165H81.0781V61.2498ZM62.6614 69.7498V83.9165H85.3281V69.7498H62.6614ZM65.4947 72.5832H68.3281V75.4165H65.4947V72.5832ZM65.4947 78.2498H68.3281V81.0832H65.4947V78.2498ZM71.1614 72.5832H82.4947V75.4165H71.1614V72.5832ZM71.1614 78.2498H78.2447V81.0832H71.1614V78.2498Z"
                  fill="white"
                ></path>
                <path
                  d="M123.5 74C123.5 46.6619 101.338 24.5 74 24.5C46.6619 24.5 24.5 46.6619 24.5 74C24.5 101.338 46.6619 123.5 74 123.5C101.338 123.5 123.5 101.338 123.5 74Z"
                  stroke="white"
                  stroke-opacity="0.5"
                ></path>
                <path
                  d="M137 74C137 39.2061 108.794 11 74 11C39.2061 11 11 39.2061 11 74C11 108.794 39.2061 137 74 137C108.794 137 137 108.794 137 74Z"
                  stroke="white"
                  stroke-width="2"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_d_910_3116"
                  x="2"
                  y="2"
                  width="144"
                  height="144"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_910_3116"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_910_3116"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="flex items-start justify-between gap-8">
            <h3 className="text-2xl lg:text-3xl leading-12 font-sf-pro-display text-black">
              {hText}
            </h3>
            <span className="shrink-0 text-2xl lg:text-3xl leading-[150%] tracking-[-0.41px] font-poppins text-black/30">
              {num}
            </span>
          </div>
          <p className="text-sm lg:text-base text-black leading-relaxed line-clamp-3">
            {pText}
          </p>
        </div>
      </div>
    </>
  );
}
