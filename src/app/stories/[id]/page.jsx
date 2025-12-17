import React from 'react';

const FullStoryPage = async ({ params }) => {

    const { id } = await params;
    const stories = [
        {
            id: 1,
            image: "https://i.pravatar.cc/300?img=11",
            name: "Alice Johnson",
            designition: "Frontend Developer",
            company: "Google",
            shortStory:
                "Alice began her journey with simple HTML pages and slowly mastered modern frontend tools.",
            fullStory: [
                "Alice Johnson started learning web development during her college days. At first, she struggled to understand how HTML, CSS, and JavaScript worked together. She spent hours breaking layouts, fixing bugs, and learning from online tutorials. Over time, her curiosity turned into confidence as she built small projects like portfolios and landing pages.",

                "After mastering the basics, Alice moved on to React and Next.js. She learned component-based architecture, state management, and performance optimization. She strongly believed in clean UI and accessibility. By continuously improving her skills and reviewing other developers’ code, she became comfortable working on large-scale frontend applications.",

                "Today, Alice works as a Frontend Developer at Google. She focuses on building fast, accessible, and user-friendly interfaces. She believes consistency and patience are the key factors behind her success and often mentors junior developers to help them grow."
            ],
        },

        {
            id: 2,
            image: "https://i.pravatar.cc/300?img=22",
            name: "Rahul Sharma",
            designition: "Backend Developer",
            company: "Amazon",
            shortStory:
                "Rahul is passionate about building secure and scalable backend systems.",
            fullStory: [
                "Rahul Sharma discovered programming while studying computer science at university. He was fascinated by how servers handled requests and managed databases. Starting with C and Java, he slowly transitioned into backend development using Node.js and Express.",

                "Rahul spent countless nights learning about REST APIs, authentication, and database optimization. He built several backend systems for academic and freelance projects. Debugging production-level issues taught him patience and problem-solving skills.",

                "Currently, Rahul works at Amazon as a Backend Developer. His daily work includes designing scalable APIs and ensuring system reliability. He believes understanding fundamentals deeply is more important than chasing new frameworks."
            ],
        },

        {
            id: 3,
            image: "https://i.pravatar.cc/300?img=33",
            name: "Sara Lee",
            designition: "Full Stack Developer",
            company: "Microsoft",
            shortStory:
                "Sara enjoys working across both frontend and backend technologies.",
            fullStory: [
                "Sara Lee always wanted to understand how complete applications work. She began her journey learning HTML, CSS, and JavaScript, but soon realized that frontend alone was not enough to satisfy her curiosity.",

                "She learned backend technologies like Node.js, MongoDB, and authentication systems. By building full-stack projects, she gained confidence in handling both UI and server logic. Debugging across the stack improved her understanding of application flow.",

                "Sara now works as a Full Stack Developer at Microsoft. She loves collaborating with different teams and believes adaptability is the most valuable skill for modern developers."
            ],
        },

        {
            id: 4,
            image: "https://i.pravatar.cc/300?img=44",
            name: "Imran Hossain",
            designition: "Software Engineer",
            company: "Meta",
            shortStory:
                "Imran believes strong fundamentals make a great engineer.",
            fullStory: [
                "Imran Hossain started coding with C and Java during his early university years. He focused heavily on data structures, algorithms, and problem-solving skills. Competitive programming helped him develop logical thinking.",

                "Later, Imran explored web technologies and system design concepts. He learned how theoretical knowledge translates into real-world software systems. His background helped him quickly adapt to new technologies.",

                "Now a Software Engineer at Meta, Imran works on complex systems that serve millions of users. He strongly believes that mastering fundamentals creates long-term career stability."
            ],
        },

        {
            id: 5,
            image: "https://i.pravatar.cc/300?img=55",
            name: "Emily Carter",
            designition: "UI Engineer",
            company: "Netflix",
            shortStory:
                "Emily blends design thinking with frontend development.",
            fullStory: [
                "Emily Carter had a passion for design from an early age. She started learning UI principles alongside HTML and CSS. Creating visually pleasing layouts became her strength.",

                "She later adopted Tailwind CSS and modern frontend tools to speed up development. Emily focused on accessibility, responsiveness, and smooth user experiences.",

                "Today, Emily works as a UI Engineer at Netflix. She collaborates closely with designers and developers to ensure every interface feels intuitive and polished."
            ],
        },

        {
            id: 6,
            image: "https://i.pravatar.cc/300?img=66",
            name: "Daniel Kim",
            designition: "DevOps Engineer",
            company: "Spotify",
            shortStory:
                "Daniel ensures systems run smoothly and efficiently.",
            fullStory: [
                "Daniel Kim entered the tech world through system administration. He was fascinated by how infrastructure supports applications behind the scenes. Linux and networking were his starting points.",

                "He later learned cloud platforms, CI/CD pipelines, and containerization. Automating deployments and monitoring systems became his daily work. He believes DevOps bridges the gap between development and operations.",

                "Daniel now works at Spotify as a DevOps Engineer. His mission is to ensure reliability, scalability, and fast delivery of software products."
            ],
        },
    ];


    const singleStory = stories.find(story => story.id == id);
    if (!singleStory) {
        return <h2>No Story Found</h2>
    }

    return (
        <div>
            Story Details Page
        </div>
    );
};

export default FullStoryPage;