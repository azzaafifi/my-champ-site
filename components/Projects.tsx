import "./Projects.css"; 

export default function Projects() {
  const projects  =  [
    { title: "Abyan Trading", gif: "/project_1/behance_project_1_cover.gif" },
    { title: "Project 2", gif: "/gifs/project2.gif" },
    { title: "Project 3", gif: "/gifs/project3.gif" },
    { title: "Project 4", gif: "/gifs/project4.gif" },
    { title: "Project 5", gif: "/gifs/project5.gif" },
    { title: "Project 6", gif: "/gifs/project6.gif" },
  ];

  return (
   <div className="grid md:grid-cols-3 gap-8 pt-32">

      {projects.map((project, i) => (
        <div key={i} className="flex flex-col items-center ">
          
          {/* White bordered container (GIF only) */}
          <div
            className="h-64 w-full border rounded-lg overflow-hidden mt-10 shadow-lg"
            style={{
              background: "var(--color-card)",
              borderColor: "var(--color-border)",
            }}
          >
            <img
              src={project.gif}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title OUTSIDE the container */}
          <h3 className="mt-4 text-xl font-semibold text-center">
            {project.title}
          </h3>

        </div>
      ))}
    </div>
  );
}
