import EditorH3 from "@/editor/EditorH3";
import EditorP from "@/editor/EditorP";
import { doc, getDoc } from "firebase/firestore";
import React, { FC } from "react";
import firestore from "../../firebaseConfig";
import AdminDiv from "./admin/AdminDiv";
import Dropdown from "@/Components/DropDown";

interface EditorDropdownProps {
    id: string; // Accepts an id to uniquely identify each dropdown
}

// Define the Dropdown component
const EditorDropdown: FC<EditorDropdownProps> = async ({ id }) => {
    const fetchDataFromFirestore = async () => {
        if (process.env.IS_ADMIN === "false") {
            const titleDocRef = doc(firestore, "elements", `${id}-title`);
            const paragraphDocRef = doc(
                firestore,
                "elements",
                `${id}-paragraph`
            );
            try {
                const titleDocSnap = await getDoc(titleDocRef);
                const paragraphDocSnap = await getDoc(paragraphDocRef);
                if (titleDocSnap.exists()) {
                    return {
                        title: titleDocSnap.data().text,
                        paragraph: paragraphDocSnap.data()?.text,
                    };
                } else {
                    console.warn(`Document ${id}-title not found in Firestore`);
                }
            } catch (error) {
                console.error("Error fetching document:", error);
            }
        }
        return null;
    };

    const dropdownData = await fetchDataFromFirestore();
    if (dropdownData === null && process.env.IS_ADMIN === "false") return null;


    return (
        <>
          {process.env.IS_ADMIN === 'true' ? (
                    <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            height: "0.5px",
                            background: "#00000055",
                            width: "100%",
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <AdminDiv
                            id={`${id}-title`}
                            style={{
                                fontWeight: 400,
                                lineHeight: "1.2",
                                marginTop: "0.4rem",
                                opacity: 0.6,
                                cursor: "pointer",
                            }}
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className={`w-6 h-6`}
                            style={{
                                height: "1.5rem",
                            }}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </div>
        
                    <AdminDiv
                        id={`${id}-paragraph`}
                        style={{
                            fontWeight: 400,
                            lineHeight: "1.2",
                            marginTop: "0.4rem",
                            opacity: 0.6,
                        }}
                    />
                </div>
          ) : (
            <Dropdown id={id} data={dropdownData}/>
          )}
        </>
      );
};

export default EditorDropdown;
