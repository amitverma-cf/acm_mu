"use client";
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="sticky left-0 top-0 z-20 mx-auto flex h-[60px] md:h-[88px] w-full items-center border-b-4 border-border bg-white">
                <div className="mx-auto flex w-[1300px] text-text max-w-full items-center justify-between px-4 lg:px-0">

                    <div className="flex items-center gap-10 ml-2 sm:ml-5">
                        <Logo />
                    </div>

                    <div
                        className={`${isMenuOpen ?
                            "block absolute top-[60px] md:top-[88px] left-0 w-full bg-white lg:static lg:flex lg:items-center lg:gap-10 transition-all duration-300 border-b-2 border-black"
                            : "hidden lg:flex items-center gap-10"}`}
                    >
                        <Link
                            className={`${isMenuOpen ? "block text-xl text-center hover:bg-blue-500 hover:text-white p-2 border-b-2 border-black" : "text-xl sm:text-base font-base hover:text-blue-500"}`}
                            href="/about"
                        >
                            About Us
                        </Link>
                        <Link
                            className={`${isMenuOpen ? "block text-xl text-center hover:bg-blue-500 hover:text-white p-2 border-b-2 border-black" : "text-xl sm:text-base font-base hover:text-blue-500"}`}

                            href="/team"
                        >
                            Meet the Team
                        </Link>
                        <Link
                            className={`${isMenuOpen ? "block text-xl text-center hover:bg-blue-500 hover:text-white p-2 border-b-2 border-black" : "text-xl sm:text-base font-base hover:text-blue-500"}`}

                            href="/events"
                        >
                            Events
                        </Link>
                        <Link
                            className={`${isMenuOpen ? "block text-xl text-center hover:bg-blue-500 hover:text-white p-2 border-b-2 border-black" : "text-xl sm:text-base font-base hover:text-blue-500"}`}

                            href="/leaderboard"
                        >
                            Leaderboard
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <Link
                            className="hidden sm:table text-lg sm:text-base font-base px-3 sm:px-5 items-center border-l-4 border-black h-[60px] md:h-[88px] hover:bg-black hover:text-white"
                            href="https://www.acm.org/"
                        >
                            <span className="table-cell align-middle">
                                Visit ACM <ArrowUpRight className="hidden md:inline-block" />
                            </span>
                        </Link>
                        <Link
                            className="table text-lg sm:text-base font-base px-3 sm:px-5 border-l-4 border-r-4 lg:border-r-0 border-b-2 border-black h-[60px] md:h-[88px] bg-blue-500 text-white hover:bg-black"
                            href="https://forms.office.com/"
                        >
                            <span className="table-cell align-middle">
                                Join Us <ArrowUpRight className="hidden md:inline-block" />
                            </span>
                        </Link>

                        <div className="lg:hidden flex items-center">
                            <button
                                className="p-2 text-xl focus:outline-none"
                                onClick={toggleMenu}
                                aria-label="Toggle Menu"
                            >
                                {isMenuOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header