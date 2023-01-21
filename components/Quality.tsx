import React from 'react';

export default function Quality({
    emoji,
    quality,
    bigger,
}: {
    emoji: string;
    quality: string;
    bigger?: boolean;
}) {
    return (
        <div className="flex gap-3 sm:gap-5">
            <p className="text-2xl sm:text-4xl">{emoji}</p>
            <p
                className={`whitespace-nowrap ${
                    bigger
                        ? 'text-2xl sm:text-3xl text-zinc-100'
                        : 'text-lg sm:text-2xl text-zinc-300'
                }`}
            >
                {quality}
            </p>
        </div>
    );
}
