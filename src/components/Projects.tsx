import { CalendarCheck, ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { SectionHeading } from './SectionHeading';

const projectIcons = [CalendarCheck];
const projectTiles = ['bg-[#e8edf6]'];
const projectImages: (string | null)[] = [null];
const projectStacks = [['Next.js', 'Supabase', 'PostgreSQL', 'WhatsApp']];
const projectLinks: { demo?: string; code?: string }[] = [{}];

export function Projects() {
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  const { lang } = useLanguage();
  const t = translations[lang].projects;
  const featured = t.items.length === 1;

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-8 overflow-hidden">
      <SectionHeading title={t.heading} subtitle={t.subtitle} />

      {/* Grid */}
      <div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
      >
        {t.items.map((project, index) => {
          const Icon = projectIcons[index];
          const image = projectImages[index];
          return (
            <article
              key={project.name}
              className={`group flex flex-col anim-fade-up ${featured ? 'md:col-span-2 lg:col-span-6 lg:flex-row' : 'lg:col-span-2'} ${index % 3 === 1 ? 'anim-delay-150' : index % 3 === 2 ? 'anim-delay-300' : ''} ${gridVisible ? 'is-visible' : ''}`}
            >
              {/* Pastel tile */}
              <div className={`${projectTiles[index]} ${featured ? 'lg:w-1/2' : ''} flex items-center justify-center p-6`}>
                <div className="w-full max-w-md overflow-hidden rounded-sm bg-white shadow-2xl shadow-black/30 transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="flex items-center gap-1.5 bg-neutral-200 px-3 py-2">
                    <span className="w-2 h-2 rounded-full bg-brand" />
                    <span className="w-2 h-2 rounded-full bg-neutral-400" />
                    <span className="w-2 h-2 rounded-full bg-neutral-400" />
                  </div>
                  {image ? (
                    <img src={image} alt={project.name} loading="lazy" className="w-full aspect-video object-cover object-top" />
                  ) : (
                    <div className="w-full aspect-video bg-ink flex flex-col items-center justify-center gap-3">
                      <Icon className="w-10 h-10 text-brand-soft" />
                      <span className="font-display text-2xl uppercase tracking-wide text-white">{project.name}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Caption */}
              <div className="flex-1 flex flex-col gap-4 p-6 bg-coal">
                <h3 className="text-2xl font-medium text-white">{project.name}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{project.description}</p>
                <p className="text-sm text-neutral-400 leading-relaxed border-l-2 border-brand pl-3">{project.impact}</p>
                {project.highlights && (
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm text-neutral-300 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 bg-brand flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {projectStacks[index].map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>
                {(projectLinks[index].demo || projectLinks[index].code) && (
                  <div className="mt-auto flex gap-6 pt-2">
                    {projectLinks[index].demo && (
                      <a
                        href={projectLinks[index].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-display text-sm uppercase tracking-widest text-brand-soft hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t.demo}
                      </a>
                    )}
                    {projectLinks[index].code && (
                      <a
                        href={projectLinks[index].code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-display text-sm uppercase tracking-widest text-neutral-300 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        {t.code}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
