import { useState,useEffect } from "react";
import { fetchData } from "../../main.js";


const Profile = () => {
  
  const [post, setPost] = useState({
   
    postcontent: ""
  });

  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const loggedInUsername = user.username;
    setUsername(loggedInUsername);
  }, []);

  const { postcontent } = post;


  const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    let user = localStorage.getItem("user");
    let parseUser = JSON.parse(user);
    let userId = parseUser.username; // Corrected property name
    fetchData("/post/createpost", 
    {
        userId,
         postcontent 
        },
         "POST")
      .then((data) => {
        if (data) {
          console.log(data);
          
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }



  return (
    <div>
    <form>
      <h3>Welcome, {username}</h3>
      <div className="postdetails">
        
      </div>
      <div className="postdetails">
        <label htmlFor="postcontent" className="form-label">Enter your Message here...</label><br />
        <textarea 
        name="postcontent"
        className="postcontent"
        id="postcontent"
        onChange={onChange}
        rows="5"
        placeholder="Please enter your post message here..!" 
       ></textarea>
      </div>

      <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
    </form>
    </div>
  );
}

export default Profile;
