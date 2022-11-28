import React from "react";
import { useStateValue } from "../../reducer/StateProvider";
import { playSongBody } from "./Body";
import "./SongRow.css";

import bgImage from '../../media/bg.jpg'

const recentFunction = (open, dispatch) => {
  if (open) {
    return dispatch({
      type: '_setOpen',
      value: false,
    });
  }
  console.log('CLicked')
  return dispatch({
    type: '_setOpen',
    value: true,
  });
}

const songrowFunction = (selectedPlaylist, i, playSongBody, dispatch, track, audio, volume) => {
  // playlists
  dispatch({
    type: 'SET_INDEX',
    index: i,
  });

  playSongBody(track, audio, volume, dispatch);
}

export default function SongRow({ i, track, audio, recent = false }) {
  const [{ volume, open, selectedPlaylist }, dispatch] = useStateValue();
  return (
    <div key={i} className={`songRow ${recent ? 'songRowRecent' : ''}`}

      onClick={() => {
        recent ?
          recentFunction(open, dispatch) :
          songrowFunction(selectedPlaylist, i, playSongBody, dispatch, track, audio, volume);
      }}
    >
      {/* {console.log('track',track.album.image, track)} */}
      <img className="songRow__album"
        src={
          track.album.image !== null && track.album.image !== undefined ?
            `https://firebasestorage.googleapis.com/v0/b/musify-927d4.appspot.com/o/images%2F${track.album.image}?alt=media` :
            bgImage
        }
        alt="" />
      <div className={`songRow__info ${recent ? 'songRowRecent__info' : ''}`}>
        <h1>{track.name}</h1>
        <p>
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

// export function RecentSongRow({ i, track, audio }) {
//   const [{ volume }, dispatch] = useStateValue();
//   return (
//     <div key={i} className="songRow songRowRecent" onClick={() => {
//       // if (open) {
//       //   return dispatch({
//       //     type: '_setOpen',
//       //     value: false,
//       //   });
//       // }
//       console.log('CLicked')
//       // return dispatch({
//       // type: '_setOpen',
//       // value: true,
//       // });
//     }}>
//       <img className="songRow__album" src={track.album.images[0].url} alt="" />
//       <div className="songRow__info songRowRecent__info">
//         <h1>{track.name}</h1>
//         <p>
//           {track.album.name}
//         </p>
//       </div>
//     </div >
//   );
// }

