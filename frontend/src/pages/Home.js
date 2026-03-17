import { useEffect, useState } from 'react';
import axios from '../api/axios';

function Home() {
  const [posts, setPosts] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);

  // Fetch posts
  useEffect(() => {
  fetchPosts();
}, []);

const fetchPosts = async () => {
  try {
    const res = await axios.get('/posts');
    setPosts(res.data);
  } catch (err) {
    console.log(err);
  }
};

  // Toggle 3-dot menu
  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  // Delete post
  const handleDelete = async (id) => {
  await axios.delete(`/posts/${id}`);
  fetchPosts();
};

  // Edit placeholder
  const handleEdit = (id) => {
    alert("Edit feature coming soon");
  };

  return (
    <div>

      {/* HERO SECTION */}
      <div style={{
        textAlign: "center",
        marginBottom: "40px"
      }}>
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Ideas worth sharing
        </h1>
        <p style={{ color: "#666" }}>
          Explore stories, thinking, and expertise from writers on any topic.
        </p>
      </div>

      {/* POSTS */}
      <h2 style={{ marginBottom: "20px" }}>Latest Posts</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px"
      }}>
        {posts.map(post => (
          <div key={post._id} className="post-card">

            {/* 3 DOT MENU */}
            <div style={{ position: "absolute", top: "10px", right: "10px" }}>
              <button
                onClick={() => toggleMenu(post._id)}
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "18px",
                  cursor: "pointer"
                }}
              >
                ⋮
              </button>

              {activeMenu === post._id && (
                <div style={{
                  position: "absolute",
                  right: 0,
                  background: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                }}>
                  <div
                    onClick={() => handleEdit(post._id)}
                    style={{ padding: "10px", cursor: "pointer" }}
                  >
                    Edit
                  </div>
                  <div
                    onClick={() => handleDelete(post._id)}
                    style={{ padding: "10px", cursor: "pointer", color: "red" }}
                  >
                    Delete
                  </div>
                </div>
              )}
            </div>

            {/* CONTENT */}
            <h3>{post.title}</h3>
            <p style={{ color: "#666", margin: "10px 0" }}>
              {post.content}
            </p>

            <p style={{ fontSize: "12px", color: "#999" }}>
              {new Date(post.createdAt).toDateString()}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;