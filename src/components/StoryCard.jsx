import Image from "next/image";
import Link from "next/link";

const StoryCard = ({ story }) => {
    const { image, name, designition, shortStory, company } = story;

    return (
        <div className="border rounded-xl shadow-md p-5 hover:shadow-lg transition mt-5">
            <div className="flex items-center gap-4">
                <img
                    src={image}
                    alt={name}
                    width={60}
                    height={60}
                    className="rounded-full"
                />

                <div>
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="text-sm text-gray-500">{designition}</p>
                    <p className="text-sm text-indigo-600">{company}</p>
                </div>
            </div>

            <p className="mt-4 text-gray-700 text-sm">
                {shortStory}
            </p>

            {/* Button */}
            <Link
                href={`/stories/${story.id}`}
                className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
            >
                Read Full Story
            </Link>
        </div>
    );
};

export default StoryCard;