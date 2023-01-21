import React from 'react';
import SidebarItem from './SidebarItem';
import useScrollObserver from '../../lib/useScrollObserver';

export default function Sidebar({ sectionCount }: { sectionCount: number }) {
    const { activeSection, setActiveSection } = useScrollObserver();
    return (
        <div className="w-24 lg:w-36 h-screen flex flex-col justify-center items-center gap-8 lg:gap-12">
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
