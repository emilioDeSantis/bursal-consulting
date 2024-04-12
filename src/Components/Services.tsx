import { services } from "@/app/utils/services";
import EditorH2 from "@/editor/EditorH2";
import EditorP from "@/editor/EditorP";
import Image from "next/image";
import Link from "next/link";
import PreviewSectionTop from "./PreviewSectionTop";
import StationIcon from "./StationIcon";
import { projects } from "@/app/utils/projects";
import { border } from "@/app/utils/colors";
import ToolboxIcon from "./ToolboxIcon";

const Services = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginTop: "5rem",
            }}
        >
            <PreviewSectionTop path={"home-page-services"} src="/cerritos-center.png">
                {/* <ToolboxIcon /> */}
            </PreviewSectionTop>
            <div
                className="flex-direction"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    borderBlock: border,
                    marginTop: "1.6rem",
                    background: "white",
                }}
            >
                <div
                    className="services-links-border internal-inline-padding-left mobile-padding-block"
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                    }}
                >
                    {services.map((service) => (
                        <Link
                            className="opacity-hover"
                            href={`/services/${service.id}`}
                            key={service.id}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingBlock: "1rem",
                                paddingRight: "3rem",
                                // fontSize: "1.1rem",
                                fontFamily: "Favorit",
                                textTransform: "uppercase",
                            }}
                        >
                            {`${service.title} →`}
                        </Link>
                    ))}
                    <div style={{ width: "100%", height: 0 }} />
                </div>
                <Link
                    href="/services"
                    className="services-link-border internal-inline-padding green-hover"
                    style={{
                        paddingBlock: "1rem",
                        // fontSize: "1.1rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontFamily: "Favorit",
                        whiteSpace: "nowrap",
                        margin: 0,
                    }}
                >
                    View All Services →
                </Link>
            </div>
        </div>
    );

    // return (
    //     <div
    //         className="services-container"
    //         style={{
    //             position: "relative",
    //             display: "flex",
    //             marginTop: "Calc(2vw + 9rem)",
    //         }}
    //     >
    //         <div style={{ display: "flex", flexDirection: "column" }}>
    //             <div style={{ position: "relative", width: "100%" }}>
    //                 <div
    //                     style={{
    //                         position: "absolute",
    //                         width: "100%",
    //                         top: "-3.5rem",
    //                         bottom: "3.5rem",
    //                     }}
    //                 >
    //                     <div
    //                         className="shadow"
    //                         style={{
    //                             background: "#24463B",
    //                             width: "Clamp(16rem, 32vw, 24rem)",
    //                             height: "100%",
    //                             borderTopRightRadius: "1.6rem",
    //                             borderBottomRightRadius: "1.6rem",
    //                             color: "white",
    //                             paddingTop: "1rem",
    //                         }}
    //                     >
    //                         <EditorH2
    //                             style={{
    //                                 fontSize: "1.4rem",
    //                                 fontWeight: 200,
    //                                 letterSpacing: "0.1em",
    //                                 paddingInline: "5vw",
    //                                 textTransform: "uppercase",
    //                             }}
    //                             id="home-page-services-title"
    //                         />
    //                     </div>
    //                 </div>
    //                 <div style={{ paddingLeft: "5vw", width: "100%" }}>
    //                     <div
    //                         className="shadow services-image-container services-image-border-radius"
    //                         style={{
    //                             position: "relative",
    //                             background: "#bbcccc",
    //                         }}
    //                     >
    //                         <Image
    //                             fill
    //                             src={"/hero3.png"}
    //                             alt={"image"}
    //                             sizes="100vw"
    //                             priority
    //                             style={{ objectFit: "cover" }}
    //                             className="services-image-border-radius"
    //                         />
    //                     </div>
    //                 </div>
    //             </div>

    //             <div style={{ height: "2rem" }} />
    //             <EditorP
    //                 id="home-page-services-text"
    //                 style={{
    //                     lineHeight: "1.4",
    //                     opacity: 0.6,
    //                     maxWidth: "36rem",
    //                     paddingInline: "5vw",
    //                 }}
    //             />
    //         </div>

    //         <div
    //             className="services-links"
    //             style={{
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 width: "100%",
    //                 marginTop: "4rem",
    //                 alignItems: "flex-end",
    //                 justifyContent: "flex-end",
    //             }}
    //         >
    //             {services.map((service) => (
    //                 <div key={service.id}>
    //                     <div
    //                         style={{
    //                             height: "1px",
    //                             width: "100%",
    //                             background: "#00BB7B",
    //                         }}
    //                     />
    //                     <Link
    //                         href={`/services/${service.id}`}
    //                         style={{
    //                             color: "#00BB7B",
    //                             paddingBlock: "0.8rem",
    //                             fontWeight: 300,
    //                             fontSize: "1.2rem",
    //                             width: "100%",
    //                             textTransform: "uppercase",
    //                         }}
    //                     >
    //                         {service.title}
    //                     </Link>
    //                 </div>
    //             ))}
    //             <div
    //                 style={{
    //                     height: "1px",
    //                     width: "100%",
    //                     background: "#00BB7B",
    //                 }}
    //             />
    //             <Link
    //                 href="/projects"
    //                 style={{
    //                     color: "#00BB7B",
    //                     paddingBlock: "1rem",
    //                     marginTop: "Clamp(2rem, 5vw, 3rem)",
    //                     background: "none",
    //                     fontWeight: 300,
    //                     fontSize: "1.2rem",\
    //                     display: "flex",
    //                     justifyContent: "center",
    //                     alignItems: "center",
    //                     borderRadius: "1000px",
    //                 }}
    //             >
    //                 View All Services →
    //             </Link>
    //         </div>
    //     </div>
    // );
};

export default Services;
