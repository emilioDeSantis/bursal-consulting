import ProjectPreview from "@/Components/ProjectPreview";
import EditorH1 from "@/editor/EditorH1";
import EditorP from "@/editor/EditorP";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projects } from "../utils/projects";
import PageContainer from "@/Components/PageContainer";
import { border } from "../utils/colors";
import StationIcon from "@/Components/StationIcon";
import ToolboxIcon from "@/Components/ToolboxIcon";
import { services } from "../utils/services";

const Projects: React.FC = () => {
    return (
        <PageContainer>
            <div
            className="project-margin-top"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                }}
            >
                <div
                    className="flex-direction"
                    style={{
                        width: "100%",
                        display: "flex",
                        borderBlock: border,
                        background: "white",
                    }}
                >
                    <div
                        className="internal-inline-padding"
                        style={{
                            height: "22rem",
                            width: "22rem",
                            paddingBlock: "2rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // background: "#f2f2f2",
                        }}
                    >
                        <ToolboxIcon />
                    </div>
                    <div
                        style={{
                            height: "auto",
                            width: 0,
                            borderRight: border,
                        }}
                    />
                    <div
                        style={{
                            width: "auto",
                            height: 0,
                            borderBottom: border,
                        }}
                    />
                    <div
                        className="internal-inline-padding"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            height: "auto",
                            paddingBlock: "2rem",
                        }}
                    >
                        <EditorH1
                            id={`services-page-title`}
                            style={{
                                fontSize: "Clamp(2rem, 3vw, 2.8rem)",
                                fontWeight: 700,
                                lineHeight: "1.2",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                            }}
                        />
                        <EditorP
                            id={`services-page-hero-text`}
                            style={{
                                maxWidth: "30rem",
                                marginTop: "1.6rem",
                            }}
                        />
                    </div>
                </div>
                <div
                    className="services-links-border internal-inline-padding mobile-padding-block"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        // flexDirection: "column",
                        // alignItems: "flex-start",   
                        borderBlock: border,
                        marginTop: "1.6rem",
                        justifyContent: "space-between",
                        paddingBlock: "1rem",
                        gap: "1rem",
                    }}
                >
                    {services.map((service) => (
                        <Link
                            className="button-hover"
                            href={`/services/${service.id}`}
                            key={service.id}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingBlock: "1rem",
                                paddingInline: "3rem",
                                // fontSize: "1.1rem",
                                fontWeight: 700,
                                fontFamily: "Favorit",
                                textTransform: "uppercase",
                                transition: "0.3s",
                                border: '1px solid #00BB7B',
                            }}
                        >
                            {`${service.title} →`}
                        </Link>
                    ))}
                </div>
            </div>
        </PageContainer>
    );
    // return (
    //     <main
    //         style={{
    //             display: "flex",
    //             flexDirection: "column",
    //             // background: "#e3faf1",
    //             // background: "#e3faf1",
    //         }}
    //     >
    //         <div
    //             style={{
    //                 height: "Clamp(3rem, 12vw, 6rem)",
    //             }}
    //         />
    //         <div
    //             style={{
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 paddingInline: "5vw",
    //                 justifyContent: "flex-end",
    //                 width: "100%",
    //             }}
    //         >
    //             <EditorH1
    //                 id="projects-page-title"
    //                 style={{
    //                     fontSize: "Clamp(2rem, 4vw, 3rem)",
    //                     fontWeight: 200,
    //                     lineHeight: "1.2",
    //                     marginTop: "3.6rem",
    //                     textTransform: "uppercase",
    //                 }}
    //             />
    //             <div
    //                 style={{
    //                     height: "0.8px",
    //                     background: "#191919",
    //                     width: "8rem",
    //                     marginTop: "1rem",
    //                 }}
    //             />
    //             <EditorP
    //                 id="projects-page-hero-text"
    //                 style={{
    //                     lineHeight: "1.4",
    //                     marginTop: "3.6rem",
    //                     opacity: 0.6,
    //                     maxWidth: "36rem",
    //                 }}
    //             />
    //         </div>
    //         <div
    //             style={{
    //                 display: "flex",
    //                 paddingInline: "5vw",
    //                 // flexDirection: "column",
    //                 flexWrap: "wrap",
    //                 gap: "1.6rem",
    //                 marginTop: "3rem",
    //             }}
    //         >
    //             {projects.map((project) => (
    //                 <ProjectPreview
    //                     key={project.id}
    //                     projectId={project.id}
    //                     imageHref={`/${project.imageHref}.png`}
    //                 />
    //             ))}
    //         </div>
    //     </main>
    // );
};

export default Projects;
