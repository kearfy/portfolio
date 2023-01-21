import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function SocialCard({
    logo,
    platform,
    nameOnPlatform,
    href,
}: {
    logo: StaticImageData;
    platform: string;
    nameOnPlatform: string;
    href?: string;
}) {
    const CardContent = () => (
        <div
            className={`flex gap-5 lg:gap-7 items-center pl-4 pr-8 py-3.5 bg-zinc-800 rounded-lg w-full transition-colors duration-100 ${
                href ? 'hover:bg-zinc-700' : ''
            }`}
        >
            <Image
                src={logo}
                alt={`${platform} logo`}
                className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded sm:rounded-lg"
            />
            <div className="mb-1 min-w-[200px]">
                <p className="text-sm sm:text-md lg:text-lg text-zinc-400">
                    {platform}
                </p>
                <p className="text-md sm:text-xl lg:text-2xl">
                    {nameOnPlatform}
                </p>
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
