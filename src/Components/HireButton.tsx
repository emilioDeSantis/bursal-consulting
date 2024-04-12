import Link from 'next/link';
import React from 'react';

const HireButton: React.FC = () => {
    return (
        <div className="internal-inline-padding" style={{ marginTop: "4rem" }}>
            <Link
                className="button-hover"
                href="/contact"
                style={{
                    border: "1px solid #00BB7B",
                    padding: "0.8rem 3.6rem",
                    fontWeight: 700,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "Favorit",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    width: "fit-content",
                    zIndex: 10,
                }}
            >
                Partner With Us →
            </Link>
        </div>
    );
};

export default HireButton;