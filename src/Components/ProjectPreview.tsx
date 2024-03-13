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

interface ProjectPreviewProps {
    titleId: string;
    path: string;
    imageHref: string;
}

const ProjectPreview: FC<ProjectPreviewProps> = ({
    titleId,
    path,
    imageHref,
}) => {
    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                className="shadow"
                style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "3/2",
                    borderRadius: "1.6rem",
                }}
            >
                <Image
                    fill
                    src={imageHref}
                    alt={"image"}
                    sizes="100vw"
                    priority
                    style={{
                        objectFit: "cover",
                        borderRadius: "1.6rem",
                    }}
                />
            </div>
            <EditorH2 id={titleId} />
            <Link
                href={'/projects/'+path}
                style={{
                    color: "#00BB7B",
                    border: "1px solid #00BB7B",
                    padding: "0.6rem 1.6rem",
                    marginTop: "3rem",
                    background: "none",
                    fontWeight: 300,
                    fontSize: "1.2rem",
                    fontFamily: "Aeonik",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "1000px",
                }}
            >
                View Project →
            </Link>
        </section>
    );
};

export default ProjectPreview;
