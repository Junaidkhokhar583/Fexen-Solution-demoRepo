export function Header() {
  return (
    <>
      <nav className="flex justify-around fixed top-0 border-b border-[#e5e7eb]/80 z-50 translate-y-0 w-auto p-4 right-0 left-0 bg-white text-black ">
        <a href="#" className="flex self-center w-50 min-w-42.5 h-10">
          <img
            src="/logo-dark.png"
            alt="logo.png"
            className="object-contain"
          ></img>
        </a>

        <ul className="py-4 xl:flex hidden justify-between lg:flex gap-12.5 text-sm font-light font-inter text-nowrap items-center">
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm 2xl:text-base">
              Capabilities
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className="z-50 fixed left-0 top-full w-screen bg-gray-100 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-4 gap-12 text-gray-700">
                <div className="space-y-2">
                  <p className="font-bold mb-5 text-lg text-black cursor-pointer">
                    Artificial Intelligence
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Conversational AI & Chatbots
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    AI Agents & Automation
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Predictive & Decision Intelligence
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Computer Vision
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Generative AI
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    AI Video Generation
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    AI Integration & Fine-Tuning
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-bold mb-5 text-lg text-black cursor-pointer">
                    Blockchain
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Exchange Platforms
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Smart Contracts & DApps
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Wallets & Custody Systems
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Tokenization & RWA
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Blockchain Security & Audits
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Web3 Infrastructure
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-bold mb-5 text-lg text-black cursor-pointer">
                    Software Development
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Web Application Development
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Mobile Application Development
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Enterprise Systems & SaaS
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    API & Backend Engineering
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Product Modernization
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    MVP & Product Launch
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="font-bold mb-5 text-lg text-black cursor-pointer">
                    Cloud & Infrastructure
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Cloud Architecture & Migration
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    DevOps & CI/CD
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Infrastructure as Code
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Cloud Security & Governance
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Scalability & Performance
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Managed Cloud Services
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold mb-5 text-lg text-black cursor-pointer">
                    Data & Analytics
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Data Engineering
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Business Intelligence
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Advanced Analytics
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Real-Time Data Processing
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Data Governance & Quality
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    AI-Driven Insights
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold mb-5 text-lg text-black cursor-pointer">
                    CyberSecurity
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Application Security
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Cloud & Infrastructure Security
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Network Security
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Identity & Access Management
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Risk & Compliance
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Penetration Testing
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold mb-5 text-lg text-black cursor-pointer">
                    Advanced Technology
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    IoT & Smart Systems
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    AR / VR & Spatial Computing
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Automation & Robotics
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm 2xl:text-base">
              Industries
              <svg
                className="w-4 h-4 transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className="z-50 fixed left-0 top-full w-screen bg-gray-100 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-4 gap-12 text-gray-700">
                <div className="space-y-2">
                  <p className="hover:text-black cursor-pointer">
                    Banking & Financial Services
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Government & Public Sector
                  </p>
                  <p className="hover:text-black cursor-pointer">Agriculture</p>
                  <p className="hover:text-black cursor-pointer">Education</p>
                </div>

                <div className="space-y-2">
                  <p className="hover:text-black cursor-pointer">
                    E-Commerce Marketplaces
                  </p>
                  <p className="hover:text-black cursor-pointer">Retail</p>
                  <p className="hover:text-black cursor-pointer">Blockchain</p>
                  <p className="hover:text-black cursor-pointer">
                    Travel & Hospitality
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="hover:text-black cursor-pointer">Real Estate</p>
                  <p className="hover:text-black cursor-pointer">Logistics</p>
                  <p className="hover:text-black cursor-pointer">
                    Tokenization & RWA
                  </p>
                  <p className="hover:text-black cursor-pointer">Automotive</p>
                </div>

                <div className="space-y-2">
                  <p className="hover:text-black cursor-pointer">Healthcare</p>
                  <p className="hover:text-black cursor-pointer">
                    Telecommunications
                  </p>
                  <p className="hover:text-black cursor-pointer">
                    Energy & Utilities
                  </p>
                  <p className="hover:text-black cursor-pointer">Sports</p>
                </div>
              </div>
            </div>
          </div>

          <a href="#">
            <li className="text-sm 2xl:text-base">Work</li>
          </a>
          <a href="#">
            <li className="text-sm 2xl:text-base">Career</li>
          </a>
          <a href="#">
            <li className="text-sm 2xl:text-base">Insights</li>
          </a>
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
