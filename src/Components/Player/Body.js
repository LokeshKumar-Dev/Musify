import React from "react";
import "./Body.css";

import bgImage from '../../media/bg.jpg'

import { useStateValue } from "../../reducer/StateProvider";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const cleanUpFunction = (audio, dispatch) => {
  audio.pause();
  dispatch({
    type: 'SET_PLAYING',
    playing: false,
  });
}

export const playSongBody = async (track, audio, volume = .30, dispatch) => {
  if (audio !== null) cleanUpFunction(audio, dispatch);
  console.log(track)
  if (track) {
    // const curAudio = new Audio(`http://127.0.0.1:4000/songs/${track.file}`);
    const curAudio = new Audio(`https://firebasestorage.googleapis.com/v0/b/musify-927d4.appspot.com/o/songs%2F${track.file}?alt=media`);
    curAudio.volume = volume;

    curAudio.onplaying = () => {
      console.log('STARTED')
      dispatch({
        type: 'SET_PLAYING',
        playing: true,
      });
    }

    dispatch({
      type: 'SET_AUDIO',
      audio: curAudio,
      item: track,
      index: track.id,
    });

    curAudio.play()
  }
};

export const playPlayList = (listId, songId = '1', playlists = [], audio, volume, dispatch) => {
  if (audio !== null) cleanUpFunction(audio, dispatch);

  let pl = playlists?.filter((playlist) => playlist.id === listId)[0];

  // playlists
  dispatch({
    type: 'SET_PLAYLISTS',
    playlists: pl?.tracks.items,
    index: songId,
  });

  let track = pl?.tracks.items.filter((song) => song.id === songId)[0];

  if (track !== undefined && track !== []) { return playSongBody(track, audio, volume, dispatch) }

  return console.log('ERROR track undefined', pl.tracks.items)
}

function Body() {
  const [{ playlists, selectedPlaylist, audio, volume }, dispatch] = useStateValue();

  return (
    <div className="body">
      <div className="body__info">
        <img src={
          selectedPlaylist?.image !== null ?
            `https://firebasestorage.googleapis.com/v0/b/musify-927d4.appspot.com/o/images%2F${selectedPlaylist.image}?alt=media` :
            bgImage
        } alt="" />

        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{selectedPlaylist?.name}</h2>
          <p>{selectedPlaylist?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={() => {
              if (audio !== null) cleanUpFunction(audio, dispatch);

              // playlists
              dispatch({
                type: 'SET_PLAYLISTS',
                playlists: selectedPlaylist?.tracks.items,
                index: 0,
              });

              let track = selectedPlaylist?.tracks.items[0];
              console.log('clickSPlay', selectedPlaylist, track)
              if (track !== undefined && track !== []) { return playSongBody(track, audio, volume, dispatch) }

              return console.log('ERROR track undefined', selectedPlaylist.tracks.items)
            }}
          />
          {/* <FavoriteIcon fontSize="large" />
          <MoreHorizIcon /> */}
        </div>

        {selectedPlaylist?.tracks.items.map((item, i) => (
          <SongRow
            i={i}
            track={item}
            audio={audio}
          />
        )
        )}
      </div>
    </div>
  );
}

export default Body;
