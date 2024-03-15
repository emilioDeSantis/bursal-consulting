import ProjectPage from "@/Components/ProjectPage";
import EditorP from "@/editor/EditorP";
import React from "react";

const Page: React.FC = () => {
    return (
        <ProjectPage
            titleId="assembly-square-station-title"
            paragraphId="assembly-square-station-paragraph"
            clientId="assembly-square-station-client"
            imageHref="/assembly-square.png"
            location="Boston, MA"
        >
            <EditorP
                id="assembly-square-station-contribution-1"
                style={{
                    lineHeight: "1.4",
                    width: "100%",
                }}
            />
            <EditorP
                id="assembly-square-station-contribution-2"
                style={{
                    lineHeight: "1.4",
                    width: "100%",
                }}
            />
            <EditorP
                id="assembly-square-station-contribution-3"
                style={{
                    lineHeight: "1.4",
                    width: "100%",
                }}
            />
        </ProjectPage>
    );
};

export default Page;
