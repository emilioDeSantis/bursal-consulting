import React from "react";
import ProjectPreview from "./ProjectPreview";
import { border } from "@/app/utils/colors";

interface ProjectsGridProps {
    projects: Project[];
}

interface Project {
    id: string;
    imageHref: string;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
    return (
        <div
            className="internal-inline-padding"
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.6rem",
                borderBlock: border,
            }}
        >
            {projects.map((project) => (
                <ProjectPreview
                    key={project.id}
                    projectId={project.id}
                    imageHref={`/${project.imageHref}.png`}
                />
            ))}
        </div>
    );
};

export default ProjectsGrid;