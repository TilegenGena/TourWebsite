import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../context/ClientProvider";

const FilterBlogs = () => {
  let search = new URLSearchParams(window.location.search);
  let navigate = useNavigate();
  const { getBlogs } = useContext(ClientContext);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [value, setValue] = useState("");

  function filter(key, value) {
    search.set(key, value);
    const newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setFrom(search.get("price_gte"));
    setTo(search.get("price_lte"));
    setValue(search.get("q"));
    getBlogs();
  }
  function reset() {
    navigate("/blogs/all");
    getBlogs();
    setFrom("");
    setTo("");
    setValue("");
  }

  useEffect(() => {
    setFrom(search.get("price_gte"));
    setTo(search.get("price_lte"));
    setValue(search.get("q"));
  }, []);

  return (
    <div className="filter-products">
      <div className="price-filter">
        <TextField
          onChange={(event) => filter("price_gte", event.target.value)}
          variant="standard"
          label="От"
          value={from}
        />
        <TextField
          onChange={(event) => filter("price_lte", event.target.value)}
          variant="standard"
          label="До"
          value={to}
        />
        <Button onClick={reset}>Reset</Button>
      </div>
      <div>
        <TextField
          onChange={(event) => filter("q", event.target.value)}
          variant="outlined"
          label="Live search..."
          value={value}
        />
      </div>
    </div>
  );
};

export default FilterBlogs;
