"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";

const projects = [
  {
    title: "Weal E-commerce Website",
    description:
      "Weal is a modern and fully responsive eCommerce website built for a sports and lifestyle brand. The platform offers customers an intuitive shopping experience with advanced product filtering, secure user authentication, order tracking, and seamless payment integration via SSLCommerz. Developed using cutting-edge technologies like Next.js, MongoDB, and Tailwind CSS, Weal also features a custom admin dashboard for managing products and orders efficiently. Framer Motion enhances the user interface with smooth animations, ensuring a dynamic and engaging experience across all devices.",
    tech: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "SSLCommerz",
      "Framer Motion",
    ],
    images: [
      "/wealhome.png",
      "/wealnew.png",
      "/wealher.png",
      "/wealall.png",
      "/wealFooter.png",
      "/wealProduct.png",
      "/wealSujjetion.png",
      "/wealfcart.png",
      "/wealcart.png",
      "/wealcheackout.png",
      "/wealsuccesspayment.png",
      "/wealdashboard.png",
      "/wealAddproduct.png",
      "/wealorder.png",
      "/wealdashboardallproduct.png",
    ],
    link: "https://weal-shop2024.vercel.app/",
  },
  {
    title: "Online Exam Platform",
    description:
      "A robust web-based system enabling students to take tests securely and view their results instantly, featuring comprehensive admin controls for test management and analytics.",
    tech: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Framer Motion",
      "JWT",
      "AuthJs",
    ],
    images: ["/Screenshot from 2025-04-25 16-16-17.png"],
    link: "https://online-exam-nine.vercel.app/",
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => setSelectedProject(null);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.98 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="bg-gray-900 dark:bg-black rounded-2xl">
      <Navbar />
      <section className=" py-4 md:py-5 lg:py-10 px-4 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-8 md:mb-12 dark:text-white">
          My Projects
        </h2>

        <div className="w-full flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-6xl w-full">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-lg hover:shadow-blue-500/30 transition-all
          basis-full sm:basis-[48%] lg:basis-[31%]"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                whileTap="tap"
                viewport={{ once: true, amount: 0.3 }}
                onClick={() => openModal(project)}
              >
                <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 rounded-lg overflow-hidden mb-3 sm:mb-4">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="rounded-lg object-cover hover:scale-105 transition-transform"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                  />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2">
                  {project.description.substring(0, 100)}...
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {project.tech?.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-600 text-white px-2 py-0.5 sm:py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs sm:text-sm text-blue-400 underline hover:text-blue-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit Live
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-2 sm:p-4 z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={closeModal}
          >
            <motion.div
              className="bg-gray-900 p-3 sm:p-4 md:p-6 rounded-xl w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-2 relative border border-gray-700 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white text-xl sm:text-2xl hover:text-red-400"
              >
                &times;
              </button>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 text-center">
                {selectedProject.title}
              </h2>

              <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 mb-4 sm:mb-6 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.images[currentImageIndex]}
                  alt="Project screenshot"
                  fill
                  className="rounded-lg object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                />

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl bg-black bg-opacity-50 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                    >
                      &#10094;
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl bg-black bg-opacity-50 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
                    >
                      &#10095;
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs sm:text-sm bg-black bg-opacity-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                      {currentImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>

              <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 px-1 sm:px-2">
                {selectedProject.description}
              </p>
              <div className="text-center">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-1 sm:py-2 px-4 sm:px-6 rounded-full shadow-md transition text-sm sm:text-base"
                >
                  Visit Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Project;
