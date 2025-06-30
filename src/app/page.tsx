// app/page.js
'use client'

import { MapPin } from "lucide-react";
import { PiInstagramLogo, PiTiktokLogo, PiGithubLogo, PiLinkedinLogo, PiShare, PiCode, PiMagnifyingGlass, PiLightning, PiChartBar, PiCoffee, PiListBullets } from "react-icons/pi";
import Image from "next/image";
import { FaPhone, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMercadopago } from "react-icons/si";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent p-2 sm:p-4 md:p-8">
      <div className="w-full mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 grid-rows-none md:grid-rows-6 gap-2 sm:gap-4 h-auto md:h-screen md:max-h-[900px]">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="col-span-1 md:col-span-12 row-span-1 neu-card raised rounded-2xl flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 mb-2 md:mb-0">
            <span className="text-2xl sm:text-3xl font-bold font-mono">NATAN CARDOSO</span>
            <motion.button whileHover={{ scale: 1.07 }} className="w-full sm:w-2/3 md:w-auto bg-[#E95D1F] text-white rounded-xl py-3 px-6 font-semibold shadow hover:scale-105 transition-transform flex items-center justify-center gap-2 mt-2 md:mt-0">
              <PiCoffee className="w-5 h-5" />
              Bora tomar um café?
            </motion.button>
          </motion.div>

          {/* Apresentação */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="col-span-1 md:col-span-3 md:row-span-3 bg-transparent flex flex-col gap-3">
            {/* Card 1: Texto de apresentação */}
            <motion.div whileHover={{ scale: 1.03 }} className="neu-card raised rounded-2xl p-4 sm:p-5 flex flex-col justify-center h-1/2">
              <div className="text-lg sm:text-xl font-bold mb-2 text-white">Fala galera, Sou Natan!</div>
              <div className="text-gray-200">Lorem ipsum dolor sit amet</div>
            </motion.div>
            {/* Card 2: Círculo + texto */}
            <motion.div whileHover={{ scale: 1.03 }} className="neu-card raised rounded-2xl p-4 sm:p-5 flex items-center h-1/2">
              <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-[#E95D1F] mr-3" />
              <span className="font-semibold text-white text-base sm:text-lg">Piracicaba - Brasil</span>
            </motion.div>
            {/* Redes sociais: 4 cards separados */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <motion.div whileHover={{ scale: 1.1 }} className="neu-card raised flex flex-col items-center justify-center py-2 sm:py-3 rounded-2xl hover:bg-[#E95D1F] hover:text-white transition-all cursor-pointer group">
                <PiInstagramLogo className="w-5 h-5 sm:w-6 sm:h-6 mb-1 text-white group-hover:text-white" />
                <span className="font-semibold text-white group-hover:text-white text-xs sm:text-base">Instagram</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="neu-card raised flex flex-col items-center justify-center py-2 sm:py-3 rounded-2xl hover:bg-[#E95D1F] hover:text-white transition-all cursor-pointer group">
                <PiTiktokLogo className="w-5 h-5 sm:w-6 sm:h-6 mb-1 text-white group-hover:text-white" />
                <span className="font-semibold text-white group-hover:text-white text-xs sm:text-base">Tiktok</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="neu-card raised flex flex-col items-center justify-center py-2 sm:py-3 rounded-2xl hover:bg-[#E95D1F] hover:text-white transition-all cursor-pointer group">
                <PiGithubLogo className="w-5 h-5 sm:w-6 sm:h-6 mb-1 text-white group-hover:text-white" />
                <span className="font-semibold text-white group-hover:text-white text-xs sm:text-base">Github</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="neu-card raised flex flex-col items-center justify-center py-2 sm:py-3 rounded-2xl hover:bg-[#E95D1F] hover:text-white transition-all cursor-pointer group">
                <PiLinkedinLogo className="w-5 h-5 sm:w-6 sm:h-6 mb-1 text-white group-hover:text-white" />
                <span className="font-semibold text-white group-hover:text-white text-xs sm:text-base">LinkedIn</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Imagem central */}
          <div className="col-span-1 md:col-span-3 md:row-span-3 neu-card raised rounded-2xl flex items-center justify-center relative overflow-hidden">
            <Image 
              src="/profile.png" 
              alt="Foto de perfil"
              fill
              className="object-cover rounded-2xl w-full h-48 sm:h-auto"
              priority
            />
          </div>

          {/* Grid Pequena Direita */}
          <div className="col-span-1 md:col-span-2 md:row-span-3 flex flex-col h-full mt-2 md:mt-0">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="neu-card raised rounded-2xl flex flex-col items-center justify-center py-2 sm:py-3">
                <PiCode className="w-6 h-6 sm:w-7 sm:h-7 text-[#E95D1F] mb-1" />
                <span className="text-white text-xs sm:text-sm font-semibold mt-1">Front End</span>
              </div>
              <div className="neu-card raised rounded-2xl flex flex-col items-center justify-center py-2 sm:py-3">
                <PiMagnifyingGlass className="w-6 h-6 sm:w-7 sm:h-7 text-[#E95D1F] mb-1" />
                <span className="text-white text-xs sm:text-sm font-semibold mt-1">SEO</span>
              </div>
              <div className="neu-card raised rounded-2xl flex flex-col items-center justify-center py-2 sm:py-3">
                <PiLightning className="w-6 h-6 sm:w-7 sm:h-7 text-[#E95D1F] mb-1" />
                <span className="text-white text-xs sm:text-sm font-semibold mt-1">Speed</span>
              </div>
              <div className="neu-card raised rounded-2xl flex flex-col items-center justify-center py-2 sm:py-3">
                <PiChartBar className="w-6 h-6 sm:w-7 sm:h-7 text-[#E95D1F] mb-1" />
                <span className="text-white text-xs sm:text-sm font-semibold mt-1">Análise</span>
              </div>
            </div>
            <div className="flex-1 flex items-stretch mt-2 sm:mt-3">
              <div className="neu-card raised rounded-2xl w-full h-full flex flex-col items-center justify-center py-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
                  </span>
                </div>
                <div className="text-white text-base sm:text-lg text-center leading-tight">
                  <span className="font-bold">Disponível para</span><br/>
                  novos projetos
                </div>
              </div>
            </div>
          </div>

          {/* Projeto Principal */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="col-span-1 md:col-span-4 md:row-span-2 neu-card raised rounded-2xl flex flex-col items-center justify-center p-4 sm:p-6 text-center mt-2 md:mt-0">
            <PiShare className="w-7 h-7 sm:w-8 sm:h-8 text-[#E95D1F] mb-2" />
            <span className="text-white font-bold text-base sm:text-lg mb-2">Projeto em Destaque</span>
            <div className="text-gray-300 mb-3 text-sm sm:text-base">Landing page para venda de um curso com checkout do mercado pago</div>
            <div className="flex gap-2 sm:gap-3 mt-auto justify-center flex-wrap">
              <span className="flex items-center gap-1 bg-[#18181b] text-white text-xs px-2 sm:px-3 py-1 rounded-full shadow-md border border-[#fff2]">
                <SiNextdotjs className="w-4 h-4" /> Next
              </span>
              <span className="flex items-center gap-1 bg-[#026e00] text-white text-xs px-2 sm:px-3 py-1 rounded-full shadow-md border border-[#fff2]">
                <FaNodeJs className="w-4 h-4" /> Node
              </span>
              <span className="flex items-center gap-1 bg-[#009ee3] text-white text-xs px-2 sm:px-3 py-1 rounded-full shadow-md border border-[#fff2]">
                <SiMercadopago className="w-4 h-4" /> Mercado Pago
              </span>
            </div>
          </motion.div>

          {/* Card Final - barra + mini cards */}
          <div className="col-span-1 md:col-span-4 md:row-span-1 neu-card raised rounded-2xl flex flex-col space-y-2 justify-end mt-2">
            <div className="h-1/2 flex items-center px-4">
              <div className="w-6 h-6 rounded-full border-2 border-[#E95D1F] mr-2"></div>
              <div className="h-3 w-1/2 bg-[#E95D1F] rounded opacity-60"></div>
            </div>
            <div className="grid grid-cols-2 gap-2 h-1/2">
              <div className="neu-card raised rounded-2xl"></div>
              <div className="neu-card raised rounded-2xl"></div>
            </div>
          </div>

          {/* Lista/Textos */}
          <div className="col-span-1 md:col-span-7 md:row-start-5 md:row-span-2 neu-card raised rounded-2xl flex flex-col p-4 sm:p-5 mt-2 md:mt-0">
            <div className="font-bold mb-2 text-white text-base sm:text-lg flex items-center gap-2">
              <PiListBullets className="w-5 h-5 text-[#E95D1F]" />
              Últimos Projetos
            </div>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                <div>
                  <span className="text-white font-semibold">Landing Page Curso X</span>
                  <span className="block text-xs text-gray-400">10/06/2024</span>
                </div>
                <a href="#" className="bg-[#E95D1F] text-white text-xs px-3 py-1 rounded hover:bg-orange-600 transition mt-1 sm:mt-0">Ver Projeto</a>
              </li>
              <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                <div>
                  <span className="text-white font-semibold">Dashboard Empresa Y</span>
                  <span className="block text-xs text-gray-400">28/05/2024</span>
                </div>
                <a href="#" className="bg-[#E95D1F] text-white text-xs px-3 py-1 rounded hover:bg-orange-600 transition mt-1 sm:mt-0">Ver Projeto</a>
              </li>
              <li className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                <div>
                  <span className="text-white font-semibold">Site Portfólio Z</span>
                  <span className="block text-xs text-gray-400">15/05/2024</span>
                </div>
                <a href="#" className="bg-[#E95D1F] text-white text-xs px-3 py-1 rounded hover:bg-orange-600 transition mt-1 sm:mt-0">Ver Projeto</a>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="col-span-1 md:col-span-5 md:row-start-5 md:row-span-2 neu-card raised rounded-2xl flex flex-col items-center justify-center p-4 sm:p-8 mt-2 md:mt-0">
            <div className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4 text-center text-white">
              Precisa de um site?
            </div>
            <div className="text-gray-300 text-center text-sm sm:text-base mb-4">
              Desenvolvo sites modernos, rápidos e personalizados para o seu negócio. Solicite um orçamento sem compromisso!
            </div>
            <motion.button whileHover={{ scale: 1.07 }} className="w-full sm:w-2/3 bg-[#E95D1F] text-white rounded-xl py-3 px-6 font-semibold shadow hover:scale-105 transition-transform flex items-center justify-center gap-2">
              <FaPhone className="w-5 h-5" />
              Solicitar orçamento
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}