import Image from "next/image";

const FullStory = ({ story }) => {
  const { image, name, designition, company, fullStory } = story;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={image}
          alt={name}
          width={80}
          height={80}
          className="rounded-full"
        />

        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-gray-600">{designition}</p>
          <p className="text-indigo-600">{company}</p>
        </div>
      </div>

      <div className="space-y-5 text-gray-700 leading-relaxed">
        {fullStory.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default FullStory;