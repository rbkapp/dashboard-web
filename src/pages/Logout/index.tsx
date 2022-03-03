import { useEffect } from "react";
import {
  getAuth,
  signOut
} from 'firebase/auth';
import { useAuth } from "contexts/AuthContext";

export default function Login() {
  const authentication = getAuth();

  useEffect(() => {
    signOut(authentication);
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    
    window.open('/login', '_self')?.focus();
  }, []);

  return (<></>
  )
}