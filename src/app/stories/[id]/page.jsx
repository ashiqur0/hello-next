import React from 'react';

const FullStoryPage = async ({ params }) => {

    const { id } = await params;

    return (
        <div>
            Story Details Page
        </div>
    );
};

export default FullStoryPage;