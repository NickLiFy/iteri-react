import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { SHOW_LANG_SWITCH, languages } from '../constants/language';

import Logo from '../assets/ITERI_logo.svg'

const navLinks = [
    { name: 'O nás', to: 'about' },
    { name: 'Reference', to: 'reference' },
    { name: 'Naše služby', to: 'services' },
    { name: 'Kontakty', to: 'contact' },
];

const logoGlow = 'linear-gradient(90deg, #0F7DB2 0%, #0F7DB2 20%, #FF8D12 20%, #FF8D12 40%, #20722D 40%, #20722D 60%, #CA2C28 60%, #CA2C28 80%, #FFD012 80%, #FFD012 100%)';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Эффект смены фона при скролле
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center gap-4">

                {/* Логотип - добавили flex-shrink-0, чтобы его не сплющило */}
                <div className="group relative cursor-pointer transition-transform flex flex-col items-start flex-shrink-0">

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-70 blur-xl transition-all duration-500 z-0 pointer-events-none h-[50%] w-[75%]" style={{background: logoGlow}}/>
                    <img src={Logo} alt="ITERI Logo" className="h-7 md:h-9 lg:h-10 relative" />
                    <h2 className="font-bold text-brand-white tracking-wider mt-1">
                        COMPANY s.r.o.
                    </h2>
                </div>

                {/* Изменили md:hidden на lg:hidden для бургера и md:flex на lg:flex для меню */}
                <nav className="hidden lg:flex items-center gap-x-6 xl:gap-x-10">
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

                    {SHOW_LANG_SWITCH && (
                        <div className="flex gap-3 border-l border-brand-muted/30 pl-6 shrink-0">
                            {languages.map((lang) => (
                                <button key={lang.code} className="text-[10px] font-bold text-brand-muted hover:text-brand-orange transition-colors">
                                    {lang.label}
                                </button>
                            ))}
                        </div>
                    )}
                </nav>

                {/* Бургер теперь показывается на всех экранах меньше lg (1024px) */}
                <button className="lg:hidden text-brand-white p-2" onClick={() => setIsOpen(true)}>
                    <Menu size={32} />
                </button>
            </div>

            {/* Мобильное меню (Sidebar) */}
            {/* Overlay (Затемнение фона) */}
            <div
                className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Сама панель */}
            <aside className={`fixed right-0 top-0 h-full w-[280px] bg-brand-bg-light z-[70] p-8 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } shadow-2xl`}>
                <div className="flex justify-end mb-12">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-brand-white hover:text-brand-orange transition-colors"
                    >
                        <X size={36} />
                    </button>
                </div>

                <nav className="flex flex-col gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={600}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-bold text-brand-white active:text-brand-orange"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="mt-10 pt-10 border-t border-brand-white/10 flex gap-4">
                        {languages.map((lang) => (
                            <button key={lang.code} className="text-sm font-bold text-brand-muted uppercase">
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </nav>
            </aside>
        </header>
    );
};