import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
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
   return signInWithEmailAndPassword(auth,email,password)
}


// logout user 
const logoutUser=()=>{
    setLoading(true);
    return signOut(auth)
}


// update profile 
const updateUserProfile=(name,img)=>{
    return  updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: img,
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
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
        logoutUser,
        updateUserProfile
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;