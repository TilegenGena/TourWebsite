import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ClientContext } from "../context/ClientProvider";

export default function BlogsPagination() {
  const { postsPerPage, totalBlogsCount, currentPage, setCurrentPage } = React.useContext(ClientContext)
  const pagesCount = Math.ceil(totalBlogsCount / postsPerPage);
  return (
    <Stack spacing={2} sx={{ mx: "auto", width: 200 }} >
      <Pagination
        count={pagesCount}
        page={currentPage}
        onChange={(_, newPage) => {
          setCurrentPage(newPage);
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      />
    </Stack>
  );
}