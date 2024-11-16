import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      const user = res.user;
      setUser(user);
    });
  };

  const Login = (email, password) => {
    signInWithEmailAndPassword(email, password);
  };

  const Logout = () => {
    signOut();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return ()=>{
      return unsubscribe()
    }
  },[]);

  const authinfo = {
    user,
    loading,
    createUser,
    Login,
    Logout,
  };
  return <AuthContext.Provider value={authinfo}>
    {children}
  </AuthContext.Provider>
};

export default AuthProvider;
