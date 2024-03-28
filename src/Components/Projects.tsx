import React from "react";
import PreviewSectionTop from "./PreviewSectionTop";
import StationIcon from "./StationIcon";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/utils/projects";
import { border } from "@/app/utils/colors";
import HoverOverlay from "./HoverOverlay";
import TrainIcon from "./TrainIcon";
import BuildingIcon from "./BuildingIcon";

const Projects: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginTop: "5rem",
            }}
        >
            <PreviewSectionTop path={"home-page-projects"}>
                {/* <StationIcon /> */}
                {/* <TrainIcon /> */}
                <BuildingIcon/>
            </PreviewSectionTop>

            <div
                style={{
                    width: "100%",
                    overflowX: "scroll",
                    marginTop: "1.6rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        paddingBottom: "0.8rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            gap: "2.4rem",
                            borderBlock: border,
                            // background: "white",
                        }}
                    >
                        {projects.map((project) => (
                            <Link
                                href={`/projects/${project.id}`}
                                key={project.id}
                                style={{
                                    height: "Clamp(14rem, 20vw, 18rem)",
                                    minWidth: "Clamp(14rem, 20vw, 18rem)",
                                    position: "relative",
                                    background: "#bbcccc",
                                }}
                                // className="shadow"
                            >
                                <Image
                                    fill
                                    src={`/${project.imageHref}.png`}
                                    alt={"image"}
                                    sizes="300px"
                                    priority
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                                <HoverOverlay />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    // borderBlock: border,
                }}
            >
                <Link
                    href="/projects"
                    className="internal-inline-padding green-hover"
                    style={{
                        paddingBlock: "0.8rem",
                        // fontSize: "1.2rem",
                        fontWeight: 700,
                        lineHeight: "1.2",
                        textTransform: "uppercase",
                        fontFamily: "Favorit",
                    }}
                >
                    View All Projects →
                </Link>
            </div>
        </div>
    );
};

export default Projects;
