import Link from 'next/link';
import { notFound } from 'next/navigation';
import websites from '@/app/websites';

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

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
            <i className="fas fa-arrow-left"></i>
            Back to Projects
          </Link>
        </div>

        {/* Project header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{project.description}</p>
          
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

          {/* Project links */}
          <div className="flex gap-4">
            {project.webLink && (
              <a 
                href={project.webLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                View Live Site
              </a>
            )}
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50"
              >
                View Code
              </a>
            )}
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
    </div>
  );
}