import Image from "next/image";

const StoryCard = ({ story }) => {
  const { image, name, designition, shortStory, company } = story;

  return (
    <div className="border rounded-xl shadow-md p-5 hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <Image
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
    </div>
  );
};

export default StoryCard;