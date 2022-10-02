import { useContext } from "react";
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { state } = useContext(AuthContext);

  if (state.name==="") {
    alert("Signup first ")
    return <Navigate to="/signup" />;
  }
  return children;
}
