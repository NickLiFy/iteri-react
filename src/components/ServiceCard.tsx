import { type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    items: string[];
    Icon: LucideIcon;
    variant: 'heating' | 'plumbing' | 'electrical';
}

export const ServiceCard = ({ title, items, Icon, variant }: ServiceCardProps) => {
    // Словарь стилей связывает вариант с классами из нашего CSS
    const styleMap = {
        heating: {
            card: 'bg-heating-card',
            icon: 'bg-heating-icon'
        },
        plumbing: {
            card: 'bg-plumbing-card',
            icon: 'bg-plumbing-icon'
        },
        electrical: {
            card: 'bg-electrical-card',
            icon: 'bg-electrical-icon'
        },
    };

    return (
        <div className={`${styleMap[variant].card} p-10 rounded-[50px] shadow-team-card min-h-[420px] cursor-pointer flex flex-col items-start transition-all duration-500 hover:-translate-y-4 group relative overflow-hidden`}>

            {/* Декоративный блик при наведении */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Иконка в градиентном боксе */}
            {/* Убрал bg-[], теперь градиент идет из styleMap */}
            <div className={`${styleMap[variant].icon} p-5 rounded-[25px] mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                <Icon size={36} strokeWidth={2.5} color='#F4F4F4' />
            </div>

            {/* Заголовок услуги */}
            <h3 className="text-2xl font-black uppercase text-brand-white mb-8 tracking-tight leading-tight whitespace-pre-line">
                {title}
            </h3>

            {/* Список услуг */}
            <ul className="space-y-4 w-full">
                {items.map((item, index) => (
                    <li key={index} className="text-brand-white font-bold flex items-center gap-3 text-sm md:text-base border-b border-white/10 pb-3 last:border-0 hover:translate-x-5 transition-transform duration-500 cursor-pointer">
                        <div className="w-2 h-2 bg-brand-white rounded-full flex-shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};