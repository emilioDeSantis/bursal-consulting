// "use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import EditorDiv from "@/editor/EditorDiv";
import EditorH1 from "@/editor/EditorH1";
import EditorP from "@/editor/EditorP";
import { FC } from "react";
import EditorH2 from "@/editor/EditorH2";
import HoverOverlay from "./HoverOverlay";

interface ProjectPreviewProps {
    projectId: string;
    imageHref: string;
}

const ProjectPreview: FC<ProjectPreviewProps> = ({ projectId, imageHref }) => {
    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                minWidth: "18rem",
                maxWidth: "26rem",
                flex: 1,
                marginTop: "2rem",
            }}
        >
            <div
                className="shadow"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "flex-end",
                    paddingInline: "1rem",
                    paddingBlock: "1rem",
                    borderRadius: "2rem",
                    // background: "#bbcccc",
                }}
            >
                <EditorH2
                    id={`${projectId}-title`}
                    style={{
                        fontSize: "1.2rem",
                        fontWeight: 600,
                        lineHeight: "1.2",
                        opacity: 0.7,
                        marginTop: "0.2rem",
                        // paddingInline: "1.6rem",
                        // textTransform: "uppercase",
                    }}
                />
                <Link
                    href={"/projects/" + projectId}
                    className="shadow"
                    style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "3/2",
                        borderRadius: "1.6rem",
                        marginTop: "1rem",
                        background: "#bbcccc",
                    }}
                >
                    <Image
                        fill
                        src={imageHref}
                        alt={"image"}
                        sizes="400px"
                        priority
                        style={{
                            objectFit: "cover",
                            borderRadius: "1.6rem",
                        }}
                    />
                    <HoverOverlay />
                </Link>
                <Link
                    className="button-hover"
                    href={"/projects/" + projectId}
                    style={{
                        border: "1px solid #00BB7B",
                        padding: "0.6rem 1.6rem",
                        marginTop: "2rem",
                        fontWeight: 300,
                        fontSize: "1.2rem",
                        fontFamily: "Aeonik",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "1.6rem",
                    }}
                >
                    View Project →
                </Link>
            </div>
        </section>
    );
};

export default ProjectPreview;
