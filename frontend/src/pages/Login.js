import { useState, useContext } from 'react';
import axios from '../api/axios';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const res = await axios.post('/auth/login', { email, password });
    setUser(res.data);
    alert("Logged in");
  };

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;