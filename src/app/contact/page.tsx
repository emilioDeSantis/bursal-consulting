import EmailCopyButton from "@/Components/EmailCopyButton";
import PageContainer from "@/Components/PageContainer";
import PhoneCallButton from "@/Components/PhoneCallButton";
import EditorH1 from "@/editor/EditorH1";
import EditorP from "@/editor/EditorP";
import React from "react";
import { border } from "../utils/colors";
import TrainIcon from "@/Components/TrainIcon";

const ContactPage: React.FC = () => {
    return (
        <PageContainer>
            <div
                className="flex-direction project-margin-top"
                style={{
                    width: "100%",
                    display: "flex",
                    borderBlock: border,
                    background: "white",
                }}
            >
                <div
                    className="internal-inline-padding contact-icon-container"
                    style={{
                        paddingBlock: "2rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        // background: "#f2f2f2",
                    }}
                >
                    <TrainIcon />
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
                        justifyContent: "space-between",
                        height: "auto",
                        paddingBlock: "2rem",
                    }}
                >
                    <EditorH1
                        id="contact-title"
                        style={{
                            fontSize: "Clamp(2rem, 3vw, 2.8rem)",
                            fontWeight: 700,
                            lineHeight: "1.2",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            marginTop: "1.6rem",
                        }}
                    />
                    <EditorP
                        id="contact-paragraph"
                        style={{
                            maxWidth: "30rem",
                            marginTop: "1.6rem",
                        }}
                    />
                    <EmailCopyButton style={{ color: "#0009" }} />
                    <PhoneCallButton style={{ color: "#0009" }} />
                </div>
            </div>
        </PageContainer>
    );
};

export default ContactPage;
