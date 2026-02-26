export function Footer() {
  return (
    <section className="bg-[#eff0f1]">
      <div className="absolute">
        <img src="/footerBG.webp"></img>
      </div>

      <div className="flex flex-row justify-around align-middle gap-x-4 py-10">
        <div className="grid">
          <h2 className="text-lg lg:text-2xl font-medium mb-6 opacity-100 ">
            Services
          </h2>
          <div className="grid grid-cols-2 gap-6 gap-x-20">
            <div className="grid">
              <h4 className="text-base font-bold">Digital</h4>
              <p className="text-gray-800">Digital Consulting & Strategy</p>
              <p className="text-gray-800">Digital Commerce</p>
              <p className="text-gray-800">Business Applications</p>
            </div>
            <div className="grid gap-y-0.5">
              <h4 className="text-base font-bold">Data & Analytics</h4>
              <p className="text-gray-800">Data Modernization</p>
              <p className="text-gray-800">Advanced Analytics</p>
              <p className="text-gray-800">Connected Intelligence</p>
              <p className="text-gray-800">Data Management</p>
              <p className="text-gray-800">Generative AI</p>
            </div>
            <div className="grid gap-y-0.5">
              <h4 className="text-base font-bold">Cloud</h4>
              <p className="text-gray-800">Cloud Operations & Migration</p>
              <p className="text-gray-800">Cloud Applications</p>
              <p className="text-gray-800">Development & Integrations</p>
            </div>
            <div className="grid gap-y-0.5">
              <h4 className="text-base font-bold">
                Digital Infrastructure Services
              </h4>
              <p className="text-gray-800 ">Security</p>
              <p className="text-gray-800">Emerging Technologies</p>
              <p className="text-gray-800">Business Process Services</p>
            </div>
          </div>
        </div>
        <div className="grid">
          <h2 className="text-lg lg:text-2xl font-medium mb-1 opacity-100 ">
            Industries
          </h2>
          <div className="grid">
            <div className="grid ">
              <p className="text-gray-800 ">Communications</p>
              <p className="text-gray-800 ">Banking & Financial Services</p>
              <p className="text-gray-800">Public Sector</p>
              <p className="text-gray-800">Health</p>
              <p className="text-gray-800">Retail</p>
            </div>
          </div>
        </div>
        <div className="grid">
          <h2 className="text-lg lg:text-2xl font-medium mb-1 opacity-100 ">
            Insights
          </h2>
          <div className="grid ">
            <div className="grid ">
              <p className="text-gray-800 ">Case Studies</p>
              <p className="text-gray-800">Newsroom</p>
              <p className="text-gray-800 ">Whitepapers / EBooks</p>
              <p className="text-gray-800">Blogs</p>
            </div>
          </div>
        </div>
        <div className="grid">
          <h2 className="text-lg lg:text-2xl font-medium mb-1 opacity-100 ">
            Quick Links
          </h2>
          <div className="grid">
            <div className="grid ">
              <p className="text-gray-800 ">Who we are</p>
              <p className="text-gray-800 ">Careers</p>
              <p className="text-gray-800 ">Our Leadership</p>
              <p className="text-gray-800 ">Investor Relation</p>
              <p className="text-gray-800">Financial Reports</p>
            </div>
          </div>
        </div>
      </div>

      <div></div>

      <div></div>
    </section>
  );
}
