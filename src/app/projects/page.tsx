import ProjectPreview from "@/Components/ProjectPreview";
import EditorH1 from "@/editor/EditorH1";
import EditorP from "@/editor/EditorP";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const projects = [
    {
        id: "green-line-extension",
        imageHref: "green-line-extension-3",
    },
    {
        id: "ric-renovation",
        imageHref: "ric-renovation",
    },
    {
        id: "amgen-buildout",
        imageHref: "amgen-buildout-2",
    },
    {
        id: "cerritos-center",
        imageHref: "cerritos-center",
    },
    {
        id: "mbta-wollaston",
        imageHref: "Wall",
    },
    {
        id: "central-artery",
        imageHref: "central-artery",
    },
    {
        id: "mission-hospital",
        imageHref: "mission-hospital",
    },
    {
        id: "north-hero-drawbridge",
        imageHref: "north-hero-drawbridge",
    },
    {
        id: "ruggles-upgrade",
        imageHref: "ruggles-upgrade",
    },
    {
        id: "assembly-square-station",
        imageHref: "assembly-square-station",
    },
    {
        id: "west-haven-station",
        imageHref: "west-haven-station",
    },
    {
        id: "orient-heights-station",
        imageHref: "orient-heights-station-2",
    },
];

const Projects: React.FC = () => {
    return (
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                // background: "#e3faf1",
                // background: "#e3faf1",
            }}
        >
            <div
                style={{
                    height: "Clamp(3rem, 12vw, 6rem)",
                }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingInline: "5vw",
                    justifyContent: "flex-end",
                    width: "100%",
                }}
            >
                <EditorH1
                    id="projects-page-title"
                    style={{
                        fontSize: "Clamp(2rem, 4vw, 3rem)",
                        fontWeight: 200,
                        lineHeight: "1.2",
                        marginTop: "3.6rem",
                        textTransform: "uppercase",
                    }}
                />
                <div
                    style={{
                        height: "0.8px",
                        background: "#191919",
                        width: "8rem",
                        marginTop: "1rem",
                    }}
                />
                <EditorP
                    id="projects-page-hero-text"
                    style={{
                        lineHeight: "1.4",
                        marginTop: "3.6rem",
                        opacity: 0.6,
                        maxWidth: "36rem",
                    }}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    paddingInline: "5vw",
                    // flexDirection: "column",
                    flexWrap: "wrap",
                    gap: "1.6rem",
                    marginTop: "3rem",
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
        </main>
    );
};

export default Projects;
