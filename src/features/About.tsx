import teamPhoto from '../assets/team_photo.jpg'; // Замени на свое название файла

export const About = () => {
    return (
        <section id="about" className="py-24 bg-brand-bg relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* 1. Текстовый контент */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">

                        <div className="max-w-3xl mb-16 text-left md:text-left">
                            <h2 className="text-3xl md:text-5xl font-black text-brand-white uppercase mb-6">
                                Kdo <span className="text-brand-orange">jsme?</span>
                            </h2>
                            <p className="text-brand-muted text-lg max-w-xl border-l-2 border-brand-orange/30 pl-6 mx-auto md:mx-0">
                                Jsme <span className="text-brand-orange font-bold">Instalalatéři</span>,
                                <span className="text-brand-orange font-bold"> Topenáři</span> a
                                <span className="text-brand-orange font-bold"> Elektrikáři</span>, kteří se specializují na komplexní
                                <span className="text-brand-orange font-bold"> Rekonstrukce</span> a technologické
                                <span className="text-brand-orange font-bold"> Inovace</span>.
                            </p>
                        </div>

                        <div className="space-y-6 text-brand-muted text-base md:text-lg leading-relaxed max-w-2xl">
                            <p>
                                V <span className="text-brand-white font-bold">ITERI Company</span> propojujeme klíčové obory pod jednu střechu.
                            </p>

                            <p>
                                Naším posláním je dodávat inženýrské sítě, které jsou bezpečné, efektivní a připravené na budoucnost.
                            </p>

                            <p>
                                Zakládáme si na <span className="text-brand-white font-bold">profesionálním servisu</span> pro B2B partnery i koncové zákazníky.
                                Každý projekt vnímáme jako závazek k maximální <span className="text-brand-white font-bold">kvalitě a spolehlivosti</span>.
                            </p>

                            <p className="pt-4 border-l-2 border-brand-orange/30 pl-6 italic">
                                Spolupráce s námi není jen o technické realizaci, ale o partnerství založeném na odborných znalostech, férovém jednání a společném cíli – vaší naprosté spokojenosti.
                            </p>
                        </div>
                    </div>

                    {/* 2. Фотография с дизайном из Figma */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-2">
                        <div className="relative">
                            {/* Основная обертка для фото со скруглением 50px (как в твоем примере стекла) */}
                            <div className="relative z-10 overflow-hidden rounded-[50px] border border-brand-white/10 shadow-team-card">
                                <img
                                    src={teamPhoto}
                                    alt="ITERI Team"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};