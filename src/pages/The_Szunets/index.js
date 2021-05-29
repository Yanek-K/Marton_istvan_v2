import React from "react";
import "./index.scss";
import Szunet from "./../../Assets/Szunet_sm.jpg";

const The_Szunets = () => {
  return (
    <div className="the_szunets">
      <div className="the_szunets_wrap">
        <h1>Szünet (Hungarian) - pause, intermission, interval, or break.</h1>
        <img className="szunets_img" src={Szunet} alt="The Szünets" />
        <div className="the_szunets_info">
          <p>
            The purpose of the Szünets in this classical symphony of light is to
            invite the viewer to remember the cyclic and ephemeral nature of
            time: everything returns to the beginning and everything comes to an
            end. <br /> <br />
            The Szünets also set the tone for each season and they are a vital
            element in the structure of this symphony, reappearing in a
            predictable and intuitively recognizable 1 - 4 pattern in varied
            form, and binding the symphony into a unified whole.
          </p>
        </div>
      </div>
    </div>
  );
};

export default The_Szunets;
