import ProjectPage from "@/Components/ProjectPage";
import EditorP from "@/editor/EditorP";
import React from "react";

const Page: React.FC = () => {
    return (
        <ProjectPage
            titleId="north-hero-drawbridge-title"
            paragraphId="north-hero-drawbridge-paragraph"
            clientId="north-hero-drawbridge-client"
            imageHref="/north-hero.png"
            location="Grand Isle, VT"
        >
            <EditorP
                id="north-hero-drawbridge-contribution-1"
                style={{
                    lineHeight: "1.4",
                    width: "100%",
                }}
            />
            <EditorP
                id="north-hero-drawbridge-contribution-2"
                style={{
                    lineHeight: "1.4",
                    width: "100%",
                }}
            />
            <EditorP
                id="north-hero-drawbridge-contribution-3"
                style={{
                    lineHeight: "1.4",
                    width: "100%",
                }}
            />
        </ProjectPage>
    );
};

export default Page;
