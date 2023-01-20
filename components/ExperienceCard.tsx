import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

export default function ExperienceCard({
    title,
    subtitle,
    children,
    logo,
}: {
    title: string;
    subtitle?: string;
    children: ReactNode;
    logo: StaticImageData;
}) {
    return (
        <div className="bg-zinc-800 py-6 px-7 rounded-2xl flex gap-12 shadow-xl">
            <Image
                src={logo}
                alt={`${title} logo`}
                className="rounded-2xl h-40 w-40"
            />
            <div className="flex flex-col gap-3 py-3">
                <div className="flex gap-4 items-center">
                    <h3 className="text-2xl">{title}</h3>
                    {subtitle && (
                        <span className="text-zinc-500 pt-1">{subtitle}</span>
                    )}
                </div>
                <p className="text-zinc-200">{children}</p>
            </div>
        </div>
    );
}

export function SmallExperienceCard({
    title,
    children,
    logo,
    className,
}: {
    title: string;
    children: ReactNode;
    logo: StaticImageData;
    className?: string;
}) {
    return (
        <div
            className={
                'bg-zinc-800 py-4 px-5 rounded-2xl flex gap-6 shadow-xl ' +
                    className ?? ''
            }
        >
            <Image
                src={logo}
                alt={`${title} logo`}
                className="rounded-2xl h-24 w-24"
            />
            <div className="flex flex-col gap-3">
                <h3 className="text-2xl">{title}</h3>
                <p className="text-zinc-200">{children}</p>
            </div>
        </div>
    );
}
