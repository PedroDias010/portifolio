'use client'

import { services } from '@/app/lib/constants'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

export default function Services() {
   return (
      <section id="services" className="relative min-h-screen bg-gray-950 text-white pt-20 pb-28 overflow-hidden">
        {/* Elementos de fundo decorativos */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12">
          {/* Cabeçalho da seção */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-400 font-semibold tracking-wider">SERVIÇOS</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">O que eu ofereço</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Soluções completas em desenvolvimento web e mobile para impulsionar sua presença digital
            </p>
          </motion.div>

          {/* Grid de serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border
                border-gray-800 hover:border-emerald-400/50 transition-all duration-300
                hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
              >
                {/* Número de destaque */}
                <div className="absolute top-4 right-4 text-5xl font-bold
                 text-emerald-400/10 group-hover:text-emerald-500/20
                 transition-all">
                  0{index + 1}
                </div>
                
                {/* Ícone com efeito de brilho */}
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="mb-6 text-emerald-400 p-3 bg-gradient-to-br from-emerald-400/10 to-emerald-400/5
                  rounded-xl w-fit shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                >
                  {service.Icon && <service.Icon size={28} />}
                </motion.div>

                {/* Título e descrição */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>

                {/* Lista de características */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="p-1 bg-emerald-400/10 rounded-full">
                        <Check size={16} className="text-emerald-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Badges de tecnologias */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs bg-emerald-400/10 text-emerald-400 rounded-full border border-emerald-400/20
                      hover:bg-emerald-400/20 transition-colors cursor-default"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
                
                {/* Barra inferior animada */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600
                transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"/>
              </motion.div>
            ))}
          </div>

          {/* Rodapé da seção */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-400 text-gray-900 rounded-full 
              font-medium hover:bg-emerald-300 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Vamos trabalhar juntos
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>
   )
}