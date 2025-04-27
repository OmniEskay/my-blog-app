import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: 'trend-1', title: 'Key Trend: AI in Manufacturing', summary: 'Exploring how AI is revolutionizing the manufacturing sector...' },
  { id: 'tech-1', title: 'Innovative Tech: Quantum Computing Basics', summary: 'A primer on the future of computing power...' },
  { id: 'practice-1', title: 'Best Practice: Agile Development in 2025', summary: 'Adapting agile methodologies for modern challenges...' },
  { id: 'trend-2', title: 'Sustainability in Supply Chains', summary: 'How companies are making their supply chains greener...' }
];

function BlogList() {
  return (
    <div className="container">
      <h2>Blog Posts</h2>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post.id} className="blog-list-item">
            <h2><Link to={`/blog/${post.id}`}>{post.title}</Link></h2>
            <p>{post.summary}</p>
            <Link to={`/blog/${post.id}`}>Read More</Link>
          </div>
        ))
      ) : (
        <p>No blog posts yet. Stay tuned!</p>
      )}
    </div>
  );
}

export default BlogList;