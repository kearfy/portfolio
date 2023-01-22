import NextHead from 'next/head';
import React from 'react';

export default function Head({
    title,
    description,
    robots,
}: {
    title?: string;
    description?: string;
    robots?: string;
}) {
    return (
        <NextHead>
            <title>
                {title ? `${title} - Micha de Vries` : 'Micha de Vries'}
            </title>

            <meta name="application-name" content="Micha de Vries" />
            <link rel="apple-touch-icon" href="/favicon.png" />

            <meta name="charset" content="UTF-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, minimum-scale=1"
            />
            <meta name="robots" content={robots ?? 'index, follow'} />

            <meta
                name="title"
                content={title ? `${title} - Micha de Vries` : 'Micha de Vries'}
            />

            <meta
                name="og:title"
                content={title ? `${title} - Micha de Vries` : 'Micha de Vries'}
            />
            <meta name="og:type" content="website" />
            <meta name="og:url" content="https://micha.devrie.sh/" />
            <meta
                name="og:image"
                itemProp="image primaryImageOfPage"
                content="https://micha.devrie.sh/me-summer.webp"
            />
            <meta
                name="og:site_name"
                content={title ? `${title} - Micha de Vries` : 'Micha de Vries'}
            />

            <meta
                name="twitter:title"
                content={title ? `${title} - Micha de Vries` : 'Micha de Vries'}
            />
            <meta name="twitter:card" content="summary" />

            <meta
                name="description"
                content={
                    description ??
                    "Who am I? Check out my site. I'm some random guy on the internet who decided to create a site. Besides that, I appear to be a programmer :D"
                }
            />
            <meta
                name="og:description"
                content={
                    description ??
                    "Who am I? Check out my site. I'm some random guy on the internet who decided to create a site. Besides that, I appear to be a programmer :D"
                }
            />
            <meta
                name="twitter:description"
                content={
                    description ??
                    "Who am I? Check out my site. I'm some random guy on the internet who decided to create a site. Besides that, I appear to be a programmer :D"
                }
            />
        </NextHead>
    );
}
