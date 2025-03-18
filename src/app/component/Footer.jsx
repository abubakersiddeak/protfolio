import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-700 text-white py-12  overflow-hidden">
      {/* Neon Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Logo or Name */}
        <h2 className="text-4xl font-extrabold text-cyan-400 tracking-wide">
          Zisan's Portfolio
        </h2>

        {/* Navigation Links */}
        <ul className="mt-6 flex gap-8 text-gray-400">
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
        <div className="mt-8 flex gap-6">
          {[
            { icon: FaGithub, link: "https://github.com/abubakersiddeak" },
            {
              icon: FaLinkedin,
              link: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fabubakarsiddik40%3Figsh%3DOXpoam1sZjRqYnBv%26fbclid%3DIwZXh0bgNhZW0CMTAAAR3nfcYHt66aOW0kMZ9Io1OExI5qeMIqIUmCZSkfObz7q_3xKMlqGPWyuOs_aem_DtdzumUzK432BySEc1MWjA&h=AT1SmBW2FC6su91n_9ebGTir_Xv05BC29FpdhCIiqfEH69jpwejLaDZyUh6dlIWwrlxzTSs-WGQua64B2YQ0Aztojmh-4bAAfYUa7vJnv8JfBJCCXLV1zW0VEjH-Tw",
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
              className="text-2xl text-gray-400 hover:text-cyan-400 transition duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="mt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} Zisan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
