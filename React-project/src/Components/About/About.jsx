import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quos
          corrupti, nisi ipsa fugiat cumque iure. Sint pariatur ipsam veritatis,
          ipsa soluta labore omnis non maiores repellat veniam, adipisci optio!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia porro
          hic quae blanditiis necessitatibus magni voluptatem ab sunt! Porro
          atque culpa
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          voluptatem placeat tempore saepe! Quos expedita doloribus adipisci,
          placeat rerum officiis, animi, sint pariatur similique quis labore
          molestiae laudantium iusto error.
        </p>
      </div>
    </div>
  );
};

export default About;
