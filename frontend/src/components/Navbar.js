import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 20px",
      borderBottom: "1px solid #eee",
      marginBottom: "30px"
    }}>
      <h2 style={{ margin: 0 }}>NEO</h2>

      <div>
        <Link to="/" style={{ marginRight: "15px",
          textDecoration: "none",
          color: "#000"
         }}>Home</Link>

        <Link to="/create">
          <button style={{
            padding: "8px 15px",
            background: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            Create
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;