interface PhotoGridProps {
    images: string[];
}

export const PhotoGrid = ({ images }: PhotoGridProps) => {
    if (images.length === 0) {
        return <div className="py-10 border-2 border-dashed border-white/10 rounded-3xl text-center text-brand-muted">
            V této sekci zatím nejsou žádné fotografie.
        </div>
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((src, index) => (
                <div
                    key={index}
                    className="aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 group relative cursor-zoom-in"
                >
                    <img
                        src={src}
                        alt="Realizace"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
            ))}
        </div>
    )
}