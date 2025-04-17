import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#010101] text-white">
      {/* Sale Banner */}
      <div className="bg-gradient-to-r from-[#FC004E] to-[#10CBE0] py-2 px-4 text-center">
        <p className="flex items-center justify-center text-sm md:text-base">
          <span className="mr-2">🚀</span>
          <span className="font-bold font-Figtree text-[#00e7f9]">
            FRESH BEGINNINGS SALE:
          </span>
          <span className="ml-1">
            Extra 25% OFF, Limited Spots - start your journey today!
          </span>
        </p>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 md:px-[211px] py-4 flex justify-between items-center">
        <div className="flex-1">
          <Image
            src="/logo.png"
            alt="Fametonic"
            width={173}
            height={74}
            className="w-32 md:w-36"
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-cyan-400 transition-colors">
            About us
          </Link>
          <Link
            href="#contact"
            className="hover:text-cyan-400 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-[211px] py-4 md:py-0 flex flex-col-reverse md:flex-row items-center">
        {/* Left Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          <h2 className="text-lg md:text-2xl font-bold mb-6">
            <span className="text-cyan-400">Discover your way to success</span>
            <br />
            <span className="text-cyan-400">with Fametonic:</span>
          </h2>

          <ul className="space-y-4 mb-8 text-sm md:text-base">
            <li className="flex items-start justify-center md:justify-start">
              <span className="text-yellow-400 mr-2">✨</span>
              <span>
                Start growing your influence right away—no waiting required!
              </span>
            </li>
            <li className="flex items-start justify-center md:justify-start">
              <span className="text-yellow-400 mr-2">✨</span>
              <span>
                Create viral TikToks and Reels step by step with easy-to-follow
                lessons
              </span>
            </li>
            <li className="flex items-start justify-center md:justify-start">
              <span className="text-yellow-400 mr-2">✨</span>
              <span>Use a Personal AI Worker to boost your content</span>
            </li>
            <li className="flex items-start justify-center md:justify-start">
              <span className="text-yellow-400 mr-2">✨</span>
              <span>
                Learn from expert-led courses designed for aspiring influencers
              </span>
            </li>
          </ul>

          <button
            className="bg-[#FC004E] text-white font-bold py-3 px-8 rounded-xl flex items-center justify-center w-full md:w-[313px] md:h-[60px] border-[3px] border-[#00E6F6]"
            style={{ boxShadow: "2px 2px 10px 0px #00E7F9" }}
          >
            GET STARTED <span className="ml-2 text-xl">→</span>
          </button>

          <p className="text-xs text-gray-400 mt-2 text-center">
            1-minute quiz for personalized insights
          </p>

          <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
            By clicking "Get Started", you agree with Terms and Conditions,
            Privacy Policy, Subscription Terms
          </p>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 relative mb-8 md:mb-0">
          <div className="absolute w-full h-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl -z-10"></div>
          <Image
            src="/4d1288cd4dbdbb04d9ed70622b2a9988.png"
            alt="Fametonic App"
            width={300}
            height={400}
            className="relative z-10 mx-auto"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 md:px-[211px] py-4 text-xs text-gray-500 text-center md:text-left">
        <p>Fametonic 2025 ©All Rights Reserved.</p>
      </footer>
    </main>
  );
}
