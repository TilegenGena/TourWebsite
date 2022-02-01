import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <Grid>
      <div className="main-page">
        <h1 className="c-title">Travel in Kyrgyzstan</h1>
        <ul className="c-featurette">
          <li className="c-featurette__item">
            <img
              className="c-featurette__background"
              src="https://jyrgalan.com/wp-content/uploads/2017/10/naryn-scaled.jpg"
              alt="pic"
            />
            <small className="c-featurette__category">Лето</small>
            <h2 className="c-featurette__heading">Ат-баши</h2>
            <Link to="/blogs/all">
              <button className="c-featurette__button">Discover</button>
            </Link>
          </li>
          <li className="c-featurette__item">
            <img
              className="c-featurette__background"
              src="http://mtdata.ru/u28/photo6E67/20507765473-0/original.jpg"
              alt="pic"
            />
            <small className="c-featurette__category">Зима</small>
            <h2 className="c-featurette__heading">Каракол</h2>
            <Link to="/blogs/all">
              <button className="c-featurette__button">Discover</button>
            </Link>
          </li>
          <li className="c-featurette__item">
            <img
              className="c-featurette__background"
              src="https://the-steppe.com/images/news/285-LvNeTsIh-issykkul.jpg"
              alt="pic"
            />
            <small className="c-featurette__category">Лето</small>
            <h2 className="c-featurette__heading">Иссыккуль</h2>
            <Link to="/blogs/all">
              <button className="c-featurette__button">Discover</button>{" "}
            </Link>
          </li>
          <li className="c-featurette__item">
            <img
              className="c-featurette__background"
              src="https://pbs.twimg.com/media/D2Hc7L-XcAAMWjQ.jpg"
              alt="pic"
            />
            <small className="c-featurette__category">Весна</small>
            <h2 className="c-featurette__heading">Джалал-абад</h2>
            <Link to="/blogs/all">
              <button className="c-featurette__button">Discover</button>{" "}
            </Link>
          </li>
          <li className="c-featurette__item">
            <img
              className="c-featurette__background"
              src="https://s3.nat-geo.ru/images/2019/5/16/1d70370eb5a143a1aea3fd109389c38f.max-1200x800.jpg"
              alt="pic"
            />
            <small className="c-featurette__category">Осень</small>
            <h2 className="c-featurette__heading">Сары-Озон</h2>
            <Link to="/blogs/all">
              <button className="c-featurette__button">Discover</button>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </Grid>
  );
};

export default MainPage;
