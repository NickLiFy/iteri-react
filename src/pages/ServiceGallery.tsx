import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Header } from '../layout/Header';
import { PhotoGrid } from '../components/gallery/PhotoGrid'; // -- ошибка, нету кода внутри
import { servicesConfig, housesConfig } from '../constants/galleryData';
import { getGalleryImages } from '../utils/galleryLoader';

export const ServiceGallery = () => {
 const navigate = useNavigate();
 const { category } = useParams();
 const location = useLocation(); // Достаем объект location полностью
 const { hash } = location;

 const state = location.state as { scrollTo?: string } | null;

 // config category
 const allConfigs = { ...servicesConfig, ...housesConfig };
 const config = allConfigs[category as string];

 //all images for cat
 // const allImages = getGalleryImages(category || '');

 useEffect(() => {
 // Проверяем хэш в URL или стейт навигации
 const targetId = hash.replace('#', '') || state?.scrollTo;
 if (targetId) {
 const element = document.getElementById(targetId);
 if (element) {
 setTimeout(() => {
 element.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }, 300); // Даем время картинкам начать грузиться
 }
 }
 }, [category, hash, state]);


 if (!config) {
 return <div className='text-brand-white p-20'>Kategorie nenalezena: {category}</div>;
 }

 const allGallerySlides = config.subCategories.flatMap((sub) => {
 const images = getGalleryImages(category as string);

 return images
 .filter(img => {
 // ВАЖНО: Проверь, как выглядят пути к картинкам в консоли. // Если папка называется 'obyvaci-pokoj', а sub.id — 'obyvaci-pokoj', // то проверка должна проходить.
 return img.includes(`/${sub.id}/`);
 })
 .map(img => ({
 src: img,
 subId: sub.id,
 subLabel: sub.label
 }));
 });

 // В ServiceGallery.tsx
 const handleLightboxClose = (lastIndex: number) => {
 console.log("Closing at index:", lastIndex);

 if (lastIndex >= 0 && allGallerySlides[lastIndex]) {
 const targetId = allGallerySlides[lastIndex].subId;
 const element = document.getElementById(targetId);

 if (element) {
 setTimeout(() => {
 // ИСПОЛЬЗУЙ СТРОКУ 'start', а не переменную
 element.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }, 150);
 }
 }
 };

 return (
 <div className="bg-brand-bg min-h-screen text-brand-white">
 <Header />

 {/* Gallery navigation (dropdown + subicategories) */}
 <div className="pt-48 pb-20 container mx-auto px-6">
 <button
 onClick={() => navigate('/')}
 className='cursor-pointer flex items-center gap-2 text-brand-muted hover:text-brand-orange transition-colors mb-12 group'
 >
 <ArrowLeft size={20} className='group-hover:-translate-x-1 transition-transform' />
 <span className='font-bold uppercase text-xs md:text-base'>
 Zpět na hlavní stránku
 </span>
 </button>

 <header className='mb-20'>
 <h1 className='text-3xl md:text-5xl font-black uppercase leading-tight'>
 {config.title} <br />
 <span className='text-brand-orange'>Naše realizace</span>
 </h1>
 </header>

 <div className="space-y-32">
 {config.subCategories.map((sub) => (
 <section key={sub.id} id={sub.id} className='scroll-mt-32 md:scroll-mt-40'>
 <h2 className='text-2xl font-black uppercase mb-10 border-l-4 border-brand-orange pl-6'>
 {sub.label}
 </h2>
 {/* ПЕРЕДАЕМ НОВЫЕ ПРОПСЫ */}
 <PhotoGrid
 allSlides={allGallerySlides}
 currentSectionId={sub.id}
 onClose={handleLightboxClose}
 />
 </section>
 ))}
 </div>
 </div>
 </div>
 )
}