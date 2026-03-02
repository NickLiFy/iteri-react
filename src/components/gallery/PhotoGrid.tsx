import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

interface PhotoGridProps {
    allSlides: { src: string; subId: string; subLabel: string }[];
    currentSectionId: string;
    onClose: (index: number) => void;
}

export const PhotoGrid = ({ allSlides, currentSectionId, onClose }: PhotoGridProps) => {

    const [index, setIndex] = useState(-1);

    if (!allSlides) return null;
    const sectionImages = allSlides.filter(slide => slide.subId === currentSectionId);

    if (sectionImages.length === 0) {
        return <div className="py-10 border-2 border-dashed border-white/10 rounded-3xl text-center text-brand-muted">
            V této sekci zatím nejsou žádné fotografie.
        </div>
    };

    // const slides = images.map((src) => ({ src }));

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sectionImages.map((slide, i) => {

                    const globalIndex = allSlides.findIndex(s => s.src === slide.src);

                    return (
                        <div
                            key={i}
                            onClick={() => {
                                setIndex(globalIndex);
                            }}
                            className="aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 group relative cursor-zoom-in"
                        >
                            <img
                                src={slide.src}
                                alt={slide.subLabel}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <Lightbox
                index={index}
                open={index >= 0}
                // on.view заставляет нас запоминать индекс каждый раз, когда пользователь листает
                on={{
                    view: ({ index: newIndex }) => setIndex(newIndex)
                }}
                close={() => {
                    onClose(index); // Передаем именно ТОТ индекс, на котором остановились
                    setIndex(-1);
                }}
                slides={allSlides.map(s => ({
                    src: s.src,
                    title: "",
                    description: s.subLabel
                }))}
                plugins={[Captions]}
                captions={{ descriptionTextAlign: 'center' }}
                animation={{ fade: 300, swipe: 500 }}
            />
        </>

    )
}