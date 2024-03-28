"use client";
import { useState, useRef, useEffect, FC } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { border } from "@/app/utils/colors";

type DropdownMenuProps = {
    navLinks: { label: string; href: string }[];
};

const DropdownMenu: FC<DropdownMenuProps> = ({ navLinks }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const pathname = usePathname();

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                // alert('close')
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return () => window.removeEventListener("click", handleOutsideClick);
    }, []);

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <div style={{ position: "relative" }}>
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                style={{
                    border: "none",
                    cursor: "pointer",
                    height: "3rem",
                    width: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10,
                    background: "none",
                    color: "black",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "2rem",
                        position: "relative",
                    }}
                >
                    <div
                        style={{
                            transition: "top 0.2s ease, transform 0.4s ease",
                            position: "absolute",
                            height: "1px",
                            background: "#191919",
                            width: "100%",
                            transform: isOpen
                                ? "rotate(45deg)"
                                : "rotate(0deg)",
                            top: isOpen ? "0" : "-0.45rem",
                        }}
                    />
                    <div
                        style={{
                            transition: "0.2s ease",
                            height: "1px",
                            background: "#191919",
                            width: "100%",
                            opacity: isOpen ? 0 : 1,
                        }}
                    />
                    <div
                        style={{
                            transition: "top 0.2s ease, transform 0.4s ease",
                            position: "absolute",
                            height: "1px",
                            background: "#191919",
                            width: "100%",
                            transform: isOpen
                                ? "rotate(-45deg)"
                                : "rotate(0deg)",
                            top: isOpen ? "0" : "0.45rem",
                        }}
                    />
                </div>
            </button>
            <div
                className="shadow"
                style={{
                    width: "100vw",
                    position: "fixed",
                    top: 0,
                    right: 0,
                    transform: isOpen ? "translateY(0)" : "translateY(-30rem)",
                    transition: "transform 0.3s ease",
                    zIndex: -1,
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    paddingTop: "6rem",
                    paddingBottom: "1rem",
                    fontWeight: 400,
                    borderRadius: "none",
                    letterSpacing: "0.04em",
                    opacity: 1,
                    fontSize: "1.1rem",
                    background: "white",
                    // borderBottom: border,
                }}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        style={{
                            paddingBlock: "0.8rem",
                            paddingInline: "3rem",
                            borderBottom: border,
                            width: "100%",
                        }}
                    >
                        <div
                            className={link.href == pathname ? "" : "nav-link"}
                            style={{
                                // fontFamily: "Favorit",
                            }}
                        >
                            {link.label}
                        </div>
                    </Link>
                ))}
                <button
                    style={{
                        paddingBlock: "1rem",
                        paddingInline: "3rem",
                        background: "none",
                        fontSize: "1.6rem",
                        color: "black",
                        border: "none",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "1rem",
                        opacity: 0.8,
                        fontWeight: 200,
                        width: "100%",
                        marginTop: "1rem",

                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-6 h-6"
                        style={{
                            color: "black",
                            height: "1.5rem",
                            width: "1.5rem",
                        }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                    </svg>
                    781-884-3822
                </button>
            </div>
        </div>
    );
};

export default DropdownMenu;
