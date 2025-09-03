"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExperienceTabs, resumeData, skillsData } from "../lib/constants";
import { Download, ChevronRight, Calendar, BookOpen, Sparkles } from "lucide-react";

export default function Resume() {
  const [activeTab, setActiveTab] = useState("experience");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const renderContent = () => {
    switch(activeTab) {
        case "experience":
            return (
                <div className="space-y-8">
                    {resumeData.experience.map((experience, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -3 }}
                        className="relative p-6 bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 hover:border-emerald-400/30 transition-all duration-300 group"
                        >
                            {/* Timeline indicator */}
                            <div className="absolute left-6 top-6 w-3 h-3 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform" />
                            <div className="absolute left-7 top-6 w-0.5 h-full bg-emerald-400/30 -translate-y-2" />
                            
                            <div className="ml-6">
                                <div className="flex items-center gap-2 text-emerald-400 text-sm mb-2">
                                    <Calendar size={16} />
                                    <span>{experience.period}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                    {experience.title}
                                </h3> 

                                <p className="text-emerald-300 mt-1 font-medium"> {experience.company}</p>
                                <p className="text-gray-400 mt-3 leading-relaxed"> {experience.description}</p>
                                
                                {/* Skills section removed since 'skills' property doesn't exist */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )
        case "education":
            return (
                <div className="space-y-8">
                    {resumeData.education.map((education, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -3 }}
                        className="relative p-6 bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 hover:border-emerald-400/30 transition-all duration-300 group"
                        >
                            {/* Timeline indicator */}
                            <div className="absolute left-6 top-6 w-3 h-3 bg-emerald-400 rounded-full group-hover:scale-125 transition-transform" />
                            <div className="absolute left-7 top-6 w-0.5 h-full bg-emerald-400/30 -translate-y-2" />
                            
                            <div className="ml-6">
                                <div className="flex items-center gap-2 text-emerald-400 text-sm mb-2">
                                    <Calendar size={16} />
                                    <span>{education.period}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                    {education.title}
                                </h3> 

                                <p className="text-emerald-300 mt-1 font-medium"> {education.institution}</p>
                                <p className="text-gray-400 mt-3 leading-relaxed"> {education.description}</p>
                                
                                {/* Achievements section removed since 'achievements' property doesn't exist */}
                            </div>
                        </motion.div>
                    ))}
                </div>
            )
        case "skills":
            return (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skillsData.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ 
                            y: -8,
                            scale: 1.05,
                            transition: { duration: 0.2 } 
                          }}
                          className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 hover:border-emerald-400/30 transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-emerald-400/10 rounded-xl group-hover:bg-emerald-400/20 transition-colors">
                                <img 
                                    src={skill.icon}
                                    alt={skill.name}
                                    width={64}
                                    height={64}
                                    className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all"
                                />
                            </div>
                            <span className="text-white font-medium text-center group-hover:text-emerald-400 transition-colors">
                                {skill.name}
                            </span>
                            {/* Progress bar removed since 'level' property doesn't exist */}
                        </motion.div>
                    ))}
                </div>
            )
        case "about":
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid md:grid-cols-2 gap-6"
              >
               <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="text-emerald-400" size={24} />
                    <h3 className="text-xl font-bold">Sobre Mim</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{resumeData.about.description}</p>
               </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 rounded-xl border border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="text-emerald-400" size={24} />
                    <h3 className="text-xl font-bold">Interesses</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                      {resumeData.about.interests.map((interest, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 rounded-full text-sm hover:bg-emerald-400/20 transition-colors"
                        >
                          {interest}
                        </motion.span>
                      ))}
                  </div>
              </div>

              {/* Download CV Button */}
              <motion.a
                href="/Curriculo-Pedro Dias.pdf"
                download
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="md:col-span-2 flex items-center justify-center gap-3 bg-emerald-400 text-gray-900 py-4 px-6 rounded-xl font-medium hover:bg-emerald-300 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <Download size={20} />
                Baixar Currículo Completo
              </motion.a>
              </motion.div>
            )

        default:
            return null
    }
  }

  return (
    <section id="resume" className="relative min-h-screen bg-gray-950 text-white pt-20 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-400 font-semibold tracking-wider">CURRÍCULO</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">Minha Jornada</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Conheça minha trajetória profissional, habilidades e experiências
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px,1fr] gap-8">

          {/* SIDEBAR */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-24"
            >
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">
                Explorar
              </h3>

              <div className="space-y-2 relative">
                {/* Animated background element */}
                <motion.div
                  className="absolute inset-0 bg-emerald-400/10 rounded-xl -z-10"
                  animate={{
                    opacity: hoveredTab ? 0.1 : 0,
                    scale: hoveredTab ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />
                
                {ExperienceTabs.map((tab, index) => (
                  <motion.button
                    key={tab.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredTab(tab.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full p-4 text-left rounded-lg transition-all duration-300 flex items-center justify-between ${
                      tab.id === activeTab
                        ? "bg-emerald-400 text-gray-900 shadow-lg"
                        : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    <span>{tab.title}</span>
                    {tab.id === activeTab && (
                      <ChevronRight size={16} className="flex-shrink-0" />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CONTENT */}
          <div>
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              className="flex items-center justify-between mb-8"
            >
              <h2 className="text-2xl font-bold text-white">
                {ExperienceTabs.find(tab => tab.id === activeTab)?.title}
              </h2>
              
              {activeTab !== "about" && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-emerald-400 text-sm"
                >
                  {activeTab === "skills" 
                    ? `${skillsData.length} habilidades` 
                    : activeTab === "experience" 
                    ? `${resumeData.experience.length} experiências`
                    : `${resumeData.education.length} formações`
                  }
                </motion.span>
              )}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-[400px]"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}