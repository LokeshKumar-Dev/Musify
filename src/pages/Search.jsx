import React from 'react';
import { useStateValue } from "../reducer/StateProvider";
import SongsPlaylist from '../Components/Home/SongsPlaylist';
import { Open } from './Home';

import './Home.css'
import SearchIcon from "@material-ui/icons/Search";
import musicApi from '../api/musicApi';
import { useState } from 'react';

export default function Search() {
    const [{ open, selectedPlaylist }, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const [res, setRes] = useState({});

    const handleClickOpen = async (id, name) => {
        let currPlaylist = await musicApi.get(`/artists/${id}/songs`);

        dispatch({
            type: 'SET_SELECTEDLISTS',
            selectPlay: currPlaylist.data,
        })
        dispatch({
            type: '_setOpen',
            value: true,
        });
    };
    const handleClose = () => {
        dispatch({
            type: '_setOpen',
            value: false,
        });
    };

    const search = async (value) => {
        const result = await musicApi.get(`/search/${value}`);

        if (result.status >= 200 && result.status < 300) {
            setRes(result.data)
        }
    }

    return (
        <section className="body">
            <div className="header__left" style={{ height: '1.5rem', padding: '10px 20px', marginBottom: '2rem' }}>
                <input
                    placeholder="Search for Artists, Songs, or Playlist "
                    type="text"
                    style={{ fontWeight: '800', fontFamily: 'Cantarell' }}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <SearchIcon onClick={() => search(input)} />
            </div>

            {Object.keys(res).length > 0 ?
                <>
                    {
                        res.song.tracks.items.length > 0 ?
                            <SongsPlaylist
                                playlist={res.song}
                                title={'Song'}
                                handleClickOpen={handleClickOpen}
                            />
                            :
                            <h3>😅Sorry Couldn't Find Any Songs🎶</h3>
                    }
                    {
                        res.album.tracks.items.length > 0 ?
                            <SongsPlaylist
                                playlist={res.album}
                                title={'Album'}
                                handleClickOpen={handleClickOpen}
                            />
                            :
                            <h3>😅Sorry Couldn't Find Any Album🎹</h3>
                    }

                    {
                        res.artist.tracks.items.length > 0 ?
                            <SongsPlaylist
                                playlist={res.artist}
                                title={'Artist'}
                                handleClickOpen={handleClickOpen}
                            />
                            :
                            <h3>😅Sorry Couldn't Find Any Artist🎤</h3>
                    }


                </>
                :
                null}

            <Open open={open} handleClose={handleClose} selectedPlaylist={selectedPlaylist} />
        </section>
    )
}
