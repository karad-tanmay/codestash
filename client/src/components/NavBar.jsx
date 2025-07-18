import React, { useState, useRef, useEffect } from "react";
import { Search, LogOut } from "lucide-react";
import { Avatar } from "radix-ui";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    const getOwnerAvatar = () => {
        return (
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl font-medium">
                TK
            </div>
        );
    };

    const handleMenuClick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        if (showMenu) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [showMenu]);

    return (
        <nav className="bg-zinc-950 h-[70px] px-5 py-3 flex items-center justify-between font-[Iosevka] text-slate-300">
            <div className="w-full h-full flex justify-between items-center font-[Iosevka] px-5 py-3 text-slate-300">
                <div className="flex-1 max-w-2xl">
                    <div className="relative">
                        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="search"
                            name="fileSearch"
                            placeholder="Search File"
                            className="bg-slate-800 w-full px-15 py-2 text-lg focus:outline-none focus:bg-slate-700 focus:border-2 border-slate-400 rounded-full"
                        />
                    </div>
                </div>
                <div className="w-fit relative" ref={menuRef}>
                    {/* Show either the menu or just the avatar */}
                    {showMenu ? (
                        // Full menu with avatar included - RESTORED SLATE COLORS
                        <div className="bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-20 min-w-[180px] transition-all duration-200 ease-in-out transform opacity-100 translate-y-8 translate-x-4 scale-100">
                            {/* User info section with avatar and name */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700 cursor-pointer"
                                 onClick={handleMenuClick}>
                                <div className="flex-1 min-w-0 mr-3">
                                    <p className="text-slate-300 font-medium truncate text-sm">
                                        name
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    {getOwnerAvatar()}
                                </div>
                            </div>
                            
                            {/* Logout option */}
                            <button className="w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-700 rounded-b-lg flex items-center transition-colors duration-150">
                                <span className="flex-1">Logout</span>
                                <LogOut className="ml-2" size={16} />
                            </button>
                        </div>
                    ) : (
                        // Just the avatar button when menu is closed
                        <button
                            className="transition-transform duration-150 hover:scale-105"
                            onClick={handleMenuClick}>
                            {getOwnerAvatar()}
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
