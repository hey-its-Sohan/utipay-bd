import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const [balance, setBalance] = useState(() => {
    const stored = localStorage.getItem('balance');
    return stored ? Number(stored) : 10000;
  });

  const deductBalance = (amount) => {
    setBalance(prev => Math.max(prev - amount, 0));
  };
  useEffect(() => {
    localStorage.setItem('balance', balance.toString());
  }, [balance]);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const signOutUser = () => {

    localStorage.removeItem('balance');

    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      const prevUserId = localStorage.getItem('user_id');
      const currentUserId = currentUser?.uid;

      if (currentUserId && prevUserId !== currentUserId) {

        localStorage.removeItem('paidBills');
        localStorage.setItem('user_id', currentUserId);
        setBalance(10000)
      }

      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unSubscribe()
    }
  }, [])

  const refreshUser = () => {
    return auth.currentUser?.reload().then(() => {
      const updatedUser = auth.currentUser;
      setUser({ ...updatedUser });
    });
  };

  const userInfo = {
    createUser,
    signInUser,
    user,
    loading,
    signOutUser,
    googleSignIn,
    deductBalance,
    balance,
    refreshUser
  }


  return (
    <AuthContext value={userInfo}>
      {children}
    </AuthContext>
  );
};

export default AuthProvider;