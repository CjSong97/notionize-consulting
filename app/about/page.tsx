// app/about/page.tsx
import AboutNotionize from "@/components/AboutNotionize";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.8))] dark:[mask-image:linear-gradient(180deg,rgba(17,24,39,0.8),rgba(17,24,39,0.2))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 mb-6">
            <span>About Notionize Consulting</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Building Smarter Workspaces
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We transform how businesses use Notion through expert consulting, custom templates, and powerful automations.
          </p>
        </div>
      </section>

      <AboutNotionize />

      {/* Values Section */}
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Guiding principles that shape our work and relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Empowerment",
                description: "We believe in giving people the tools and knowledge to take control of their digital workspace.",
                icon: "🚀"
              },
              {
                title: "Innovation",
                description: "Constantly exploring new ways to leverage Notion's capabilities for better productivity.",
                icon: "💡"
              },
              {
                title: "Simplicity",
                description: "Making complex systems feel simple and intuitive for everyone to use.",
                icon: "✨"
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}