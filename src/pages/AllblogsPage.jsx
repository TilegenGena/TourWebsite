import { Container } from "@mui/material";
import React from "react";
import AllBlogs from "../components/AllBlogs";
import BlogsPagination from "../components/BlogsPagination";
import FilterBlogs from "../components/FilterBlogs";

const AllblogsPage = () => {
  return (
    <div>
      <Container>
        <FilterBlogs />
        <AllBlogs />
        <BlogsPagination />
      </Container>
    </div>
  );
};

export default AllblogsPage;
