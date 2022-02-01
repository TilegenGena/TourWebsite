import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ClientContext } from "../context/ClientProvider";
import { Link } from "react-router-dom";

export default function BlogsCard({ item }) {
  const { addAndDeleteBlogInFavorit, checkBlogInFavorit } =
    React.useContext(ClientContext);

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="300"
        image={item.image}
        alt="green iguana"
      />
      <CardContent  style={{ height: 300}}>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography  variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography position="bottom" variant="h3" color="text.secondary">
          {item.price} сом
        </Typography>
      </CardContent>
      <CardActions >
        <Link to={`/blogs/info/${item.id}`}>
          <Button size="medium">
            <InfoOutlinedIcon />
          </Button>
        </Link>
        {checkBlogInFavorit(item.id) ? (
          <Button onClick={() => addAndDeleteBlogInFavorit(item)} size="medium">
            <FavoriteIcon />
          </Button>
        ) : (
          <Button size="medium" onClick={() => addAndDeleteBlogInFavorit(item)}>
            <FavoriteBorderIcon />
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
