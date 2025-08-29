"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { contactInfo } from "../lib/constants"
import { toast } from "sonner";

type FormData = {
    firstName: string
    lastName: string
    email: string
    phone: string
    service: string
    message: string
}

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            
            const webhookURL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL;
            
            if (!webhookURL) {
                throw new Error("Webhook URL não configurada");
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
            };

            const response = await fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(discordMessage),
            });

            if (    response.ok) {
                toast.success('Sucesso ao enviar a mensagem', {
                duration: 4000
            });
            }

            reset();
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            toast.error('Erro ao enviar mensagem. Tente novamente', {
                duration: 4000,
                position: 'bottom-right',
                style: {
                    background: '#ef4444',
                    color: '#fff',
                },
            });
        }
        setIsSubmitting(false);
    };

    return (
        <section className="min-h-screen bg-gray-950 text-white pt-10">
              
            <div className="max-w-5xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* INFORMAÇÕES DE CONTATO */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8 order-2 lg:order-1"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className={`p-4 rounded-xl ${info.bg}`}>
                                    {info.icon}
                                </div>
                                <div>
                                    <h3 className="text-gray-400 mb-1">
                                        {info.title}
                                    </h3>
                                    <p className="text-white">
                                        {info.content} 
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* FORMULARIO */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-emerald-400">Entre em Contato</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        {...register("firstName", { required: "Nome é obrigatório" })}
                                        placeholder="Nome"
                                        className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-400"
                                    />
                                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                                </div>
                                <div>
                                    <input
                                        {...register("lastName", { required: "Sobrenome é obrigatório" })}
                                        placeholder="Sobrenome"
                                        className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-400"
                                    />
                                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                                </div>
                            </div>
                            
                            <div>
                                <input
                                    {...register("email", { 
                                        required: "Email é obrigatório",
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: "Email inválido"
                                        }
                                    })}
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-400"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>
                            
                            <div>
                                <input
                                    {...register("phone")}
                                    placeholder="Telefone (Opcional)"
                                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-400"
                                />
                            </div>
                            
                            <div>
                                <select
                                    {...register("service", { required: "Selecione um serviço" })}
                                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-400"
                                >
                                    <option value="">Selecione um serviço</option>
                                    <option value="Design">Design</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Open Source">Open Source</option>
                                    <option value="Freelance">Freelance</option>
                                    <option value="Backend Developer">Backend Developer</option>
                                    <option value="Direct Contact">Direct Contact</option>
                                </select>
                                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
                            </div>
                            
                            <div>
                                <textarea
                                    {...register("message", { required: "Mensagem é obrigatória" })}
                                    placeholder="Mensagem"
                                    rows={5}
                                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-400"
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-emerald-400 hover:bg-emerald-300 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-200"
                            >
                                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}