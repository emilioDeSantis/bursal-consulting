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
                            transition: 'top 0.2s ease, transform 0.4s ease',
                            position: "absolute",
                            height: "1px",
                            background: "#191919",
                            width: "100%",
                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                            top: isOpen ? "0" : "-0.45rem",
                        }}
                    />
                    <div
                        style={{
                            transition: '0.2s ease',
                            height: "1px",
                            background: "#191919",
                            width: "100%",
                            opacity: isOpen ? 0 : 1,
                        }}
                    />
                    <div
                        style={{
                            transition: 'top 0.2s ease, transform 0.4s ease',
                            position: "absolute",
                            height: "1px",
                            background: "#191919",
                            width: "100%",
                            transform: isOpen ? "rotate(-45deg)" : "rotate(0deg)",
                            top: isOpen ? "0" : "0.45rem",
                        }}
                    />
                </div>
            </button>
            <div
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
                    alignItems: "center",
                    paddingTop: "6rem",
                    paddingBottom: "2rem",
                    fontWeight: 300,
                    borderRadius: "none",
                    letterSpacing: "0.04em",
                    opacity: 1,
                    fontSize: "1.2rem",background: 'white',
                    borderBottom: border,
                }}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        className={link.href == pathname ? "" : "nav-link"}
                        style={{
                            padding: "0.6rem",
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DropdownMenu;
