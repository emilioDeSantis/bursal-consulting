import ProjectPage from "@/Components/ProjectPage";
import EditorP from "@/editor/EditorP";
import React from "react";

const Page: React.FC = () => {
    return (
        <ProjectPage
            titleId="cerritos-center-title"
            paragraphId="cerritos-center-paragraph"
            clientId="cerritos-center-client"
            imageHref="/cerritos-center.png"
            location="Cerritos, CA"
        >
            <EditorP
                id="cerritos-center-contribution-1"
                style={{
                    lineHeight: "1.4",
                    width: "100%",
                }}
            />
            <EditorP
                id="cerritos-center-contribution-2"
                style={{
                    lineHeight: "1.4",
                    width: "100%",
                }}
            />
            <EditorP
                id="cerritos-center-contribution-3"
                style={{
                    lineHeight: "1.4",
                    width: "100%",
                }}
            />
        </ProjectPage>
    );
};

export default Page;
