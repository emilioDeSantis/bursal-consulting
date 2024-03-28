import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import EditorDiv from "@/editor/EditorDiv";
import EditorH1 from "@/editor/EditorH1";
import EditorP from "@/editor/EditorP";
import { FC, Fragment } from "react";
import EditorH3 from "@/editor/EditorH3";
import { border, green } from "@/app/utils/colors";
import { projects } from "@/app/utils/projects";
import PageContainer from "@/Components/PageContainer";
import ProjectsGrid from "@/Components/ProjectsGrid";
import HireButton from "@/Components/HireButton";

const ProjectPage: React.FC<{ params: { projectId: string } }> = ({
    params,
}) => {
    const project = projects.find((project) => project.id === params.projectId);
    if (!project) return null;

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
                        style={{
                            width: "Min(30rem, 100%)",
                            aspectRatio: 3 / 2,
                            position: "relative",
                            background: "#bbcccc",
                        }}
                    >
                        <Image
                            fill
                            src={`/${project.imageHref}.png`}
                            alt={"image"}
                            sizes="100vw"
                            priority
                            style={{
                                objectFit: "cover",
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
                            justifyContent: "space-between",
                            height: "auto",
                            paddingBlock: "2rem",
                        }}
                    >
                        <EditorP
                            id={`${project?.id}-location`}
                            style={{
                                // fontSize: "1.4rem",
                                fontWeight: 300,
                                lineHeight: "1.2",
                                opacity: 0.6,
                                letterSpacing: "0.08em",
                            }}
                        />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <EditorH1
                                id={`${project?.id}-title`}
                                style={{
                                    fontSize: "Clamp(2rem, 3vw, 2.8rem)",
                                    fontWeight: 700,
                                    lineHeight: "1.2",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.08em",
                                    paddingTop: "4rem",
                                }}
                            />
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    color: "black",
                                    opacity: 0.6,
                                    gap: "0.6rem",
                                    marginTop: "0.6rem",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                    style={{
                                        height: "1.2rem",
                                        width: "1.2rem",
                                    }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.867 19.125h.008v.008h-.008v-.008Z"
                                    />
                                </svg>

                                <EditorDiv
                                    id={`${project?.id}-project`}
                                    style={{
                                        fontWeight: 400,
                                        lineHeight: "1.2",
                                        // textTransform: "uppercase",
                                        fontSize: "1.2rem",
                                        letterSpacing: "0.1em",
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    marginTop: "2rem",
                                    opacity: 0.5,
                                    // textTransform: "uppercase",
                                    fontWeight: 400,
                                    letterSpacing   : "0.1em",
                                    padding: "0.4rem",
                                }}
                            >
                                Client
                            </div>
                            <EditorDiv
                                id={`${project?.id}-client`}
                                style={{
                                    fontWeight: 700,
                                    lineHeight: "1.2",
                                    textTransform: "uppercase",
                                    fontSize: "1.1rem",
                                    letterSpacing: "0.1em",
                                    opacity: 0.8,
                                    display: "flex",
                                    background: "#00000013",
                                    paddingBlock: "0.2rem",
                                    paddingInline: "0.4rem",
                                    width: "fit-content",
                                    marginTop: "0.2rem",
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div
                    className="internal-inline-padding"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "100%",
                        marginTop: "2rem",
                        paddingBlock: "2rem",
                        borderBlock: border,
                    }}
                >
                    <h2
                        style={{
                            fontWeight: 400,
                            lineHeight: "2",
                            textTransform: "uppercase",
                            fontSize: "1rem",
                            letterSpacing: "0.1em",
                            opacity: 0.8,
                        }}
                    >
                        Role
                    </h2>
                    {project.roles.map((role, index) => (
                        <Link
                            href={`/services/${role
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            key={role}
                            className="role-hover"
                            style={{
                                fontWeight: 400,
                                lineHeight: "1.2",
                                marginTop: "0.4rem",
                                // background: "#00000019",
                                padding: "0.6rem 1rem",
                                fontFamily: "Favorit",
                            }}
                        >
                            {role} →
                        </Link>
                    ))}
                    <h2
                        style={{
                            fontWeight: 400,
                            lineHeight: "2",
                            marginTop: "2rem",
                            textTransform: "uppercase",
                            fontSize: "1rem",
                            letterSpacing: "0.1em",
                            opacity: 0.8,
                        }}
                    >
                        Contributions
                    </h2>
                    <div
                        style={{
                            maxWidth: "36rem",
                            display: "flex",
                            flexDirection: "column",
                            marginTop: "-1rem",
                        }}
                    >
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Fragment>
                                <EditorH3
                                    id={`${project?.id}-contribution-${
                                        index + 1
                                    }-title`}
                                    style={{
                                        lineHeight: "1.4",
                                        fontSize: "1.4rem",
                                        width: "100%",
                                        fontWeight: 700,
                                        letterSpacing: "0.08em",
                                        opacity: 1,
                                        marginTop: "2rem",
                                        textTransform: "uppercase",
                                    }}
                                />
                                <EditorP
                                    id={`${project?.id}-contribution-${index}`}
                                    style={{
                                        lineHeight: "1.4",
                                        width: "100%",
                                        marginTop: "0.4rem",
                                    }}
                                />
                            </Fragment>
                        ))}
                    </div>
                </div>
                <h3
                    className="internal-inline-padding"
                    style={{
                        marginTop: "5rem",
                        fontWeight: 300,
                        fontSize: "1.2rem",
                        display: "flex",
                        opacity: 0.8,
                        borderTop: border,
                        paddingBlock: "1rem",
                    }}
                >
                    Other Past Projects
                </h3>
                <ProjectsGrid projects={projects.filter((p) => p.id !== project?.id)} />
                <HireButton />
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
    //             className="hero-container"
    //             style={{
    //                 position: "relative",
    //                 display: "flex",
    //             }}
    //         >
    //             <div
    //                 style={{
    //                     position: "relative",
    //                     width: "100%",
    //                     marginTop: "Clamp(5rem,10vw,32rem)",
    //                 }}
    //             >
    //                 <div
    //                     style={{
    //                         position: "absolute",
    //                         width: "100%",
    //                         bottom: "Clamp(-12rem, -6vw, -3.5rem)",
    //                         top: "Clamp(-12rem, -4vw, -1.5rem)",
    //                         paddingLeft: "Clamp(7rem, 15vw, 32rem)",
    //                     }}
    //                 >
    //                     <div
    //                         className="shadow"
    //                         style={{
    //                             // background: "#00704A",
    //                             background: green,
    //                             width: "100%",
    //                             height: "100%",
    //                             borderTopLeftRadius: "1.6rem",
    //                             borderBottomLeftRadius: "1.6rem",
    //                         }}
    //                     />
    //                 </div>
    //                 <div
    //                     style={{
    //                         paddingRight: "5vw",
    //                         width: "100%",
    //                     }}
    //                 >
    //                     <div
    //                         className="shadow hero-image-container hero-image-border-radius"
    //                         style={{
    //                             position: "relative",
    //                             background: "#bbcccc",
    //                         }}
    //                     >
    //                         <Image
    //                             fill
    //                             src={`/${project.imageHref}.png`}
    //                             alt={"image"}
    //                             sizes="100vw"
    //                             priority
    //                             style={{
    //                                 objectFit: "cover",
    //                             }}
    //                             className="hero-image-border-radius"
    //                         />
    //                     </div>
    //                     <EditorDiv
    //                         id={`${project?.id}-location`}
    //                         style={{
    //                             position: "absolute",
    //                             bottom: "Clamp(-32rem, -3.6vw, -2.4rem)",
    //                             right: "5vw",
    //                             color: "white",
    //                             // fontSize: "1.2rem",
    //                             fontWeight: 300,
    //                             opacity: 0.8,
    //                             letterSpacing: "0.1em",
    //                         }}
    //                     />
    //                 </div>
    //             </div>

    //             <div
    //                 style={{
    //                     display: "flex",
    //                     flexDirection: "column",
    //                     paddingInline: "5vw",
    //                     justifyContent: "flex-end",
    //                     width: "100%",
    //                 }}
    //             >
    //                 <EditorH1
    //                     id={`${project?.id}-title`}
    //                     style={{
    //                         fontSize: "Clamp(2rem, 4vw, 3rem)",
    //                         fontWeight: 300,
    //                         lineHeight: "1.2",
    //                         marginTop: "5.6rem",
    //                         textTransform: "uppercase",
    //                     }}
    //                 />
    //                 <div
    //                     style={{
    //                         height: "0.8px",
    //                         background: "#191919",
    //                         width: "8rem",
    //                         marginTop: "1rem",
    //                     }}
    //                 />

    //                 <EditorDiv
    //                     id={`${project?.id}-project`}
    //                     style={{
    //                         fontWeight: 400,
    //                         lineHeight: "1.2",
    //                         marginTop: "0.4rem",
    //                         textTransform: "uppercase",
    //                         fontSize: "1.2rem",
    //                         letterSpacing: "0.1em",
    //                         opacity: 0.6,
    //                     }}
    //                 />
    //                 <EditorDiv
    //                     id={`${project?.id}-client`}
    //                     style={{
    //                         fontWeight: 400,
    //                         lineHeight: "1.2",
    //                         marginTop: "0.4rem",
    //                         textTransform: "uppercase",
    //                         fontSize: "1.2rem",
    //                         letterSpacing: "0.1em",
    //                         opacity: 0.6,
    //                     }}
    //                 />
    //             </div>
    //         </div>
    //         <div
    //             style={{
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 paddingInline: "5vw",
    //                 alignItems: "flex-start",
    //                 width: "100%",
    //                 marginTop: "2.4rem",
    //             }}
    //         >
    //             <h2
    //                 style={{
    //                     fontWeight: 400,
    //                     lineHeight: "2",
    //                     textTransform: "uppercase",
    //                     fontSize: "1rem",
    //                     letterSpacing: "0.1em",
    //                     opacity: 0.8,
    //                 }}
    //             >
    //                 Role
    //             </h2>
    //             {project.roles.map((role, index) => (
    //                 <Link
    //                     href={`/services/${role
    //                         .toLowerCase()
    //                         .replace(/\s+/g, "-")}`}
    //                     key={role}
    //                     style={{
    //                         fontWeight: 400,
    //                         lineHeight: "1.2",
    //                         marginTop: "0.4rem",
    //                         color: "#00000088",
    //                         // background: "#00000019",
    //                         border: "1px solid #00000022",
    //                         padding: "0.6rem 1rem",
    //                         boxShadow: "0 2px 10px 0 #00000011",
    //                     }}
    //                 >
    //                     {role} →
    //                 </Link>
    //             ))}
    //             <h2
    //                 style={{
    //                     fontWeight: 400,
    //                     lineHeight: "2",
    //                     marginTop: "2rem",
    //                     textTransform: "uppercase",
    //                     fontSize: "1rem",
    //                     letterSpacing: "0.1em",
    //                     opacity: 0.8,
    //                 }}
    //             >
    //                 Contributions
    //             </h2>
    //             <div
    //                 style={{
    //                     maxWidth: "36rem",
    //                     display: "flex",
    //                     flexDirection: "column",
    //                     marginTop: "-1rem",
    //                 }}
    //             >
    //                 {Array.from({ length: 3 }).map((_, index) => (
    //                     <Fragment>
    //                         <EditorH3
    //                             id={`${project?.id}-contribution-${
    //                                 index + 1
    //                             }-title`}
    //                             style={{
    //                                 lineHeight: "1.4",
    //                                 fontSize: "1rem",
    //                                 width: "100%",
    //                                 fontWeight: 600,
    //                                 opacity: 1,
    //                                 marginTop: "2rem",
    //                             }}
    //                         />
    //                         <EditorP
    //                             id={`${project?.id}-contribution-${index}`}
    //                             style={{
    //                                 lineHeight: "1.4",
    //                                 width: "100%",
    //                                 marginTop: "0.4rem",
    //                             }}
    //                         />
    //                     </Fragment>
    //                 ))}
    //             </div>

    //             <Link
    //                 className="button-hover "
    //                 href={"/projects"}
    //                 style={{
    //                     border: "1px solid #00BB7B",
    //                     padding: "0.6rem 1.6rem",
    //                     marginTop: "2rem",
    //                     fontWeight: 400,
    //                     fontSize: "1.1rem",
    //                     fontFamily: "Aeonik",
    //                     display: "flex",
    //                     justifyContent: "center",
    //                     alignItems: "center",
    //                     borderRadius: "1.6rem",
    //                 }}
    //             >
    //                 ← View All Projects
    //             </Link>
    //         </div>
    //     </main>
    // );
};

export default ProjectPage;
