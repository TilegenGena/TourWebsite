import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AdminContext } from "../context/AdminProvider";
import EditBlogs from "./EditBlogs";
import { Button } from "@mui/material";


export default function TableAdmin() {
  const { getBlog, blogs, deleteBlog } = React.useContext(AdminContext);

  React.useEffect(() => {
    getBlog();
  }, []);

  const [editBlog, setEditBlog] = React.useState(null);

  if (!blogs) {
    return <h2>Loading...</h2>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{  minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{background:"darkgrey"}}>
          <TableRow>
            <TableCell align="center"> Image </TableCell>
            <TableCell align="center">Title </TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blogs.map((row) => (
            <React.Fragment key={row.id}>
              {editBlog?.id === row.id ? (
                <EditBlogs setEditBlog={setEditBlog} editBlog={editBlog} />
              ) : (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center"> <img height={200} src={row.image} alt='pics'/> </TableCell>
                  <TableCell align="center">{row.title}</TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">
                    <Button onClick={() => setEditBlog(row)}>EDIT</Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button onClick={() => deleteBlog(row.id)}>
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
