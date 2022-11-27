import React from 'react'
import { useStateValue } from "../../reducer/StateProvider";
import { playSongBody, playPlayList } from "../Player/Body";

import bgImage from '../../media/bg.jpg'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardActionArea } from '@material-ui/core';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";

import LazyLoad from 'react-lazy-load';

export default function SongCards({ track, pId, albumWidth, isPlaylist, handleClickOpen }) {
    const [{ playlists, volume, audio }, dispatch] = useStateValue();

    //Convert 1000 to 1k, m, b
    function m(n, d) {
        let x = ('' + n).length
        let p = Math.pow
        d = p(10, d)
        x -= x % 3
        return Math.round(n * d / p(10, x)) / d + " kMGTPE"[x / 3]
    }
    return (
        <Card className='album' key={track.id} elevation={0} style={{ maxHeight: `${albumWidth || 200}px`, maxWidth: `${albumWidth || 200}px` }}>

            <CardActionArea onClick={() => {
                if (!isPlaylist) return playPlayList(pId, track.id, playlists, audio, volume, dispatch);

                return handleClickOpen(track.id)
            }}>
                <CardContent>
                    <LazyLoad width={albumWidth || 200} threshold={0.95} onContentVisible={() => { console.log('loaded!') }}>
                        <CardMedia
                            component="img"
                            image={isPlaylist ?
                                `https://firebasestorage.googleapis.com/v0/b/musify-927d4.appspot.com/o/images%2F${track.image}?alt=media` :
                                track.album.image !== null ?
                                    `https://firebasestorage.googleapis.com/v0/b/musify-927d4.appspot.com/o/images%2F${track.album.image}?alt=media` :
                                    bgImage
                            }
                            // image={"https://wallpapercave.com/dwp1x/wp11387365.jpg"}background: linear-gradient(transparent, rgba(0, 0, 0, 1));
                            alt="green iguana"
                            className='album__cover'
                            style={{
                                height: `${albumWidth || 200}px`, width: `${albumWidth || 200}px`,
                                backgroundImage: 'linear-gradient(transparent, rgba(0, 0, 0, 1))',
                                backgroundColor: 'rgb(8, 37, 60)',
                            }}
                        />
                    </LazyLoad>
                    {
                        !isPlaylist ?
                            <PlayCircleOutlineIcon className='album__play' />
                            :
                            <ListOutlinedIcon className='album__play' />
                    }
                </CardContent>
                <h3 className="title" style={!isPlaylist ? null : { textAlign: 'center' }}>{track.name || 'Name'}</h3>
                {
                    !isPlaylist ?
                        <p className="subTitle">
                            {!isPlaylist ? track.artist.name : 'Loading' || 'artists'}
                            <span> - </span>
                            <span className="subTitle-1">{!isPlaylist ? track.album.name : 'Loading'}</span>
                        </p>
                        :
                        < p className="subTitle" style={{ textAlign: 'center', fontSize: "12px" }}>
                            {m(track.followers, 0) || 'See More'}
                        </p>
                }

            </CardActionArea>
        </Card >
    )
}
