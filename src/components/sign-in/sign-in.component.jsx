import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { auth, signInWithGoogle } from "../firebase/firebase.utils.js";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    await auth.signInWithEmailAndPassword(email, password).catch((error) => {
      if (error.code === "auth/wrong-password") alert("Wrong password");
      if (error.code === "auth/user-not-found")
        alert("No User Exist with this email!");
    });

    this.setState({
      email: "",
      password: "",
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            autoComplete="off"
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
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
  }
}

export default SignIn;
