import { useState } from "react";
import { AuthForm } from "./AuthFormStyles";
import { LoginBody } from "./LoginStyles";

const Login = ({ switchView }) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
    switchView(!toggle);
  };

  return (
    <AuthForm>
      <LoginBody>
        <h2>Log In</h2>

        <div className="AuthForm_Group">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </div>

        <a className="SubmitButton" href="#">
          Login
        </a>
        <span>
          {`Don't`} you have an account{" "}
          <a className="RedirectAuth" onClick={() => handleToggle()} href="#">
            Create one
          </a>
        </span>
      </LoginBody>
    </AuthForm>
  );
};

export default Login;
