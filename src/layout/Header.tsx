import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ChevronDown, Menu, X } from 'lucide-react';
import { SHOW_LANG_SWITCH, languages } from '../constants/language';
import Logo from '../assets/ITERI_logoStroke.svg'
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { servicesConfig } from '../constants/galleryData';

const navLinks = [
    { name: 'O nás', to: 'about' },
    { name: 'Reference', to: 'reference' },
    { name: 'Naše služby', to: 'services' },
    { name: 'Kontakty', to: 'contact' },
];

const logoGlow = 'linear-gradient(90deg, #0F7DB2 0%, #0F7DB2 20%, #FF8D12 20%, #FF8D12 40%, #20722D 40%, #20722D 60%, #CA2C28 60%, #CA2C28 80%, #FFD012 80%, #FFD012 100%)';

export const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { category } = useParams();
    const isHome = location.pathname === '/';

    const currentConfig = category ? servicesConfig[category] : null;

    const handleLogoClick = () => {
        if (isHome) {
            // если мы на главной — просто скроллим вверх
            // react-scroll это сделает сам через Link, но если нужно вручную:
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            // если мы в галлерее — возвращаемся на главную
            navigate('/');
        }
    }

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
                }`}>
                <div className="cursor-pointer container mx-auto px-6 flex justify-between items-center gap-4">


                    {/* LEFT: Logo or Dropdown */}

                    {/* <div
                        onClick={handleLogoClick}

                        className="group relative cursor-pointer transition-transform flex flex-col items-start shrink-0"
                    >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-70 blur-xl transition-all duration-500 z-0 pointer-events-none h-[50%] w-[75%]" style={{ background: logoGlow }} />
                        <img src={Logo} alt="ITERI Logo" className="h-7 md:h-9 lg:h-10 relative" />
                        <h2 className="font-bold text-brand-white tracking-wider mt-1">
                            COMPANY s.r.o.
                        </h2>
                    </div> */}

                    <div className="flex items-center gap-6">
                        {isHome && (
                            <div onClick={() => navigate('/')} className="cursor-pointer shrink-0">
                                <img src={Logo} alt="Logo" className='h-8 md:h-10' />
                                <h2 className="font-bold text-brand-white tracking-wider mt-1">
                                    COMPANY s.r.o.
                                </h2>
                            </div>
                        )}

                        {/* dropdown */}
                        {!isHome && currentConfig && (
                            <div className="relative group">
                                <button className='flex items-center gap-2 text-brand-white font-black uppercase tracking-tighter text-lg hover:text-brand-orange transition-colors'>
                                    {currentConfig.title}
                                    <ChevronDown size={20} className='group-hover:rotate-180 transition-transform' />
                                </button>

                                {/* Dropdown list of all categories */}
                                <div className="absolute top-full left-0 mt-2 w-64 bg-brand-bg/95 border border-white/10 rounded-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all shadow-2xl backdrop-blur-xl">
                                    {Object.entries(servicesConfig).map(([key, cfg]) => (
                                        <button
                                            key={key}
                                            onClick={() => navigate(`/sluzby/${key}`)}
                                            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors ${category === key ? 'bg-brand-orange text-brand-white' : 'text-brand-muted hover:bg-white/5 hover:text-brand-white'
                                                }`}
                                        >
                                            {cfg.title}
                                        </button>
                                    ))}
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
                                            className="text-brand-white hover:text-brand-orange cursor-pointer font-semibold transition-colors uppercase text-xs xl:text-sm tracking-wider whitespace-nowrap"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ) : (

                            <ul className='flex gap-6'>
                                {currentConfig?.subCategories.map(sub => (
                                    <ScrollLink
                                        key={sub.id}
                                        to={sub.id}
                                        smooth
                                        offset={-120}
                                        spy
                                        activeClass='text-brand-orange border-b-2 border-brand-orange'
                                        className='cursor-pointer text-[10px] font-black uppercase tracking-[0.2em] text-brand-muted hover:text-brand-white transition-all pb-1 border-transparent'
                                    >
                                        {sub.label}
                                    </ScrollLink>
                                ))}
                            </ul>
                        )}



                        {SHOW_LANG_SWITCH && (
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
                    <button className="cursor-pointer lg:hidden text-brand-white p-2" onClick={() => setIsOpen(true)}>
                        <Menu size={32} />
                    </button>
                </div>
            </header>

            {/* 2. МОБИЛЬНЫЕ ЭЛЕМЕНТЫ (ВНЕ ТЕГА HEADER) */}

            {/* Overlay - теперь он независим */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Sidebar панель */}
            <aside className={`fixed right-0 top-0 h-full w-[280px] bg-brand-bg/95 backdrop-blur-2xl z-[70] p-8 border-l border-white/10 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
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
                                    className="text-2xl font-black uppercase text-brand-white hover:text-brand-orange active:text-brand-white transition-colors tracking-tight cursor-pointer"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="flex flex-col gap-6"> {/* КОНТЕЙНЕР ДЛЯ ПОДКАТЕГОРИЙ */}
                                <div className="text-brand-orange text-xs font-black uppercase tracking-widest mb-2">
                                    Sekce:
                                </div>
                                {currentConfig?.subCategories.map((sub) => (
                                    <ScrollLink
                                        key={sub.id}
                                        to={sub.id}
                                        smooth
                                        offset={-100}
                                        onClick={() => setIsOpen(false)}
                                        className="text-xl font-black uppercase text-brand-white hover:text-brand-orange active:text-brand-white transition-colors tracking-tight cursor-pointer leading-tight"
                                    >
                                        {sub.label}
                                    </ScrollLink>
                                ))}

                                {/* Кнопка возврата в мобилке тоже не помешает */}
                                <button
                                    onClick={() => { navigate('/'); setIsOpen(false); }}
                                    className="mt-10 text-xs font-bold uppercase text-brand-muted border-b border-brand-muted/20 pb-2 w-fit"
                                >
                                    ← Zpět na úvod
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="text-brand-orange text-xs font-black uppercase tracking-widest mb-2">Sekce:</div>
                            {currentConfig?.subCategories.map((sub) => (
                                <ScrollLink
                                    key={sub.id}
                                    to={sub.id}
                                    smooth
                                    offset={-100}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-black uppercase text-brand-white hover:text-brand-orange active:text-brand-white transition-colors tracking-tight cursor-pointer"
                                >
                                    {sub.label}
                                </ScrollLink>
                            ))}
                        </>
                    )}
                </nav>
            </aside>
        </>
    );
};