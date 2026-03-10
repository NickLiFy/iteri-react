import { useMemo } from 'react';

export const References = () => {

    const partners = useMemo(() => {
        // Поддерживаем png, jpg, jpeg, svg и webp
        const images = import.meta.glob('../assets/references/*.{png,jpg,jpeg,svg,webp}', {
            eager: true,
            import: 'default',
        });

        return Object.entries(images).map(([path, url]) => {
            // Извлекаем имя файла для alt-текста (например, "wilo_logo" из "../assets/references/wilo_logo.png")
            const fileName = path.split('/').pop()?.split('.')[0] || 'Partner';
            // Делаем имя красивым: заменяем подчеркивания на пробелы и делаем заглавными
            const cleanName = fileName.replace(/_logo/g, '').replace(/_/g, ' ');

            return {
                name: cleanName,
                img: url as string
            };
        });
    }, []);

    return (
        <section id="reference" className="py-20 bg-brand-bg border-y border-brand-white/5" style={{
            // Радиальный градиент: в центре светлее (#3c3c3c), по краям наш базовый (#2C2C2C)
            background: 'radial-gradient(circle at center, #3C3C3C 10%, #2C2C2C 90%)'
        }}>
            <div className="container mx-auto px-6">
                <h1 className="hidden font-black text-brand-white uppercase mb-10 ">
                    Reference
                </h1>


                {/* Сетка логотипов */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="group flex justify-center items-center h-24 px-5 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        >
                            <img
                                src={partner.img}
                                alt={partner.name}
                                title={partner.name}
                                className="lg:max-w-[150px] sm:max-w-[100px] max-w-full max-h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};