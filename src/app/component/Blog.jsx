"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Navbar from "./Navbar";

const blogPosts = [
  {
    title: "The Future of AI in Web Development",
    description: "Exploring how AI is transforming modern web technologies.",
    image: "/download (1).jpeg",
    link: "#",
    date: "March 18, 2025",
    content:
      "AI is revolutionizing web development by enhancing automation, improving UX, and optimizing SEO. Learn how Next.js and AI models are changing the future of coding.",
  },
  {
    title: "Cybersecurity Trends You Need to Know",
    description: "Stay ahead with the latest security practices for 2025.",
    image: "/Blog-banner-4.jpg",
    link: "#",
    date: "March 15, 2025",
    content:
      "As cyber threats evolve, businesses need to adapt. From AI-driven security systems to blockchain-based identity management, discover what’s next in cybersecurity.",
  },
  {
    title: "Why Next.js is the Future of React Apps",
    description: "A deep dive into Next.js and its benefits for developers.",
    image: "/download (2).jpeg",
    link: "#",
    date: "March 10, 2025",
    content:
      "Next.js provides superior SEO, fast performance, and seamless routing. Let’s explore why developers are shifting towards this powerful framework.",
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);

  return (
    <section className=" bg-gray-950 dark:bg-black text-white relative overflow-hidden min-h-[100vh] rounded-2xl ">
      {/* Neon Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/10 blur-3xl opacity-40 rounded-3xl"></div>
      <Navbar className="mt-0" />
      <div className="container mx-auto px-6 p-4 relative z-10 grid md:grid-cols-3 gap-12 mt-7">
        {/* Left - Blog List */}
        <div className="md:col-span-1 space-y-6">
          <h2 className="text-5xl font-extrabold text-green-400 tracking-wide mb-6">
            ⚡ Latest Blogs
          </h2>

          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`p-5 cursor-pointer border rounded-xl transition-all ${
                selectedPost.title === post.title
                  ? "bg-cyan-500 text-gray-900 border-cyan-400 shadow-lg"
                  : "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700"
              }`}
              onClick={() => setSelectedPost(post)}
            >
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-sm">{post.date}</p>
            </motion.div>
          ))}
        </div>

        {/* Right - Blog Content */}
        <motion.div
          key={selectedPost.title}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl shadow-xl border border-cyan-500/40 hover:shadow-cyan-500/60 transition duration-500"
        >
          {/* Blog Image */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-full h-64 rounded-xl overflow-hidden mb-6 border border-cyan-500/30 shadow-lg"
          >
            <Image
              src={selectedPost.image}
              alt={selectedPost.title}
              fill
              className="object-cover transition duration-500 hover:scale-110"
            />
          </motion.div>

          {/* Blog Content */}
          <h3 className="text-4xl font-bold text-white mb-3 tracking-wider">
            {selectedPost.title}
          </h3>
          <p className="text-gray-400 mb-4">{selectedPost.date}</p>
          <p className="text-gray-300 leading-relaxed text-lg">
            {selectedPost.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
