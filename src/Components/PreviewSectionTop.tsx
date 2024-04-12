import React from "react";
import EditorH2 from "@/editor/EditorH2";
import EditorH3 from "@/editor/EditorH3";
import EditorP from "@/editor/EditorP";
import { border, green } from "@/app/utils/colors";
import Image from "next/image";

interface PreviewSectionTopProps {
    src: string;
    path: string;
}

const PreviewSectionTop: React.FC<PreviewSectionTopProps> = ({
    src,
    path,

}) => {
    return (
        // <div
        //     className="flex-direction"
        //     style={{
        //         width: "100%",
        //         display: "flex",
        //         borderBlock: border,
        //         background: "white",
        //     }}
        // >
        //     <div
        //         className="internal-inline-padding"
        //         style={{
        //             height: "22rem",
        //             width: "22rem",
        //             paddingBlock: "2rem",
        //             display: "flex",
        //             justifyContent: "center",
        //             alignItems: "center",
        //             // background: "#f2f2f2",
        //         }}
        //     >
        //         {children}
        //     </div>
        //     <div
        //         style={{
        //             height: "auto",
        //             width: 0,
        //             borderRight: border,
        //         }}
        //     />
        //     <div
        //         style={{
        //             width: "auto",
        //             height: 0,
        //             borderBottom: border,
        //         }}
        //     />
        //     <div
        //         className="internal-inline-padding"
        //         style={{
        //             display: "flex",
        //             flexDirection: "column",
        //             justifyContent: "space-between",
        //             height: "auto",
        //             paddingBlock: "2rem",
        //         }}
        //     >
        //         <EditorH2
        //             id={`${path}-title`}
        //             style={{
        //                 fontSize: "1.4rem",
        //                 fontWeight: 300,
        //                 lineHeight: "1.2",
        //                 opacity: 0.6,
        //                 letterSpacing: "0.08em",
        //             }}
        //         />
        //         <div
        //             style={{
        //                 display: "flex",
        //                 flexDirection: "column",
        //                 gap: "1.6rem",
        //             }}
        //         >
        //             <EditorH3
        //                 id={`${path}-subtitle`}
        //                 style={{
        //                     fontSize: "Clamp(2rem, 3vw, 2.8rem)",
        //                     fontWeight: 700,
        //                     lineHeight: "1.2",
        //                     textTransform: "uppercase",
        //                     letterSpacing: "0.08em",
        //                     paddingTop: "4rem",
        //                 }}
        //             />
        //             <EditorP
        //                 id={`${path}-text`}
        //                 style={{
        //                     maxWidth: "30rem",
        //                 }}
        //             />
        //         </div>
        //     </div>
        // </div>

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
            className="illustration-container"
                style={{
                    position: "relative",
                    // background: green,
                    // height: "22rem",
                }}
            >
                <Image
                    fill
                    src={src}
                    alt={"image"}
                    sizes="400px"
                    priority
                    style={{
                        objectFit: "cover",
                        // mixBlendMode: "screen",
                        // opacity: 0.4,
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
                    justifyContent: "center",
                    height: "auto",
                    paddingBlock: "2rem",
                    gap: "1.6rem",
                }}
            >
                <EditorH3
                    id={`${path}-subtitle`}
                    style={{
                        fontSize: "Clamp(2rem, 3vw, 2.8rem)",
                        fontWeight: 700,
                        lineHeight: "1.2",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        paddingTop: "0.6rem",
                    }}
                />
                <EditorP
                    id={`${path}-text`}
                    style={{
                        maxWidth: "30rem",
                    }}
                />
            </div>
        </div>


        // <div
        //     className="flex-direction"
        //     style={{
        //         width: "100%",
        //         display: "flex",
        //         borderBlock: border,
        //         background: "white",
        //         // justifyContent: "center",
        //     }}
        // >
        //     <div
        //         className="internal-inline-padding"
        //         style={{
        //             display: "flex",
        //             flexDirection: "column",
        //             justifyContent: "flex-end",
        //             height: "auto",
        //             paddingBlock: "2rem",
        //             gap: "1.6rem",
        //         }}
        //     >
        //         <EditorH3
        //             id={`${path}-subtitle`}
        //             style={{
        //                 fontSize: "Clamp(2rem, 3vw, 2.8rem)",
        //                 fontWeight: 700,
        //                 lineHeight: "1.2",
        //                 textTransform: "uppercase",
        //                 letterSpacing: "0.08em",
        //                 paddingTop: "0rem",
        //             }}
        //         />
        //         <EditorP
        //             id={`${path}-text`}
        //             style={{
        //                 maxWidth: "30rem",
        //             }}
        //         />
        //     </div>
        // </div>
    );
};

export default PreviewSectionTop;
