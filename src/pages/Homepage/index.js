import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage_wrap">
        <p>
          The series 'Once upon a time in Toronto 2019' consists of 61
          photographs and covers one full season cycle in Downtown Toronto,
          beginning on the first day of Spring 2019, and ending on the last day
          of Winter 2020.
          <br />
          <br />
          The series was photographed using 35mm Kodak black and white film.
        </p>
        <div className="homepage_button">
          <Link to="/gallery" className="homepage_button_button">
            To Gallery
          </Link>
        </div>
        <div className="the_series_button">
          <Link to="/the_series" className="the_series_button_button">
            The Series
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
