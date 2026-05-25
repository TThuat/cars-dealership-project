import React from "react";

function Register() {
<<<<<<< HEAD
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
=======

    return (

        <div style={{width:"400px",margin:"auto"}}>

            <h1>Sign-up</h1>

            <form>

                <input
                    type="text"
                    placeholder="Username"
                    style={{display:"block",margin:"10px",width:"100%",padding:"10px"}}
                />

                <input
                    type="text"
                    placeholder="First Name"
                    style={{display:"block",margin:"10px",width:"100%",padding:"10px"}}
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    style={{display:"block",margin:"10px",width:"100%",padding:"10px"}}
                />

                <input
                    type="email"
                    placeholder="Email"
                    style={{display:"block",margin:"10px",width:"100%",padding:"10px"}}
                />

                <input
                    type="password"
                    placeholder="Password"
                    style={{display:"block",margin:"10px",width:"100%",padding:"10px"}}
                />

                <button
                    type="submit"
                    style={{
                        padding:"10px",
                        width:"100%",
                        background:"black",
                        color:"white"
                    }}
                >
                    Register
                </button>

            </form>

        </div>

    );
>>>>>>> 3ce0f69198c4892bcdc3d739a33699833a13dfb6
}

export default Register;