'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "../lib/constants";
import { Github, ChevronLeft, ChevronRight, ExternalLink, Info } from "lucide-react";
import Link from "next/link";

export default function Work() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const project = projects[currentIndex];

    const nextProject = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
        setIsAutoPlaying(false);
    }

    const prevProject = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
        setIsAutoPlaying(false);
    }

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextProject();
            if (e.key === 'ArrowLeft') prevProject();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    };

    return (
        <section id="projects" className="relative min-h-screen bg-gray-950 text-white pt-20 pb-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12">
                {/* Section header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-emerald-400 font-semibold tracking-wider">PORTFÓLIO</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">Meus Projetos</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Uma seleção dos meus trabalhos mais recentes e desafiadores
                    </p>
                </motion.div>

                {/* Project counter */}
                <div className="flex justify-between items-center mb-8">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-emerald-400 font-mono text-sm"
                    >
                        <span className="text-2xl font-bold">{currentIndex + 1}</span>
                        <span className="text-gray-600">/{projects.length}</span>
                    </motion.div>
                    
                    {/* Auto-play toggle */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="text-xs text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                        {isAutoPlaying ? 'Pausar' : 'Reproduzir'} slideshow
                    </motion.button>
                </div>

                <div className="relative">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                        >
                            {/* IMAGE */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 group"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={currentIndex === 0}
                                />
                                
                                {/* Image overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="flex gap-3">
                                        <motion.a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-10 h-10 bg-emerald-400 rounded-full flex items-center justify-center text-gray-900 hover:bg-emerald-300 transition-colors"
                                            aria-label="Ver demonstração"
                                        >
                                            <ExternalLink size={16} />
                                        </motion.a>
                                        
                                        <motion.a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                                            aria-label="Ver código no GitHub"
                                        >
                                            <Github size={16} />
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* TEXT CONTENT */}
                            <div className="space-y-6">
                                <div>
                                    <span className="text-7xl lg:text-8xl font-bold text-gray-800">
                                        {project.number}
                                    </span>
                                    
                                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                                        {project.title}
                                    </h2>

                                    <p className="text-gray-300 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-400 mb-3">Tecnologias utilizadas</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, index) => (
                                            <motion.span
                                                key={index}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="px-3 py-1.5 bg-emerald-400/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-400/20"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Project links */}
                                <div className="flex flex-wrap gap-3 pt-4">
                                    <Link href={`/work/${project.id}`} passHref>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 bg-emerald-400 text-gray-900 py-3 px-6 rounded-full font-medium hover:bg-emerald-300 transition-colors cursor-pointer"
                                        >
                                            <Info size={16} />
                                            Ver Detalhes
                                        </motion.div>
                                    </Link>
                                    
                                    <motion.a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 bg-gray-800 text-white py-3 px-6 rounded-full font-medium hover:bg-gray-700 transition-colors border border-gray-700"
                                    >
                                        <ExternalLink size={16} />
                                        Ver Demo
                                    </motion.a>
                                    
                                    <motion.a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 bg-gray-800 text-white py-3 px-6 rounded-full font-medium hover:bg-gray-700 transition-colors border border-gray-700"
                                    >
                                        <Github size={16} />
                                        Código
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Slider Controls */}
                    <div className="flex justify-center lg:justify-end gap-4 mt-10">
                        <motion.button
                            onClick={prevProject}
                            whileHover={{ scale: 1.1, x: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors group"
                            aria-label="Projeto anterior"
                        >
                            <ChevronLeft size={20} className="group-hover:text-emerald-400 transition-colors"/>
                        </motion.button>
                        
                        <motion.button
                            onClick={nextProject}
                            whileHover={{ scale: 1.1, x: 2 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center text-gray-900 hover:bg-emerald-300 transition-colors group"
                            aria-label="Próximo projeto"
                        >
                            <ChevronRight size={20}/>
                        </motion.button>
                    </div>
                </div>

                {/* Project indicators */}
                <div className="flex justify-center gap-2 mt-12">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > currentIndex ? 1 : -1);
                                setCurrentIndex(index);
                                setIsAutoPlaying(false);
                            }}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'bg-emerald-400 w-8' : 'bg-gray-700 hover:bg-gray-500'
                            }`}
                            aria-label={`Ir para projeto ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}