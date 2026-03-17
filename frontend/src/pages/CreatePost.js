import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const submit = async () => {
  try {
    await axios.post('/posts', { title, content, image });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div style={{
      maxWidth: "600px",
      margin: "auto",
      background: "#fff",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      <h2>Create New Post</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ ...inputStyle, height: "120px" }}
      />

      <input
        placeholder="Cover Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        style={inputStyle}
      />

      {/* IMAGE PREVIEW */}
      {image && (
        <img
          src={image}
          alt="preview"
          style={{
            width: "100%",
            borderRadius: "8px",
            marginTop: "10px"
          }}
        />
      )}

      <button onClick={submit} style={buttonStyle}>
        Publish Post
      </button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  marginTop: "15px",
  padding: "10px",
  width: "100%",
  background: "#000",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

export default CreatePost;