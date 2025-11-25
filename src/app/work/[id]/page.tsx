'use client'

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { projects } from "@/app/lib/constants";
import { Github, ExternalLink, ArrowLeft, CheckCircle2, Play } from "lucide-react";
import { useState } from "react";

export default function ProjectDetails() {
    const params = useParams();
    const router = useRouter();
    const [selectedMedia, setSelectedMedia] = useState(0);

    const project = projects.find(p => p.id === params.id);

    // Helper function to check if media is a video
    const isVideo = (url: string) => {
        return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');
    };

    if (!project) {
        return (
            <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
                    <button
                        onClick={() => router.push('/work')}
                        className="text-emerald-400 hover:underline"
                    >
                        Voltar para projetos
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 text-white pt-24 pb-20">
            {/* Background effects */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
                {/* Back button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => router.push('/work')}
                    className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Voltar para projetos
                </motion.button>

                {/* Project header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <span className="text-emerald-400 font-semibold tracking-wider text-sm">
                        PROJETO {project.number}
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        {project.detailedDescription}
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        <motion.a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-emerald-400 text-gray-900 py-3 px-6 rounded-full font-medium hover:bg-emerald-300 transition-colors"
                        >
                            <ExternalLink size={18} />
                            Ver Projeto Live
                        </motion.a>

                        <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-gray-800 text-white py-3 px-6 rounded-full font-medium hover:bg-gray-700 transition-colors border border-gray-700"
                        >
                            <Github size={18} />
                            Ver Código Fonte
                        </motion.a>
                    </div>
                </motion.div>

                {/* Main media gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-12"
                >
                    <div className="relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 mb-4">
                        {isVideo(project.additionalImages[selectedMedia]) ? (
                            <video
                                src={project.additionalImages[selectedMedia]}
                                controls
                                autoPlay
                                loop
                                muted
                                className="w-full h-auto"
                            >
                                Seu navegador não suporta vídeos.
                            </video>
                        ) : (
                            <div className="relative w-full" style={{ aspectRatio: 'auto' }}>
                                <Image
                                    src={project.additionalImages[selectedMedia]}
                                    alt={`${project.title} - Imagem ${selectedMedia + 1}`}
                                    width={1280}
                                    height={720}
                                    className="w-full h-auto object-contain"
                                    sizes="(max-width: 1280px) 100vw, 1280px"
                                    priority
                                />
                            </div>
                        )}
                    </div>

                    {/* Media thumbnails */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {project.additionalImages.map((media, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedMedia(index)}
                                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                                    selectedMedia === index
                                        ? 'border-emerald-400'
                                        : 'border-gray-800 hover:border-gray-600'
                                }`}
                            >
                                {isVideo(media) ? (
                                    <div className="relative w-full h-full bg-gray-800 flex items-center justify-center">
                                        <video
                                            src={media}
                                            className="w-full h-full object-cover"
                                            muted
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                                            <Play size={32} className="text-white" fill="white" />
                                        </div>
                                    </div>
                                ) : (
                                    <Image
                                        src={media}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="300px"
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-1 h-8 bg-emerald-400 rounded-full"></span>
                                Funcionalidades Principais
                            </h2>
                            <div className="space-y-3">
                                {project.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800 hover:border-emerald-400/30 transition-colors"
                                    >
                                        <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Challenges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-1 h-8 bg-emerald-400 rounded-full"></span>
                                Desafios e Soluções
                            </h2>
                            <div className="space-y-4">
                                {project.challenges.map((challenge, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        className="bg-gray-900/50 p-5 rounded-lg border border-gray-800"
                                    >
                                        <p className="text-gray-300">{challenge}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Technologies */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800"
                        >
                            <h3 className="text-xl font-bold mb-4">Tecnologias</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        className="px-3 py-1.5 bg-emerald-400/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-400/20"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Project info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800"
                        >
                            <h3 className="text-xl font-bold mb-4">Sobre o Projeto</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>

                        {/* Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="space-y-3"
                        >
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 bg-emerald-400/10 hover:bg-emerald-400/20 rounded-lg border border-emerald-400/20 transition-colors group"
                            >
                                <span className="text-emerald-400 font-medium">Ver Demo</span>
                                <ExternalLink size={18} className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors group"
                            >
                                <span className="text-white font-medium">Ver Código</span>
                                <Github size={18} className="text-white group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
