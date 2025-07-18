import React from 'react';
import FileItem from './FileItem';

const FileList = () => {
  // Mock data matching your screenshot
  const files = [
    {
      id: 1,
      name: 'Data Analytics',
      type: 'folder',
      owner: 'me',
      modified: 'Jul 10, 2024',
      size: '--',
      icon: 'folder'
    },
    {
      id: 2,
      name: 'DSA',
      type: 'folder',
      owner: 'me',
      modified: 'Jul 10, 2024',
      size: '--',
      icon: 'folder'
    },
    {
      id: 3,
      name: 'MPT',
      type: 'folder',
      owner: 'me',
      modified: 'Sep 15, 2024',
      size: '--',
      icon: 'folder'
    },
    {
      id: 4,
      name: 'OE - Device Materials',
      type: 'folder',
      owner: 'me',
      modified: 'Sep 14, 2024',
      size: '--',
      icon: 'folder'
    },
    {
      id: 5,
      name: 'PPL',
      type: 'folder',
      owner: 'me',
      modified: 'Nov 28, 2024',
      size: '--',
      icon: 'folder'
    },
    {
      id: 6,
      name: 'Sanskrit Study Material',
      type: 'folder',
      owner: 'me',
      modified: 'Dec 3, 2024',
      size: '--',
      icon: 'folder'
    },
    {
      id: 7,
      name: 'Academic calendar 2024-25 V8.pdf',
      type: 'pdf',
      owner: 'me',
      modified: 'Jul 8, 2024',
      size: '335 KB',
      icon: 'pdf'
    },
    {
      id: 8,
      name: 'Academic calendar 2024-25 V9.pdf',
      type: 'pdf',
      owner: 'me',
      modified: 'Sep 3, 2024',
      size: '64 KB',
      icon: 'pdf'
    },
    {
      id: 9,
      name: 'sem3+sem4_2023-24.pdf',
      type: 'pdf',
      owner: 'me',
      modified: 'Sep 15, 2024',
      size: '6 MB',
      icon: 'pdf'
    },
    {
      id: 10,
      name: 'SY-NEP-CSE-Btech-Structure_Syllabus.pdf',
      type: 'pdf',
      owner: 'me',
      modified: 'Jul 8, 2024',
      size: '667 KB',
      icon: 'pdf'
    },
    {
      id: 11,
      name: 'sem3+sem4_2023-24.pdf',
      type: 'pdf',
      owner: 'me',
      modified: 'Sep 15, 2024',
      size: '6 MB',
      icon: 'pdf'
    },
    {
      id: 12,
      name: 'SY-NEP-CSE-Btech-Structure_Syllabus.pdf',
      type: 'pdf',
      owner: 'me',
      modified: 'Jul 8, 2024',
      size: '667 KB',
      icon: 'pdf'
    },
    {
      id: 13,
      name: 'Academic calendar 2024-25 V8.pdf',
      type: 'pdf',
      owner: 'me',
      modified: 'Jul 8, 2024',
      size: '335 KB',
      icon: 'pdf'
    },
    {
      id: 14,
      name: 'Academic calendar 2024-25 V9.pdf',
      type: 'pdf',
      owner: 'me',
      modified: 'Sep 3, 2024',
      size: '64 KB',
      icon: 'pdf'
    },
    {
      id: 15,
      name: 'sem3+sem4_2023-24.pdf',
      type: 'pdf',
      owner: 'me',
      modified: 'Sep 15, 2024',
      size: '6 MB',
      icon: 'pdf'
    },
    {
      id: 16,
      name: 'SY-NEP-CSE-Btech-Structure_Syllabus.pdf',
      type: 'pdf',
      owner: 'me',
      modified: 'Jul 8, 2024',
      size: '667 KB',
      icon: 'pdf'
    },
    {
      id: 17,
      name: 'sem3+sem4_2023-24.pdf',
      type: 'pdf',
      owner: 'me',
      modified: 'Sep 15, 2024',
      size: '6 MB',
      icon: 'pdf'
    },
    {
      id: 18,
      name: 'SY-NEP-CSE-Btech-Structure_Syllabus.pdf',
      type: 'pdf',
      owner: 'me',
      modified: 'Jul 8, 2024',
      size: '667 KB',
      icon: 'pdf'
    }
  ];

  return (
    <div className="font-[Iosevka] flex flex-col h-full">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-slate-950 grid grid-cols-12 gap-4 px-4 py-3 text-slate-400 text-sm border-b border-slate-800">
        <div className="col-span-5 flex items-center gap-2">
          <span>Name</span>
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-slate-400"></div>
        </div>
        <div className="col-span-2">Owner</div>
        <div className="col-span-2">Date modified</div>
        <div className="col-span-1">File size</div>
        <div className="col-span-2"></div>
      </div>

      {/* Scrollable File List */}
      <div className="flex-1 overflow-y-auto pr-1 scrollbar-custom">
        {files.map((file) => (
          <FileItem key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
};

export default FileList;