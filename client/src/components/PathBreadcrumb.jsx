import React from 'react';
import { ChevronRight } from 'lucide-react';

const PathBreadcrumb = () => {
  const pathSegments = ['My Drive', 'Sem_3'];
  
  return (
    <div className="flex items-center gap-2 mb-6 font-[Iosevka] flex-shrink-0">
      {pathSegments.map((segment, index) => (
        <React.Fragment key={index}>
          <button 
            className="text-slate-300 hover:text-slate-100 hover:underline transition-colors text-lg"
            onClick={() => {
              // Handle navigation to this path segment
              console.log(`Navigate to: ${segment}`);
            }}
          >
            {segment}
          </button>
          {index < pathSegments.length - 1 && (
            <ChevronRight size={16} className="text-slate-500" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PathBreadcrumb;