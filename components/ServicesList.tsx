export default function ServicesList() {
  return (
    <section className="py-20 bg-[var(--background)] text-[var(--foreground)]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Our Services</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Helping you master Notion and digital productivity with expert guidance.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: All Things Notion */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold">All Things Notion</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Learn Notion with our expert-led tutorials and courses. 
              We help individuals and teams onboard seamlessly.
            </p>
          </div>

          {/* Service 2: Notion Templates */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold">Notion Templates</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Get professionally designed Notion templates to streamline 
              your workflow and boost productivity.
            </p>
          </div>

          {/* Service 3: Additional Productivity Services */}
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold">Digital Productivity Services</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Beyond Notion, we provide consulting on ClickUp, Atlassian, 
              and other digital tools to enhance your workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
