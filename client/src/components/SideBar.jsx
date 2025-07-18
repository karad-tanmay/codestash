import React, { useState } from 'react';
import { Home, HardDrive, Share2, Clock, Star, Trash2, Database, Plus } from 'lucide-react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('home');
  
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'shared', label: 'Shared with me', icon: Share2 },
    // { id: 'recent', label: 'Recent', icon: Clock },
    { id: 'starred', label: 'Starred', icon: Star },
    { id: 'trash', label: 'Trash', icon: Trash2 },
  ];

  return (
    <div className="w-64 bg-zinc-950 flex flex-col font-[Iosevka] fixed h-full">
      {/* Logo */}
      <div className="p-4 mb-4">
        <h2 className="text-2xl text-slate-300">CodeStash.</h2>
      </div>
      
      {/* New Button */}
      <div className="p-4">
        <button className="w-fit bg-slate-800 hover:bg-slate-700 text-slate-300 px-5 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200">
          <Plus size={20} />
          New
        </button>
      </div>
      
      {/* Navigation Items */}
      <nav className="flex-1 px-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors duration-200 ${
                activeItem === item.id
                  ? 'bg-slate-800 text-slate-200'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-300'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      {/* Storage Info */}
      <div className="p-4 border-t border-slate-800">
        <div className="text-slate-400 text-sm mb-2">Storage</div>
        <div className="bg-slate-800 rounded-full h-2 mb-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '22%' }}></div>
        </div>
        <div className="text-slate-500 text-xs">3.29 GB of 15 GB used</div>
        <button className="text-blue-400 text-xs mt-2 hover:underline">
          Get more storage
        </button>
      </div>
    </div>
  );
};

export default Sidebar;