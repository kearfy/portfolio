import { useEffect, useState } from 'react';

export default function useScrollObserver() {
    const [activeSection, setActiveSectionInternal] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);
    const setActiveSection = (index: number) => {
        window.scroll(0, index * window.innerHeight);
    };

    useEffect(() => {
        function observer() {
            const calculatedSection = Math.floor(
                window.scrollY / window.innerHeight
            );

            if (!hasScrolled && window.scrollY > 0) {
                setHasScrolled(true);
            }

            if (calculatedSection !== activeSection) {
                setActiveSectionInternal(calculatedSection);
            }
        }

        window.addEventListener('scroll', observer);

        return () => {
            window.removeEventListener('scroll', observer);
        };
    }, [activeSection, setActiveSectionInternal, hasScrolled, setHasScrolled]);

    return {
        activeSection,
        setActiveSection,
        setActiveSectionInternal,
        hasScrolled,
        setHasScrolled,
    };
}
