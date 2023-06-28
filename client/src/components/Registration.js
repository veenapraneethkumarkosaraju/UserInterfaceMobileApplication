const Registration= () => {

    return (
<div class="registerdetails" id="registration">
<label for="fname"><b>First Name</b> </label>
<input type="text"  id = "username" placeholder="Enter Firstname" name="fname"></input>
<br></br><br></br>
<label for="lname"><b>Last Name</b></label>
<input type="text" id="lname" placeholder="Enter Lastname" name="lname"></input>
<br></br><br></br>
<label for="email"><b>Email addres</b></label>
<input type="text" id = "email" placeholder="Enter email address" name="email"></input>
<br></br><br></br>
<label for="pswd"><b>Password</b></label>
<input type="password" id =  "password" placeholder="Enter Password" name="pswd"></input>
<br></br><br></br>
<button type="submit"><b>Sign Up</b></button>
</div>
);
}

export default Registration;