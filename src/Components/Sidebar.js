import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import SongRow from "./Player/SongRow";
import { useStateValue } from "../reducer/StateProvider";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { NavLink } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import { lightBlue } from "@material-ui/core/colors";

function Sidebar() {
  const [{ audio, user }] = useStateValue();
  const playlists = {
    "items": [
      {
        "name": "Mayakaama Kalakaama",
        "path": "https://cdn10.solamutha.xyz/download/QzF_CSd5B7in2KDMZdOH8Q/1666780742/t/2022/Thiruchitrambalam/128/Mayakkama-Kalakkama-MassTamilan.dev.mp3",
        "id": "1231241",
        "duration": "2:22",
        "album": {
          "name": "Thiruchitrampazham",
        },
        "artists": [
          {
            "genres": [
              "Prog rock",
              "Grunge"
            ],
            "href": "string",
            "id": "12421",
            "name": "U1",
            "popularity": 0,
            "type": "artist",
          }
        ],
      },
      {
        "name": "Mayakaama Kalakaama",
        "path": "https://cdn10.solamutha.xyz/download/oN14FXatZxIbbBfABY8D4w/1666730809/t/2022/Thiruchitrambalam/128/Mayakkama-Kalakkama-MassTamilan.dev.mp3",
        "id": "1231241",
        "duration": "2:22",
        "album": {
          "name": "Thiruchitrampazham",
        },
        "artists": [
          {
            "genres": [
              "Prog rock",
              "Grunge"
            ],
            "href": "string",
            "id": "12421",
            "name": "U1",
            "popularity": 0,
            "type": "artist",
          }
        ],
      },
    ]
  }

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://music.musify.it/wp-content/uploads/2021/01/logo-musify-150.png"
        alt=""
      />
      <NavLink to="/home" activeClassName="active" style={{ textDecoration: 'none' }}>
        <SidebarOption Icon={HomeIcon} option="Home" />
      </NavLink>
      <NavLink to="/library" activeClassName="active" style={{ textDecoration: 'none' }}>
        <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
      </NavLink>
      <NavLink to="/search" activeClassName="active" style={{ textDecoration: 'none' }}>
        <SidebarOption Icon={SearchIcon} option="Search" />
      </NavLink>
      <br />
      <strong className="sidebar__title">RECENT HEARD</strong>
      <hr />
      {
        Object.keys(user).length >= 1 ?
          playlists?.items?.map((item, i) => (
            <SongRow
              key={i}
              track={item}
              audio={audio}
              recent={true}
            />
          )) :
          <Button
            onClick={() => { }} href="/login"
            variant="outlined" size="small"
            id="btn-sign"
            style={{ color: lightBlue[50], borderColor: lightBlue[50], }}
          >SignIn</Button>
      }
    </div>
  );
}

export default Sidebar;
