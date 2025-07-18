import React from "react";
import { Search, Settings, HelpCircle, Bell, Grid3x3 } from 'lucide-react';
import { Avatar } from "radix-ui";

const HeaderBar = () => {
    return (
        <nav className="fixed top-0 left-64 right-0 z-50 bg-zinc-950 border-b border-slate-800">
            <div className="w-full h-full flex justify-between items-center font-[Iosevka] px-6 py-3 text-slate-300">
                <h2 className="text-2xl">CodeStash.</h2>
                
                <div className="flex-1 max-w-2xl mx-8">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                        <input 
                            type="search" 
                            name="fileSearch" 
                            placeholder="Search in Drive" 
                            className="bg-slate-800 w-full pl-10 pr-4 py-2 text-lg focus:outline-none focus:bg-slate-700 focus:border-2 border-slate-400 rounded-full" 
                        />
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                        <HelpCircle size={20} className="text-slate-400" />
                    </button>
                    <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                        <Settings size={20} className="text-slate-400" />
                    </button>
                    <button className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                        <Grid3x3 size={20} className="text-slate-400" />
                    </button>
                    <Avatar.Root className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full border border-2 border-slate-500 bg-black align-middle">
                        <Avatar.Image />
                        <Avatar.Fallback className="leading-1 flex size-full items-center justify-center bg-slate-950 text-2xl font-medium">
                            T
                        </Avatar.Fallback>
                    </Avatar.Root>
                </div>
            </div>
        </nav>
    );
};

export default HeaderBar;