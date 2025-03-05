import { Menu, X } from "lucide-react";
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../assets/rh_logo.png';
import { navItems } from '../constants';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const getOffset = (href) => {
        switch (href) {
            case 'hero':
                return -230; // Ajusta según sea necesario
            case 'features':
                return -85; // Ajusta según sea necesario
            case 'workflow':
                return -120; // Ajusta según sea necesario
            
            case 'testimonials':
                return -120; // Ajusta según sea necesario
            default:
                return 0;
        }
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b 
        border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className='h-10 w-10 mr-2' src={logo} alt="" />
                        <span className="text-xl md:text-2xl tracking-tight">Recovery & Hardware</span>
                    </div>

                    <ul className='hidden lg:flex ml-14 space-x-12 text-base '>
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.href}
                                    smooth={true}
                                    duration={500}
                                    offset={getOffset(item.href)}
                                    className="hover:text-[--color-title-hover] cursor-pointer"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex justify-center space-x-12 items-center ">
                        <a href="https://wa.me/3327910261" className='bg-gradient-to-r from-[var(--color-button)] to-[var(--color-button-gradient)]
                        py-2 px-3 rounded-md hover:scale-105 transform transition-transform duration-300'>
                            Contactanos
                            <FaWhatsapp color="var(--icon-whatsapp-white)" size={20} className='inline-block ml-1 mb-1' />
                        </a>
                    </div>

                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 
                    flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <Link
                                        to={item.href}
                                        smooth={true}
                                        duration={500}
                                        offset={getOffset(item.href)}
                                        className="cursor-pointer"
                                        onClick={toggleNavbar}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="flex mr-3">
                            <a href="https://wa.me/3327910261" className="bg-gradient-to-r from-[var(--color-button)] to-[var(--color-button-gradient)]
                            py-2 px-3 rounded-md">
                                <FaWhatsapp color="var(--icon-whatsapp-white)" size={20} className='inline-block mr-1' />
                                Contactanos
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;