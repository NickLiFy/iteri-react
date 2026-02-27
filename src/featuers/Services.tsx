import { ServiceCard } from '../components/ServiceCard';
import { specializations } from '../constants/services';

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-brand-bg relative overflow-hidden">
            {/* Декоративный фон (можно добавить легкое свечение сзади всей секции) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 blur-[150px] rounded-full z-0" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Заголовок секции */}
                <div className="max-w-3xl mb-16">
                    <h2 className="font-black text-brand-white uppercase mb-10 tracking-tight">
                        Naše specializace
                    </h2>
                    <p className="text-brand-muted max-w-xl">
                        Poskytujeme profesionální technické řešení pro váš domov i firmu.
                        <br />
                        Od první konzultace až po finální revizi.
                    </p>
                </div>

                {/* Сетка карточек */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specializations.map((service) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            items={service.items}
                            Icon={service.Icon}
                            variant={service.variant}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};