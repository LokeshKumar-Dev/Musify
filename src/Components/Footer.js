import React, { useEffect, useState } from "react";
import { useStateValue } from "../reducer/StateProvider";
import { playSongBody } from "./Player/Body";
import "./Footer.css";
import bgImage from '../media/bg.jpg'

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import RepeatOneIcon from "@material-ui/icons/RepeatOne";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  const [{ index, item, playing, repeat, shuffle, audio, volume, currentPlaylist, playingPlaylist }, dispatch] = useStateValue();

  const [soundValue, setValue] = useState(30);
  const [duration, setDuration] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    dispatch({
      type: 'SET_VOLUME',
      volume: newValue / 100,
    })

    if (audio === null) { return }
    audio.volume = newValue / 100;
  };

  useEffect(() => {
    if (item === null) { return }

    setSeconds(0);
    var sec = item.duration.split(':')//CONVERT MINUTES to SEC
    setDuration((parseInt(sec[0]) * 60) + parseInt(sec[1]))
  }, [item])

  useEffect(() => {
    if (audio === null || item === null) { return }
    // if (isPlaylist) { return }

    const run = setInterval(() => { if (playing) setSeconds(s => s + 1) }, 1000);//CREATE Interval TIMER
    // console.log(repeat)


    audio.onended = () => {
      setSeconds(0);
      if (repeat[1]) {
        clearInterval(run);
        dispatch({
          type: 'SET_PLAYING',
          playing: false,
        });
      }
      else {
        if (repeat[0]) {
          audio.play()
        }
        else {
          skipToNext()
        }
      }
    }

    return () => clearInterval(run);
  }, [item, audio, playing, repeat, shuffle, setSeconds, currentPlaylist, index, dispatch])

  const pauseSong = () => {
    if (audio === null) { return }

    dispatch({
      type: 'SET_PLAYING',
      playing: false,
    })

    audio.pause()
  };

  const playSong = () => {
    if (audio === null) { return }

    dispatch({
      type: 'SET_PLAYING',
      playing: true,
    })

    audio.play()
  };

  const playSongAt = (sec) => {
    if (audio === null) { return }

    dispatch({
      type: 'SET_PLAYING',
      playing: true,
    })

    audio.currentTime = sec;
    audio.play()
  };

  const skipToNext = () => {
    let index1 = playingPlaylist.findIndex(x => x.id === index);
    let count = playingPlaylist.length;

    if (index1 + 1 >= count) { return playSongBody(playingPlaylist[0], audio, volume, dispatch) }

    // if (shuffle && !repeat[0] && !repeat[1]) {
    if (shuffle) {
      let id = Math.floor(Math.random() * (count - (index1 + 1))) + (index1 + 1);
      return playSongBody(playingPlaylist[id], audio, volume, dispatch)
    }

    let nxtSong = playingPlaylist[index1 + 1];
    if (nxtSong === undefined) { return playSongBody(playingPlaylist[index1], audio, volume, dispatch) }

    return playSongBody(nxtSong, audio, volume, dispatch)
  }

  const skipToPrev = () => {
    let index1 = playingPlaylist.findIndex(x => x.id === index);

    if (index1 - 1 <= 0) { return playSongBody(playingPlaylist[playingPlaylist.length - 1], audio, volume, dispatch) }
    if (shuffle) {
      let id = Math.floor(Math.random() * index1 - 1) + 1;
      return playSongBody(playingPlaylist[id], audio, volume, dispatch)
    }

    let nxtSong = playingPlaylist[index1 - 1];
    if (nxtSong === undefined) { return playSongBody(nxtSong[playingPlaylist.length - 1], audio, volume, dispatch) }

    return playSongBody(nxtSong, audio, volume, dispatch)
  }

  //CALCULATION
  const secToMin = (seconds) => {//SECONDS to MINUTES
    let min = Math.floor(seconds / 60);
    let remMin = (seconds - min * 60);
    return min.toString().padStart(2, '0') + ':' + remMin.toString().padStart(2, '0');
  }

  return (
    <>
      <div className="footer bottom">
        <div className="musicTime">
          <Grid container spacing={2}>
            <Grid className="footer__timer" item>
              <p>{audio !== null ? secToMin(seconds) : '00:00'}</p>
            </Grid>
            <Grid item xs className="padding-0">
              <Slider
                onMouseDown={() => pauseSong()}
                onMouseUp={() => playSongAt(seconds)}
                aria-label="time-indicator"
                size="small"
                value={seconds}
                min={0}
                step={1}
                max={duration}
                onChange={(_, newValue) => setSeconds(newValue)}
                className="padding-0"
                style={{ 'color': 'rgb(29 133 217)' }}
              />
            </Grid>
            <Grid className="footer__timer" item>
              <p>{audio !== null ? item.duration : '00:00'}</p>
            </Grid>
          </Grid>
        </div>
        <div className="footer__left">
          <div className="footer__albumLogo" style={{ position: 'relative' }}>
            <img
              className="footer__albumLogo"
              // src={bgImage}
              style={{ position: 'absolute' }}
              src={item !== null ?
                `https://firebasestorage.googleapis.com/v0/b/musify-927d4.appspot.com/o/images%2F${item.album.image}?alt=media` :
                bgImage
              }
              alt={item?.name}
            />
          </div>

          {
            item ?
              <div className="footer__songInfo">
                <h4>{item.name}</h4>
                <p>{item.artist.name}</p>
              </div> :
              <div className="footer__songInfo">
                <h4>No song is playing</h4>
                <p>...</p>
              </div>
          }
        </div>

        <div className="footer__center">
          <ShuffleIcon
            className={shuffle ? "footer__green footer__icon" : "footer__icon"}
            style={{ "color": "gray" }}
            onClick={() => {
              return dispatch({
                "type": "SET_SHUFFLE",
                "shuffle": !shuffle,
              })
            }}
          />
          <SkipPreviousIcon
            onClick={() => skipToPrev()}
            className="footer__icon"
          />
          {
            playing ?
              <PauseCircleOutlineIcon
                onClick={() => pauseSong()}
                fontSize="large"
                className="footer__icon p"
              /> :
              <PlayCircleOutlineIcon
                onClick={() => playSong()}
                fontSize="large"
                className="footer__icon p"
              />
          }
          <SkipNextIcon
            onClick={() => skipToNext()}
            className="footer__icon"
          />
          {
            repeat[0] ?
              <RepeatOneIcon
                className="footer__green footer__icon"
                onClick={() => {
                  return dispatch({
                    "type": "SET_REPEAT",
                    "repeat": [false, true],
                  })
                }} /> :
              <RepeatIcon
                className={repeat[1] ? "footer__icon" : "footer__green footer__icon"}
                style={{ "color": "gray" }}
                onClick={() => {
                  return repeat[1] ?
                    dispatch({
                      "type": "SET_REPEAT",
                      "repeat": [false, false],
                    }) :
                    dispatch({
                      "type": "SET_REPEAT",
                      "repeat": [true, false],
                    });
                }}
              />
          }

        </div>
        <div className="footer__right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon className="footer__icon" />
            </Grid>
            <Grid item>
              <VolumeDownIcon className="footer__icon" />
            </Grid>
            <Grid item xs>
              <Slider
                value={typeof soundValue === 'number' ? soundValue : 0}
                defaultValue={30}
                onChange={handleSliderChange}
                aria-labelledby="input-slider"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Footer;
