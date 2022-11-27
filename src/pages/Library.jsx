import React from 'react';
// import { useStateValue } from "../reducer/StateProvider";

import SongsPlaylist from '../Components/Home/SongsPlaylist';
import Header from '../Components/Player/Header'
import './Home.css'

export default function Library() {
    // const [{ }, dispatch] = useStateValue();
    return (
        <section className="body">
            <Header />
            {/* <SongsPlaylist /> */}
            <h3 style={{textAlign: 'center', marginTop: '20%'}}>🙇‍♂️Sorry Its Been Under Construction🚧</h3>
        </section>
    )
}
