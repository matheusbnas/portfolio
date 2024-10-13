import React from 'react';

export default function Blog() {
  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      
      <section className="blog-posts">
        <ul className="blog-posts-list" id="medium-posts">
          <iframe 
            src="https://widgets.sociablekit.com/medium-publication-feed/iframe/25377786" 
            frameBorder="0" 
            width="100%" 
            height="1000"
          ></iframe>
        </ul>
      </section>
    </article>
  );
}