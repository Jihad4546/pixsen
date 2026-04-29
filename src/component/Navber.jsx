'use client'
import React from 'react';
import { useState } from "react";
import { Link } from "@heroui/react";
const Navber = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <header className="w-full bg-black/80 backdrop-blur-md text-white fixed top-0 left-0 z-50 border-b border-white/10">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    {/* Left: Logo */}
                    <div className="text-2xl font-bold tracking-wide">
                        MyLogo
                    </div>
                    {/* Middle: Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                        <a href="#home" className="hover:text-white transition">Home</a>
                        <a href="#about" className="hover:text-white transition">About</a>
                        <a href="#services" className="hover:text-white transition">Services</a>
                        <a href="#contact" className="hover:text-white transition">Contact</a>
                    </nav>

                    {/* Right: Search + Button */}
                    <div className="flex items-center gap-3">
                        {/* Search Box */}
                        <input
                            type="text"
                            placeholder="Search..."
                            className="hidden sm:block rounded-xl bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-400 outline-none backdrop-blur-md border border-white/10 focus:border-cyan-400"
                        />

                        {/* Button */}
                        <button className="rounded-xl bg-cyan-500 px-5 py-2 text-sm font-semibold transition hover:bg-cyan-400 hover:scale-105">
                            Sign Up
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navber;