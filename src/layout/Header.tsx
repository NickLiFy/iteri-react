import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Menu, X, Flame, Droplets, Zap, ArrowLeft } from 'lucide-react';
import { SHOW_LANG_SWITCH, languages } from '../constants/language';
import Logo from '../assets/ITERI_logoStroke.svg'
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { servicesConfig, housesConfig } from '../constants/galleryData';

import { MapPin } from 'lucide-react';

const allGalleryConfigs = { ...servicesConfig, ...housesConfig };

const navLinks = [
    { name: 'O nás', to: 'about' },
    { name: 'Reference', to: 'reference' },
    { name: 'Naše služby', to: 'services' },
    { name: 'Kontakty', to: 'contact' },
];

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { category } = useParams();
    const isHome = location.pathname === '/';

    const currentConfig = category ? allGalleryConfigs[category] : null;
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // const getCategoryIcon = (catId: string) => {
    //     if (catId.includes('topenar')) return { icon: <Flame size={18} />, bg: 'bg-heating-icon' };
    //     if (catId.includes('instalater')) return { icon: <Droplets size={18} />, bg: 'bg-plumbing-icon' };
    //     if (catId.includes('elektrikar')) return { icon: <Zap size={18} />, bg: 'bg-electrical-icon' };
    //     return null;
    // };

    // const categoryStyle = category ? getCategoryIcon(category) : null;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* 1. ОСНОВНАЯ ПАНЕЛЬ НАВИГАЦИИ */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
                }`}>
                <div className="cursor-pointer container mx-auto px-6 flex justify-between items-center gap-4">


                    {/* LEFT: Logo or Dropdown */}

                    {/* <div
                        onClick={handleLogoClick}

                        className="group relative cursor-pointer transition-transform flex flex-col items-start shrink-0"
                    >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-70 blur-xl transition-all duration-500 z-0 pointer-events-none h-[50%] w-[75%]" style={{ background: logoGlow }} />
                        <img src={Logo} alt="ITERI Logo" className="h-7 md:h-9 lg:h-10 relative" />
                        <h2 className="font-bold text-brand-white mt-1">
                            COMPANY s.r.o.
                        </h2>
                    </div> */}

                    <div className="flex items-center gap-6">
                        {isHome && (
                            <div onClick={() => navigate('/')} className="cursor-pointer shrink-0 min-w-0 flex-1">
                                <img src={Logo} alt="Logo" className='h-8 md:h-10' />
                                <h2 className="text-sm sm:text-base font-bold text-brand-white mt-1">
                                    COMPANY s.r.o.
                                </h2>
                            </div>
                        )}

                        {/* dropdown */}
                        {!isHome && currentConfig && (
                            <div className="relative group py-7">
                                <button className='cursor-pointer flex items-center gap-2 text-brand-white font-black uppercase text-lg hover:text-brand-orange transition-colors'>
                                    {currentConfig.title}
                                    <ChevronDown size={20} className='group-hover:rotate-180 transition-transform' />
                                </button>

                                {/* Dropdown list of all categories */}
                                <div className="absolute top-full left-0 mt-2 w-64 bg-brand-bg/95 border border-brand-white/10 rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-2xl backdrop-blur-xl">
                                    {location.pathname.includes('/sluzby/') && (
                                        Object.entries(servicesConfig).map(([key, cfg]) => (
                                            <button
                                                key={key}
                                                onClick={() => navigate(`/sluzby/${key}`)}
                                                className={`cursor-pointer w-full text-left px-5 py-3 rounded-xl text-sm font-bold transition-colors ${category === key ? 'bg-brand-orange text-brand-white' : 'text-brand-muted hover:bg-brand-white/5 hover:text-brand-white'
                                                    }`}
                                            >
                                                <span className="truncate">{cfg.title}</span>
                                            </button>
                                        ))
                                    )}

                                    {location.pathname.includes('/projekty/') && (
                                        Object.entries(housesConfig).map(([key, cfg]) => (
                                            <button
                                                key={key}
                                                onClick={() => navigate(`/projekty/${key}`)}
                                                className={`cursor-pointer w-full text-left px-5 py-3 rounded-xl text-sm font-bold transition-colors ${category === key ? 'bg-brand-orange text-brand-white' : 'text-brand-muted hover:bg-brand-white/5 hover:text-brand-white'
                                                    }`}
                                            >
                                                <span className="truncate">{cfg.title}</span>
                                            </button>
                                        ))
                                    )}

                                </div>
                            </div>
                        )}
                    </div>

                    {/* RIGHT: Links of landing OR subcategories of gallery */}
                    {/* Десктопное меню */}
                    <nav className="hidden lg:flex items-center gap-x-6 xl:gap-x-10">
                        {isHome ? (
                            <ul className="flex gap-x-6 xl:gap-x-8">
                                {navLinks.map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            smooth={true}
                                            duration={600}
                                            offset={-80}
                                            className="text-brand-white hover:text-brand-orange cursor-pointer font-semibold transition-colors uppercase text-xs xl:text-sm whitespace-nowrap"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (

                            <ul className='flex gap-6 items-center'>
                                {currentConfig?.subCategories.map(sub => (
                                    <ScrollLink
                                        key={sub.id}
                                        to={sub.id}
                                        smooth
                                        offset={-120}
                                        spy
                                        activeClass='text-brand-orange border-b-2 border-brand-orange'
                                        className='cursor-pointer text-[10px] font-black uppercase text-brand-muted hover:text-brand-white transition-all pb-1 border-transparent'
                                    >
                                        <div className="flex items-center gap-1.5">
                                            {sub.location && <MapPin size={12} className='text-brand-orange' />}
                                            <span className='text-brand-white hover:text-brand-orange cursor-pointer font-semibold transition-colors uppercase text-xs xl:text-sm whitespace-nowrap'>
                                                {sub.label}
                                            </span>
                                        </div>
                                    </ScrollLink>
                                ))}
                            </ul>
                        )}



                        {SHOW_LANG_SWITCH && isHome && (
                            <div className="flex gap-3 border-l border-brand-muted/30 pl-6 shrink-0">
                                {languages.map((lang) => (
                                    <button key={lang.code} className="text-[10px] font-bold text-brand-muted hover:text-brand-orange transition-colors cursor-pointer">
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </nav>

                    {/* Кнопка Бургера */}
                    <button className="cursor-pointer lg:hidden text-brand-white p-2 shrink-0 z-50" onClick={() => setIsOpen(true)}>
                        <Menu size={32} />
                    </button>
                </div>
            </header>

            {/* 2. МОБИЛЬНЫЕ ЭЛЕМЕНТЫ (ВНЕ ТЕГА HEADER) */}

            {/* Overlay - теперь он независим */}
            <div
                className={`fixed inset-0 bg-brand-bg/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Sidebar панель */}
            <aside className={`fixed right-0 top-0 h-full w-[280px] bg-brand-bg/95 backdrop-blur-2xl z-[70] p-8 border-l border-brand-white/10 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } shadow-2xl`}>
                <div className="flex justify-end mb-12">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-brand-white hover:text-brand-orange transition-colors p-2 cursor-pointer"
                    >
                        <X size={36} />
                    </button>
                </div>


                <nav className="flex flex-col gap-8">
                    {isHome ? (
                        <>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    smooth={true}
                                    duration={600}
                                    offset={-80}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-black uppercase text-brand-white hover:text-brand-orange active:text-brand-white transition-colors cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="mt-10 pt-10 border-t border-brand-white/10 flex gap-6">
                                {languages.map((lang) => (
                                    <button key={lang.code} className="text-sm font-black text-brand-muted uppercase hover:text-brand-orange transition-colors cursor-pointer">
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col gap-6"> {/* КОНТЕЙНЕР ДЛЯ ПОДКАТЕГОРИЙ */}
                            {/* <div className="text-brand-orange text-xs font-black uppercase mb-2">
                                Sekce:
                            </div> */}
                            {currentConfig?.subCategories.map((sub) => (
                                <ScrollLink
                                    key={sub.id}
                                    to={sub.id}
                                    smooth
                                    offset={-100}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-black uppercase text-brand-white hover:text-brand-orange active:text-brand-white transition-colors cursor-pointer leading-tight"
                                >
                                    {sub.location && (
                                        <div className="mt-1 p-2 rounded-lg bg-brand-orange/10 shrink-0">
                                            <MapPin size={18} className='text-brand-orange' />
                                        </div>
                                    )}

                                    <div className="flex flex-col">
                                        <span className='text-2xl font-black uppercase text-brand-white hover:text-brand-orange active:text-brand-white transition-colors cursor-pointer'>
                                            {sub.label}
                                        </span>
                                        {sub.location && (
                                            <span className='text-[11px] font-bold text-brand-muted uppercase mt-1'>
                                                {sub.location}
                                            </span>
                                        )}
                                    </div>
                                </ScrollLink>
                            ))}

                            {/* Кнопка возврата в мобилке тоже не помешает */}
                            <div className="mt-10 pt-10 border-t border-brand-white/10 flex gap-6">
                                <button
                                    onClick={() => { navigate('/'); setIsOpen(false); }}
                                    className="cursor-pointer flex items-center gap-2 text-brand-muted hover:text-brand-orange transition-colors mb-12 group"
                                >
                                    <ArrowLeft size={20} className='group-hover:-translate-x-1 transition-transform' />
                                    <span className='font-bold uppercase text-sm text-nowrap'>
                                        Zpět na úvod
                                    </span>
                                </button>
                            </div>

                        </div>
                    )}
                </nav>
            </aside>
        </>
    );
};