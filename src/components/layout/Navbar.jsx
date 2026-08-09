import { FaCode, FaGithub } from "react-icons/fa";
import { useState } from "react";


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Achievements", href: "#achievements" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-black/70 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-[var(--container-width)] items-center justify-between px-6">

                {/* Logo */}
                <a
                    href="#home"
                    className="flex items-center gap-2"
                >
                    <FaCode className="text-xl text-[var(--color-primary)]" />

                    <span className="text-lg font-bold">
                        Karan <span className="text-[var(--color-primary)]">Dhanada</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-7 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium text-white/80 transition-colors duration-300 hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Right Side */}
                <div className="hidden items-center gap-4 md:flex">

                    <a
                        href="#"
                        className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                    >
                        Resume
                    </a>

                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-xl text-white/80 transition-all duration-300 hover:text-white"
                    >
                        <FaGithub />
                    </a>

                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-2xl text-white md:hidden"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>

            </div>
            {isMenuOpen && (
                <div className="border-t border-[var(--color-border)] bg-black/95 px-6 py-6 md:hidden">

                    <div className="flex flex-col gap-5">

                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-sm font-medium text-white/80 transition-colors hover:text-[var(--color-primary)]"
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="#"
                            className="w-fit rounded-lg border border-[var(--color-border)] px-4 py-2 text-sm font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                        >
                            Resume
                        </a>

                    </div>

                </div>
            )}

        </nav>
    );
}

export default Navbar;