import StoryCard from '@/components/StoryCard';
import Title from '@/components/Title';
import React from 'react';

const Stories = () => {

    const stories = [
        {
            id: 1,
            image: "https://i.ibb.co.com/pNzXrZ7/ariful.png",
            name: "Ariful Islam",
            designition: "Frontend Developer",
            shortStory:
                "Ariful started her journey with HTML and CSS. Through consistent practice and building real-world projects, she became a confident React and Next.js developer.",
            company: "Google",
        },
        {
            id: 2,
            image: "https://i.ibb.co.com/vCnYjfmV/ashiqur.jpg",
            name: "Ashiqur Rahman",
            designition: "Backend Developer",
            shortStory:
                "Ashiqur learned Node.js and Express while in university. He enjoys building scalable APIs and solving performance problems in production systems.",
            company: "Amazon",
        },
        {
            id: 3,
            image: "https://i.ibb.co.com/vvmgMGM7/china.png",
            name: "Miss China",
            designition: "Full Stack Developer",
            shortStory:
                "China believes in learning by doing. She built multiple MERN projects and now works on full-stack applications using Next.js and MongoDB.",
            company: "Microsoft",
        },
        {
            id: 4,
            image: "https://i.ibb.co.com/tpShv1qB/rasel.png",
            name: "Rasel Mia",
            designition: "Software Engineer",
            shortStory:
                "Imran began coding with C and Java. Over time, he transitioned to web technologies and now focuses on building clean and maintainable systems.",
            company: "Meta",
        },
        {
            id: 5,
            image: "https://i.ibb.co.com/x8wQKTf7/sabina.png",
            name: "Sabina Yasmin",
            designition: "UI Engineer",
            shortStory:
                "Sabina loves design and code. She specializes in turning beautiful designs into responsive, accessible web interfaces using Tailwind CSS.",
            company: "Netflix",
        },
        {
            id: 6,
            image: "https://i.ibb.co.com/5P7Kjdk/zakir.png",
            name: "Sabilul Bari Zakir",
            designition: "UI Engineer",
            shortStory:
                "Zakir loves design and code. She specializes in turning beautiful designs into responsive, accessible web interfaces using Tailwind CSS.",
            company: "Netflix",
        }
    ];

    return (
        <div>
            <Title>Explore Stories Of Developer</Title>

            {
                stories.map(story => <StoryCard key={story.id} story={story}></StoryCard>)
            }
        </div>
    );
};

export default Stories;