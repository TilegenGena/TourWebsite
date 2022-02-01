import { Container, Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminProvider";

const AddBlogPage = () => {
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const { addBlog } = useContext(AdminContext);

  function handleInput(event) {
    let object = {
      ...newBlog,
      [event.target.name]: event.target.value,
    };
    setNewBlog(object);
  }
  function handleSubmit(event) {
    event.preventDefault();
    for (let key in newBlog) {
      if (!newBlog[key].trim()) {
        alert("Заполните все поля для публикации");
        return;
      }
    }
    addBlog(newBlog);
    setNewBlog({
      title: "",
      description: "",
      price: "",
      image: "",
    });
  }
  return (
    <Container maxWidth="sm">
      <Box sx={{ p: 2, borderColor: "primary.main" }}>
        <form id="form" onSubmit={handleSubmit}>
          <div className="contact-wrap">
            <div className="form-wrapper">
              <div className="form-div">
                <input
                  type="text"
                  name="title"
                  className="feedback-input"
                  placeholder="Title *"
                  onChange={handleInput}
                  value={newBlog.title}
                  maxLength={33}
                  required
                />
                <textarea
                  name="description"
                  className="feedback-input message"
                  placeholder="Description *"
                  maxLength={999}
                  onChange={handleInput}
                  value={newBlog.description}
                  required
                  defaultValue={""}
                />
                <input
                  type="number"
                  name="price"
                  className="feedback-input"
                  placeholder="Price *"
                  maxLength={99}
                  required
                  onChange={handleInput}
                  value={newBlog.price}
                />
                <input
                  type="text"
                  name="image"
                  className="feedback-input"
                  placeholder="Drag image *"
                  required
                  onChange={handleInput}
                  value={newBlog.image}
                />
                <div className="checkbox-wrap">
                  <input
                    id="send-checkbox"
                    type="checkbox"
                    name="checkbox"
                    className="checkbox"
                    required
                  />
                  <label className="captcha" htmlFor="send-checkbox">
                    I'm a human *
                  </label>
                </div>
                <button type="submit" className="send-button">
                  Create!
                </button>
              </div>
            </div>
          </div>
        </form>
      </Box>
    </Container>
  );
};

export default AddBlogPage;
