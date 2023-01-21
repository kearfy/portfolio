import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

export default function ExperienceCard({
    title,
    subtitle,
    children,
    logo,
    href,
}: {
    title: string;
    subtitle?: string;
    children: ReactNode;
    logo: StaticImageData;
    href?: string;
}) {
    const CardContent = () => (
        <div
            className={`bg-zinc-800 py-5 pl-6 pr-8 rounded-2xl flex flex-col sm:flex-row gap-4 sm:gap-8 shadow-xl transition-colors duration-100 ${
                href ? 'hover:bg-zinc-700' : ''
            }`}
        >
            <Image
                src={logo}
                alt={`${title} logo`}
                className="rounded-2xl h-20 w-20 sm:h-28 sm:w-28"
            />
            <div className="flex flex-col gap-2 pt-1.5">
                <div className="flex flex-wrap items-center">
                    <h3 className="text-xl pr-4">{title}</h3>
                    {subtitle && (
                        <span className="text-zinc-500 pt-1 pr-16">
                            {subtitle}
                        </span>
                    )}
                </div>
                <p className="text-zinc-200 max-w-xl">{children}</p>
            </div>
        </div>
    );

    return href ? (
        <Link href={href} target="_blank" className="w-full">
            <CardContent />
        </Link>
    ) : (
        <CardContent />
    );
}

export function SmallExperienceCard({
    title,
    children,
    logo,
    className,
    href,
}: {
    title: string;
    children: ReactNode;
    logo: StaticImageData;
    className?: string;
    href?: string;
}) {
    const CardContent = () => (
        <div
            className={
                'bg-zinc-800 py-4 md:py-3 px-4 rounded-2xl flex flex-col md:flex-row gap-3 md:gap-6 shadow-xl ' +
                    className ?? ''
            }
        >
            <Image
                src={logo}
                alt={`${title} logo`}
                className="rounded-2xl h-16 w-16"
            />
            <div className="flex flex-col gap-1">
                <h3 className="text-xl">{title}</h3>
                <p className="text-zinc-200">{children}</p>
            </div>
        </div>
    );

    return href ? (
        <Link href={href} target="_blank" className="w-full">
            <CardContent />
        </Link>
    ) : (
        <CardContent />
    );
}
