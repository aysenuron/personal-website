import Link from 'next/link';
import { notFound } from 'next/navigation';
import websites from '@/app/websites';
import Header from '@/app/components/Header';
import ChipsContainer from '@/app/components/ChipsContainer';
import tools from '@/app/tools';

// This generates static paths for all your projects
export async function generateStaticParams() {
  return websites.map((website) => ({
    slug: website.slug,
  }));
}

// This generates metadata for each project page
export async function generateMetadata({ params }) {
  const project = websites.find((website) => website.slug === params.slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Ayşenur Onaran`,
    description: project.description,
  };
}

// THIS IS THE MAIN COMPONENT - make sure it's the default export
export default function ProjectPage({ params }) {
  const project = websites.find((website) => website.slug === params.slug);
  const websiteTools = tools.filter((tool) =>
    project.toolNames.includes(tool.name)
  );

  if (!project) {
    notFound();
  }

  return (
    <>
    <Header backBtn={true} />
    <div className="container mx-auto py-8 px-4 md:px-0">
      <div className="mx-auto">

        {/* Breadcrumbs */}
        <div className="text-sm text-gray-700 flex gap-2 items-center mb-10">
          <Link href="/" className="hover:text-red-600"><p>Home</p></Link>
          <p>/</p>
          <Link href="/projects" className="hover:text-red-600"><p>Projects</p></Link>
          <p>/</p>
          <p className="text-gray-400">{project.title}</p>
        </div>


        <div className="lg:grid grid-cols-12 gap-10 lg:gap-16 flex flex-col-reverse">
          <div className="col-span-9">
            {/* Project header */}
            <div className="mb-12">
              <h1 className="lg:text-4xl text-2xl text-gray-800 font-semibold mb-4">{project.title}</h1>
              <p className="text-md text-gray-400 mb-6">{project.description}</p>

              {/* Project image */}
              <div className="mb-8">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              {/* Tools used */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.toolNames.map((toolName) => (
                    <span 
                      key={toolName}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {toolName}
                    </span>
                  ))}
                </div>
              </div>

              
            </div>

            {/* Project details */}
            <div className="prose max-w-none">
              <h2>Project Overview</h2>
              <p>{project.longDescription || project.description}</p>
              
              {/* Add more detailed content here */}
              <h2>Key Features</h2>
              <ul>
                {project.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                )) || <li>Feature details coming soon...</li>}
              </ul>

              <h2>Challenges & Solutions</h2>
              <p>{project.challenges || "Challenge details coming soon..."}</p>
            </div>
          </div>

            {/* Quick Facts */}
            <div className="col-span-3 text-gray-400 text-md flex flex-col gap-5 pl-3 py-2 border-gray-300 border-l-1 lg:sticky top-32 self-start">
              <p><span className="text-gray-700 font-semibold">Role: </span>{project.role ? project.role : "Web Designer / Developer"}</p>
              <p><span className="text-gray-700 font-semibold">Timeline: </span>{project.time ? project.time : "May 2023 - June 2023"}</p>
              {/* Project links */}
                {project.webLink && (
                  <a 
                    href={project.webLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#192de4] group"
                  >
                    <i className="fa-solid fa-link text-sm"></i> View Live Site {<i className="fa-solid fa-arrow-right text-sm pl-1 group-hover:pl-2 transition-all duration-300"></i>}
                  </a>
                )}
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#192de4] group"
                  >
                    <i className="fa-brands fa-github text-sm"></i> View Code {<i className="fa-solid fa-arrow-right text-sm pl-1 group-hover:pl-2 transition-all duration-300"></i>}
                  </a>
                )}
                <ChipsContainer
              selectedTools={websiteTools}
              color={"gray-100"}
              className={"py-2"}
              />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}