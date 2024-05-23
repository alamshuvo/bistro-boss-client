import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
const auth=getAuth(app);
  export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true)
// create user 
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

// login user 


const loginUser=(email,password)=>{
    setLoading(true);
    signInWithEmailAndPassword(email,password)
}


// logout user 
const logoutUser=()=>{
    setLoading(true);
    return signOut(auth)
}

useEffect(()=>{
  const unsubscrive=  onAuthStateChanged(auth,curentUser=>{
        setUser(curentUser);
        console.log("curent user",curentUser);
        setLoading(false)

    });
    return ()=>{
        unsubscrive
    }
},[])



    const authInfo={
        user,
        loading,
        createUser,
        loginUser,
        logoutUser
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;