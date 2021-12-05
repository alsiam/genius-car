import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../firebase/firebase.init";

firebaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(user)

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setLoading(true)
   return signInWithPopup(auth, googleProvider)
   
      
  };
  const logout = () => {
    setLoading(true)
    signOut(auth)
    .then(() => {
      setUser({});
    })
    .finally(()=>{
      setLoading(false)
    })
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else{
        setUser({})
      }
      setLoading(false)
    });
  }, [])

  return {
    user,
    loading,
    signInWithGoogle,
    logout,
  }
};


export default useFirebase;