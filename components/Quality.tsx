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
        <div className="flex gap-5">
            <p className="text-4xl">{emoji}</p>
            <p
                className={`whitespace-nowrap ${
                    bigger ? 'text-3xl text-zinc-100' : 'text-2xl text-zinc-300'
                }`}
            >
                {quality}
            </p>
        </div>
    );
}
