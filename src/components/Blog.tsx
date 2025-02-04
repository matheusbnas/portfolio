import React from 'react';

export default function Blog() {
  return (
    <article className="space-y-8">
      <header>
        <h2 className="text-3xl font-bold mb-6">Blog</h2>
      </header>
      
      <div className="w-full h-[800px] bg-gray-700 rounded-lg overflow-hidden">
        <iframe 
          src="https://widgets.sociablekit.com/medium-publication-feed/iframe/25377786" 
          className="w-full h-full border-0"
          title="Medium Blog Posts"
        />
      </div>
    </article>
  );
}