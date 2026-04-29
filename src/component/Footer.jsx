import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-white border-t border-white/10">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <div className="grid gap-10 md:grid-cols-3">
                        {/* Left: Logo + description */}
                        <div>
                            <h2 className="text-2xl font-bold">MyLogo</h2>
                            <p className="mt-3 text-sm text-gray-400">
                                Modern Next.js landing page design with Navbar, Hero Section and Footer.
                                Built using Tailwind CSS.
                            </p>
                        </div>

                        {/* Middle: Links */}
                        <div className="flex flex-col gap-3 text-sm text-gray-300">
                            <h3 className="mb-2 text-lg font-semibold text-white">Quick Links</h3>
                            <a href="#home" className="hover:text-cyan-400">Home</a>
                            <a href="#about" className="hover:text-cyan-400">About</a>
                            <a href="#services" className="hover:text-cyan-400">Services</a>
                            <a href="#contact" className="hover:text-cyan-400">Contact</a>
                        </div>

                        {/* Right: Subscribe */}
                        <div>
                            <h3 className="mb-2 text-lg font-semibold">Subscribe</h3>
                            <p className="text-sm text-gray-400 mb-4">
                                Get latest updates from us
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full rounded-xl bg-white/10 px-4 py-2 text-sm text-white placeholder-gray-400 outline-none border border-white/10 focus:border-cyan-400"
                                />
                                <button className="rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold hover:bg-cyan-400">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} MyLogo. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;