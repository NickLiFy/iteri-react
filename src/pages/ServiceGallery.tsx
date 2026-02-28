import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Header } from '../layout/Header';
// import { GalleryNav } from '../components/gallery/GalleryNav'; // -- ошибка, нету кода внтури
import { PhotoGrid } from '../components/gallery/PhotoGrid'; // -- ошибка, нету кода внутри
import { servicesConfig } from '../constants/galleryData';
import { getGalleryImages } from '../utils/galleryLoader';

export const ServiceGallery = () => {
    const navigate = useNavigate();
    const { category } = useParams();
    const { hash } = useLocation();

    // config category
    const config = servicesConfig[category || ''];

    //all images for cat
    const allImages = getGalleryImages(category || '');

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100)
            }
        }
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [category]);

    if (!config) {
        return <div className='text-brand-white p-20'>Kategorie nenalezena: {category}</div>;
    }

    return (
        <div className="bg-brand-bg min-h-screen text-brand-white">
            <Header />

            {/* Gallery navigation (dropdown + subicategories) */}
            <div className="pt-48 pb-20 container mx-auto px-6">
                <button
                    onClick={() => navigate('/')}
                    className='flex items-center gap-2 text-brand-muted hover:text-brand-orange transition-colors mb-12 group'
                >
                    <ArrowLeft size={20} className='group-hover:-translate-x-1 transition-transform' />
                    <span className='font-bold uppercase text-xs tracking-[0.2em]'>
                        Zpět na hlavní stránku
                    </span>
                </button>

                <header className='mb-20'>
                    <h1 className='text-5xl md:text-7xl font-black uppercase leading-none'>
                        {config.title} <br />
                        <span className='text-brand-orange'>Naše realizace</span>
                    </h1>
                </header>

                <div className="space-y-32">
                    {config.subCategories.map((sub) => {
                        const sectionImages = allImages.filter(img => img.includes(`/${sub.id}/`));

                        return (
                            <section key={sub.id} id={sub.id} className='scroll-mt-40'>
                                <h2 className='text-2xl font-black uppercase mb-10 tracking-tight border-l-4 border-brand-orange pl-6'>
                                    {sub.label}
                                </h2>
                                <PhotoGrid images={sectionImages.length > 0 ? sectionImages : allImages} />
                            </section>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}