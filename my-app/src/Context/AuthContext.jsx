import React, { useState } from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({ children }) {
  const [state, setState] = useState({
    name:"",
    password:""
  });
  function handleSignUp(name,password) {
    setState({
      ...state,
      name: name,
      password: password
    });
  }
//   function handleLogout() {
//     setState({
//       ...state,
//       isAuth: false,
//       password: null
//     });
//   }

  return (
    <AuthContext.Provider value={{ state, handleSignUp }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
