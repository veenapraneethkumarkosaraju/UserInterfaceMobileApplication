const Loginform= () => {

    return (
<div class="logindetails" id="login">
<label for="username"><b>Username</b></label>
                <input type="text" id="username" placeholder=" Enter username"></input>
                <br>
                </br><br></br>
                <label for="pswd"><b>Password</b></label>
                <input type="password" id="pswd" placeholder="Enter password"></input>
                <br></br><br></br>
                <button class="btn-1"><b>login</b></button>
                <br></br><br></br>
                <input type="checkbox" value="para"></input>
                
                <label for="para">keep me login</label>
                <br></br><br></br>
                <p>Don't have an account, Please register here &nbsp;<a href="register.html" >Register</a></p>




</div>

);
}

export default Loginform;