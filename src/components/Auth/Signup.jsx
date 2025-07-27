import { useState } from "react";
import { AuthForm } from "./AuthFormStyles";
import { SignupBody } from "./SignupStyles";
SignupBody;

const Signup = ({ switchView }) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
    switchView(toggle);
  };

  return (
    <AuthForm>
      <SignupBody>
        <h2>Sign Up</h2>

        <div className="AuthForm_Group">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </div>

        <a className="SubmitButton" href="#">
          Sign Up
        </a>

        <span>
          Do you have an account?{" "}
          <a onClick={() => handleToggle()} className="RedirectAuth" href="#">
            Create one
          </a>
        </span>
      </SignupBody>
    </AuthForm>
  );
};

export default Signup;
