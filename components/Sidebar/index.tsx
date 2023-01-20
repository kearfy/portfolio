import React from 'react';
import SidebarItem from './SidebarItem';

export default function Sidebar({
    sectionCount,
    activeSection,
    setActiveSection,
}: {
    sectionCount: number;
    activeSection: number;
    setActiveSection: (index: number) => unknown;
}) {
    return (
        <div className="w-36 h-screen flex flex-col justify-center items-center gap-12">
            {Array(sectionCount)
                .fill(0)
                .map((_, i) => (
                    <SidebarItem
                        active={activeSection == i}
                        onClick={() => setActiveSection(i)}
                        key={i}
                    />
                ))}
        </div>
    );
}
