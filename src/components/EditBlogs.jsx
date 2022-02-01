import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  
} from "@mui/material";
import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminProvider";

const EditBlogs = ({ editBlog, setEditBlog }) => {
  const [blog, setBlog] = useState(editBlog);
  const { saveEditedBlog } = useContext(AdminContext);

  function handleChange(event) {
    let object = {
      ...blog,
      [event.target.name]: event.target.value,
    };
    setBlog(object);
  }

  function handleClick() {
    saveEditedBlog(blog);
    setEditBlog(null);
  }
  return (
    <div>
      <TableContainer  component={Paper}>
        <Table  sx={{ minWidth: 650  }} aria-label="simple table">
          <TableBody >
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">
                <TextField
                align="center"
                  name=""
                  onChange={handleChange}
                  type="text"
                  value={blog.image}
                />
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                <TextField 
                  name="title"
                  onChange={handleChange}
                  type="text"
                  value={blog.title}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  height="200px"
                  name="description"
                  onChange={handleChange}
                  type="text"
                  value={blog.description}
                />
              </TableCell>
              <TableCell align="center">
                <TextField
                  name="price"
                  onChange={handleChange}
                  type="number"
                  value={blog.price}
                />
              </TableCell>
              <Button onClick={handleClick}>SAVE</Button>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EditBlogs;
