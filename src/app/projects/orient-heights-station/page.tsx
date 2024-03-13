import ProjectPage from "@/Components/ProjectPage";
import EditorP from "@/editor/EditorP";
import React from "react";

const Page: React.FC = () => {
    return (
        <ProjectPage
            titleId="orient-heights-station-title"
            paragraphId="orient-heights-station-paragraph"
            imageHref="/hero3.png"
            location="Boston, MA"
        >
            <EditorP
                id="orient-heights-station-contribution-1"
                style={{
                    lineHeight: "1.4",
                    marginTop: "3.6rem",
                    opacity: 0.6,
                    maxWidth: "36rem",
                }}
            />
            <EditorP
                id="orient-heights-station-contribution-2"
                style={{
                    lineHeight: "1.4",
                    marginTop: "3.6rem",
                    opacity: 0.6,
                    maxWidth: "36rem",
                }}
            />
            <EditorP
                id="orient-heights-station-contribution-3"
                style={{
                    lineHeight: "1.4",
                    marginTop: "3.6rem",
                    opacity: 0.6,
                    maxWidth: "36rem",
                }}
            />
        </ProjectPage>
    );
};

export default Page;
