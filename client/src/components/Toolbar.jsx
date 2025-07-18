import React, { useState } from 'react';
import { ChevronDown, List, Grid3x3, Info } from 'lucide-react';

const Toolbar = () => {
  const [viewMode, setViewMode] = useState('list');
  
  const FilterButton = ({ label, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
        >
          {label}
          <ChevronDown size={16} />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-10 min-w-[120px]">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsOpen(false);
                  // Handle option selection
                }}
                className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700 first:rounded-t-lg last:rounded-b-lg"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="flex items-center justify-between mb-6 font-[Iosevka] flex-shrink-0">
      <div className="flex items-center gap-4">
        <FilterButton 
          label="Type" 
          options={['All', 'Folders', 'Documents', 'Images', 'Videos']} 
        />
        <FilterButton 
          label="People" 
          options={['Anyone', 'Owned by me', 'Shared with me']} 
        />
        <FilterButton 
          label="Modified" 
          options={['Any time', 'Today', 'Last 7 days', 'Last 30 days']} 
        />
        <FilterButton 
          label="Source" 
          options={['All', 'Upload', 'Created', 'Shared']} 
        />
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={() => setViewMode('list')}
          className={`p-2 rounded-lg transition-colors ${
            viewMode === 'list' 
              ? 'bg-slate-700 text-slate-200' 
              : 'text-slate-400 hover:bg-slate-800'
          }`}
        >
          <List size={20} />
        </button>
        <button
          onClick={() => setViewMode('grid')}
          className={`p-2 rounded-lg transition-colors ${
            viewMode === 'grid' 
              ? 'bg-slate-700 text-slate-200' 
              : 'text-slate-400 hover:bg-slate-800'
          }`}
        >
          <Grid3x3 size={20} />
        </button>
        <button className="p-2 text-slate-400 hover:bg-slate-800 rounded-lg transition-colors">
          <Info size={20} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;