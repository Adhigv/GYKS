function SkillCard({ title, image }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300">

      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">

        <h2 className="font-bold text-xl">
          {title}
        </h2>

      </div>

    </div>
  );
}

export default SkillCard;