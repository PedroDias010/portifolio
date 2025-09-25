"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import CountUp from "./CountUp";
import { socialLinks } from "../lib/constants";
import { useMemo } from "react";

interface Stat {
  number: number;
  label: string;
}

const stats: Stat[] = [
  { number: 1, label: "Anos de Experiência" },
  { number: 1, label: "Projetos Concluídos" },
  { number: 15, label: "Tecnologias Dominadas" },
];

// Componente para partículas que evita problemas de hidratação
const Particles = () => {
  const particles = useMemo(
    () =>
      [...Array(30)].map((_, i) => ({
        id: i,
        width: Math.random() * 4 + 1,
        height: Math.random() * 4 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 8 + 4,
        delay: Math.random() * 3,
      })),
    []
  );

  return (
    <div className="absolute inset-0 opacity-30">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
          style={{
            width: particle.width,
            height: particle.height,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden pt-20">
      {/* Background moderno com múltiplas camadas */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_rgba(16,185,129,0.05)_50%,_transparent_75%)]" />
      
      {/* Grid pattern moderno */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(rgba(16,185,129,0.5)_1px,_transparent_1px),linear-gradient(90deg,_rgba(16,185,129,0.5)_1px,_transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Efeito de partículas */}
      <Particles />

      {/* Elementos geométricos modernos */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-emerald-400/20 rotate-45"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/6 w-16 h-16 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 blur-xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/12 w-2 h-20 bg-gradient-to-b from-emerald-400/30 to-transparent"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-20">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 z-10"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-emerald-400 mb-2 sm:mb-4 block text-center lg:text-left text-sm sm:text-base font-medium tracking-wider uppercase"
            >
              Desenvolvedor Full Stack
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-center lg:text-left leading-tight"
            >
              Olá, Eu sou
              <motion.span 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="block text-transparent bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 bg-clip-text mt-2 sm:mt-3 drop-shadow-2xl"
              >
                Pedro Dias
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-gray-300 mb-6 sm:mb-8 text-center lg:text-left text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Criando experiências digitais excepcionais com código limpo e design inovador. 
              Especializado em transformar ideias em soluções tecnológicas de alta performance.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8"
            >
              <motion.a
                href="/Curriculo-Pedro Dias.pdf"
                download
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(16,185,129,0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-4 px-10 rounded-full flex items-center justify-center gap-3 hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 text-base font-semibold shadow-2xl shadow-emerald-500/25"
              >
                <Download size={22} />
                Download CV
              </motion.a>

              {/* Social links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-400/10 transition-all duration-300"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Imagem principal modernizada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex-1 mb-8 lg:mb-0"
          >
            <div className="relative w-[320px] h-[400px] sm:w-[380px] sm:h-[480px] md:w-[420px] md:h-[520px] mx-auto">
              
              {/* Elementos decorativos modernos */}
              <motion.div
                animate={{ 
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-emerald-400/20 bg-[length:200%_200%] blur-xl"
              />
              
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-emerald-400/20 rounded-lg"
                style={{ clipPath: "polygon(0 0, 100% 20%, 100% 80%, 0 100%)" }}
              />
              
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                }}
                className="absolute inset-0 z-10"
              >
                {/* Container da imagem com efeitos */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                  {/* Overlay gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-emerald-400/10 z-20" />
                  
                  {/* Borda animada */}
                  <motion.div
                    animate={{
                      background: [
                        "linear-gradient(0deg, #10b981, #06b6d4)",
                        "linear-gradient(90deg, #06b6d4, #8b5cf6)",
                        "linear-gradient(180deg, #8b5cf6, #10b981)",
                        "linear-gradient(270deg, #10b981, #06b6d4)",
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 p-1 rounded-2xl z-10"
                  >
                    <div className="w-full h-full bg-gray-900 rounded-xl" />
                  </motion.div>
                  
                  {/* Imagem */}
                  <div className="relative w-full h-full z-30 p-1">
                    <Image
                      src="/legal.png"
                      alt="Pedro Dias - Desenvolvedor Full Stack"
                      fill
                      sizes="(max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
                      className="object-cover rounded-xl"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* Elementos flutuantes ao redor da imagem */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-emerald-400/30 to-cyan-400/30 rounded-xl backdrop-blur-sm border border-white/10"
              />
              
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, -10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-cyan-400/40 to-emerald-400/40 rounded-full backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats modernizadas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-20 sm:mt-24 md:mt-28"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + index * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(16,185,129,0.2)"
              }}
              className="group relative flex flex-col items-center justify-center gap-4 p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-emerald-400/50 transition-all duration-500 overflow-hidden"
            >
              {/* Background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 to-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.h2 
                className="relative text-5xl sm:text-6xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text"
                whileHover={{ scale: 1.1 }}
              >
                <CountUp value={Number(stat.number)} />+
              </motion.h2>
              <p className="relative text-gray-300 text-sm sm:text-base text-center font-medium">
                {stat.label}
              </p>
              
              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}