export default function StackedCards() {
  const cards = [
    {
      id: 1,
      title: "PFC Levski Sofia",
      heading: "Official Fan Engagement App",
      text: "NextSense Solutions partnered with PFC Levski Sofia, one of Bulgaria’s most iconic and historic football clubs, to design and deliver a next-generation mobile platform that brings fans closer to the club than ever before. The objective was to create a unified digital ecosystem that connects a global fan base through real-time match experiences, seamless ticketing, official merchandise access, and highly interactive community features. Our team built a fast, secure, and stable mobile experience that elevated fan engagement while unlocking new digital revenue streams for the club. Within just three months of launch, the platform surpassed 50,000 downloads, increased digital ticket sales by 35%, and delivered a 40% boost in fan engagement. The result was a high-impact digital transformation that redefined how Levski Sofia connects, communicates, and monetizes its passionate supporter community.",
      color: "bg-[#017de8]",
      img: "/levski.webp",
    },
    {
      id: 2,
      title: "AgScout",
      heading: "AI-Powered Precision Agriculture Platform",
      text: "NextSense Solutions partnered with an agricultural innovator to design and deliver AgScout — an intelligent mobile platform that brings advanced artificial intelligence directly into the hands of farmers. The objective was to enable real-time, in-field analysis of crops through image-based detection and automated counting of buds and fruits, even in environments with limited or no connectivity. We built a highly optimized solution capable of delivering accurate results offline, helping farmers make faster, data-driven decisions without relying on external infrastructure. Now actively deployed across multiple regions in Latin America, AgScout has helped farmers significantly reduce manual fieldwork, improve yield forecasting, and increase overall operational efficiency. By combining advanced machine intelligence with practical accessibility, NextSense Solutions transformed traditional farming into a smarter, more efficient, and scalable agricultural ecosystem.",
      color: "bg-[#009d8d]",
      img: "/ag-scout.webp",
    },
    {
      id: 3,
      title: "XRPH",
      heading: "Decentralized Health Wallet",
      text: "NextSense Solutions partnered with a leading Africa-based healthtech company to completely modernize and secure their decentralized payment ecosystem. The objective was to transform a fragmented, underperforming blockchain wallet into a highly reliable, compliant, and user-centric financial experience tailored for healthcare access. Our team re-architected the platform to deliver enterprise-level security, lightning-fast transactions, and seamless UX. Users now enjoy up to 80% prescription savings at 68,000+ US pharmacies plus built-in rewards. Within months we scaled from 5,000 to over 25,000 active users with dramatically improved retention and satisfaction — turning a struggling product into a trusted global health-finance solution.",
      color: "bg-[#a54fe8]",
      img: "/XRP-healthcare.webp",
    },
    {
      id: 4,
      title: "PayRemit",
      heading: "Redefining Digital Banking for Everyday Payments",
      text: "NextSense Solutions partnered with a forward-thinking fintech startup to launch PayRemit, a unified digital banking platform. Designed for frictionless and secure bill payments, the platform consolidates mobile, utility, and subscription payments into a single, user-friendly interface. Within months, PayRemit processed hundreds of thousands of transactions, achieved high user retention, and established itself as a trusted, scalable digital financial ecosystem. By merging enterprise-grade security with human-centered design, NextSense transformed everyday payments into a seamless, intelligent, and engaging digital banking experience.",
      color: "bg-[#2f7970]",
      img: "/PayRemit.webp",
    },
    {
      id: 5,
      title: "Lifti",
      heading: "Redefining Travel & Logistics",
      text: "NextSense Solutions partnered with Lifti, a Dubai-based startup, to design and launch a next-generation luggage-sharing platform that enables travelers to securely earn income by transporting items between cities. Our mandate was to build a trusted, high-performance marketplace that combines secure identity verification, real-time tracking, protected payments, and frictionless user flows. The platform was engineered to remove the traditional inefficiencies of point-to-point logistics while creating a safe, community-driven ecosystem for global travelers. Within its first year, Lifti scaled to 100,000+ active users, unlocking a new category of shared travel logistics. The platform now empowers travelers to monetize their journeys while helping individuals and businesses move goods more cost-effectively, sustainably, and reliably — transforming how modern logistics works in a connected world.",
      color: "bg-[#d52342]",
      img: "/lifti.webp",
    },
    {
      id: 6,
      title: "MergeZ",
      heading: "Digital Product Marketplace",
      text: "NextSense Solutions partnered with a visionary digital innovation company to build MergeZ, a next-generation marketplace designed to empower creators and collectors worldwide. MergeZ delivers a transparent, secure, and high-performance ecosystem where digital products can be created, authenticated, traded, and monetized at scale. The platform launched with strong early traction: over 20,000 registered users, 3,000+ verified creators, and $50k+ in digital product transaction volume within its first operational year. By combining enterprise-grade infrastructure with an intuitive creator-first experience, MergeZ became a trusted marketplace where creativity, commerce, and technology converge.",
      color: "bg-[#fb4e57]",
      img: "/merge-z.webp",
    },
    {
      id: 7,
      title: "Regen",
      heading: "Tokenized Real Estate",
      text: "Regen (OTC ID: GINS) is a publicly traded real estate operator delivering tokenized, Bitcoin-backed real estate via Security Token Offerings (STOs). By combining institutional property management with blockchain transparency, Regen enables on-chain asset verification, NFT-based property documentation, and clear visibility into both real estate holdings and its Bitcoin Treasury.",
      color: "bg-[#98ffff]",
      img: "/regen.webp",
    },
  ];

  return (
    <div className="bg-neutral-950 text-white">
      <div className="relative">
        {cards.map((card, index) => (
          <section
            key={card.id}
            className="h-[145vh] sticky top-0 flex items-center justify-center"
            style={{ zIndex: index + 1 }}
          >
            <div
              className={`${card.color} z-30 w-full h-[80vh] rounded-3xl shadow-2xl p-16 flex items-center justify-between`}
            >
              {/* left wali writing contenct */}
              <div className="flex flex-col gap-8">
                <div className="flex flex-wrap max-w-xl gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <button className=" cursor-pointer text-black text-[15px] leading-6.25 font-s1-pro-display px-3 border border-[#CFCFCF] py-1 rounded-[5px] md:hover:bg-gray-200 transition-colors">
                    Asset Tokenization
                  </button>
                  <button className=" cursor-pointer text-black text-[15px] leading-6.25 font-s1-pro-display px-3 border border-[#CFCFCF] py-1 rounded-[5px] md:hover:bg-gray-200 transition-colors">
                    STO Framework
                  </button>
                  <button className=" cursor-pointer text-black text-[15px] leading-6.25 font-s1-pro-display px-3 border border-[#CFCFCF] py-1 rounded-[5px] md:hover:bg-gray-200 transition-colors">
                    Flutter Development
                  </button>
                  <button className=" cursor-pointer text-black text-[15px] leading-6.25 font-s1-pro-display px-3 border border-[#CFCFCF] py-1 rounded-[5px] md:hover:bg-gray-200 transition-colors">
                    Payment Integeration
                  </button>
                  <button className=" cursor-pointer text-black text-[15px] leading-6.25 font-s1-pro-display px-3 border border-[#CFCFCF] py-1 rounded-[5px] md:hover:bg-gray-200 transition-colors">
                    React Development
                  </button>
                </div>

                <div className="max-w-xl">
                  <h2 className="text-3xl font-bold mb-1 text-black">
                    {card.title}
                  </h2>
                  <p className="text-2xl font-medium opacity-80 mb-2 text-gray-900">
                    {card.heading}
                  </p>
                  <p className="text-md opacity-80 text-gray-900">
                    {card.text}
                  </p>
                </div>
              </div>

              {/* img right side wali */}
              <img
                className="w-100 h-62.5 bg-black/20 rounded-xl"
                src={card.img}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
