// components/AboutNotionize.tsx

import Image from "next/image";

export default function AboutNotionize() {
  const stats = [
    {
      number: "5",
      description: "Fully fledged tools courses created for everyday users and professionals",
    },
    {
      number: "10",
      description: "Companies and entrepreneurs helped with digital productivity workflows",
    },
    {
      number: "20+",
      description: "Custom-built Notion templates used by clients worldwide",
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-900 py-12 px-6 lg:px-24">
      {/* Headline Image */}
      <div className="relative w-full h-64 lg:h-96 rounded-xl overflow-hidden mb-10">
        <Image
          src="/corporate-help.jpg"
          alt="Helping businesses"
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
          priority
        />
      </div>

      {/* Bio */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Empowering Digital Productivity
        </h2>
        <p className="text-lg text-slate-700 dark:text-slate-300">
          At Notionize Consulting, we’re passionate about helping individuals and small
          businesses reach their full potential through powerful digital tools.
          Specializing in platforms like Notion, ClickUp, and Atlassian, we turn digital
          overwhelm into organized action.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-6 shadow-md flex items-center"
          >
            <span className="text-4xl font-extrabold text-primary dark:text-white mr-4">
              {stat.number}
            </span>
            <p className="text-slate-700 dark:text-slate-300 text-base">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
