import React from "react";
import "./Player.css";
import Body from "../Components/Player/Body";

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        <Body/>
      </div>
    </div>
  );
}

export default Player;
