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
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      width: Math.random() * 5 + 2,
      height: Math.random() * 5 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 2,
    }))
  , []);

  return (
    <div className="absolute inset-0 opacity-20">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-emerald-400"
          style={{
            width: particle.width,
            height: particle.height,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (    
    <section className="relative min-h-screen bg-gray-950 text-white overflow-hidden pt-20">
      {/* Fundo tecnológico com partículas e gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-gray-950 to-black" />
      
      {/* Efeito de partículas */}
      <Particles />

      {/* Linhas de conexão tecnológica */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-px h-40 bg-emerald-400/30"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-px bg-emerald-400/30"></div>
        <div className="absolute bottom-1/4 left-1/2 w-px h-32 bg-emerald-400/20"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-gray-400 mb-2 sm:mb-4 block text-center lg:text-left text-sm sm:text-base">
              Desenvolvedor Full Stack
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-center lg:text-left">
              Olá, Eu sou
              <span className="block text-emerald-400 mt-2 sm:mt-3 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                Pedro Dias
              </span>
            </h1>
            <p className="text-gray-300 mb-6 sm:mb-8 text-center lg:text-left text-base sm:text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
              Entusiasta no desenvolvimento de soluções inovadoras e eficientes,
              com proficiência em diversas linguagens de programação e tecnologias.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
              <motion.a
                href="/Curriculo-Pedro Dias.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-emerald-400 text-gray-900 py-3 px-8 rounded-full flex items-center justify-center gap-2 hover:bg-emerald-300 transition-colors text-base font-medium shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]"
              >
                <Download size={20} />
                Download CV
              </motion.a>

              {/* Social links */}
              <div className="flex items-center gap-4 sm:gap-5">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Foto com neon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex-1 mb-8 lg:mb-0"
          >
            <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] relative mx-auto">
              {/* Círculos animados */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-emerald-400/30"
              />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[-10px] rounded-full border-2 border-emerald-400/20 blur-md"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] rounded-full border border-dashed border-emerald-400/10"
              />

              {/* Glow atrás da foto */}
              <motion.div 
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-emerald-400/20 blur-3xl"
              />

              {/* Foto */}
              <div className="relative w-full h-full z-10">
                <Image
                  src="/Pedro DEv.jpg"
                  alt="Pedro Dias"
                  fill
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
                  className="object-cover rounded-full p-3 sm:p-4"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 md:mt-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-900/80 rounded-xl border border-gray-800 hover:border-emerald-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <CountUp value={Number(stat.number)} />+
              </h2>
              <p className="text-gray-400 text-sm sm:text-base text-center">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}