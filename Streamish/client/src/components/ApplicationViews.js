import React from "react";
import { Routes, Route } from "react-router-dom";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import VideoDetails from "./VideoDetails";
import Login from "./Login.js";
import Register from "./Register.js";
import { useNavigate } from "react-router-dom";
import { VideoEditForm } from "./VideoEditForm";


const ApplicationViews = ({ isLoggedIn }) => {
const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/">
        <Route index element={isLoggedIn ? <VideoList/> : navigate("login") } />
        <Route path="videos">
          <Route index element={<VideoList/>} />
          <Route path="add" element={isLoggedIn ? <VideoForm/> : navigate("login") } />
          <Route path=":id" element={isLoggedIn ? <VideoDetails/> : navigate("login") } />
          <Route path="edit/:id" element={isLoggedIn ? <VideoEditForm/> : navigate("login") } />
        </Route>
      </Route>
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default ApplicationViews;