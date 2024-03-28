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
import BlocksIcon from "@/Components/BlocksIcon";
import { clientele } from "../utils/clientele";

const Clientele: React.FC = () => {
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
                        <BlocksIcon />
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
                            id={`clientele-page-title`}
                            style={{
                                fontSize: "Clamp(2rem, 3vw, 2.8rem)",
                                fontWeight: 700,
                                lineHeight: "1.2",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                            }}
                        />
                        <EditorP
                            id={`clientele-page-hero-text`}
                            style={{
                                maxWidth: "30rem",
                                marginTop: "1.6rem",
                            }}
                        />
                    </div>
                </div>
            <div
                className="services-links-border internal-inline-padding-left"
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    borderBlock: border,
                    paddingBlock: "0.6rem",
                    marginTop: "1.6rem",
                    background: "white",
                }}
            >
                {clientele.map((client) => (
                    <div
                        key={client.name}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingBlock: "0.8rem",
                            paddingRight: "3rem",
                            fontSize: "1.4rem",
                            opacity: 0.8,
                            // fontFamily: "Favorit",
                            // textTransform: "uppercase",
                            fontWeight: 800,
                        }}
                    >
                        {client.name}
                    </div>
                ))}
                <div style={{ width: "100%", height: 0 }} />
            </div>
            </div>
        </PageContainer>
    );
};

export default Clientele;
