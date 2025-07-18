import React, { useState, useRef, useEffect } from "react";
import { Folder, FileText, MoreHorizontal, Share2, Users, Download, Star, Share, UserPlus, SquarePen, Info } from 'lucide-react';

const FileItem = ({ file }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isStarred, setIsStarred] = useState(false);
    const menuRef = useRef(null);

    const getFileIcon = () => {
        switch (file.type) {
            case 'folder':
                return <Folder className="text-blue-400" size={20} />;
            case 'pdf':
                return <FileText className="text-red-400" size={20} />;
            default:
                return <FileText className="text-slate-400" size={20} />;
        }
    };

    const getOwnerAvatar = () => {
        return (
            <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-md font-medium">
                T
            </div>
        );
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

    const handleMenuClick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    return (
        <div
            className="grid grid-cols-12 gap-4 px-4 py-2 hover:bg-slate-800 rounded-l cursor-pointer transition-colors relative border-b border-slate-800"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
                // Handle file/folder click
                console.log(`Clicked on: ${file.name}`);
            }}
        >
            {/* Name */}
            <div className="col-span-5 flex items-center gap-3">
                {getFileIcon()}
                <span className="text-slate-300 truncate">{file.name}</span>
            </div>

            {/* Owner */}
            <div className="col-span-2 flex items-center gap-2">
                {getOwnerAvatar()}
                <span className="text-slate-400 text-sm">{file.owner}</span>
            </div>

            {/* Date Modified */}
            <div className="col-span-2 flex items-center">
                <span className="text-slate-400 text-sm">{file.modified} me</span>
            </div>

            {/* File Size */}
            <div className="col-span-1 flex items-center justify-between">
                <span className="text-slate-400 text-sm">{file.size}</span>
            </div>

            <div className='col-span-2 flex justify-end'>
                {/* Menu Buttons */}
                <div className="relative" ref={menuRef}>
                    <button
                        className={`p-1 px-2 rounded-full transition-colors ${isHovered || showMenu
                            ? 'text-slate-300 hover:bg-slate-700'
                            : 'text-transparent'
                            }`}
                    >
                        <Share size={16} />
                    </button>
                    <button
                        className={`p-1 px-2 rounded-full transition-colors ${isHovered || showMenu
                            ? 'text-slate-300 hover:bg-slate-700'
                            : 'text-transparent'
                            }`}
                    >
                        <Download size={16} />
                    </button>
                    <button
                        className={`p-1 px-2 rounded-full transition-colors ${isHovered || showMenu
                            ? 'text-slate-300 hover:bg-slate-700'
                            : 'text-transparent'
                            }`}
                    >
                        <SquarePen size={16} />
                    </button>
                    <button
                        className={`p-1 px-2 rounded-full transition-colors ${isHovered || showMenu
                            ? 'text-slate-300 hover:bg-slate-700'
                            : 'text-transparent'
                            }`}
                    >
                        <Star size={16} />
                    </button>
                    <button
                        onClick={handleMenuClick}
                        className={`p-1 px-2 rounded-full transition-colors ${isHovered || showMenu
                            ? 'text-slate-300 hover:bg-slate-700'
                            : 'text-transparent'
                            }`}
                    >
                        <Info size={16} />
                    </button>

                    {/* Context Menu */}
                    {showMenu && (
                        <div className="absolute right-0 top-full mt-1 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-20 min-w-[150px]">
                            <button className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700 first:rounded-t-lg">
                                Open
                            </button>
                            <button className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700">
                                Share
                            </button>
                            <button className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700">
                                Download
                            </button>
                            <button className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700">
                                Rename
                            </button>
                            <button className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700 last:rounded-b-lg">
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FileItem;