import { useEffect, useState } from 'react';

export default function useScrollObserver() {
    const [activeSection, setActiveSectionInternal] = useState(0);
    const setActiveSection = (index: number) => {
        window.scroll(0, index * window.innerHeight);
    };

    useEffect(() => {
        function observer() {
            const calculatedSection = Math.floor(
                window.scrollY / window.innerHeight
            );

            if (calculatedSection !== activeSection) {
                setActiveSectionInternal(calculatedSection);
            }
        }

        window.addEventListener('scroll', observer);

        return () => {
            window.removeEventListener('scroll', observer);
        };
    }, [activeSection, setActiveSectionInternal]);

    return {
        activeSection,
        setActiveSection,
        setActiveSectionInternal,
    };
}
