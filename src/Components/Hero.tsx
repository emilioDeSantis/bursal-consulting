// Import React from 'react' if you're using React versions prior to 17
// or if your project setup requires import statements for JSX to work.
import { border, green } from "@/app/utils/colors";
import EditorH1 from "@/editor/EditorH1";
import EditorH2 from "@/editor/EditorH2";
import EditorH3 from "@/editor/EditorH3";
import EditorP from "@/editor/EditorP";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
    return (
        <div
            className="padding-inline"
            style={{
                display: "flex",
                width: "100%",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    borderInline: border,
                    zIndex: 10,
                }}
            ></div>
            <div
                className="hero-container-2"
                style={{
                    position: "absolute",
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "stretch",
                        width: "100%",
                        height: "Calc(22vw + 11rem)",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            position: "absolute",
                            borderBlock: border,
                            display: "flex",
                            justifyContent: "flex-end",
                            top: "-2rem",
                            bottom: "-2rem",
                        }}
                    >
                        <div
                            className="hero-green-width"
                            style={{
                                background: green,
                                height: "100%",
                                borderLeft: border,
                            }}
                        />
                    </div>
                </div>
            </div>
            <div
                className="hero-container-2"
                style={{
                    position: "absolute",
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                }}
            >
                <div
                    className="flex-direction-reverse padding-inline hero-container-3"
                    style={{
                        display: "flex",
                        alignItems: "stretch",
                        width: "100%",
                        borderBlock: border,
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "Calc(22vw + 11rem)",
                            position: "relative",
                            background: "#bbcccc",
                            borderLeft: border,
                        }}
                    >
                        <Image
                            fill
                            src={"/orient-heights-station-2.png"}
                            alt={"image"}
                            sizes="100vw"
                            priority
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                    <div
                        className="internal-inline-padding hero-text-padding-block"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            // paddingBlock: "2rem",
                            width: "100%",
                            justifyContent: "space-between",
                            minHeight: "100%",
                            flexGrow: 1,
                        }}
                    >
                        <div />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <EditorH1
                                id="home-page-title"
                                style={{
                                    fontSize: "Clamp(1.6rem, 3vw, 2.8rem)",
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    lineHeight: "1.2",
                                    textTransform: "uppercase",
                                    maxWidth: "Clamp(24rem, 40vw, 36rem)",
                                }}
                            />
                            <EditorP
                                id="home-page-hero-text"
                                style={{
                                    lineHeight: "1.4",
                                    marginTop: "1rem",
                                    opacity: 0.6,
                                    maxWidth: "30rem",
                                }}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <EditorP
                                id="home-page-hero-text-2"
                                style={{
                                    lineHeight: "1.4",
                                    marginTop: "1.6rem",
                                    opacity: 0.5,
                                    maxWidth: "30rem",
                                    textTransform: "uppercase",
                                    fontWeight: 300,
                                    letterSpacing: "0.08em",
                                }}
                            />

                            <EditorP
                                id="home-page-hero-text-3"
                                style={{
                                    lineHeight: "1",
                                    // marginTop: "0.6rem",
                                    maxWidth: "30rem",
                                    textTransform: "uppercase",
                                    fontSize: "Clamp(2rem, 2vw, 2.4rem)",
                                    fontWeight: 600,
                                    letterSpacing: "0.08em",
                                    color: "black",
                                    opacity: 1,
                                }}
                            />
                            <Link
                                className="button-hover"
                                href="/contact"
                                style={{
                                    // color: "#00BB7B",
                                    border: "1px solid #00BB7B",
                                    padding: "0.8rem 3.6rem",
                                    marginTop: "1.6rem",
                                    // background: "none",
                                    fontWeight: 700,
                                    // fontSize: "1.2rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    // borderRadius: "1000px",
                                    fontFamily: "Favorit",
                                    textTransform: "uppercase",
                                    whiteSpace: "nowrap",
                                    width: "fit-content",
                                    zIndex: 10,
                                }}
                            >
                                Contact →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100vh",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "3rem",
                borderBottom: border,
                background: "white",
            }}
        >
            <div
                // className="hero-image-container internal-inline-padding""
                style={{
                    width: "100%",
                    // height: "30rem",
                    height: "50vh",
                    position: "relative",
                    background: "#bbcccc",
                }}
            >
                <Image
                    fill
                    src={"/orient-heights-station-2.png"}
                    alt={"image"}
                    sizes="100vw"
                    priority
                    style={{
                        objectFit: "cover",
                    }}
                />
                {/* <div
                    className="padding-inline"
                    style={{
                        position: "absolute",
                        bottom: "2rem",
                    }}
                >
                    <h2
                        style={{
                            fontSize: "1.6rem",
                            fontWeight: 700,
                            // letterSpacing: "0.08em",
                            lineHeight: "1",
                            // textTransform: "uppercase",
                            color: "white",
                        }}
                    >
                        Bursal Consulting <br></br>& Management
                    </h2>
                </div> */}
            </div>

            <div
                className="padding-inline flex-direction"
                style={{
                    display: "flex",
                    paddingTop: "3rem",
                    paddingBottom: "7rem",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    width: "100%",
                    flexGrow: 1,
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        justifyContent: "space-evenly",
                    }}
                >
                    <EditorH1
                        id="home-page-title"
                        style={{
                            fontSize: "Clamp(1.8rem, 4vw, 3rem)",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            lineHeight: "1",
                            textTransform: "uppercase",
                            maxWidth: "Clamp(24rem, 40vw, 36rem)",
                        }}
                    />
                    <EditorP
                        id="home-page-hero-text"
                        style={{
                            lineHeight: "1.4",
                            marginTop: "1.6rem",
                            opacity: 0.6,
                            maxWidth: "30rem",
                        }}
                    />
                </div>
                <Link
                    className="button-hover"
                    href="/contact"
                    style={{
                        // color: "#00BB7B",
                        border: "1px solid #00BB7B",
                        padding: "0.6rem 2.4rem",
                        marginTop: "3rem",
                        // background: "none",
                        fontWeight: 700,
                        // fontSize: "1.2rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // borderRadius: "1000px",
                        fontFamily: "Favorit",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                    }}
                >
                    Contact Us Today →
                </Link>
            </div>
        </div>
    );
};

export default Hero;
