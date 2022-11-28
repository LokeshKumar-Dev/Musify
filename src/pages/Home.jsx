import React, { useEffect } from 'react';
import { useStateValue } from "../reducer/StateProvider";

import SongsPlaylist from '../Components/Home/SongsPlaylist';
import Header from '../Components/Player/Header'
import Player from './Player'
import './Home.css'

import musicApi from '../api/musicApi';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/West';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Home() {
    const [{ playlists, selectedPlaylist, open }, dispatch] = useStateValue();

    const handleClickOpen = async (id, name) => {
        // let currPlaylist = playlists?.filter((playlist) => playlist.id === id)

        let currPlaylist = await musicApi.get(`/artists/${id}/songs`);

        console.log('id', currPlaylist)
        dispatch({
            type: 'SET_SELECTEDLISTS',
            selectPlay: currPlaylist.data,
        })
        dispatch({
            type: '_setOpen',
            value: true,
        });
        // setName(name);
    };

    const handleClose = () => {
        dispatch({
            type: '_setOpen',
            value: false,
        });
    };

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const res = await musicApi.get('/songs/feed')
            // ...
            if (res.status !== 200) {
                return console.log('Sorrryy')
            }
            dispatch({
                type: 'SET_PLAYLIST',
                playlist: res.data,
            });
        }
        fetchData();

    }, [])

    useEffect(() => {
        console.log('open', open)
    })


    return (
        <section className="body">
            <Header />
            {playlists?.map((playlist) => {
                return <SongsPlaylist
                    playlist={playlist}
                    title={playlist.name || 'Playlist'}
                    handleClickOpen={handleClickOpen}
                />
            })}
            <Open open={open} handleClose={handleClose} selectedPlaylist={selectedPlaylist} />
        </section >
    )
}

export function Open({open, handleClose, selectedPlaylist}) {
    return (
        <div
            className="screen"
            style={
                {
                    position: "fixed",
                    transform: "translate(-30px, 0)",
                    zIndex: "900",
                    maxWidth: "80%",
                    width: 'inherit',
                    minWidth: '-webkit-fill-available',
                    bottom: 0,
                    transition: ".3s height",
                    height: open ? "100%" : 0,
                    // display: open ? "" : "none",
                }
            }
        >
            <AppBar sx={{ position: 'relative', backgroundColor: "black!important", color: "white" }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                    <Typography sx={{ ml: 1, flex: 1, fontSize: 15 }} variant="h6" component="div">
                        {selectedPlaylist?.name || 'Playlist'}
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="cover" style={{ backgroundColor: 'white', height: "100%" }}>
                {
                    Object.keys(selectedPlaylist).length !== 0 ?
                        <Player /> :
                        <Box
                            className='body'
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <CircularProgress sx={{ color: 'grey.50' }} />
                        </Box>
                }
            </div>
        </div>
    )
}
