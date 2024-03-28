// Import React from 'react' if you're using React versions prior to 17
// or if your project setup requires import statements for JSX to work.
import { border } from "@/app/utils/colors";
import EditorH2 from "@/editor/EditorH2";
import EditorH3 from "@/editor/EditorH3";
import EditorP from "@/editor/EditorP";
import React from "react";

const About: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginTop: "5rem",
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
                        display: "flex",
                        flexDirection: "column",
                        paddingBlock: "2rem",
                        flexGrow: 1,
                    }}
                >
                    <EditorH2
                        id="about-title"
                        style={{
                            fontSize: "1.4rem",
                            fontWeight: 300,
                            lineHeight: "1.2",
                            opacity: 0.6,
                            letterSpacing: "0.08em",
                        }}
                    />

                    <EditorH3
                        id="about-subtitle"
                        style={{
                            fontSize: "Clamp(2.4rem, 3vw, 3.2rem)",
                            fontWeight: 700,
                            lineHeight: "1.2",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            paddingTop: "4rem",
                            maxWidth: "Clamp(26rem, 30vw, 32rem)",
                        }}
                    />
                    <EditorP
                        id="about-paragragh"
                        style={{
                            marginTop: "1.6rem",
                            // fontSize: "1.3rem",
                            // fontWeight: 300,
                            // lineHeight: "1.3",
                            maxWidth: "30rem",
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
                        paddingBlock: "2rem",
                        justifyContent: 'flex-end',
                    }}
                >
                    <EditorH3
                        id="about-degrees-title"
                        style={{
                            fontWeight: 400,
                            lineHeight: "1.2",
                            textTransform: "uppercase",
                            fontSize: "1.2rem",
                            letterSpacing: "0.1em",
                            opacity: 0.8,
                            marginBottom: "0.6rem",
                        }}
                    />
                    <EditorP
                        id="about-degree-1"
                        style={{
                            fontWeight: 400,
                            lineHeight: "1.2",
                            marginTop: "0.4rem",
                            opacity: 0.6,
                        }}
                    />
                    <EditorP
                        id="about-degree-2"
                        style={{
                            fontWeight: 400,
                            lineHeight: "1.2",
                            marginTop: "0.4rem",
                            opacity: 0.6,
                        }}
                    />
                </div>
            </div>
        </div>
    );
    return (
        <div
            className="about-container"
            style={{
                display: "flex",
                width: "100%",
                paddingInline: "5vw",
                marginTop: "6rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <EditorH2
                    id="about-title"
                    style={{
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        // textTransform: "uppercase",
                    }}
                />

                <div
                    style={{
                        height: "0.8px",
                        background: "#191919",
                        width: "8rem",
                        marginTop: "1.6rem",
                    }}
                />
                <EditorH3
                    id="about-subtitle"
                    style={{
                        fontWeight: 300,
                        fontSize: "1.6rem",
                        textTransform: "uppercase",
                        marginTop: "0.3rem",
                        maxWidth: "20rem",
                    }}
                />
                <EditorP
                    id="about-paragragh"
                    style={{
                        marginTop: "3rem",
                        // fontSize: "1.3rem",
                        // fontWeight: 300,
                        // lineHeight: "1.3",
                        maxWidth: "40rem",
                    }}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <EditorH3
                    id="about-degrees-title"
                    style={{
                        fontWeight: 400,
                        lineHeight: "1.2",
                        textTransform: "uppercase",
                        fontSize: "1.2rem",
                        letterSpacing: "0.1em",
                        opacity: 0.8,
                        marginTop: "5rem",
                        marginBottom: "0.6rem",
                    }}
                />
                <EditorP
                    id="about-degree-1"
                    style={{
                        fontWeight: 400,
                        lineHeight: "1.2",
                        marginTop: "0.4rem",
                        opacity: 0.6,
                    }}
                />
                <EditorP
                    id="about-degree-2"
                    style={{
                        fontWeight: 400,
                        lineHeight: "1.2",
                        marginTop: "0.4rem",
                        opacity: 0.6,
                    }}
                />
            </div>
        </div>
    );
};

export default About;
