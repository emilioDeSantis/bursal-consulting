import ProjectPreview from "@/Components/ProjectPreview";
import EditorH1 from "@/editor/EditorH1";
import EditorP from "@/editor/EditorP";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = ["hero2", "hero3", "hero2"];

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
                    flexDirection: "column",
                }}
            >
                <ProjectPreview
                    titleId="orient-heights-station-title"
                    path="orient-heights-station"
                    imageHref="/hero3.png"
                />
            </div>
        </main>
    );
};

export default Projects;
