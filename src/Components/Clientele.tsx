// Import React from 'react' if you're using React versions prior to 17
// or if your project setup requires import statements for JSX to work.
import EditorH2 from "@/editor/EditorH2";
import EditorH3 from "@/editor/EditorH3";
import EditorP from "@/editor/EditorP";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const clientele = [
    { name: "Xorail" },
    { name: "MBTA" },
    { name: "Rhode Island College" },
    { name: "H.V. Collins" },
    { name: "Amgen" },
    { name: "City of Cerritos" },
    { name: "Mission Hospital" },
    { name: "VTrans" },
    { name: "MassDOT" },
    { name: "ConDOT" },
    { name: "AECOM" },
    { name: "VHB" },
    { name: "Kleinfelder" },
];

const Clientele: React.FC = () => {
    return (
        <div>
            <div
                className="clientele-container"
                style={{
                    position: "relative",
                    display: "flex",
                    marginTop: "Calc(2vw + 9rem)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                width: "100%",
                                top: "-3.5rem",
                                bottom: "3.5rem",
                            }}
                        >
                            <div
                                className="shadow"
                                style={{
                                    // background: "#00704A",
                                    background: "#24463B",
                                    width: "Clamp(16rem, 32vw, 24rem)",
                                    height: "100%",
                                    borderTopRightRadius: "1.6rem",
                                    borderBottomRightRadius: "1.6rem",
                                    color: "white",
                                    paddingTop: "1rem",
                                }}
                            >
                                <EditorH2
                                    style={{
                                        fontSize: "1.4rem",
                                        fontWeight: 200,
                                        letterSpacing: "0.1em",
                                        paddingInline: "5vw",
                                        textTransform: "uppercase",
                                    }}
                                    id="home-page-clientele-title"
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                paddingLeft: "5vw",
                                width: "100%",
                            }}
                        >
                            <div
                                className="shadow services-image-container services-image-border-radius"
                                style={{
                                    position: "relative",
                                    background: "#bbcccc",
                                }}
                            >
                                <Image
                                    fill
                                    src={"/hero3.png"}
                                    alt={"image"}
                                    sizes="100vw"
                                    priority
                                    style={{
                                        objectFit: "cover",
                                    }}
                                    className="services-image-border-radius"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <EditorP
                    id="home-page-clientele-text"
                    style={{
                        lineHeight: "1.4",
                        opacity: 0.6,
                        maxWidth: "36rem",
                        paddingInline: "5vw",
                        marginTop: "2rem",
                    }}
                />
            </div>
            <EditorH2
                id="clientele-title"
                style={{
                    fontWeight: 200,
                    fontSize: "1.4rem",
                    textTransform: "uppercase",
                    marginTop: "2rem",
                    paddingInline: "5vw",
                }}
            />
            <div
            className="flex-direction clientele-list-container"
                style={{
                    display: "flex",
                    marginTop: "2rem",
                    paddingInline: "5vw",
                    borderTop: "0.5px solid #00000088",
                    borderBottom: "0.5px solid #00000088",
                    color: "#000c",
                    paddingBlock: "2rem",
                    alignItems: "flex-start",
                }}
            >
                {clientele.map((client) => {
                    return (
                        <div
                        className="client-name"
                            key={client.name}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                // textTransform: "uppercase",
                                fontWeight: 600,
                            }}
                        >
                            {client.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Clientele;
