import { type LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    items: string[];
    Icon: LucideIcon;
    variant: 'heating' | 'plumbing' | 'electrical';
}

export const ServiceCard = ({ title, items, Icon, variant }: ServiceCardProps) => {
    // Словарь стилей, чтобы не писать гору if/else
    const styleMap = {
        heating: { card: 'bg-heating-card', icon: 'bg-heating-icon' },
        plumbing: { card: 'bg-plumbing-card', icon: 'bg-plumbing-icon' },
        electrical: { card: 'bg-electrical-card', icon: 'bg-electrical-icon' },
    };

    return (
        <div className={`${styleMap[variant].card} p-10 rounded-[50px] shadow-team-card min-h-[420px] flex flex-col items-start transition-all duration-500 hover:-translate-y-4 group relative overflow-hidden`}>

            {/* Декоративный блик на фоне карточки при наведении */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Иконка в градиентном "боксе" */}
            <div className={`${styleMap[variant].icon} p-5 rounded-[24px] mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                <Icon size={36} className="text-white" strokeWidth={2.5} />
            </div>

            {/* Заголовок услуги */}
            <h3 className="text-2xl font-black uppercase text-white mb-8 tracking-tight leading-tight">
                {title}
            </h3>

            {/* Список под-услуг */}
            <ul className="space-y-4 w-full">
                {items.map((item, index) => (
                    <li key={index} className="text-white/90 font-bold flex items-center gap-3 text-sm md:text-base border-b border-white/10 pb-3 last:border-0">
                        {/* Оранжевая или белая точка/маркер */}
                        <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>

        </div>
    );
};