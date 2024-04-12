"use client";
import React, { useState, useEffect } from 'react';

// Component to copy a hardcoded email address to the clipboard
const EmailCopyButton = ({ style }: { style?: React.CSSProperties }) => {
  // Hardcoded email address
  const email = "zeynep@bursalconsulting.com";

  // State to keep track of whether the email has been copied
  const [copied, setCopied] = useState(false);

  // Function to handle copying the email address
  const handleCopyEmail = () => {
    // Using the Clipboard API to copy the email address
    navigator.clipboard.writeText(email).then(() => {
      // Set the copied state to true
      setCopied(true);
    }).catch(err => {
      console.error('Could not copy email: ', err);
    });
  };

  // Effect to reset the copied state after one second
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [copied]);

  return (
    <button
      onClick={handleCopyEmail}
      style={{
        paddingBlock: "0.4rem",
        background: "none",
        fontSize: "1.4rem",
        color: style?.color || "white", // Use the provided color or default to white
        border: "none",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "1rem",
        opacity: 0.8,
        fontWeight: 400,
        width: "100%",
        marginTop: "1.6rem",
        fontFamily: "Poppins",
        cursor: "pointer", // Change the cursor to pointer on hover
      }}
    >
      {/* Render the appropriate icon based on the copied state */}
      {copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          style={{ height: "1.4rem", width: "1.4rem" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          style={{ height: "1rem", width: "1rem" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
          />
        </svg>
      )}
      {email}
    </button>
  );
};

export default EmailCopyButton;