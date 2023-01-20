import React from 'react';
import Head from '../components/Head';
import Sidebar from '../components/Sidebar';
import MeSummer from '../public/me-summer.webp';
import MeWinter from '../public/me-winter.png';
import LogoFlow from '../public/logo-flow.jpeg';
import LogoTosc from '../public/logo-tosc.png';
import LogoOsg from '../public/logo-osg.jpeg';
import LogoScooter from '../public/logo-scooter.jpg';
import LogoPbcms from '../public/logo-pbcms.png';
import LogoKards from '../public/logo-kards.png';
import LogoPlayrbase from '../public/logo-playrbase.png';
import LogoGithub from '../public/logo-github.png';
import LogoDiscord from '../public/logo-discord.webp';
import LogoInstagram from '../public/logo-instagram.webp';
import LogoLinkedin from '../public/logo-linkedin.png';
import LogoTwitter from '../public/logo-twitter.png';
import Image from 'next/image';
import ExperienceCard, {
    SmallExperienceCard,
} from '../components/ExperienceCard';
import Link from 'next/link';
import Quality from '../components/Quality';
import SocialCard from '../components/SocialCard';
import useScrollObserver from '../lib/useScrollObserver';

export default function Home() {
    const sectionCount = 4;
    const { activeSection, setActiveSection } = useScrollObserver();

    return (
        <div className="w-screen h-screen">
            <Head />
            <div className="flex justify-between">
                <div className="w-full">
                    <div className="h-screen snap-center flex flex-col justify-center items-end gap-16 px-52 text-8xl">
                        <div className="flex gap-24">
                            <p>Hiya!</p>
                            <p>👋</p>
                        </div>
                        <div className="flex gap-24">
                            <p>
                                I&apos;m{' '}
                                <span className="text-transparent text-8xl bg-clip-text bg-gradient-to-r from-sky-300 to-purple-600">
                                    Micha
                                </span>
                            </p>
                            <Image
                                src={MeSummer}
                                alt="Micha"
                                className="rounded-full h-24 w-24"
                            />
                        </div>
                        <div className="flex gap-24">
                            <p>I build amazing products</p>
                            <p>👨🏼‍💻</p>
                        </div>
                    </div>
                    <div className="h-screen snap-center flex items-center">
                        <div className="w-full px-52">
                            <h2 className="text-5xl mb-16">Experiences ✨</h2>
                            <div className="flex gap-24">
                                <div className="flex flex-col gap-12 w-full">
                                    <ExperienceCard
                                        title="Flow your Money"
                                        subtitle="Full time"
                                        logo={LogoFlow}
                                    >
                                        I&apos;m working at flow with great
                                        pleasure and I am gaining a lot of new
                                        skills here. From building on a
                                        serverless infrastructure to maintaining
                                        a react-native app.
                                    </ExperienceCard>
                                    <ExperienceCard
                                        title="The Open Source Company"
                                        logo={LogoTosc}
                                    >
                                        I really like open source and always try
                                        to contribute to open source projects. I
                                        put some projects of mine under this
                                        name and collaborate with others on
                                        these projects.
                                    </ExperienceCard>
                                    <ExperienceCard
                                        title="Atlas College"
                                        subtitle="Teaching assistant"
                                        logo={LogoOsg}
                                    >
                                        At the end of 2021 I got the offer to
                                        stand in front of the classroom for
                                        about half a year. I learned a lot about
                                        communication in this period and how to
                                        make complex concepts easy to
                                        understand.
                                    </ExperienceCard>
                                </div>
                                <div className="flex flex-col gap-12 w-full">
                                    <ExperienceCard
                                        title="Freelance"
                                        subtitle="Side hussle, hmu"
                                        logo={MeSummer}
                                    >
                                        I&apos;ve actively started to do some
                                        freelance work near the end of 2020.
                                        I&apos;ve worked for a variety of
                                        different kind of companies and learned
                                        about their needs from a business
                                        perspective.
                                    </ExperienceCard>
                                    <div className="flex gap-12">
                                        <SmallExperienceCard
                                            title="Kards Social"
                                            logo={LogoKards}
                                            className="w-1/2"
                                        >
                                            Open source social media app
                                        </SmallExperienceCard>
                                        <SmallExperienceCard
                                            title="PBCMS"
                                            logo={LogoPbcms}
                                            className="w-1/2"
                                        >
                                            Bare bones and extendable PHP CMS
                                        </SmallExperienceCard>
                                    </div>
                                    <div className="flex gap-12">
                                        <SmallExperienceCard
                                            title="Playrbase"
                                            logo={LogoPlayrbase}
                                            className="w-1/2"
                                        >
                                            Event and player management
                                        </SmallExperienceCard>
                                        <SmallExperienceCard
                                            title="Kick Assist"
                                            logo={LogoScooter}
                                            className="w-1/2"
                                        >
                                            Legally drive e-scooters in the
                                            Netherlands!
                                        </SmallExperienceCard>
                                    </div>
                                    <Link
                                        href="https://github.com/kearfy"
                                        target="_blank"
                                        className="flex items-center justify-center mt-3 gap-6 hover:underline"
                                    >
                                        <Image
                                            src={LogoGithub}
                                            alt="Github Logo"
                                            className="rounded-2xl w-16 shadow-xl"
                                        />
                                        <p className="text-xl">
                                            Check out my Github!
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-screen snap-center flex items-center">
                        <div className="px-52 w-full flex gap-96 items-center">
                            <div>
                                <h2 className="text-5xl mb-16">
                                    A little bit about me ✌️
                                </h2>
                                <div className="flex flex-col gap-8 text-2xl text-zinc-200">
                                    <p>
                                        I’m a software engineer based in the
                                        Netherlands. Controversial to most
                                        people I did not actually finish my
                                        study. Instead, I learned everything
                                        myself and I still do so every day. I
                                        believe, that as a software engineer,
                                        the greatest skill you can possess is to
                                        be able to learn and act quick.
                                    </p>
                                    <p>
                                        I do a lot of work in the open source
                                        community. I’m actively working on
                                        projects of my own, but I’m also
                                        actively involved in projects like
                                        &nbsp;
                                        <Link
                                            href="https://surrealdb.com"
                                            target="_blank"
                                            className="text-purple-400"
                                        >
                                            SurrealDB
                                        </Link>
                                        . I also have a full time job, busy
                                        schedule! 📅
                                    </p>
                                    <p>
                                        Besides my development life I really
                                        like to make music. I mostly sing, but
                                        also often try to fiddle around on the
                                        guitar or to hit some keys. I still have
                                        the ambition to pick up making photo’s
                                        some time.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-16 pr-28 items-center">
                                <Image
                                    src={MeWinter}
                                    alt="Micha"
                                    className="rounded-full w-48"
                                />
                                <div className="flex flex-col gap-2 mb-24">
                                    <Quality
                                        emoji="📙"
                                        quality="Micha de Vries"
                                        bigger
                                    />
                                    <div className="h-4" />
                                    <Quality
                                        emoji="🌎"
                                        quality="18 years old"
                                    />
                                    <Quality emoji="🇳🇱" quality="Netherlands" />
                                    <div className="h-4" />
                                    <Quality
                                        emoji="‍👨🏼‍💻"
                                        quality="I like to code"
                                    />
                                    <Quality
                                        emoji="🎶"
                                        quality="And to make music"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-screen snap-center flex flex-col justify-center items-center px-52">
                        <h2 className="text-6xl mb-24">Interested? ☎️</h2>
                        <div className="flex gap-16">
                            <div className="flex flex-col gap-10">
                                <SocialCard
                                    logo={LogoDiscord}
                                    platform="Discord"
                                    nameOnPlatform="@Micha#1000"
                                />
                                <SocialCard
                                    logo={LogoLinkedin}
                                    platform="LinkedIn"
                                    nameOnPlatform="Micha de Vries"
                                    href="https://www.linkedin.com/in/micha-de-vries"
                                />
                                <SocialCard
                                    logo={LogoInstagram}
                                    platform="Instagram"
                                    nameOnPlatform="Kearfy"
                                    href="https://www.instagram.com/kearfy"
                                />
                            </div>
                            <div className="flex flex-col gap-10">
                                <SocialCard
                                    logo={LogoTwitter}
                                    platform="Twitter"
                                    nameOnPlatform="@Kearfy"
                                    href="https://www.twitter.com/kearfy"
                                />
                                <SocialCard
                                    logo={LogoGithub}
                                    platform="GitHub"
                                    nameOnPlatform="Kearfy"
                                    href="https://www.github.com/kearfy"
                                />
                                <div className="h-24 text-xl flex flex-col justify-center gap-2 items-center">
                                    <p>Or send me an email!</p>
                                    <Link
                                        href="mailto:micha@devrie.sh"
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-purple-600"
                                    >
                                        micha@devrie.sh
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed top-0 right-0">
                    <Sidebar
                        {...{ sectionCount, activeSection, setActiveSection }}
                    />
                </div>
            </div>
        </div>
    );
}
