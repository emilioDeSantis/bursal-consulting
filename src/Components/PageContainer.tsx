import { border } from "@/app/utils/colors";
import React from "react";


interface PageContainerProps {
    children?: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return (
        <div className="padding-inline" style={{}}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    borderInline: border,
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default PageContainer;