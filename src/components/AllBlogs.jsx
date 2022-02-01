import { CribRounded } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ClientContext } from "../context/ClientProvider";
import BlogsCard from "./BlogsCard";

const AllBlogs = () => {
  const { getBlogs, blogs } = useContext(ClientContext);

  useEffect(() => {
    getBlogs();
  }, []);

  if (!blogs) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="all-blogs">
      <h2>AllBlogs</h2>
      <div>
        <Grid container spacing={2}>
          {blogs.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <BlogsCard item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default AllBlogs;
