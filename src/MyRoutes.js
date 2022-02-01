import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NaviBar from "./components/NaviBar";
import AdminProvider from "./context/AdminProvider";
import AuthProvider from "./context/AuthProvider";
import ClientProvider from "./context/ClientProvider";
import CommentProvider from "./context/CommentProvider";
import AddBlogPage from "./pages/AddBlogPage";
import AdminPage from "./pages/AdminPage";
import AllblogsPage from "./pages/AllblogsPage";
import BlogInfo from "./pages/BlogInfo";
import FavoritsPage from "./pages/FavoritsPage";
import MainPage from "./pages/MainPage";

const MyRoutes = () => {
  return (
      <CommentProvider>
    <AuthProvider>
        <AdminProvider>
          <ClientProvider>
            <BrowserRouter>
              <NaviBar />
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/blogs/all" element={<AllblogsPage />} />
                <Route path="/add" element={<AddBlogPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/blogs/info/:id" element={<BlogInfo />} />
                <Route path="/blogs/favorit" element={<FavoritsPage />} />
              </Routes>
            </BrowserRouter>
          </ClientProvider>
        </AdminProvider>
    </AuthProvider>
      </CommentProvider>
  );
};

export default MyRoutes;
