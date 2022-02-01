import axios from "axios";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { API } from "../helpers/const";

export const ClientContext = createContext();

const INIT_STATE = {
  blogs: null,
  favorit: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_BLOGS":
      return { ...state, blogs: action.payload };
    case "GET_BLOG_INFO":
      return { ...state, info: action.payload };
    case "ADD_AND_DELETE_BLOG_IN_FAVORIT":
      return { ...state, blogsCount: action.payload };
    case "GET_FAVORIT":
      return { ...state, favorit: action.payload };
    
    default:
      return state;
  }
};
const ClientProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getBlogs = async () => {
    try {
      const response = await axios(`${API}${window.location.search}`);
      let action = {
        type: "GET_BLOGS",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  //! Blog INFO

  const getBlogInfo = async (id) => {
    try {
      const response = await axios(`${API}/${id}`);
      let action = {
        type: "GET_BLOG_INFO",
        payload: response.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };

  // ! FAVORIT
  function addAndDeleteBlogInFavorit(blog) {
    console.log(blog);
    let favorit = JSON.parse(localStorage.getItem("favorit"));
    if (!favorit) {
      favorit = {
        blogs: [],
      };
    }

    let check = favorit.blogs.find((item) => {
      return item.id === blog.id;
    });

    if (!check) {
      favorit.blogs.push(blog);
    } else {
      favorit.blogs = favorit.blogs.filter((item) => {
        return item.id !== blog.id;
      });
    }

    localStorage.setItem("favorit", JSON.stringify(favorit));

    let action = {
      type: "ADD_AND_DELETE_BLOG_IN_FAVORIT",
      payload: favorit.blogs.length,
    };
    dispatch(action);
  }

  function checkBlogInFavorit(id) {
    let favorit = JSON.parse(localStorage.getItem("favorit"));
    if (!favorit) {
      favorit = {
        blogs: [],
      };
    }
    let check = favorit.blogs.find((item) => {
      return item.id === id;
    });

    if (!check) {
      return false;
    } else {
      return true;
    }
  }

  function getFavorit() {
    let favorit = JSON.parse(localStorage.getItem("favorit"));
    console.log(favorit)
    if (!favorit) {
      favorit = {
        blogs: [],
      };
    }
    let action = {
      type: "GET_FAVORIT",
      payload: favorit.blogs,
    };
    dispatch(action);
  }

  function deleteBlogInFavorit(id) {
    let favorit = JSON.parse(localStorage.getItem("favorit"));
    favorit.blogs = favorit.blogs.filter((item) => {
      return item.blog.id !== id;
    });
    localStorage.setItem("favorit", JSON.stringify(favorit));
    getFavorit();
    let action = {
      type: "ADD_AND_DELETE_BLOG_IN_FAVORIT",
      payload: favorit.blogs.length,
    };
    dispatch(action);
  }
  //! PAGINATION
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    if (state.blogs) {
      setPosts(state.blogs);
    }
  }, [state.blogs]);

  const indexOfLastPost = postsPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalBlogsCount = posts.length;

  

  return (
    <ClientContext.Provider
      value={{
        getBlogs,
        getBlogInfo,
        addAndDeleteBlogInFavorit,
        checkBlogInFavorit,
        getFavorit,
        deleteBlogInFavorit,
        setCurrentPage,
        // blogs: state.blogs,
        blogs: currentPosts,
        info: state.info,
        favorit: state.favorit,
        postsPerPage,
        totalBlogsCount,
        currentPage,
      }}
    >
      {props.children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
