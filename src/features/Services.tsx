import { ServiceCard } from '../components/ServiceCard';
import { specializations } from '../constants/services';

export const Services = () => {
 return (
 <section id="services" className="pt-24 pb-50 bg-brand-bg relative overflow-hidden z-20">


 <div className="container mx-auto px-6 relative z-10">

 <div className="max-w-3xl mb-16 text-left">
 <h2 className="text-3xl md:text-5xl font-black text-brand-white uppercase mb-6 ">
 Naše <span className="text-brand-orange">specializace</span>
 </h2>
 <p className="text-brand-muted text-lg max-w-xl border-l-2 border-brand-orange/30 pl-6 mx-auto md:mx-0">
 Poskytujeme profesionální technické řešení pro váš domov i firmu. Od první konzultace až po finální revizi.
 </p>
 </div>

 {/* Сетка карточек */}
 <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-8">
 {specializations.map((service) => (
 <ServiceCard
 key={service.id}
 title={service.title}
 items={service.items}
 Icon={service.Icon}
 variant={service.variant}
 categoryPath={service.categoryPath}
 />
 ))}
 </div>
 </div>
 </section>
 );
};