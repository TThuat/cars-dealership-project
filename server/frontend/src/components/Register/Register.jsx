import React from "react";

function Register() {
  return (
    <div style={{ padding: "20px" }}>

      <h1>Sign Up</h1>

      <input type="text" placeholder="Username" />

      <br /><br />

      <input type="text" placeholder="First Name" />

      <br /><br />

      <input type="text" placeholder="Last Name" />

      <br /><br />

      <input type="email" placeholder="Email" />

      <br /><br />

      <input type="password" placeholder="Password" />

      <br /><br />

      <button>Register</button>

    </div>
  );
}

export default Register;