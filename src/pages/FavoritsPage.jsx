import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import FavoritTable from "../components/FavoritTable";
import { ClientContext } from "../context/ClientProvider";

const FavoritsPage = () => {
  const { getFavorit, favorit } = useContext(ClientContext);

  useEffect(() => {
    getFavorit();
  }, []);
  console.log("my favorite", favorit);

  if (!favorit) {
    return <h2>Loading...</h2>;
  }
  if (favorit && favorit.length === 0) {
    return <h2>Нет избранных</h2>;
  }
  return (
    <div>
      <h2>Favorite page</h2>
      <div>
        <Grid container spacing={2}>
            {favorit.map((item) => (
          <Grid xs={12} sm={6} md={4}>
              <FavoritTable item={item} />
          </Grid>
            ))}
        </Grid>
      </div>
    </div>
  );
};

export default FavoritsPage;
