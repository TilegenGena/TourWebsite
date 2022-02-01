import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function CommentsExample() {
  return (
    <List sx={{ width: "100%", maxWidth: "auto", bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="TA" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Что входит в стоимость поездки и можно ли брать детей?"
          
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <form className="comment-form">
        <TextField
          label="add comment"
          size="small"
          variant="outlined"
          className="comment-input"
          placeholder="add comment"
        />
        <Button variant="contained" size="small" endIcon={<SendIcon />}>
          Send
        </Button>
      </form>
    </List>
  );
}
