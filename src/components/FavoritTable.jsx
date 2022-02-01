import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import { ClientContext } from "../context/ClientProvider";

export default function FavoritTable({ item }) {
  const { deleteBlogInFavorit, } = React.useContext(ClientContext);

  return (
    <div className="favorit-table">
      
          <Card  sx={{ minWidth: 275 }} >
            <CardContent>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body2">{item.price} сом</Typography>
            </CardContent>
            <CardActions>
              
              <Button size="small" onClick={() => deleteBlogInFavorit(item.blogs.id)}>
                <DeleteIcon />
              </Button>
            </CardActions>
          </Card>
        
    </div>
  );
}
