import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogs } from '../../services/api';
import './Blog.css';

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getBlogs();
        setBlogs(res.data.blogs || []);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-page">
      <section className="page-hero">
        <h1>Design Blog</h1>
        <p>Tips, trends, and inspiration for your space</p>
      </section>

      <div className="container">
        <section className="blog-section section">
          <div className="blog-grid">
            {blogs.map(blog => (
              <article key={blog._id} className="blog-card">
                {blog.featuredImage && (
                  <div className="blog-image">
                    <img src={blog.featuredImage} alt={blog.title} />
                  </div>
                )}
                <div className="blog-content">
                  <p className="blog-category">{blog.category}</p>
                  <h3>{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <Link to={`/blog/${blog.slug}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Blog;
