import React from 'react';
import { useStateValue } from "../reducer/StateProvider";

import SongsPlaylist from '../Components/Home/SongsPlaylist';
import Header from '../Components/Player/Header';
import './Home.css';

import Button from "@material-ui/core/Button";
import { lightBlue } from "@material-ui/core/colors";

export default function Library() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <section className="body">
            <Header />
            {/* <SongsPlaylist /> */}
            {
                Object.keys(user.data).length !== 0 ?
                    <>
                        <h3 style={{ textAlign: 'center', marginTop: '20%' }}>🙇‍♂️Sorry Its Been Under Construction🚧</h3>
                    </> :
                    <>
                        <div className="btn-box" style={{height: '70%'}}>
                            <h1>
                                You aren't logged in?
                            </h1>
                            <Button
                                onClick={() => { }} href="/login"
                                variant="outlined" size="small"
                                id="btn-sign"
                                style={{ color: lightBlue[50], borderColor: lightBlue[50], }}
                            >SignIn</Button>
                        </div>

                    </>
            }
        </section>
    )
}
