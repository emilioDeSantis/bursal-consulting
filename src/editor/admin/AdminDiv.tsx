"use client";
import { FC, useState, useEffect, useRef } from "react";
import { doc, getDoc, setDoc, collection, getDocs } from "firebase/firestore";
import firestore from "../../../firebaseConfig";
import { COLLECTION_NAME } from "@/app/utils/firestore";

interface AdminDivProps {
    id: string;
    style?: React.CSSProperties;
}

const AdminDiv: FC<AdminDivProps> = ({ id, style }) => {
    const [text, setText] = useState(""); // Text to be edited
    const [dbText, setDbText] = useState(""); // Text fetched from the database
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(firestore, COLLECTION_NAME, id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const fetchedText = docSnap.data().text || "";
                    setText(fetchedText);
                    setDbText(fetchedText); // Set initial database text state
                }
            } catch (error) {
                console.error("Error fetching document:", error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        // Automatically adjust the textarea height to fit content
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height =
                textareaRef.current.scrollHeight + "px";
        }
    }, [text]);

    const handleAddToFirestore = async () => {
        if (!id || text === dbText) {
            // Check if text is unchanged
            alert("No changes made to the text.");
            return;
        }
        try {
            await setDoc(doc(firestore, COLLECTION_NAME, id), { text });
            setDbText(text); // Update dbText with the new saved text
        } catch (error) {
            console.error("Error updating document:", error);
            alert(
                "Error updating document, check the console for more information."
            );
        }
    };

    const handleDiscardChanges = () => {
        setText(dbText); // Revert text to the last saved state
    };

    const duplicate = async () => {
        const snapshot = await getDocs(collection(firestore, "unpublished-elements"));

        const docs = snapshot.docs;




        docs.forEach(async (document) => {
            // console.log("document", document);

            try {
                // console.log("run");
                // console.log("Document data:", document.data());
                await setDoc(doc(firestore, "published-elements", document.id), document.data());
                console.log("Document copied successfully");    
            } catch (error) {
                console.error("Error copying:", error);
                alert(
                    "Error copying documents, check the console for more information."
                );
            }
        });
    };

    // return (
    //     <button onClick={duplicate} style={{
    //         color: "black",
    //     }}>
    //         Duplicat db
    //     </button>
    // )

    return (
        <div style={{ position: "relative" }}>
            <textarea
                ref={textareaRef}
                className="admin"
                style={{ ...style, minHeight: "50px", overflow: "hidden" }}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            {text !== dbText && (
                <div
                    style={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        display: "flex",
                        gap: "2rem", // Align buttons next to each other
                    }}
                >
                    <button
                        style={
                            {
                                // Adds some space between the buttons
                            }
                        }
                        onClick={handleDiscardChanges}
                    >
                        Discard
                    </button>
                    <button onClick={handleAddToFirestore}>Publish</button>
                </div>
            )}
        </div>
    );
};

export default AdminDiv;
