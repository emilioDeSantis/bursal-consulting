import { green } from "@/app/utils/colors";
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
            strokeWidth="0.3"
            stroke="currentColor"
            style={{
                width: "5rem",
                height: "5rem",
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
        className="certifications-container"
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
