import { border, green } from "@/app/utils/colors";
import EditorH2 from "@/editor/EditorH2";
import EditorH3 from "@/editor/EditorH3";
import EditorP from "@/editor/EditorP";
import React from "react";

const Certifications: React.FC = () => {
    const checkMarkSvg = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            style={{
                width: "3rem",
                height: "3rem",
            }}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75l2.25 2.25L15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginTop: "2rem",
            }}
        >
            <div
                className="flex-direction shadow"
                style={{
                    width: "100%",
                    display: "flex",
                    borderBlock: border,
                    background: green,
                    justifyContent: "center",
                }}
            >
                <div
                    className="internal-inline-padding"
                    style={{
                        paddingBlock: "1.4rem",
                        gap: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        color: "white",
                        width: "100%",
                        alignItems: "center",
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
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            {checkMarkSvg}
                            <EditorH3
                                id="wbe-title"
                                style={{
                                    fontSize: "1.4rem",
                                    fontWeight: 300,
                                    lineHeight: "1.2",
                                    opacity: 0.8,
                                    letterSpacing: "0.08em",
                                }}
                            />
                        </div>
                        <EditorH3
                            id="wbe-text"
                            style={{
                                fontSize: "5rem",
                                fontWeight: 700,
                                lineHeight: "1.2",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                paddingTop: "0.4rem",
                                maxWidth: "20rem",
                            }}
                        />
                    </div>
                </div>

                <div
                    style={{
                        height: "auto",
                        width: 0,
                        borderRight: "1px solid#ffffff44",
                    }}
                />
                <div
                    style={{
                        width: "auto",
                        height: 0,
                        borderBottom: "1px solid#ffffff44",
                    }}
                />
                <div
                    className="internal-inline-padding"
                    style={{
                        paddingBlock: "1.4rem",
                        gap: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        color: "white",
                        width: "100%",
                        alignItems: "center",
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
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            {checkMarkSvg}
                            <EditorH3
                                id="wbe-title"
                                style={{
                                    fontSize: "1.4rem",
                                    fontWeight: 300,
                                    lineHeight: "1.2",
                                    opacity: 0.8,
                                    letterSpacing: "0.08em",
                                }}
                            />
                        </div>
                        <EditorH3
                            id="dbe-text"
                            style={{
                                fontSize: "5rem",
                                fontWeight: 700,
                                lineHeight: "1.2",
                                textTransform: "uppercase",
                                letterSpacing: "0.08em",
                                paddingTop: "0.4rem",
                                maxWidth: "20rem",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div
            // className="certifications-container"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                background: green,
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    color: "white",
                    paddingBlock: "2.4rem",
                    gap: "2rem",
                    paddingInline: "5vw",
                }}
            >
                <EditorP
                    id="certifications-text"
                    style={{
                        maxWidth: "36rem",
                        fontSize: "1.1rem",
                        opacity: 0.7,
                        fontWeight: 300,
                    }}
                />
                <div
                    className="certifications-cards-container"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        className="shadow"
                        style={{
                            backgroundColor: "#ffffff11",
                            borderRadius: "1.6rem",
                            paddingInline: "1.6rem",
                            paddingBlock: "1rem",
                            gap: "1rem",
                            display: "flex",
                            alignItems: "center",
                            border: "0.5px solid #ffffff88",
                        }}
                    >
                        {checkMarkSvg}
                        <div>
                            <EditorH3
                                id="wbe-title"
                                style={{
                                    textTransform: "uppercase",
                                    fontWeight: 200,
                                    fontSize: "2rem",
                                }}
                            />
                            <EditorH3
                                id="wbe-text"
                                style={{
                                    textTransform: "uppercase",
                                    fontWeight: 500,
                                    fontSize: "1rem",
                                    maxWidth: "12rem",
                                    letterSpacing: "0.06em",
                                    marginTop: "1rem",
                                }}
                            />
                        </div>
                    </div>
                    <div
                        className="shadow"
                        style={{
                            backgroundColor: "#ffffff11",
                            borderRadius: "1.6rem",
                            paddingInline: "1.6rem",
                            paddingBlock: "1rem",
                            gap: "1rem",
                            display: "flex",
                            alignItems: "center",
                            border: "0.5px solid #ffffff88",
                        }}
                    >
                        {checkMarkSvg}
                        <div>
                            <EditorH3
                                id="wbe-title"
                                style={{
                                    textTransform: "uppercase",
                                    fontWeight: 200,
                                    fontSize: "2rem",
                                }}
                            />
                            <EditorH3
                                id="dbe-text"
                                style={{
                                    textTransform: "uppercase",
                                    fontWeight: 500,
                                    fontSize: "1rem",
                                    maxWidth: "12rem",
                                    letterSpacing: "0.06em",
                                    marginTop: "1rem",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
