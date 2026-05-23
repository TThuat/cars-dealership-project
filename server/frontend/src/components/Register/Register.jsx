import React from "react";

function Register() {

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
}

export default Register;