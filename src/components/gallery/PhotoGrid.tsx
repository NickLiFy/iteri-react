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
        return (
            <div className="py-16 border-2 border-dashed border-brand-white/10 rounded-[40px] text-center text-brand-muted uppercase text-xs font-bold tracking-widest">
                V této sekci zatím nejsou žádné fotografie.
            </div>
        )
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sectionImages.map((slide, i) => {
                    const globalIndex = allSlides.findIndex(s => s.src === slide.src);

                    return (
                        <div
                            key={i}
                            onClick={() => setIndex(globalIndex)}
                            className="aspect-[4/3] rounded-[40px] overflow-hidden bg-brand-white/5 group relative cursor-zoom-in transition-all duration-500 hover:shadow-orange-glow border border-brand-white/5 hover:border-brand-orange/30"
                        >
                            <img
                                src={slide.src}
                                alt={slide.subLabel}
                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                loading="lazy"
                            />
                            
                            {/* Overlay при наведении */}
                            <div className="absolute inset-0 bg-brand-bg/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                <div className="w-14 h-14 rounded-full bg-brand-orange text-brand-white flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500 shadow-orange-glow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8" />
                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <Lightbox
                index={index}
                open={index >= 0}
                on={{
                    view: ({ index: newIndex }) => setIndex(newIndex)
                }}
                close={() => {
                    onClose(index);
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
                // Кастомизация стилей лайтбокса под бренд
                styles={{
                    container: { backgroundColor: "rgba(44, 44, 44, 0.95)" }, // Твой brand-bg
                    captionsDescription: { 
                        color: "#F4F4F4", 
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        fontWeight: 700
                    }
                }}
            />
        </>
    )
}