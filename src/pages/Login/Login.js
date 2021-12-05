import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const reidirect_uri = location.state?.from || '/home'
  const handlesignInWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        history.push(reidirect_uri);
      })
  }
  return (
    <div>
      <button onClick={handlesignInWithGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;
