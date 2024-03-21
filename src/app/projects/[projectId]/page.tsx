import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import EditorDiv from "@/editor/EditorDiv";
import EditorH1 from "@/editor/EditorH1";
import EditorP from "@/editor/EditorP";
import { FC } from "react";
import { projects } from "../page";
import EditorH3 from "@/editor/EditorH3";

const ProjectPage: React.FC<{ params: { projectId: string } }> = ({
    params,
}) => {
    const project = projects.find((project) => project.id === params.projectId);
    if (!project) return null;
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
                className="hero-container"
                style={{
                    position: "relative",
                    display: "flex",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        marginTop: "Clamp(5rem,10vw,32rem)",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            bottom: "Clamp(-12rem, -6vw, -3.5rem)",
                            top: "Clamp(-12rem, -4vw, -1.5rem)",
                            paddingLeft: "Clamp(7rem, 15vw, 32rem)",
                        }}
                    >
                        <div
                            className="shadow"
                            style={{
                                // background: "#00704A",
                                background: "#24463B",
                                width: "100%",
                                height: "100%",
                                borderTopLeftRadius: "1.6rem",
                                borderBottomLeftRadius: "1.6rem",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            paddingRight: "5vw",
                            width: "100%",
                        }}
                    >
                        <div
                            className="shadow hero-image-container hero-image-border-radius"
                            style={{
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
                                className="hero-image-border-radius"
                            />
                        </div>
                        <EditorDiv
                            id={`${project?.id}-location`}
                            style={{
                                position: "absolute",
                                bottom: "Clamp(-32rem, -3.6vw, -2.4rem)",
                                right: "5vw",
                                color: "white",
                                // fontSize: "1.2rem",
                                fontWeight: 200,
                                letterSpacing: "0.1em",
                            }}
                        />
                    </div>
                </div>

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
                        id={`${project?.id}-title`}
                        style={{
                            fontSize: "Clamp(2rem, 4vw, 3rem)",
                            fontWeight: 200,
                            lineHeight: "1.2",
                            marginTop: "5.6rem",
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

                    <EditorDiv
                        id={`${project?.id}-project`}
                        style={{
                            fontWeight: 400,
                            lineHeight: "1.2",
                            marginTop: "0.4rem",
                            textTransform: "uppercase",
                            fontSize: "1.2rem",
                            letterSpacing: "0.1em",
                            opacity: 0.6,
                        }}
                    />
                    <EditorDiv
                        id={`${project?.id}-client`}
                        style={{
                            fontWeight: 400,
                            lineHeight: "1.2",
                            marginTop: "0.4rem",
                            textTransform: "uppercase",
                            fontSize: "1.2rem",
                            letterSpacing: "0.1em",
                            opacity: 0.6,
                        }}
                    />
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingInline: "5vw",
                    alignItems: "flex-start",
                    width: "100%",
                    marginTop: "3rem",
                }}
            >
                <h2
                    style={{
                        fontWeight: 400,
                        lineHeight: "1.2",
                        textTransform: "uppercase",
                        fontSize: "1rem",
                        letterSpacing: "0.1em",
                        opacity: 0.8,
                    }}
                >
                    Role
                </h2>
                <EditorDiv
                    id={`${project?.id}-role`}
                    style={{
                        fontWeight: 400,
                        lineHeight: "1.2",
                        marginTop: "0.4rem",
                        // textTransform: "uppercase",
                        // fontSize: "1.2rem",
                        // letterSpacing: "0.1em",
                        opacity: 0.6,
                    }}
                />
                <h2
                    style={{
                        fontWeight: 400,
                        lineHeight: "1.2",
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
                        opacity: 0.6,
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        marginTop: "0.4rem",
                    }}
                >
                    <EditorH3
                        id={`${project?.id}-contribution-1-title`}
                        style={{
                            lineHeight: "1.4",
                            fontSize: "1.8rem",
                            width: "100%",
                            fontWeight: 500,
                            marginTop: "1rem",
                        }}
                    />
                    <EditorP
                        id={`${project?.id}-contribution-1`}
                        style={{
                            lineHeight: "1.4",
                            width: "100%",
                        }}
                    />
                    <EditorH3
                        id={`${project?.id}-contribution-2-title`}
                        style={{
                            lineHeight: "1.4",
                            fontSize: "1.8rem",
                            width: "100%",
                            fontWeight: 500,
                            marginTop: "1rem",
                        }}
                    />
                    <EditorP
                        id={`${project?.id}-contribution-2`}
                        style={{
                            lineHeight: "1.4",
                            width: "100%",
                        }}
                    />
                    <EditorH3
                        id={`${project?.id}-contribution-3-title`}
                        style={{
                            lineHeight: "1.4",
                            fontSize: "1.8rem",
                            width: "100%",
                            fontWeight: 500,
                            marginTop: "1rem",
                        }}
                    />
                    <EditorP
                        id={`${project?.id}-contribution-3`}
                        style={{
                            lineHeight: "1.4",
                            width: "100%",
                        }}
                    />
                </div>

                <Link
                    className="button-hover"
                    href={"/projects"}
                    style={{
                        border: "1px solid #00BB7B",
                        padding: "0.6rem 1.6rem",
                        marginTop: "3rem",
                        fontWeight: 300,
                        fontSize: "1.2rem",
                        fontFamily: "Aeonik",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "1.6rem",
                    }}
                >
                    ← View All Projects
                </Link>
            </div>
        </main>
    );
};

export default ProjectPage;
