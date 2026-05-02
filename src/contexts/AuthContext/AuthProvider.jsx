import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
//   sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider(); 
// const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).finally(() =>
      setLoading(false),
    );
  };

  // Update User Profile
  const updateUserProfile = (displayName, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName, photoURL }).finally(
      () => setLoading(false),
    );
  };

  //   Email Verification
//   const emailVerification = () => {
//     setLoading(true);
//     return sendEmailVerification(auth.currentUser).finally(() =>
//       setLoading(false),
//     );
//   };

  // Sign In User
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() =>
      setLoading(false),
    );
  };

  //   Google Login
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() =>
      setLoading(false),
    );
  };

  //   Github Login
//   const signInWithGithub = () => {
//     setLoading(true);
//     return signInWithPopup(auth, githubProvider).finally(() =>
//       setLoading(false),
//     );
//   };

  //   Password Reset
  const userPasswordReset = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email).finally(() => setLoading(false));
  };

  // Sign Out User
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  };

  // Observe the User
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //   console.log(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // Pass all Information
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    updateUserProfile,
    // emailVerification,
    signOutUser,
    signInUser,
    userPasswordReset,
    signInWithGoogle,
    // signInWithGithub,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
