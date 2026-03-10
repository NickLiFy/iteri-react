import { Phone, Mail } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="pb-0 pt-24 bg-brand-bg relative">
            {/* Декоративное свечение в углу */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-brand-white uppercase mb-6 ">
                    Kontaktujte <span className="text-brand-orange">nás</span>
                </h2>

                {/* Основной контейнер формы (Стеклянный эффект) */}
                <div className="bg-brand-white/5 border border-brand-white/10 rounded-[50px] p-8 md:p-16 backdrop-blur-sm shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1.2fr] gap-12 items-center">
                        {/* ЛЕВАЯ ЧАСТЬ: Контакты */}
                        <div className="space-y-10">
                            <div className="group flex items-center gap-6">
                                <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center border border-brand-orange/20 transition-colors duration-500 shrink-0">
                                    <Phone size={24} className="text-brand-orange transition-colors" />
                                </div>
                                <div>
                                    <p className="text-brand-muted text-sm uppercase font-bold mb-1">Telefon</p>
                                    <a href="tel:+420123383492" className="text-sm md:text-2xl font-black text-brand-white hover:text-brand-orange transition-colors ">+420 123 383 492</a>
                                </div>
                            </div>

                            <div className="group flex items-center gap-6">
                                <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center border border-brand-orange/20 transition-colors duration-500 shrink-0">
                                    <Mail size={24} className="text-brand-orange transition-colors" />
                                </div>
                                <div>
                                    <p className="text-brand-muted text-sm uppercase font-bold mb-1">E-mail</p>
                                    <a href="mailto:itericompany@seznam.cz" className="text-sm md:text-2xl font-black text-brand-white hover:text-brand-orange transition-colors ">itericompany@seznam.cz</a>
                                </div>
                            </div>
                        </div>

                        {/* СРЕДНЯЯ ЧАСТЬ: Разделитель NEBO (скрыт на мобилках) */}
                        <div className="hidden lg:flex flex-col items-center gap-4 py-5">
                            <div className="w-[1px] h-full bg-brand-white/10" />
                            {/* <span className="text-brand-muted font-black text-xs vertical-text py-5">NEBO</span> */}
                            <div className="w-[1px] h-full bg-brand-white/10" />
                        </div>

                        {/* ПРАВАЯ ЧАСТЬ: Форма */}
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-black text-brand-muted pl-4">Jméno a Příjmení</label>
                                <input type="text" placeholder="Jméno a Příjmení" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-5 text-brand-white placeholder:text-brand-white/20 focus:outline-none focus:border-brand-orange/50 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-black text-brand-muted pl-4">Váš e-mail</label>
                                <input type="email" placeholder="vas.email@email.cz" className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-5 text-brand-white placeholder:text-brand-white/20 focus:outline-none focus:border-brand-orange/50 transition-all"
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs uppercase font-black text-brand-muted pl-4">Zpráva</label>
                                <textarea rows={4} placeholder="Dobrý den, poptávám..." className="w-full bg-brand-white/5 border border-brand-white/10 rounded-2xl px-6 py-5 text-brand-white placeholder:text-brand-white/20 focus:outline-none focus:border-brand-orange/50 transition-all resize-none"
                                />
                            </div>
                            <button type="submit" className="md:col-span-2 bg-brand-orange hover:bg-orange-500 text-brand-white font-black uppercase py-5 rounded-2xl shadow-button-glow transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                            >
                                Odeslat poptávku
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};