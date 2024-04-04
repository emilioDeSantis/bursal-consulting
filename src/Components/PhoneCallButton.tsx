"use client";
import React from 'react';

const PhoneCallButton = ({ style }: { style?: React.CSSProperties }) => {
    // Extract the color from the style prop; if not provided, default to white
    const color = style?.color || 'white';

    // Function to handle phone call initiation
    const handleCall = () => {
        // // Example phone number; replace with your actual number or make dynamic as needed
        const phoneNumber = '781-884-3822';
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <button
            onClick={handleCall} 
            style={{
                paddingBlock: "0.4rem",
                background: "none",
                fontSize: "1.6rem",
                color: color, // Use extracted color
                border: "none",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
                opacity: 0.8,
                fontWeight: 300,
                width: "100%",
                marginTop: "1rem",
                fontFamily: "Aeonik",
                cursor: "pointer",
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke={color} // Use extracted color for SVG stroke as well
                className="w-6 h-6"
                style={{
                    height: "1.5rem",
                    width: "1.5rem",
                }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.380-1.210l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
            </svg>
            781-884-3822
        </button>
    );
};

export default PhoneCallButton;
