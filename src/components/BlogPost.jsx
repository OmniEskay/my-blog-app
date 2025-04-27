import React from 'react';
import { useParams, Link } from 'react-router-dom';

const posts = {
  'trend-1': { title: 'Key Trend: AI in Manufacturing', content: 'Artificial Intelligence is no longer just a buzzword in manufacturing; it is actively reshaping production lines. From predictive maintenance reducing downtime to AI-driven quality control detecting defects invisible to the human eye, the integration of smart algorithms is boosting efficiency and precision across the factory floor. We delve into specific use cases transforming the industry today.' },
  'tech-1': { title: 'Innovative Tech: Quantum Computing Basics', content: 'Quantum computing harnesses the strange principles of quantum mechanics, like superposition and entanglement, to perform calculations far beyond the reach of classical computers. While still emerging, its potential to revolutionize fields like materials science, drug discovery, and complex optimization problems is immense. This post breaks down the fundamental concepts behind this groundbreaking technology.' },
  'practice-1': { title: 'Best Practice: Agile Development in 2025', content: 'As project complexity grows and market demands accelerate, agile methodologies continue to evolve. In 2025, the focus shifts towards enhanced collaboration tools, integrating AI for backlog refinement, and adapting frameworks like Scrum and Kanban for distributed, hybrid teams. Staying truly agile means embracing flexibility not just in process, but in the tools and mindset we adopt.' },
  'trend-2': { title: 'Sustainability in Supply Chains', content: 'Consumers and regulations increasingly demand environmental responsibility, pushing companies to embed sustainability into their supply chains. This involves optimizing logistics to reduce emissions, sourcing materials responsibly, and improving transparency from end-to-end. Building a greener supply chain is not just ethical, it is becoming a critical competitive advantage.' }
};

function BlogPost() {
  const { postId } = useParams(); 
  const post = posts[postId]; 

  if (!post) {
    return (
        <div className="container">
            <h2>Post Not Found</h2>
            <p>Sorry, the blog post you are looking for does not exist.</p>
            <Link to="/blog" className="back-link">Back to Blog List</Link>
        </div>
    );
  }

  return (
    <div className="container blog-post">
       <Link to="/blog" className="back-link">&larr; Back to Blog List</Link>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;