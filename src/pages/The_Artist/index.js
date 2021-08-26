import React from "react";
import "./index.scss";
import Portrait from "./../../Assets/Portrait.jpg";

const The_Artist = () => {
  return (
    <div className="the_artist">
      <div className="the_artist_wrap">
        <h1>About the Artist</h1>
        <div className="about">
          <img
            className="portrait"
            src={Portrait}
            alt="Portrait of Màrton Istvàn"
          />
          <p>
            The artist Márton István was born Oroszi Márton István, 03 March
            1964, in Kimberley, South Africa, son of Hungarian wooden toy maker
            Oroszi Sandor, and Afrikaans artist Davina Esterhuizen. Márton
            attributes his love for timing and movement to the elaborate wooden
            toys that his father made using angled wooden channels and small
            metal balls. His love for good composition and art, Márton
            attributes to his mother whose passion for art meant that there were
            always books of painting, photography, sketching, anatomy models,
            and paint everywhere. <br />
            <br /> In the early 1970’s the family moved from the Northern Cape
            to the industrial and mining area of the Witwatersrand and settled
            in the East Rand town of Brakpan. After high school, the artist
            enlisted as a professional soldier in the SA army. After four years
            Márton resigned from the military as a non- commissioned officer,
            and with a Chief of the S.A. Army commendation.
            <br />
            <br /> After the army, Márton began an apprenticeship as a
            Photo-gravure engraver (rotogravure) at Perskor in Doornfontein,
            Johannesburg. Perskor had one of the few Photo-gravure presses in
            SA. The artist qualified as a journeyman photo-gravure engraver and
            spent the next twenty years in the highly competitive repro industry
            in Johannesburg, with around five thousand hours specialising in
            fine-art reproduction under the tutelage of master-retoucher, Mr.
            Eckhard Heise, proprietor of Dot Colour, Randburg. The artist worked
            as a commercial photographer in Johannesburg as well as a color
            retoucher.
            <br />
            <br />
            “Once upon a time in Toronto” is the artist’s first of five series.
            The purpose of Márton István’s art is to bring light into the
            darkness of men’s souls. ​
          </p>
        </div>
      </div>
    </div>
  );
};

export default The_Artist;
