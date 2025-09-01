"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import CountUp from "./CountUp";
import { socialLinks } from "../lib/constants";

interface Stat {
  number: number;
  label: string;
}

const stats: Stat[] = [
  {  number: 1, label: "Anos de Experiência" },
  { number: 1, label: "Projetos Concluídos" },
  { number: 15, label: "Tecnologias Dominadas" },
];

export default function Hero() {
  return (    
    <section className="relative min-h-screen bg-gray-950 text-white overflow-hidden pt-20">
      {/* Fundo tecnológico com gradiente + linhas */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 via-gray-950 to-black" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center lg:text-left">
              Olá, Eu sou
              <span className="block text-emerald-400 mt-1 sm:mt-2 drop-shadow-[0_0_10px_#10B981]">
                Pedro Dias
              </span>
            </h1>
            <p className="text-gray-300 mb-6 sm:mb-8 text-center lg:text-left text-sm sm:text-base md:text-lg">
              Entusiasta no desenvolvimento de soluções inovadoras e eficientes,
              com proficiência em diversas linguagens de programação e tecnologias.
            </p>

            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <motion.a
                href="/Curriculo-Pedro Dias.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-emerald-400 text-gray-900 py-2 sm:py-3 px-6 sm:px-8 rounded-full flex items-center justify-center gap-2 hover:bg-emerald-300 transition-colors text-sm sm:text-base shadow-[0_0_20px_#10B981]"
              >
                <Download size={18} />
                Download CV
              </motion.a>

              {/* Social links */}
              <div className="flex items-center gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-400 shadow-[0_0_10px_#10B98140] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
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
            <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] relative mx-auto">
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
              <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-3xl animate-pulse" />

              {/* Foto */}
              <Image
                src="/Pedro DEv.jpg"
                alt="Pedro Dias"
                fill
                className="object-cover rounded-full p-3 sm:p-4 relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-4 p-6 bg-gray-900/80 rounded-lg border border-gray-800 hover:border-emerald-400/50 hover:shadow-[0_0_20px_#10B98150] transition"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 drop-shadow-[0_0_10px_#10B981]">
                <CountUp value={Number(stat.number)} />+
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm text-center xs:text-left">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
