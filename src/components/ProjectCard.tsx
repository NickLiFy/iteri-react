import { useState } from 'react';

interface ProjectCardProps {
    id: string; // ID для ссылки на подстраницу
    image: string;
    title: string;
}

export const ProjectCard = ({ id, image, title }: ProjectCardProps) => {
    // Мы не используем hover напрямую в CSS, чтобы сделать плавное увеличение яркости
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="">
            <a
                href={`/projekty/${id}`} // Ссылка на будущую подстраницу проекта
                className="group block relative rounded-[50px] shadow-team-card overflow-hidden transition-all duration-500 ease-out"
                style={{
                    // Легкое увеличение карточки
                    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(true)} // Изменено с false на true
            >

                {/* Изображение с эффектом яркости */}
                <div className={`aspect-video w-full transition-all duration-500 ease-out ${isHovered ? 'brightness-110' : 'brightness-100'}`}>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>

                {/* Градиентное затемнение внизу */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-500 opacity-100 group-hover:opacity-90" />
            </a>
            {/* Подпись к проекту */}
            <div className="p-8 pt-10 w-full text-left lg:text-center transition-all duration-500 transform group-hover:-translate-y-1">
                <h3 className="text-xl font-bold uppercase text-white mb-2 tracking-tight">
                    {title}
                </h3>
            </div>
        </div>

    );
};