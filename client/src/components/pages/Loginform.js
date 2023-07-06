import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchData } from "../../main.js";
const Login = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData("/user/login",
      {
        username,
        password
      },
      "POST")
      .then((data) => {
        if (!data.message) {
          console.log(data)
          storeInlocalStorage(data);
          navigate("/Profile");
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }
  const storeInlocalStorage = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    navigate("/profile")
  }

  return (
    <div className="col-6">
      <form className="form" onSubmit={onSubmit}>
      <div className="logindetails" id="login">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text" 
            className="form-label" 
            id="username"
            name='username'
            placeholder="Please Enter user Name"
            onChange={onChange}
            value={username}
            required
          />
        </div>
        <div className="logindetails" id="login">
        <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-label" 
            id="password"
            name='password'
            placeholder="Please Enter your Password"
            onChange={onChange}
            value={password}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Login</button>
      </form>
      <p>For a New User Please Register here...
        <Link to="/register">
          Register
        </Link></p>
    </div>
  );
}

export default Login;