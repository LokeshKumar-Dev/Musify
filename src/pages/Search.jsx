import React, { useState } from 'react';
import { useStateValue } from "../reducer/StateProvider";

import SongsPlaylist from '../Components/Home/SongsPlaylist';
import { Open } from './Home';
import musicApi from '../api/musicApi';

import './Home.css'
import SearchIcon from "@material-ui/icons/Search";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

export default function Search() {
    const [{ user, open, selectedPlaylist }, dispatch] = useStateValue();

    //Local Variable
    const [alert, setAlert] = useState(0);
    const [input, setInput] = useState('');
    const [res, setRes] = useState({});

    const handleClickOpen = async (id, isAlbum) => {
        let currPlaylist;

        isAlbum ?
            currPlaylist = await musicApi.get(`/albums/${id}/songs`) :
            currPlaylist = await musicApi.get(`/artists/${id}/songs`);

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

        if (Object.keys(user.data).length === 0) {
            return setAlert(1);
        }
        console.log('Search', user, Object.keys(user).length)
        const result = await musicApi.get(`/search/${value}`);

        if (result.status >= 200 && result.status < 300) {
            setRes(result.data)
        }
    }

    function searchResultJsx() {
        return (
            Object.keys(res).length > 0 ?
                <>
                    {
                        res.song.tracks.items.length > 0 ?
                            <SongsPlaylist
                                playlist={res.song}
                                title={'Song'}
                                handleClickOpen={handleClickOpen}
                            />
                            :
                            <h3 className="margin-bottom-15">😅Sorry Couldn't Find Any Songs🎶</h3>
                    }
                    {
                        res.album.tracks.items.length > 0 ?
                            <SongsPlaylist
                                playlist={res.album}
                                title={'Album'}
                                handleClickOpen={handleClickOpen}
                            />
                            :
                            <h3 className="margin-bottom-15">😅Sorry Couldn't Find Any Album🎹</h3>
                    }

                    {
                        res.artist.tracks.items.length > 0 ?
                            <SongsPlaylist
                                playlist={res.artist}
                                title={'Artist'}
                                handleClickOpen={handleClickOpen}
                            />
                            :
                            <h3 className="margin-bottom-15">😅Sorry Couldn't Find Any Artist🎤</h3>
                    }


                </>
                :
                null
        )
    }
    return (
        <section className="body">
            <div className="header__left" style={{ height: '1.5rem', padding: '10px 0 10px 20px', marginBottom: '2rem', overflow: 'hidden' }}>
                <input
                    placeholder="Search for Artists, Songs, or Playlist "
                    type="text"
                    style={{ fontWeight: '800', fontFamily: 'Cantarell', cursor: 'text' }}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.target.value === undefined || e.target.value === '') {
                            return;
                        }
                        if (e.keyCode === 13) return search(input);
                    }}
                />
                <SearchIcon onClick={() => search(input)} style={{ padding: '15px', backgroundColor: '#efefef' }} />
            </div>

            {/* To Shorten */}
            {searchResultJsx()}

            <Snackbar open={alert} autoHideDuration={2000} onClose={() => setAlert(0)}
                style={{
                    "left": "50%",
                    "transform": "translateX(-50%)"
                }}
            >
                <Alert onClose={() => setAlert(0)} severity={'error'} sx={{ width: '100%' }}>
                    Sorry, Please Login!
                </Alert>
            </Snackbar>

            <Open open={open} handleClose={handleClose} selectedPlaylist={selectedPlaylist} />
        </section>
    )
}
