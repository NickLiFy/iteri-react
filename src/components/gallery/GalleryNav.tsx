import { useNavigate } from "react-router-dom";
import { servicesConfig } from "../../constants/galleryData";

interface GalleryNavProps {
 activeCat: string;
 activeSub?: string;
}

export const GalleryNav = ({ activeCat }: GalleryNavProps) => {
 const navigate = useNavigate();

 return (
 <nav className="fixed top-20 left-0 w-full z-40 bg-brand-bg/80 backdrop-blur-xl border-b border-brand-white/5 py-5">
 <div className="container mx-auto px-6 flex flex-wrap gap-4 items-center justify-center">
 {Object.entries(servicesConfig).map(([key, config]) => (
 <button
 key={key}
 onClick={() => navigate(`/sluzby/${key}`)}
 className={`cursor-pointer px-5 py-2.5 rounded-full text-[10px] font-black uppercase transition-all duration-300 ${
 activeCat === key
 ? 'bg-brand-orange text-brand-white shadow-orange-glow'
 // Добавили hover:text-brand-orange здесь:
 : 'bg-brand-white/5 text-brand-muted hover:bg-brand-white/10 '
 }`}
 >
 {config.title}
 </button>
 ))}
 </div>
 </nav>
 );
};