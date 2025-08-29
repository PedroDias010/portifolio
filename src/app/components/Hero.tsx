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
  { number: 1, label: "Anos de Experiência" },
  { number: 1, label: "Projetos Concluídos" },
  { number: 15, label: "Tecnologias Dominadas" },
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-950 text-white pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">
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
              <span className="block text-emerald-400 mt-1 sm:mt-2">Pedro Dias</span>
            </h1>
            <p className="text-gray-300 mb-6 sm:mb-8 text-center lg:text-left text-sm sm:text-base md:text-lg">
              Entusiasta no desenvolvimento de soluções inovadoras e eficientes, com proficiência em diversas linguagens de programação e tecnologias.
            </p>

            <div className="flex flex-col items-center gap-4 lg:flex-row">
              <motion.a
                href="/Curriculo-Pedro Dias.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-emerald-400 text-gray-900 py-2 sm:py-3 px-6 sm:px-8 rounded-full flex items-center justify-center gap-2 hover:bg-emerald-300 transition-colors text-sm sm:text-base"
              >
                <Download size={18} />
                Download CV
              </motion.a>

              <div className="flex items-center gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-400 transition-colors"
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

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex-1 mb-8 lg:mb-0"
          >
            <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] relative mx-auto">
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-emerald-400/20"
              />

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[-8px] sm:inset-[-10px] rounded-full border-2 border-emerald-400/10"
              />

              <motion.div
                animate={{ scale: [1, 1.02, 1], rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-16px] sm:inset-[-20px] rounded-full border-dashed border-emerald-400/5"
              />

              <Image
                src="/Pedro DEv.jpg"
                alt="Pedro Dias"
                fill
                className="object-cover rounded-full p-3 sm:p-4"
                priority
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }} 
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col xs:flex-row items-center justify-center gap-2 xs:gap-4 p-4 bg-gray-900 rounded-lg">
              <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400">
                <CountUp value={Number(stat.number)} />
                +
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm text-center xs:text-left">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}