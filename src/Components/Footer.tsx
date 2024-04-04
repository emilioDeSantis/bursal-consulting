import React, { Fragment } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { border, green } from "@/app/utils/colors";
import { services } from "@/app/utils/services";
import PageContainer from "./PageContainer";
import PhoneCallButton from "./PhoneCallButton";
import EmailCopyButton from "./EmailCopyButton";

const Footer: React.FC = () => {
    return (
        <Fragment>
            <PageContainer>
                <div
                    className="internal-inline-padding"
                    style={{
                        textTransform: "uppercase",
                        lineHeight: "90%",
                        fontWeight: 300,
                        letterSpacing: "0.07em",
                        fontSize: "2rem",
                        opacity: 0.6,
                        // marginTop: "5rem",
                        // marginBottom: "1.6rem",
                        height: "3rem",
                        color: "#8FC0AF",
                    }}
                >
                    {/* Bursal<br></br>Consulting<br></br>&amp; Management */}
                </div>
            </PageContainer>
            <footer
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    paddingBottom: "1rem",
                    borderTop: border,
                    background: "#76A595",
                    color: "white",
                }}
            >
                <div
                    className="flex-direction"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        marginTop: "1rem",
                        // borderBlock: border,
                    }}
                >
                    <div
                        className="padding-inline"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            marginTop: "3rem",
                        }}
                    >
                        <h2
                            style={{
                                fontWeight: 700,
                                fontSize: "2rem",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                            }}
                        >
                            Explore
                        </h2>
                        <nav
                            style={{
                                marginTop: "1rem",
                                // opacity: 0.7,
                            }}
                        >
                            <ul
                                style={{
                                    fontWeight: 700,
                                    // letterSpacing: "0.05em",
                                    display: "flex",
                                    flexDirection: "column",
                                    fontSize: "0.9rem",
                                    textTransform: "uppercase",
                                    fontFamily: "Favorit",
                                    lineHeight: 1.8,
                                }}
                            >
                                <Link href={"/"}>Home</Link>
                                <Link href={"/projects"}>Projects</Link>
                                <Link href={"/clientele"}>Clienetele</Link>
                                <div
                                    style={{
                                        height: "2rem",
                                    }}
                                />
                                <Link href={"/services"}>Services</Link>
                                <div
                                    style={{
                                        height: "0.6rem",
                                    }}
                                />
                                {services.map((service) => (
                                    <Link
                                        key={service.id}
                                        href={"/services/" + service.id}
                                        style={{
                                            lineHeight: 1.4,
                                            textTransform: "none",
                                            fontWeight: 300,
                                            fontSize: "1.4rem",
                                            fontFamily: "Aeonik",
                                            letterSpacing: "0.04em",
                                        }}
                                    >
                                        {service.title} ↗
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    {/* <div
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
                /> */}
                    <section
                        className="padding-inline"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            height: "auto",
                            justifyContent: "flex-end",
                            paddingTop: "3rem",
                        }}
                    >
                        <h2
                            style={{
                                fontWeight: 700,
                                fontSize: "2rem",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                            }}
                        >
                            Contact
                        </h2>
                        <div
                            style={{
                                fontWeight: 300,
                                // marginTop: "0.5rem",
                                // opacity: 0.7,
                                display: "flex",
                                flexDirection: "column",
                                lineHeight: 1.8,
                            }}
                        >
                            <PhoneCallButton />
                            <EmailCopyButton />
                        </div>
                    </section>
                </div>
                <div
                    className="padding-inline"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        opacity: 0.8,
                        fontWeight: 300,
                        fontSize: "0.8rem",
                        alignItems: "flex-end",
                        marginTop: "3rem",
                    }}
                >
                    <p
                        style={{
                            textTransform: "uppercase",
                            opacity: 1,
                        }}
                    >
                        {`© ${new Date().getFullYear()} Bursal Construction Management LLC.`}
                    </p>
                    <Link
                        target="_blank"
                        style={{
                            whiteSpace: "nowrap",
                        }}
                        href="https://www.ui-design-studio.com"
                    >
                        UI Design Studio
                    </Link>
                </div>
            </footer>
        </Fragment>
    );
};

export default Footer;
