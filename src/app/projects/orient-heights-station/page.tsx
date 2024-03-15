import ProjectPage from "@/Components/ProjectPage";
import EditorP from "@/editor/EditorP";
import React from "react";

const Page: React.FC = () => {
    return (
        <ProjectPage
            titleId="orient-heights-station-title"
            paragraphId="orient-heights-station-paragraph"
            clientId="orient-heights-station-client"
            imageHref="/orient-heights.png"
            location="Boston, MA"
        >
            <EditorP
                id="orient-heights-station-contribution-1"
                style={{
                    lineHeight: "1.4",
                    width: "100%",
                }}
            />
            <EditorP
                id="orient-heights-station-contribution-2"
                style={{
                    lineHeight: "1.4",
                    width: "100%",
                }}
            />
            <EditorP
                id="orient-heights-station-contribution-3"
                style={{
                    lineHeight: "1.4",
                    width: "100%",
                }}
            />
        </ProjectPage>
    );
};

export default Page;
