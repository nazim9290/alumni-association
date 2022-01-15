import {
  Fab,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./../../../Hooks/useAuth";
import Regex from "./../../../Shared/Regex/Regex";
import { EditIcon } from "@mui/icons-material/Edit";
import { DeleteIcon } from "@mui/icons-material/Delete";

const columns = [
  { id: "Name", label: "Name", minWidth: 100 },
  { id: "Category", label: "Category", minWidth: 100 },
  { id: "Description", label: "Description", minWidth: 300 },
  {
    id: "Post Status",
    label: "Post Status",
    minWidth: 100,
    align: "start",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Action",
    label: "Action",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const UserBlog = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleUpdate = (id) => {
    navigate(`/Dashboard/BlogEdit/${id}`);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    axios
      .get(
        `https://calm-escarpment-64359.herokuapp.com/userBlog?email=${user.email}`
      )
      .then(function (response) {
        // handle success
        setBlogs(response.data);
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  //delet api call
  const deleteBlog = (id) => {
    let result = window.confirm("Are you sure you want to delete?");
    if (result) {
      fetch(`https://calm-escarpment-64359.herokuapp.com/blog/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingPost = blogs.filter((blog) => blog._id !== id);
            setBlogs(remainingPost);
          }
        });
    }
  };
  return (
    <div>
      <h4>Your Blogs</h4>
      {blogs.length}
      {/* <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {blogs
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((blog) => {
                  return (
                    <TableRow
                      key={blog?._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {blog?.title}
                      </TableCell>
                      <TableCell>{blog?.category}</TableCell>
                      <TableCell>{Regex(blog?.description)}</TableCell>
                      <TableCell>Pending</TableCell>
                      <TableCell>
                        <Fab
                          onClick={() => {
                            handleUpdate(blog?._id);
                          }}
                          sx={{ mr: 2 }}
                          color="secondary"
                          aria-label="edit"
                        >
                          <EditIcon />
                        </Fab>
                        <Fab
                          onClick={() => {
                            deleteBlog(blog._id);
                          }}
                          color="primary"
                          aria-label="edit"
                        >
                          <DeleteIcon />
                        </Fab>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={blogs?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper> */}
    </div>
  );
};

export default UserBlog;
