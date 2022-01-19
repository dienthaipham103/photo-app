import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { unwrapResult } from '@reduxjs/toolkit';
import { Button } from 'reactstrap';
import firebase from "firebase/compat/app";
import "./App.css";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import MainPage from "./features/Photo/pages/MainPage";
import AddEditPage from "./features/Photo/pages/AddEditPage";
import SignIn from "./features/Auth/pages/SignIn";
import productApi from "./api/productApi";
import { useDispatch } from "react-redux";
import { getMe } from './app/userSlice';

// Lazy load - Code splitting
// const Photo = React.lazy(() => import('./features/Photo'));

// Configure Firebase.
const config = {
  // apiKey: "AIzaSyAaD1DAlIx8s2_qkeMcGbPEud8YZX7_WPc",
  // authDomain: "photo-app-e0999.firebaseapp.com",
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);

function App() {
  const [productList, setProductList] = useState();
  const dispatch = useDispatch();

  // call api to get product list
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log("Fail to call API: ", error);
      }
    };
    fetchProductList();
  }, []);

  // Handle firebase auth changed
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        if (!user) {
          // user logs out, handle something here
          console.log("User is not logged in");
          return;
        }

        // Get me when signed in
        // const action = getMe();
        try {
          const actionResult = await dispatch(getMe());
          const currentUser = unwrapResult(actionResult);
          console.log('Logged in user: ', currentUser);
          console.log(user);
        } catch (error) {
          console.log("Failed to login ", error.message);
          // show toast error
        }
      });

    return () => unregisterAuthObserver();
  }, []);

  const handleButtonClick = async () => {
    try {
      const params = {
        _page: 1,
        _limit: 10,
      };
      const response = await productApi.getAll(params);
      console.log(response);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  };

  return (
    <div className="photo-app">
      {/* <Suspense fallback = {<div>Loading ...</div>}> */}
      <BrowserRouter>
        <Header />
        {/* <Button onClick={handleButtonClick}>Fetch Product List</Button> */}
        <Routes>
          <Route path="/" element={<Navigate to="/photos" />} />
          <Route path="/photos" element={<MainPage />} />
          <Route path="/photos/add" element={<AddEditPage />} />
          <Route path="/photos/:photoId" element={<AddEditPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* </Suspense> */}
    </div>
  );
}

export default App;
