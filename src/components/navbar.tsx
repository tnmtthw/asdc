// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-transparent p-4 fixed w-full z-20 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-lg font-bold">
                    Anilao Scuba Dive Center
                </Link>
                <div className="hidden md:flex justify-center items-center space-x-4">
                    <Link href="/" className="text-white hover:text-gray-400">
                        Home
                    </Link>
                    <Link href="/about" className="text-white hover:text-gray-400">
                        About
                    </Link>
                    <Link href="/services" className="text-white hover:text-gray-400">
                        Services
                    </Link>
                    <Link href="/contact" className="text-white hover:text-gray-400">
                        Contact
                    </Link>
                    <button
                        type="button"
                        className="px-4 py-2 text-white backdrop-blur-sm border border-white rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200"
                    >
                        Join Us
                    </button>
                </div>
                <div className="md:hidden">
                    <button className="text-white hover:text-gray-400">
                        {/* Add your mobile menu icon here */}
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;