// "use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import EditorDiv from "@/editor/EditorDiv";
import EditorH1 from "@/editor/EditorH1";
import EditorP from "@/editor/EditorP";
import EditorH2 from "@/editor/EditorH2";

const inter = Inter({ subsets: ["latin"] });

// const projects = [{href:"hero2", path: 'orient-heights-station'}, "hero3", "hero2"];
const projects = [
    { href: "hero2", path: "orient-heights-station" },
    { href: "hero3", path: "orient-heights-station" },
    { href: "hero2", path: "orient-heights-station" },
];

export default function Home() {
    return (
        <main
            style={{
                display: "flex",
                flexDirection: "column",
                // background: "#e3faf1",
                // background: "#e3faf1",
            }}
        >
            <div
                className="hero-container"
                style={{
                    position: "relative",
                    display: "flex",
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        marginTop: "Clamp(7rem,12vw,32rem)",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            top: "Clamp(-12rem, -6vw, -3.5rem)",
                            bottom: "Clamp(-12rem, -4vw, -1.5rem)",
                            paddingLeft: "Clamp(7rem, 15vw, 32rem)",
                        }}
                    >
                        <div
                            className="shadow"
                            style={{
                                // background: "#00704A",
                                background: "#24463B",
                                width: "100%",
                                height: "100%",
                                borderTopLeftRadius: "1.6rem",
                                borderBottomLeftRadius: "1.6rem",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            paddingRight: "5vw",
                            width: "100%",
                        }}
                    >
                        <div
                            className="shadow hero-image-container hero-image-border-radius"
                            style={{
                                position: "relative",
                            }}
                        >
                            <Image
                                fill
                                // src={"/mbta_station_illustration.png"}
                                src={"/hero2.png"}
                                alt={"image"}
                                sizes="100vw"
                                priority
                                style={{
                                    objectFit: "cover",
                                }}
                                className="hero-image-border-radius"
                            />
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        position: "absolute",
                        top: "Clamp(5rem, 9vw, 32rem)",
                        left: 0,
                        paddingInline: "5vw",
                        width: "Min(100%, 16rem)",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    {Array.from({ length: 7 }).map((_, index) => (
                        <div
                            key={index}
                            style={{
                                height: "0.6rem",
                                width: "0.6rem",
                                border: "1px solid #00BB7B",
                                transform: `rotate(${(index * 90) / 11}deg)`,
                                borderRadius: "100%",
                            }}
                        />
                    ))}
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingInline: "5vw",
                        justifyContent: "flex-end",
                        width: "100%",
                    }}
                >
                    <EditorH1
                        id="home-page-title"
                        style={{
                            fontSize: "Clamp(2rem, 4vw, 3rem)",
                            fontWeight: 200,
                            lineHeight: "1.2",
                            marginTop: "3.6rem",
                            textTransform: "uppercase",
                        }}
                    />
                    <div
                        style={{
                            height: "0.8px",
                            background: "#191919",
                            width: "8rem",
                            marginTop: "1rem",
                        }}
                    />
                    <EditorP
                        id="home-page-hero-text"
                        style={{
                            lineHeight: "1.4",
                            marginTop: "3.6rem",
                            opacity: 0.6,
                            maxWidth: "36rem",
                        }}
                    />
                    <Link
                        href="/contact"
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
                        Contact Us Today →
                    </Link>
                </div>
            </div>

            <div
                style={{
                    position: "relative",
                    width: "100%",
                    marginTop: "Calc(12vw + 10rem)",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        top: "-3.5rem",
                    }}
                >
                    <div
                        className="shadow"
                        style={{
                            // background: "#00704A",
                            background: "#24463B",
                            width: "Clamp(16rem, 32vw, 24rem)",
                            height: "Clamp(12rem, 24vw, 18rem)",
                            borderTopRightRadius: "1.6rem",
                            borderBottomRightRadius: "1.6rem",
                            color: "white",
                            paddingTop: "1rem",
                        }}
                    ><EditorH2
                    style={{

                        fontSize: "1.4rem",
                        fontWeight: 200,
                        letterSpacing: "0.1em",
                        paddingInline: "5vw",
                        textTransform: "uppercase",
                    }}
                        id="home-page-projects-title"/>
                    </div>
                </div>
                <div
                    style={{
                        width: "100vw",
                        overflowX: "scroll",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            gap: "1rem",
                            paddingInline: "5vw",
                            paddingBottom: "0.8rem",
                        }}
                    >
                        {projects.map((project, index) => (
                            <Link
                                href={`/projects/${project.path}`}
                                key={index}
                                style={{
                                    height: "Clamp(12rem, 24vw, 18rem)",
                                    minWidth: "Clamp(20rem, 36vw, 30rem)",
                                    position: "relative",
                                    borderRadius: "1.6rem",
                                }}
                                // className="shadow"
                            >
                                <Image
                                    fill
                                    src={`/${project.href}.png`}
                                    alt={"image"}
                                    sizes="100vw"
                                    priority
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "1.6rem",
                                    }}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    paddingInline: "5vw",
                    width: "100%",
                    marginTop: "2rem",
                    alignItems: "flex-start",
                }}
            >
                <EditorP
                    id="home-page-projects-text"
                    style={{
                        lineHeight: "1.4",
                        opacity: 0.6,
                        maxWidth: "36rem",
                    }}
                />
                <Link
                    href="/projects"
                    style={{
                        color: "#00BB7B",
                        paddingBlock: "1rem",
                        marginTop: "0.4rem",
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
                    View All Projects →
                </Link>
            </div>
            <div style={{ height: "20rem" }} />
        </main>
    );
}
