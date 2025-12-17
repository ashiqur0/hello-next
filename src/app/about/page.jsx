import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <Title>Welcome To About</Title>

            <nav>
                <Link href={'/about/teams'}>Teams</Link>
                <Link href={'/about/contact'}>Contact</Link>
            </nav>
        </div>
    );
};

export default About;