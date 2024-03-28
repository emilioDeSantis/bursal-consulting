// Import React from 'react' if you're using React versions prior to 17
// or if your project setup requires import statements for JSX to work.
import EditorH2 from "@/editor/EditorH2";
import EditorH3 from "@/editor/EditorH3";
import EditorP from "@/editor/EditorP";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PreviewSectionTop from "./PreviewSectionTop";
import StationIcon from "./StationIcon";
import { border } from "@/app/utils/colors";
import BlocksIcon from "./BlocksIcon";
import { clientele } from "@/app/utils/clientele";


const Clientele: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginTop: "8rem",
            }}
        >
            <PreviewSectionTop path={"home-page-clientele"}>
                <BlocksIcon />
            </PreviewSectionTop>

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
                        paddingBlock: "1rem",
                        // fontSize: "1.2rem",
                        fontWeight: 700,
                        lineHeight: "1.2",
                        textTransform: "uppercase",
                        fontFamily: "Favorit",
                    }}
                >
                    View All Clientele →
                </Link>
            </div>
        </div>
    );
    // return (
    //     <div>
    //         <div
    //             className="clientele-container"
    //             style={{
    //                 position: "relative",
    //                 display: "flex",
    //                 marginTop: "Calc(2vw + 9rem)",
    //             }}
    //         >
    //             <div
    //                 style={{
    //                     display: "flex",
    //                     flexDirection: "column",
    //                 }}
    //             >
    //                 <div
    //                     style={{
    //                         position: "relative",
    //                         width: "100%",
    //                     }}
    //                 >
    //                     <div
    //                         style={{
    //                             position: "absolute",
    //                             width: "100%",
    //                             top: "-3.5rem",
    //                             bottom: "3.5rem",
    //                         }}
    //                     >
    //                         <div
    //                             className="shadow"
    //                             style={{
    //                                 // background: "#00704A",
    //                                 background: "#24463B",
    //                                 width: "Clamp(16rem, 32vw, 24rem)",
    //                                 height: "100%",
    //                                 borderTopRightRadius: "1.6rem",
    //                                 borderBottomRightRadius: "1.6rem",
    //                                 color: "white",
    //                                 paddingTop: "1rem",
    //                             }}
    //                         >
    //                             <EditorH2
    //                                 style={{
    //                                     fontSize: "1.4rem",
    //                                     fontWeight: 200,
    //                                     letterSpacing: "0.1em",
    //                                     paddingInline: "5vw",
    //                                     textTransform: "uppercase",
    //                                 }}
    //                                 id="home-page-clientele-title"
    //                             />
    //                         </div>
    //                     </div>
    //                     <div
    //                         style={{
    //                             paddingLeft: "5vw",
    //                             width: "100%",
    //                         }}
    //                     >
    //                         <div
    //                             className="shadow services-image-container services-image-border-radius"
    //                             style={{
    //                                 position: "relative",
    //                                 background: "#bbcccc",
    //                             }}
    //                         >
    //                             <Image
    //                                 fill
    //                                 src={"/hero3.png"}
    //                                 alt={"image"}
    //                                 sizes="100vw"
    //                                 priority
    //                                 style={{
    //                                     objectFit: "cover",
    //                                 }}
    //                                 className="services-image-border-radius"
    //                             />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //             <EditorP
    //                 id="home-page-clientele-text"
    //                 style={{
    //                     lineHeight: "1.4",
    //                     opacity: 0.6,
    //                     maxWidth: "36rem",
    //                     paddingInline: "5vw",
    //                     marginTop: "2rem",
    //                 }}
    //             />
    //         </div>
    //         <EditorH2
    //             id="clientele-title"
    //             style={{
    //                 fontWeight: 200,
    //                 fontSize: "1.4rem",
    //                 textTransform: "uppercase",
    //                 marginTop: "2rem",
    //                 paddingInline: "5vw",
    //             }}
    //         />
    //         <div
    //             className="flex-direction clientele-list-container"
    //             style={{
    //                 display: "flex",
    //                 marginTop: "2rem",
    //                 paddingInline: "5vw",
    //                 borderTop: "0.5px solid #00000088",
    //                 borderBottom: "0.5px solid #00000088",
    //                 color: "#000c",
    //                 paddingBlock: "2rem",
    //                 alignItems: "flex-start",
    //             }}
    //         >
    //             {clientele.map((client) => {
    //                 return (
    //                     <div
    //                         className="client-name"
    //                         key={client.name}
    //                         style={{
    //                             display: "flex",
    //                             justifyContent: "center",
    //                             alignItems: "center",
    //                             // textTransform: "uppercase",
    //                             fontWeight: 600,
    //                         }}
    //                     >
    //                         {client.name}
    //                     </div>
    //                 );
    //             })}
    //         </div>
    //     </div>
    // );
};

export default Clientele;
