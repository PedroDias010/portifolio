"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { contactInfo } from "../lib/constants"
import { toast } from "sonner"
import { Phone, Mail, Send, ArrowRight } from "lucide-react"

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  service: string
  message: string
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    try {
      const webhookURL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL
      
      if (!webhookURL) {
        throw new Error("Webhook URL não configurada")
      }

      const discordMessage = {
        content: null,
        embeds: [
          {
            title: "📧 Novo Contato do Site",
            color: 0x10b981, 
            fields: [
              {
                name: "👤 Nome",
                value: `${data.firstName} ${data.lastName}`,
                inline: true
              },
              {
                name: "📧 Email",
                value: data.email,
                inline: true
              },
              {
                name: "📞 Telefone",
                value: data.phone || "Não informado",
                inline: true
              },
              {
                name: "🛠️ Serviço",
                value: data.service,
                inline: true
              },
              {
                name: "💬 Mensagem",
                value: data.message.length > 1000 
                  ? data.message.substring(0, 1000) + "..." 
                  : data.message,
                inline: false
              }
            ],
            timestamp: new Date().toISOString(),
            footer: {
              text: "Formulário de Contato"
            }
          }
        ]
      }

      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage),
      })

      if (response.ok) {
        toast.success('Mensagem enviada com sucesso!', {
          duration: 4000
        })
      }

      reset()
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error)
      toast.error('Erro ao enviar mensagem. Tente novamente', {
        duration: 4000,
        position: 'bottom-right',
        style: {
          background: '#ef4444',
          color: '#fff',
        },
      })
    }
    setIsSubmitting(false)
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white pt-20 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-600">
            Vamos Trabalhar Juntos?
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Entre em contato para discutir seu projeto, oportunidades de parceria ou vagas de emprego. Estou pronto para ajudar a transformar suas ideias em realidade e aberto a novas oportunidades profissionais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* INFORMAÇÕES DE CONTATO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-6 text-emerald-400 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                Entre em Contato Rapidamente
              </h2>
              <p className="text-gray-400 mb-8">
                Clique em uma das opções abaixo para entrar em contato diretamente:
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-800/40 transition-colors duration-300"
                  >
                    <div className={`p-3 rounded-xl ${info.bg} flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-400 mb-1 text-sm font-medium">
                        {info.title}
                      </h3>
                      <p className="text-white font-medium">
                        {info.content} 
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FORMULARIO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700/50">
              <h2 className="text-2xl font-bold mb-2 text-emerald-400">Deseja um projeto específico?</h2>
              <p className="text-gray-400 mb-6">
                Escolha o serviço que mais combina com você e bora conversar para tirar suas ideias do papel!
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-1">
                      Nome *
                    </label>
                    <input
                      {...register("firstName", { required: "Nome é obrigatório" })}
                      id="firstName"
                      placeholder="Seu nome"
                      className="w-full p-3.5 bg-gray-900/70 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-colors"
                    />
                    {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-1">
                      Sobrenome *
                    </label>
                    <input
                      {...register("lastName", { required: "Sobrenome é obrigatório" })}
                      id="lastName"
                      placeholder="Seu sobrenome"
                      className="w-full p-3.5 bg-gray-900/70 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-colors"
                    />
                    {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName.message}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Email *
                  </label>
                  <input
                    {...register("email", { 
                      required: "Email é obrigatório",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Email inválido"
                      }
                    })}
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full p-3.5 bg-gray-900/70 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-colors"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
                    Telefone (Opcional)
                  </label>
                  <input
                    {...register("phone")}
                    id="phone"
                    placeholder="(00) 00000-0000"
                    className="w-full p-3.5 bg-gray-900/70 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-1">
                    Serviço *
                  </label>
                  <select
                    {...register("service", { required: "Selecione um serviço" })}
                    id="service"
                    className="w-full p-3.5 bg-gray-900/70 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-colors"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Design">Design</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Open Source">Open Source</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Direct Contact">Direct Contact</option>
                  </select>
                  {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                    Mensagem *
                  </label>
                  <textarea
                    {...register("message", { required: "Mensagem é obrigatória" })}
                    id="message"
                    placeholder="Descreva seu projeto ou dúvida..."
                    rows={5}
                    className="w-full p-3.5 bg-gray-900/70 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-colors"
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}