'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { projects } from "../lib/constants";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";

export default function Work() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    }

    const prevProject = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }

    const project = projects[currentIndex];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    return (
        <section className="min-h-screen bg-gray-950 text-white pt-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center"
                    >
                        {/* TEXTO */}
                        <div className="order-2 lg:order-1">
                            <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-700">
                                {project.number}
                            </div>

                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                                {project.title}
                            </h2>

                            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-2 sm:px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full
                                        text-xs sm:text-sm font-medium inline-block"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex gap-4">
                                <motion.a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-full flex items-center
                                    justify-center hover:bg-gray-800 transition-colors"
                                >
                                    <ArrowUpRight size={16} className="sm:w-5"/>
                                </motion.a>

                                <motion.a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-full flex items-center
                                    justify-center hover:bg-gray-800 transition-colors"
                                >
                                    <Github size={16} className="sm:w-5"/>
                                </motion.a>
                            </div>
                        </div>

                        {/* IMAGEM */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 order-1 lg:order-2"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority={currentIndex === 0}
                            />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Controle Slider */}
                <div className="flex justify-center lg:justify-end gap-4 mt-6 sm:mt-8">
                    <motion.button
                        onClick={prevProject}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-full flex items-center
                        justify-center hover:bg-gray-800 transition-colors"
                        aria-label="Projeto anterior"
                    >
                        <ChevronLeft size={16} className="sm:w-5"/>
                    </motion.button>
                    
                    <motion.button
                        onClick={nextProject}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-900 rounded-full flex items-center
                        justify-center hover:bg-emerald-400 transition-colors"
                        aria-label="Próximo projeto"
                    >
                        <ChevronRight size={16} className="sm:w-5"/>
                    </motion.button>
                </div>
            </div>
        </section>
    )
}