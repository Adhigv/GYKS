import SkillCard from "./SkillCard";

function SkillsSection() {

  const skills = [
    {
      title: "Yakshagana",
      image:
        "https://images.unsplash.com/photo-1516280440614-37939bbacd81"
    },
    {
      title: "Handicrafts",
      image:
        "https://images.unsplash.com/photo-1452860606245-08befc0ff44b"
    },
    {
      title: "Folk Dance",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
    }
  ];

  return (
    <section className="py-20 bg-slate-100">

      <h1 className="text-center text-4xl font-bold mb-10">
        Traditional Skills
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            image={skill.image}
          />
        ))}

      </div>

    </section>
  );
}

export default SkillsSection;