import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html className="scrollbar-hide overflow-x-hidden bg-zinc-900 text-white font-poppins snap-y scroll-smooth">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
