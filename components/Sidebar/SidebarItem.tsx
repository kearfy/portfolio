import React from 'react';

export default function SidebarItem({
    active,
    onClick,
}: {
    active?: boolean;
    onClick?: () => unknown;
}) {
    return (
        <button
            onClick={onClick}
            className="w-8 h-8 flex justify-center items-center"
        >
            <div
                className={
                    'p-1.5 ring-4 ring-white rounded-full ' +
                    (!active ? 'm-2.5' : '')
                }
            >
                <div
                    className={
                        'transition-all ' +
                        (active
                            ? 'w-2.5 h-2.5 bg-white rounded-full duration-200'
                            : 'w-0 h-0 duration-75')
                    }
                />
            </div>
        </button>
    );
}
