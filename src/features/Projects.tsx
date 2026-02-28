import { projectsData } from '../constants/projects';
import { ProjectCard } from '../components/ProjectCard';

export const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-brand-bg relative overflow-hidden">
        
        {/* Декоративный фон (мягкое свечение) */}
        <div className="absolute -top-1/4 -right-1/4 w-[900px] h-[900px] bg-brand-orange/5 blur-[150px] rounded-full z-0" />

        <div className="container mx-auto px-6 relative z-10">
            
            {/* Заголовок секции */}
            <div className="max-w-3xl mb-16 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-black text-brand-white uppercase mb-6 tracking-tight">
                    Realizované <span className="text-brand-orange">projekty</span>
                </h2>
                <p className="text-brand-muted text-lg max-w-xl border-l-2 border-brand-orange/30 pl-6 mx-auto md:mx-0">
                    Prohlédněte si naše vybrané práce. Kvalita a preciznost v každém detailu.
                </p>
            </div>

            {/* Сетка проектов */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                {projectsData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        id={project.id}
                        image={project.image}
                        title={project.title}
                    />
                ))}
            </div>

            {/* Короткое сообщение о том, что проектов больше
            <div className="mt-20 text-center opacity-60">
                <p className="text-brand-muted/80 text-sm uppercase tracking-widest">
                    A mnoho dalších spokojených zákazníků po celé ČR
                </p>
            </div> */}

        </div>
    </section>
  );
};