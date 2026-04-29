import React from 'react';

const Banner = () => {
    return (
        <main className="relative min-h-screen overflow-hidden bg-black text-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070&auto=format&fit=crop')",
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />

            {/* Glow Effect */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

            {/* Content */}
            <section className="relative z-10 flex min-h-screen items-center px-6 md:px-20">
                <div className="max-w-3xl">
                    <span className="mb-5 inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-medium tracking-wide text-cyan-300 backdrop-blur-md">
                        ✨ Creative Digital Experience
                    </span>

                    <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
                        Build Your
                        <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Dream Website
                        </span>
                    </h1>

                    <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
                        আধুনিক এবং সুন্দর Next.js Hero Banner ডিজাইন। এতে রয়েছে premium background image,
                        glassmorphism effect এবং smooth modern UI.
                    </p>

                    <div className="flex flex-col gap-5 sm:flex-row">
                        <button className="rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-semibold shadow-lg shadow-cyan-500/30 transition duration-300 hover:scale-105 hover:bg-cyan-400">
                            Get Started
                        </button>

                        <button className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-md transition duration-300 hover:bg-white/20">
                            View Demo
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Banner;