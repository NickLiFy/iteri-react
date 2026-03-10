import { Button } from '../components/ui/Button';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import heroBg from '../assets/Electrical_bg.png'

import maskUrl from '../assets/headerMask.png'



export const Hero = () => {
 return (
 <section id="hero" className="relative h-screen min-h-[700px] flex items-center bg-brand-bg">

 {/* 1. Фоновое изображение с маской (исходник) */}
 <div
 className="absolute inset-0 z-0"
 style={{
 backgroundImage: `url(${heroBg})`,
 backgroundSize: 'cover',
 backgroundPosition: 'center',
 backgroundRepeat: 'no-repeat',

 // Используем проверенный конфиг для маски
 WebkitMaskImage: `url(${maskUrl})`,
 WebkitMaskRepeat: 'no-repeat',
 WebkitMaskSize: 'cover',
 WebkitMaskPosition: 'center',

 maskImage: `url(${maskUrl})`,
 maskRepeat: 'no-repeat',
 maskSize: 'cover',
 maskPosition: 'center',

 // Альфа-режим для корректного отображения на iOS
 WebkitMaskMode: 'alpha',
 maskMode: 'alpha',
 } as React.CSSProperties}
 >
 {/* Легкое затемнение внутри маски, чтобы картинка не была слишком яркой */}
 <div className="absolute inset-0 bg-brand-bg/20" />
 </div>

 {/* 2. Контентная часть */}
 <div className="container mx-auto px-6 relative z-10 pt-20">
 <div className="max-w-3xl">
 <p className="text-brand-orange font-bold uppercase mb-4 text-xs md:text-base">
 Instalalatéři, Topenáři, Elektrikáři, Rekonstrukce, Inovace
 </p>

 <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-brand-white leading-tight uppercase mb-6">
 Komplexní <br />
 inženýrské sítě
 </h1>

 <p className="text-brand-muted text-lg md:text-xl mb-10 max-w-xl">
 Spolehlivý partnera v oblasti stavebnictví a technických prací.
 </p>

 <Button className="md:col-span-2 bg-brand-orange hover:bg-orange-500 text-brand-white font-black uppercase py-5 rounded-2xl shadow-button-glow transition-all duration-300 hover:scale-[1.02] cursor-pointer text-lg">
 Vyžádat si nabídku
 </Button>
 </div>
 </div>

 {/* 3. Стрелочка вниз */}

 <Link
 to="about" // ID секции, к которой нужно проскроллить
 smooth={true}
 duration={600}
 offset={-80} // Отступ сверху, чтобы хедер не перекрывал заголовок
 className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-brand-white drop-shadow-white cursor-pointer hover:text-brand-orange transition-colors"
 >
 <ChevronDown size={40} />
 </Link>
 </section>
 );
};