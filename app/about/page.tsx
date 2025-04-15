import AboutNotionize from "@/components/AboutNotionize";

export default function About() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Retaking Digital Ownership</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We help people take control and become digital professionals with a 
          focus on Notion as a productivity platform.
        </p>
      </section>
      <AboutNotionize />
      
    </main>
  );
}
