import React from "react";

interface HoverOverlayProps {
}

const HoverOverlay: React.FC<HoverOverlayProps> = () => {
    return (
        <div className="hover-overlay" style={{
            position: "absolute",
            background: '#0004',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: "inherit",
        }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="w-6 h-6"
                style={{
                    position: "absolute",
                    top: "0.6rem",
                    right: "0.6rem",
                    zIndex: 1,
                    color: "white",
                    width: "4rem",
                }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
            </svg>
        </div>
    );
};

export default HoverOverlay;
