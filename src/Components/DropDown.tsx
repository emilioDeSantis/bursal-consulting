"use client";
import EditorH3 from "@/editor/EditorH3";
import EditorP from "@/editor/EditorP";
import { doc, getDoc } from "firebase/firestore";
import React, { useState, FC } from "react";
import firestore from "../../firebaseConfig";

interface DropdownProps {
    id: string; // Accepts an id to uniquely identify each dropdown
    data: {
        title: string;
        paragraph: string;
    } | null;
}

// Define the Dropdown component
const Dropdown: FC<DropdownProps> = ({ id, data }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    height: "1px",
                    background: "#00000022",
                    width: "100%",
                }}
            />
            <div
                onClick={toggleOpen}
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                    paddingBlock: "0.8rem",
                }}
            >
                <h3
                    style={{
                        fontWeight: 400,
                        lineHeight: "1.2",
                        cursor: "pointer",
                        fontSize: "1.1rem",
                    }}
                >
                    {data && data.title}
                </h3>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className={`w-6 h-6`}
                    style={{
                        transition: "0.3s",
                        transform: isOpen ? "rotate(180deg)" : "",
                        height: "0.8rem",
                    }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </div>

            {data && (
                <p
                    id={`${id}-paragraph`}
                    style={{
                        transition: "0.3s ease",
                        fontWeight: 400,
                        lineHeight: "1.4",
                        paddingBottom: isOpen ? "1.6rem" : "0",
                        opacity: 0.6,
                        maxHeight: isOpen ? "8rem" : "0",
                        overflow: "hidden",
                    }}
                >
                    {data.paragraph}
                </p>
            )}
        </div>
    );
};

export default Dropdown;
