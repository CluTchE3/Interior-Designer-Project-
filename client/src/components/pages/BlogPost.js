import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlog } from '../../services/api';
import './Blog.css';

function BlogPost() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getBlog(slug);
        setBlog(res.data.blog);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };
    fetchBlog();
  }, [slug]);

  if (!blog) return <div className="container"><p>Loading...</p></div>;

  return (
    <div className="blog-post-page">
      {blog.featuredImage && (
        <div className="post-hero">
          <img src={blog.featuredImage} alt={blog.title} />
        </div>
      )}

      <article className="post-content">
        <div className="container">
          <h1>{blog.title}</h1>
          <div className="post-meta">
            <span>{blog.author}</span>
            <span>•</span>
            <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
            <span>•</span>
            <span>{blog.views} views</span>
          </div>

          <div className="post-body" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </article>
    </div>
  );
}

export default BlogPost;
