import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className={`relative text-white py-6 overflow-hidden rounded-xl bg-gray-700  dark:bg-gray-950
      `}
    >
      {/* Neon Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Logo or Name */}

        {/* Navigation Links */}
        <ul className="mt-4 flex gap-6 text-gray-400 flex-wrap justify-center">
          <li className="hover:text-purple-600 transition">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="/Myservice">Service</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="/project">Portfolio</a>
          </li>
          <li className="hover:text-purple-600 transition">
            <a href="/blog">Blog</a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="mt-6 flex gap-4 justify-center">
          {[
            { icon: FaGithub, link: "https://github.com/abubakersiddeak" },
            {
              icon: FaLinkedin,
              link: "https://www.instagram.com/abubakarsiddik40",
            },
            { icon: FaTwitter, link: "https://twitter.com/yourtwitter" },
            {
              icon: FaFacebook,
              link: "https://www.facebook.com/abubakar.siddeak/",
            },
          ].map(({ icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              className="text-xl text-gray-400 hover:text-cyan-400 transition duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="mt-4 text-gray-500 text-xs">
          © {new Date().getFullYear()} Zisan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
