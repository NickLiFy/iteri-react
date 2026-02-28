import { useNavigate } from "react-router-dom";
import { servicesConfig } from "../../constants/galleryData";

interface GalleryNavProps {
    activeCat: string;
    activeSub?: string;
}

export const GalleryNav = ({ activeCat }: GalleryNavProps) => {
    const navigate = useNavigate();

    return (
        <nav className="fixed top-20 left-0 w-full z-40 bg-brand-bg/80 backdrop-blur-xl border-b border-white/5 py4">
            <div className="container mx-auto px-6 flex flex-wrap gap-4 items-center justify-center">
                {Object.entries(servicesConfig).map(([key, config]) => (
                    <button
                        key={key}
                        onClick={() => navigate(`/sluzby/${key}`)}
                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeCat === key
                            ? 'bg-brand-orange text-brand-white shadow-lg shadow-brand-orange/20'
                            : 'bg-white/5 text-brand-muted hover:bg-white/10'
                            }`}
                    >
                        {config.title}
                    </button>
                ))}
            </div>
        </nav>
    )
}