import { StrictMode } from "react";
import styled from "styled-components";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SetData from "./SetData.jsx";
import Sidebar from "@components/Sidebar/Sidebar.jsx";
import Header from "@components/Header/Header.jsx";
import Footer from "@components/Footer/Footer.jsx";

import Login from "@pages/Login/Login.jsx";
import Register from "@pages/Register/Register.jsx";
import NewPost from "@pages/NewPost/NewPost.jsx";
import Settings from "@pages/Settings/Settings.jsx";
import Main from "@pages/Main/Main.jsx";
import Profile from "@pages/Profile/Profile.jsx";
import Feed from "@pages/Feed/Feed.jsx";
import Messenger from "@pages/Messenger/Messenger.jsx";
import Friends from "@pages/Friends/Friends.jsx";
import Organization from "@pages/Organization/Organization.jsx";
import NotFound from "@pages/NotFound/NotFound.jsx";

export const ContentWrapper = styled.div`
  margin-top: 60px;
  min-height: calc(100vh - 60px);
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <SetData />
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/photos" element={<Profile />} />
          <Route path="/profile/videos" element={<Profile />} />
          <Route path="/profile/posts" element={<Profile />} />
          <Route path="/profile/new_post" element={<NewPost />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/:id/photos" element={<Profile />} />
          <Route path="/:id/videos" element={<Profile />} />
          <Route path="/:id/posts" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/messenger/chat/:id" element={<Messenger />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/friends/requests" element={<Friends />} />
          <Route path="/manufacturers" element={<Organization />} />
          <Route path="/public_organizations" element={<Organization />} />
          <Route path="/organizations" element={<Organization />} />
          <Route path="/specialists" element={<Organization />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ContentWrapper>
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
