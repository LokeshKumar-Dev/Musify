import React, { useState, useEffect } from 'react';
import SongCards from './SongCards';
// import { useStateValue } from "../../reducer/StateProvider";
import './songPlaylist.css'

import Carousel from 'react-material-ui-carousel';

export default function SongsPlaylist({ playlist, title, handleClickOpen }) {
    let albumWidth = 150;
    // const [{ discover_weekly }, dispatch] = useStateValue();

    const [page, setPage] = useState([]);
    const [count, setCount] = useState([0, 0]);

    useEffect(() => {
        // discover_weekly
        const bodyWidth = document.getElementsByClassName('body')[0].clientWidth

        let musics = playlist?.tracks.items;
        let countD = Math.round(bodyWidth / albumWidth) - 1;
        //250px
        setCount([musics.length, countD])

        let rows = [];

        for (let i = 0; i < musics.length; i += countD) rows = [...rows, i];

        setPage(rows)
    }, [albumWidth])

    function distributeItems(items, id, albumWidth, isPlaylist, pId, isAlbum) {
        return <div key={id} className="carousel__pair">
            {items.map((item) => {
                return <SongCards
                    track={item}
                    pId={pId}
                    albumWidth={albumWidth}
                    isPlaylist={isPlaylist}
                    isAlbum={isAlbum}
                    handleClickOpen={handleClickOpen}
                    searchPlaylist={playlist}
                />
            })}
        </div>
    }

    return (
        <>
            <h2 className='carousel__title'>{title}</h2>
            <Carousel
                height={albumWidth + 90}
                indicators={false}
                animation={'slide'}
                duration={500}
                autoPlay={false}
                cycleNavigation={false}
                navButtonsAlwaysVisible={true}
                fullHeightHover={false}
            >
                {
                    page.map((x, i) => {
                        return distributeItems(playlist?.tracks.items.slice(x, x + count[1]), i, albumWidth, playlist?.isPlaylist, playlist?.id, playlist?.isAlbum)
                    })
                }
            </Carousel>
        </>
    )
}
