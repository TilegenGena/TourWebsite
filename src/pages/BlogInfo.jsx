import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { ClientContext } from "../context/ClientProvider";
import Comment from "../components/comments/Comment";

const BlogInfo = () => {
  const params = useParams();
  const { getBlogInfo, info } = useContext(ClientContext);
  useEffect(() => {
    getBlogInfo(params.id);
  }, []);
  if (!info) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="blog-info">
      <h2>Blog Info</h2>
      <div className="info">
        <Card sx={{ maxWidth: 800 }}>
          <CardMedia
            component="img"
            height="300"
            image={info.image}
            alt="pics"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {info.description}
            </Typography>
            <Typography variant="h3" color="text.secondary">
              {info.price}
            </Typography>
          </CardContent>
          
        </Card>
          <Comment />
      </div>
    </div>
  );
};
export default BlogInfo;
