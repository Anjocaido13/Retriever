import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className="absolute top-5 left-50 flex justify-around">
            <ul className="flex items-center list-none NavList">
                <li className="ml-5"><Link href="/" className="text-white text-sm font-semibold capitalize hover:text-purple-900">HOME</Link></li>
                <li className="ml-5"><Link href="#" className="text-white text-sm font-semibold capitalize hover:text-purple-900">EXPLORAR</Link></li>
                <li className="ml-5"><Link href="#" className="text-white text-sm font-semibold capitalize hover:text-purple-900">Tipos</Link></li>
                <li className="ml-5"><Link href="/references" className="text-white text-sm font-semibold capitalize hover:text-purple-900">Relatos</Link></li>
                <li className="ml-5"><Link href="/about" className="text-white text-sm font-semibold capitalize hover:text-purple-900">About</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
