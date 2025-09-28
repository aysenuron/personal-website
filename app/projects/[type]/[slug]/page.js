import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import apps from "@/app/projects_apps";
import websites from "@/app/projects_websites";
import cc from "@/app/projects_cc";
import research from "@/app/projects_research";

import Header from "@/app/components/Header";
import ChipsContainer from "@/app/components/ChipsContainer";
import tools from "@/app/tools";
import ProjectFeatures from "@/app/components/ProjectFeatures";

import { formatType } from "@/app/utils/formatType";

const allProjects = [...apps, ...websites, ...cc, ...research];

// This generates static paths for all your projects
export async function generateStaticParams() {
  return allProjects.map((project) => ({
    type: project.type, // ✅ include type
    slug: project.slug,
  }));
}

// This generates metadata for each project page
export async function generateMetadata({ params }) {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Ayşenur Onaran`,
    description: project.description,
  };
}

// THIS IS THE MAIN COMPONENT - make sure it's the default export
export default function ProjectPage({ params }) {
  const { type, slug } = params;
  const project = allProjects.find((p) => p.slug === slug && p.type === type);

  if (!project) {
    notFound();
  }

  const projectTools = tools.filter((tool) =>
    project.toolNames?.includes(tool.name)
  );

  return (
    <>
      <Header backBtn={true} />
      <div className="container mx-auto pt-2 pb-20 px-4 md:px-0">
        <div className="mx-auto">
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-700 flex gap-2 items-center mb-8">
            <Link href="/" className="hover:text-red-600">
              <p>Home</p>
            </Link>
            <p>/</p>
            <Link href="/projects" className="hover:text-red-600">
              <p>Projects</p>
            </Link>
            <p>/</p>
            <Link
              href={`/projects#${project.type}`}
              className="hover:text-red-600"
            >
              <p>{formatType(project.type)}</p>
            </Link>
            <p>/</p>
            <p className="text-gray-500">{project.title}</p>
          </div>

          <div className="lg:grid lg:grid-cols-12 gap-12 2xl:gap-24 flex flex-col-reverse">
            <div className="col-span-9 space-y-12">
              {/* Project header */}
              <div>
                <h1 className="lg:text-4xl text-2xl text-gray-800 font-semibold mb-4">
                  {project.title}
                </h1>
                <div className="text-md text-gray-500 mb-4">
                  <ReactMarkdown>{project.description}</ReactMarkdown>
                </div>
                {/* Project image */}
                <div className="my-8">
                  {project.img ? (
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full rounded-lg shadow-lg"
                    />
                  ) : (
                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                      className={`mx-auto border-gray-200 border-4 rounded-2xl drop-shadow-lg ${project.className}`}
                    />
                  )}
                </div>
              </div>

              {/* Project overview */}
              <div className="space-y-2 max-w-none">
                <h2 className="text-2xl">Project Overview</h2>
                <div className="text-gray-500 text-md">
                  <ReactMarkdown>{project.longDescription}</ReactMarkdown>
                </div>
              </div>
              {/* Project goal */}
              <div className="space-y-2 max-w-none">
                <h2 className="text-2xl">Goals</h2>
                <div className="text-gray-500 text-md">
                  <ReactMarkdown>{project.goal}</ReactMarkdown>
                </div>
              </div>
              {/* Add more detailed content here */}
              <ProjectFeatures features={project.features} />
              {/* Project challenges */}
              <div className="space-y-2 max-w-none">
                <h2 className="text-2xl">Challenges</h2>
                <div className="text-gray-500 text-md space-y-4">
                  {project.challenges.map((paragraph, index) => (
                    <ReactMarkdown key={index}>{paragraph}</ReactMarkdown>
                  ))}
                </div>
              </div>
              {/* Personal Notes */}
              {project.notes ? (
                <div className="space-y-2 max-w-none">
                  <h2 className="text-2xl">👋🏻 Personal Notes</h2>
                  <div className="text-gray-500 text-md space-y-4">
                    {project.notes.map((paragraph, index) => (
                      <ReactMarkdown key={index}>{paragraph}</ReactMarkdown>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {/* Quick Facts */}
            <div className="col-span-3 text-gray-500 text-md flex flex-col gap-6 pl-3 py-2 border-gray-300 border-l-1 lg:sticky top-38 self-start">
              <p>
                <span className="text-gray-700 font-semibold">Role: </span>
                {project.role ? project.role : "Web Designer / Developer"}
              </p>
              <p>
                <span className="text-gray-700 font-semibold">Timeline: </span>
                {project.time ? project.time : "May 2023 - June 2023"}
              </p>
              {/* Project links */}
              {project.webLink && (
                <a
                  href={project.webLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#192de4] group"
                >
                  <i className="fa-solid fa-link text-sm"></i> View Live Site{" "}
                  {
                    <i className="fa-solid fa-arrow-right text-sm pl-1 group-hover:pl-2 transition-all duration-300"></i>
                  }
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#192de4] group"
                >
                  <i className="fa-brands fa-github text-sm"></i> View Code{" "}
                  {
                    <i className="fa-solid fa-arrow-right text-sm pl-1 group-hover:pl-2 transition-all duration-300"></i>
                  }
                </a>
              )}
              <ChipsContainer selectedTools={projectTools} color={"gray-100"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
