import React from "react";
import { Avatar } from "radix-ui";

const NavBar = () => {

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950">
            <div className="w-full h-full flex justify-between items-center font-[Iosevka] px-5 py-3 text-slate-300">
                <h2 className="text-2xl">CodeStash.</h2>
                <div>
                    <input type="search" name="fileSearch" id="" placeholder="Search File" className="bg-slate-800 w-sm px-7 py-2 text-lg focus:outline-none focus:bg-slate-700 focus:border-2 border-slate-400 rounded-full" />
                </div>
                <div className="w-fit">
                    <Avatar.Root className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full border border-2 border-slate-500 bg-black align-middle">
                        <Avatar.Image />
                        <Avatar.Fallback className="leading-1 flex size-full items-center justify-center bg-slate-950 text-2xl font-medium">
                            T
                        </Avatar.Fallback>
                    </Avatar.Root>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;