import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
    categoryId: string;
    subId: string;
    image: string;
    title: string;
}

export const ProjectCard = ({ categoryId, subId, image, title }: ProjectCardProps) => {
    // Мы не используем hover напрямую в CSS, чтобы сделать плавное увеличение яркости
    const navigate = useNavigate();

    return (
        <div className="group cursor-pointer" onClick={() => navigate(`/projekty/${categoryId}`, { state: { scrollTo: subId } })}>
            <div className="relative rounded-[50px] shadow-team-card overflow-hidden transition-all duration-500 ease-out hover:scale-[1.03]">
                <div className="aspect-video w-full">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="p-8 pt-10 w-full text-left lg:text-center">
                <h3 className="text-xl font-bold uppercase text-brand-white mb-2">
                    {title}
                </h3>
            </div>
        </div>

    );
};