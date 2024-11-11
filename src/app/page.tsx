"use client";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.setAttribute('chatbotId', 'ixlMs2gfxFHJpfpBuUEVI');
    script.setAttribute('domain', 'www.chatbase.co');
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-slate-50 grainy-light min-h-screen py-8">
      <section className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mt-10 sm:mt-16 lg:mt-0">
            Your path for your{" "}
            <span className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Career
            </span>{" "}
            development
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:pr-10 max-w-prose text-center lg:text-left text-gray-600">
            Make your own path towards your{" "}
            <span className="font-semibold">Learning journey</span>. LearnFlow
            allows you to develop a study plan based on your adjustments.
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-14 sm:mt-16 text-center lg:text-left">
          Your learning options
        </h2>
        
        <div className="flex justify-center lg:justify-start flex-wrap gap-2 sm:gap-4 mt-6 sm:mt-8">
          {["Career", "Job", "Course", "Company"].map((option, index) => (
            <span
              key={index}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              {option}
            </span>
          ))}
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-14 sm:mt-16 text-center lg:text-left">
          Special features
        </h2>

        <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 mt-6 sm:mt-8 space-y-2 sm:space-y-4 lg:pl-8">
          <li>⭐ If you are aiming for a company, we will provide you with the necessary courses and a personalized study plan.</li>
          <li>⭐ We also provide you with a flowchart for a visual reference of your study plan.</li>
          <li>⭐ Obtain course URLs and YouTube links for each topic in your daily study plan.</li>
        </ul>
      </section>
    </div>
  );
}