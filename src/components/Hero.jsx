import React from 'react';
import { ReactIcon, ViteIcon, TailwindIcon, JavaScriptIcon, NodeIcon, TypeScriptIcon, ExpressIcon, PrismaIcon, PythonIcon, MySQLIcon, DockerIcon, APIIcon } from './TechIcons';

export default function Hero() {
  return (
 <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 pt-24 md:pt-0">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Columna Izquierda - Texto */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Hola, soy Abraham
          </h1>
          
          <div className="inline-block">
            <span className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-lg font-mono">
              Full Stack Developer Jr.
            </span>
          </div>
          
          <p className="text-gray-600 text-lg leading-relaxed">
         Soy <strong>desarrollador full stack junior</strong> con experiencia en React, Node.js, TypeScript y APIs REST.
         Me encanta aprender, explorar nuevas tecnologías y construir proyectos
         que resuelvan problemas reales.
          </p>
          
          {/* Botones */}
          <div className="flex gap-4 flex-wrap">
            <a href="/CV-Abraham.pdf" download className="px-6 py-3 border-2 border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 font-medium">
              Descargar CV
            </a>
          </div>
          
          {/* Redes Sociales */}
          <div className="pt-4">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-3">Sígueme</p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/abraham-díaz-ahijón" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/abraham-diaz" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
<div className="relative">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden aspect-[4/3] max-w-lg mx-auto relative">

            {/* Iconos SVG optimizados - Fila superior */}
            <div className="absolute top-8 left-16 text-blue-400 animate-float">
              <ReactIcon size={40} />
            </div>

            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-yellow-400 animate-float-slow">
              <JavaScriptIcon size={38} />
            </div>

            <div className="absolute top-8 right-16 text-blue-500 animate-float-slow">
              <TypeScriptIcon size={38} />
            </div>

            {/* Iconos laterales */}
            <div className="absolute top-1/2 -translate-y-1/2 left-12 text-green-500 animate-float-slow">
              <NodeIcon size={38} />
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-12 text-gray-300 animate-float">
              <ExpressIcon size={38} />
            </div>

            {/* Fila inferior */}
            <div className="absolute bottom-8 left-12 text-indigo-400 animate-float-delayed">
              <PrismaIcon size={38} />
            </div>

            <div className="absolute bottom-8 left-1/3 text-yellow-300 animate-float">
              <PythonIcon size={36} />
            </div>

            <div className="absolute bottom-8 right-1/3 text-orange-400 animate-float-slow">
              <MySQLIcon size={36} />
            </div>

            <div className="absolute bottom-8 right-12 text-blue-400 animate-float-delayed-2">
              <DockerIcon size={38} />
            </div>

            {/* Texto central */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-center z-10">
              <div>
                <h3 className="text-4xl font-bold mb-3 tracking-tight">
                  Software
                </h3>
                <p className="text-xl text-gray-400 font-light">
                  Developer
                </p>
                <div className="mt-4 flex gap-2 justify-center flex-wrap px-4">
                  <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20">
                    React
                  </span>
                  <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20">
                    Node.js
                  </span>
                  <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>

            {/* Efecto de brillo */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent pointer-events-none"></div>

          </div>
        </div>
        
      </div>
    </div>
  );
}
