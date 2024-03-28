import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import EditorDiv from "@/editor/EditorDiv";
import EditorH1 from "@/editor/EditorH1";
import EditorP from "@/editor/EditorP";
import { FC } from "react";
import EditorH3 from "@/editor/EditorH3";
import { services } from "@/app/utils/services";
import EditorH2 from "@/editor/EditorH2";
import Dropdown from "@/Components/DropDown";
import EditorDropdown from "@/editor/EditorDropdown";
import ProjectPreview from "@/Components/ProjectPreview";
import { projects } from "@/app/utils/projects";
import PageContainer from "@/Components/PageContainer";
import { border } from "@/app/utils/colors";
import ProjectsGrid from "@/Components/ProjectsGrid";
import HireButton from "@/Components/HireButton";

const ServicesPage: React.FC<{ params: { serviceId: string } }> = ({
    params,
}) => {
    const service = services.find((service) => service.id === params.serviceId);
    if (!service) return null;

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
                    className="internal-inline-padding"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        height: "auto",
                        paddingBlock: "2rem",
                        borderTop: border,
                    }}
                >
                    <h1
                        style={{
                            fontSize: "Clamp(2rem, 3vw, 2.8rem)",
                            fontWeight: 700,
                            lineHeight: "1.2",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                        }}
                    >
                        {service?.title}
                    </h1>
                    <EditorP
                        id={`${service?.id}-paragraph-1`}
                        style={{
                            lineHeight: "1.4",
                            marginTop: "1.6rem",
                            opacity: 0.6,
                            maxWidth: "36rem",
                        }}
                    />
                </div>

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
                            paddingBlock: "2rem",
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1,
                            // justifyContent: 'flex-end',
                        }}
                    >
                        <EditorH2
                            id={`${service?.id}-section-1-title`}
                            style={{
                                fontWeight: 700,
                                fontSize: "1.4rem",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                            }}
                        />
                        <EditorP
                            id={`${service?.id}-section-1-paragraph`}
                            style={{
                                marginTop: "0.8rem",
                                maxWidth: "24rem",
                            }}
                        />
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
                            paddingBlock: "2rem",
                        }}
                    >
                        <EditorH2
                            id={`${service?.id}-services-title`}
                            style={{
                                fontWeight: 700,
                                fontSize: "1.4rem",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                            }}
                        />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "0.8rem",
                                maxWidth: "30rem",
                            }}
                        >
                            {Array.from({ length: 10 }).map((_, index) => (
                                <EditorDropdown
                                    key={`${service?.id}-service-${index}`}
                                    id={`${service?.id}-service-${index}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div
                    className="internal-inline-padding"
                    style={{
                        borderTop: border,
                        marginTop: "5rem",
                    }}
                >
                    <EditorH2
                        id={`${service?.id}-projects-title`}
                        style={{
                            fontWeight: 300,
                            fontSize: "1.2rem",
                            display: "flex",
                            opacity: 0.8,
                            paddingBlock: "1rem",
                        }}
                    />
                </div>
                <ProjectsGrid
                    projects={projects.filter((project) =>
                        project.roles.includes(service?.title)
                    )}
                />

                <HireButton />
            </div>
        </PageContainer>
    );

    // return (
    //     <main
    //         style={{
    //             display: "flex",
    //             flexDirection: "column",
    //             paddingInline: "5vw",
    //         }}
    //     >
    //         <div
    //             style={{
    //                 fontSize: "Clamp(2rem, 4vw, 3rem)",
    //                 fontWeight: 300,
    //                 lineHeight: "1.2",
    //                 marginTop: "4.4rem",
    //                 textTransform: "uppercase",
    //             }}
    //         >
    //             {service.title}
    //         </div>
    //         <div
    //             style={{
    //                 height: "0.8px",
    //                 background: "#191919",
    //                 width: "8rem",
    //                 marginTop: "1rem",
    //             }}
    //         />
    //         <EditorP
    //             id={`${service?.id}-paragraph-1`}
    //             style={{
    //                 lineHeight: "1.4",
    //                 marginTop: "1.6rem",
    //                 opacity: 0.6,
    //                 maxWidth: "36rem",
    //             }}
    //         />
    //         <EditorH2
    //             id={`${service?.id}-section-1-title`}
    //             style={{
    //                 fontWeight: 400,
    //                 marginTop: "3rem",
    //                 fontSize: "1.2rem",
    //                 opacity: 0.8,
    //                 textTransform: "uppercase",
    //             }}
    //         />
    //         <EditorP
    //             id={`${service?.id}-section-1-paragraph`}
    //             style={{
    //                 marginTop: "0.8rem",
    //             }}
    //         />
    //         <EditorH2
    //             id={`${service?.id}-services-title`}
    //             style={{
    //                 fontWeight: 400,
    //                 marginTop: "3rem",
    //                 fontSize: "1.2rem",
    //                 opacity: 0.8,
    //                 textTransform: "uppercase",
    //             }}
    //         />
    //         <div
    //             style={{
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 marginTop: "0.8rem",
    //             }}
    //         >
    //             {Array.from({ length: 10 }).map((_, index) => (
    //                 <EditorDropdown
    //                     key={`${service?.id}-service-${index}`}
    //                     id={`${service?.id}-service-${index}`}
    //                 />
    //             ))}
    //         </div>
    //         <EditorH2
    //             id={`${service?.id}-projects-title`}
    //             style={{
    //                 fontWeight: 400,
    //                 marginTop: "3rem",
    //                 fontSize: "1.2rem",
    //                 opacity: 0.8,
    //                 textTransform: "uppercase",
    //             }}
    //         />
    //         <div
    //             style={{
    //                 display: "flex",
    //                 overflowX: "scroll",
    //                 marginTop: "0.8rem",
    //             }}
    //         >
    //             {projects
    //                 .filter((project) => project.roles.includes(service?.title))
    //                 .map((project) => (
    //                     <div key={project.id} style={{}}>
    //                         <ProjectPreview
    //                             projectId={project.id}
    //                             imageHref={`/${project.imageHref}.png`}
    //                         />
    //                     </div>
    //                 ))}
    //         </div>
    //     </main>
    // );
};

export default ServicesPage;
