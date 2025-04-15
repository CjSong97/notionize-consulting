import Link from 'next/link'
import React from 'react'

const Features = () => {
  return (
    <div>
        {/* Features Section */}
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-6">
        
        {/* Notion Templates */}
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition text-center">
          <h3 className="text-2xl font-semibold">Notion Templates</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Professionally designed Notion templates to optimize your workflow.
          </p>
          <Link href="https://www.notion.com/@nconsulting" target="_blank"
            className="mt-4 inline-block text-blue-600 hover:underline">
            View Templates →
          </Link>
        </div>

        {/* Courses */}
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition text-center">
          <h3 className="text-2xl font-semibold">Courses</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Learn how to master Notion and other productivity tools with our courses.
          </p>
          <Link href="https://notionize0.gumroad.com/" target="_blank"
            className="mt-4 inline-block text-blue-600 hover:underline">
            Explore Courses →
          </Link>
        </div>

        {/* Personalized Setup */}
        <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition text-center">
          <h3 className="text-2xl font-semibold">Personalized Setup</h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            Get a custom setup tailored to your needs. Contact us directly to arrange.
          </p>
          <Link href="mailto:your-email@example.com"
            className="mt-4 inline-block text-blue-600 hover:underline">
            Contact Us →
          </Link>
        </div>

      </section>
    </div>
  )
}

export default Features