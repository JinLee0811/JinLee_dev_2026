import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { BackLink } from "../../../components/BackLink";
import { ProjectGallery } from "../../../components/ProjectGallery";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10 flex items-center justify-between text-sm text-slate-400">
            <BackLink
              fallbackHref="/?view=projects"
              label="Back to previous page"
              storageKey="projects:return"
            />
            <span className="uppercase tracking-[0.2em]">{project.date}</span>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-purple-300">
                Case Study
              </p>
              <h1 className="text-4xl md:text-6xl font-bold">
                {project.title}
              </h1>
              <p className="text-xl text-slate-300">{project.subtitle}</p>
              <p className="text-lg text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-purple-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-blue-600 text-white font-semibold"
                >
                  Live demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold"
                >
                  View code
                </a>
              )}
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <DetailBlock title="Overview" items={[project.overview]} />
            <DetailBlock title="Key Features" items={project.features} />
            <DetailBlock title="Tech Stack" items={project.techStack} />
            <DetailBlock title="APIs Used" items={project.apis} />
            <DetailBlock title="Challenges" items={project.challenges} />
            <DetailBlock
              title="What This Project Shows"
              items={project.takeaways}
            />
          </div>

          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
              <ProjectGallery
                title={project.title}
                images={project.galleryImages}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-2 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-purple-300 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
