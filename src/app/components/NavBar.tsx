"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from "../lib/constants";
import { X, Menu, Download, ArrowRight } from 'lucide-react'; 

export default function NavBar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const MotionLink = motion(Link);

    // Efeito de scroll para mudar a aparência da navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/95 backdrop-blur-md py-2 shadow-xl' : 'bg-gray-950/80 backdrop-blur-sm py-3'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-12">
                    {/* Logo */}
                    <Link href="/">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2"
                        >
                            <div className="relative">
                                <motion.div 
                                    className="absolute -inset-1 bg-emerald-400/30 rounded-lg blur-sm -z-10"
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            </div>
                            <span className="text-xl font-bold text-white">
                                PEDRO<span className="text-emerald-400">.</span>DEV
                            </span>
                        </motion.div>
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center space-x-6">
                        {menuItems.map((item, index) => (
                            <motion.div 
                                key={item.path || index}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={item.path}
                                    className={`relative px-3 py-2 ${pathname === item.path ? "text-emerald-400" : "text-gray-300"} hover:text-emerald-400 transition-colors group`}
                                >
                                    {item.title}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all group-hover:w-full" />
                                    {pathname === item.path && (
                                        <motion.span 
                                            className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-400"
                                            layoutId="navbar-indicator"
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <MotionLink
                                href="/Curriculo-Pedro Dias.pdf"
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 py-2 px-4 rounded-full font-medium hover:bg-emerald-400/20 transition-colors"
                            >
                                <Download size={16} />
                                CV
                            </MotionLink>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <MotionLink
                                href="/contact"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-emerald-400 text-gray-900 py-2 px-5 rounded-full font-medium hover:bg-emerald-300 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                            >
                                Contato
                                <ArrowRight size={16} />
                            </MotionLink>
                        </motion.div>
                    </div>

                    {/* Botão Menu Mobile */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/50"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X size={24} className="text-white" />
                        ) : (
                            <Menu size={24} className="text-white" />
                        )}
                        {!isMenuOpen && (
                            <motion.span 
                                className="absolute inset-0 rounded-lg bg-emerald-400/10 blur-md"
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        )}
                    </motion.button>
                </div>
            </div>
            
            {/* Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.path}
                                        className={`flex items-center py-3 px-4 rounded-lg ${pathname === item.path ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20" : "text-gray-300 hover:bg-gray-800/50"}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.title}
                                        {pathname === item.path && (
                                            <motion.div 
                                                className="w-2 h-2 bg-emerald-400 rounded-full ml-auto"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                            
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: menuItems.length * 0.1 }}
                                className="pt-4 border-t border-gray-800 space-y-3"
                            >
                                <Link 
                                    href="/Curriculo-Pedro Dias.pdf"
                                    download
                                    className="flex items-center justify-center gap-2 w-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 py-3 px-6 rounded-full font-medium hover:bg-emerald-400/20 transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <Download size={18} />
                                    Baixar CV
                                </Link>
                                
                                <Link 
                                    href="/contact"
                                    className="flex items-center justify-center gap-2 w-full bg-emerald-400 text-gray-900 py-3 px-6 rounded-full font-medium hover:bg-emerald-300 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Entrar em Contato
                                    <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}