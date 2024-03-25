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
import { projects } from "@/app/projects/page";
import ProjectPreview from "@/Components/ProjectPreview";

const ServicesPage: React.FC<{ params: { serviceId: string } }> = ({
    params,
}) => {
    const service = services.find((service) => service.id === params.serviceId);
    if (!service) return null;
    return (
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "5vw",
            }}
        >
            <div
                style={{
                    fontSize: "Clamp(2rem, 4vw, 3rem)",
                    fontWeight: 300,
                    lineHeight: "1.2",
                    marginTop: "4.4rem",
                    textTransform: "uppercase",
                }}
            >
                {service.title}
            </div>
            <div
                style={{
                    height: "0.8px",
                    background: "#191919",
                    width: "8rem",
                    marginTop: "1rem",
                }}
            />
            <EditorP
                id={`${service?.id}-paragraph-1`}
                style={{
                    lineHeight: "1.4",
                    marginTop: "1.6rem",
                    opacity: 0.6,
                    maxWidth: "36rem",
                }}
            />
            <EditorH2
                id={`${service?.id}-section-1-title`}
                style={{
                    fontWeight: 400,
                    marginTop: "3rem",
                    fontSize: "1.2rem",
                    opacity: 0.8,
                    textTransform: "uppercase",
                }}
            />
            <EditorP
                id={`${service?.id}-section-1-paragraph`}
                style={{
                    marginTop: "0.8rem",
                }}
            />
            <EditorH2
                id={`${service?.id}-services-title`}
                style={{
                    fontWeight: 400,
                    marginTop: "3rem",
                    fontSize: "1.2rem",
                    opacity: 0.8,
                    textTransform: "uppercase",
                }}
            />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "0.8rem",
                }}
            >
                {Array.from({ length: 10 }).map((_, index) => (
                    <EditorDropdown
                        key={`${service?.id}-service-${index}`}
                        id={`${service?.id}-service-${index}`}
                    />
                ))}
            </div>
            <EditorH2
                id={`${service?.id}-projects-title`}
                style={{
                    fontWeight: 400,
                    marginTop: "3rem",
                    fontSize: "1.2rem",
                    opacity: 0.8,
                    textTransform: "uppercase",
                }}
            />
            <div
                style={{
                    display: "flex",
                    overflowX: "scroll",
                    marginTop: "0.8rem",
                }}
            >
                {projects
                    .filter((project) => project.roles.includes(service?.title))
                    .map((project) => (
                        <div
                            key={project.id}
                            style={{
                            }}
                        >
                            <ProjectPreview projectId={project.id} imageHref={`/${project.imageHref}.png`}/>
                        </div>
                    ))}
            </div>
        </main>
    );
};

export default ServicesPage;
