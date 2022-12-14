import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { auth, signInWithGoogle } from "../firebase/firebase.utils.js";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userCredentials;
    await auth.signInWithEmailAndPassword(email, password).catch((error) => {
      if (error.code === "auth/wrong-password") alert("Wrong password");
      if (error.code === "auth/user-not-found")
        alert("No User Exist with this email!");
    });

    setUserCredentials({
      email: "",
      password: "",
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          value={userCredentials.email}
          autoComplete="off"
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={userCredentials.password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <Button type="submit">Submit</Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
