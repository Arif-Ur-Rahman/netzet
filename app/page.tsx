import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#010101] text-white">
      {/* Sale Banner */}
      <div className="bg-gradient-to-r from-[#FC004E] via-[#8a6194] to-[#10CBE0] py-2 px-4 text-center">
        <p className="flex flex-col md:flex-row items-center justify-center text-sm md:text-base font-Figtree">
          <span className="flex items-center">
            <span className="mr-1 md:mr-2">🚀</span>
            <span className="font-bold text-[#00e7f9]">
              FRE$H BEGINNINGS SALE:
            </span>
            <span className="md:hidden font-bold text-[#00e7f9]">
              Extra 25% OFF
            </span>
          </span>
          <span className="hidden md:inline text-white ml-1">
            Extra 25% OFF
          </span>
          <span className="text-white md:ml-1">
            <span className="hidden md:inline">, </span>Limited Spots - start
            your journey today!
          </span>
        </p>
      </div>

      {/* Header */}
      <header className="w-full px-4 md:px-[211px] py-4">
        <div className="flex items-center justify-between md:justify-start">
          {/* Mobile Centered Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 md:relative md:translate-x-0 md:left-0 md:flex-1">
            <Image
              src="/logo.png"
              alt="Fametonic"
              width={173}
              height={74}
              className="w-32 md:w-36"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex flex-1 justify-end space-x-6">
            <Link
              href="#about"
              className="hover:text-cyan-400 transition-colors"
            >
              About us
            </Link>
            <Link
              href="#contact"
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button className="md:hidden relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-[211px] py-4 md:py-0 relative">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Left Text Section - Now with absolute positioning on desktop */}
          <div className="md:w-[55%] mb-8 md:mb-0 md:pr-8 text-center md:text-left relative z-10 md:bg-transparent md:backdrop-blur-sm md:rounded-lg md:p-6">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Want to Turn Social Media Into a Profitable Career?
            </h1>
            <h2 className="text-4xl md:text-2xl font-bold mb-6">
              <span className="block text-[color:#00E7F9] drop-shadow-[2px_2px_0_#FF00B8]">
                Discover your way to success
              </span>
              <span className="block text-[color:#00E7F9] drop-shadow-[2px_2px_0_#FF00B8]">
                with Fametonic:
              </span>
            </h2>

            <ul className="space-y-4 mb-8 text-sm md:text-base">
              {[
                "Start growing your influence right away—no waiting required!",
                "Create viral TikToks and Reels step by step with easy-to-follow lessons",
                "Use a Personal AI Worker to boost your content",
                "Learn from expert-led courses designed for aspiring influencers",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start justify-center md:justify-start"
                >
                  <span className="text-yellow-400 mr-2">✨</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center md:items-start">
              <button
                className="bg-[#FC004E] text-white font-bold py-3 px-8 rounded-xl flex items-center justify-center w-full md:w-[313px] md:h-[60px] border-[3px] border-[#00E6F6] font-Figtree hover:brightness-110 transition-all"
                style={{
                  boxShadow: "2px 2px 10px 0px #00E7F9",
                  letterSpacing: "0.5px",
                }}
              >
                GET STARTED<span className="ml-3 text-2xl">→</span>
              </button>

              <p className="text-xs text-[#B5B5B5] mt-1 text-center md:text-left font-Figtree tracking-wide">
                1-minute quiz for personalized Insights
              </p>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
              By clicking "Get Started", you agree with Terms and Conditions,
              Privacy Policy, Subscription Terms
            </p>
          </div>

          {/* Right Image Section - Now with negative margin on desktop */}
          <div className="md:w-[60%] relative mb-8 md:mb-0 md:-ml-[0%]">
            <div className="absolute w-full h-full bg-transparent rounded-full blur-3xl -z-100"></div>
            <Image
              src="/Influe_mobile_mockup_3 1.png"
              alt="Fametonic App"
              width={666}
              height={679}
              className="w-full h-auto max-w-[666px] mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 md:px-[211px] py-4 text-xs text-gray-500 text-center md:text-left">
        <p>Fametonic 2025 ©All Rights Reserved.</p>
      </footer>
    </main>
  );
}
