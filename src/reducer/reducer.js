export const initialState = {
  // user: {
  //   "name": "null",
  //   "images": [
  //     {
  //       "url": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/602f4731226337.5646928c3633f.jpg",
  //     },
  //   ],
  // },

  user: {
    token: '',
    data: {}
  },

  selectedPlaylist: {},
  playingPlaylist: [],
  index: 0,

  playing: false,
  shuffle: false,
  repeat: [false, false],
  open: false,

  item: null,
  audio: null,
  volume: 0.3,

  // playlists: [
  //   {
  //     "id": "1",
  //     "name": "Top Tamil Hits",
  //     "description": "Tamil hits thats trending now",
  //     "distribute": "false",
  //     "tracks": {
  //       "image": "https://www.sunpictures.in/wp-content/uploads/2021/03/Anirudh-Ravichander-1-150x150.jpg",
  //       "items": [
  //         {
  //           "name": "Mayakaama Kalakaama",
  //           "path": "https://cdn10.solamutha.xyz/download/QzF_CSd5B7in2KDMZdOH8Q/1666780742/t/2022/Thiruchitrambalam/128/Mayakkama-Kalakkama-MassTamilan.dev.mp3",
  //           "id": "1",
  //           "duration": "2:22",
  //           "album": {
  //             "name": "Thiruchitrampazham",
  //             "images": [
  //               {
  //                 "url": "https://wallpapercave.com/dwp1x/wp11387365.jpg",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1",
  //               "popularity": 0,
  //               "type": "artist",
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Bimmbiliki Pillapi",
  //           "path": "https://cdn.tamilmp3free.net/down.php?ses=1822c444&file=Tamil%202022%20Songs/Prince%20(Tamil)/128/Bimbilikki%20Pilapi.mp3",
  //           "id": "2",
  //           "duration": "4:08",
  //           "album": {
  //             "name": "Prince",
  //             "images": [
  //               {
  //                 "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqb3xrs7kD02LEwDP2MdazgXYLbe0tXDn5ZjXeSBCrL65jHllp",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1",
  //               "popularity": 0,
  //               "type": "artist",
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Megham Karukatha",
  //           "path": "https://cdn10.solamutha.xyz/download/4HME8rv07WrnmqCt09Mu0A/1667044025/t/2022/Thiruchitrambalam/128/Megham-Karukatha-MassTamilan.dev.mp3",
  //           "id": "3",
  //           "duration": "4:50",
  //           "album": {
  //             "name": "Thiruchitrampazham",
  //             "images": [
  //               {
  //                 "url": "https://wallpapercave.com/dwp1x/wp11387365.jpg",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1",
  //               "popularity": 0,
  //               "type": "artist",
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Life of Pazham",
  //           "path": "https://cdn10.solamutha.xyz/download/4HME8rv07WrnmqCt09Mu0A/1667044025/t/2022/Thiruchitrambalam/128/Life-of-Pazham-MassTamilan.dev.mp3",
  //           "id": "4",
  //           "duration": "3:54",
  //           "album": {
  //             "name": "Thiruchitrampazham",
  //             "images": [
  //               {
  //                 "url": "https://wallpapercave.com/dwp1x/wp11387365.jpg",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1",
  //               "popularity": 0,
  //               "type": "artist",
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Veera Soora",
  //           "path": "https://cdn.tamilmp3free.net/down.php?ses=1822c444&file=Tamil%202022%20Songs/Naane%20Varuvean/128/Veera%20Soora.mp3",
  //           "id": "5",
  //           "duration": "3:25",
  //           "album": {
  //             "name": "Naane Varuven",
  //             "images": [
  //               {
  //                 "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3UO4_vLSdzm76mMTuOf96jLyjdfme5Zx8gVTPNgBLiVyiLMc6",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "external_urls": {
  //                 "spotify": "string"
  //               },
  //               "followers": {
  //                 "href": "string",
  //                 "total": 12313112
  //               },
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1 2",
  //               "popularity": 0,
  //               "type": "artist",
  //               "uri": "string"
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Mathuga Mathuga",
  //           "path": "https://cdn10.solamutha.xyz/download/ZF5txUtNk1Mg9IX4VUIRhA/1667044207/k/2022/Vikram-Hitlist/128/Mathuga-Mathuga-MassTamilan.dev.mp3",
  //           "id": "6",
  //           "duration": "03:31",
  //           "album": {
  //             "name": "Vikram",
  //             "images": [
  //               {
  //                 "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcywLT8os8ZXJb7n3hmSzrSzpnLIDNgHeIufdEvCprHyuxThul",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "external_urls": {
  //                 "spotify": "string"
  //               },
  //               "followers": {
  //                 "href": "string",
  //                 "total": 12313112
  //               },
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1 2",
  //               "popularity": 0,
  //               "type": "artist",
  //               "uri": "string"
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Once Upon a Time",
  //           "path": "https://cdn10.solamutha.xyz/download/ZF5txUtNk1Mg9IX4VUIRhA/1667044207/k/2022/Vikram-Hitlist/128/Once-Upon-a-Time-MassTamilan.dev.mp3",
  //           "id": "7",
  //           "duration": "2:23",
  //           "album": {
  //             "name": "Vikram",
  //             "images": [
  //               {
  //                 "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcywLT8os8ZXJb7n3hmSzrSzpnLIDNgHeIufdEvCprHyuxThul",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "external_urls": {
  //                 "spotify": "string"
  //               },
  //               "followers": {
  //                 "href": "string",
  //                 "total": 12313112
  //               },
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1 2",
  //               "popularity": 0,
  //               "type": "artist",
  //               "uri": "string"
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Mayakaama Kalakaama",
  //           "path": "https://cdn10.solamutha.xyz/download/QzF_CSd5B7in2KDMZdOH8Q/1666780742/t/2022/Thiruchitrambalam/128/Mayakkama-Kalakkama-MassTamilan.dev.mp3",
  //           "id": "8",
  //           "duration": "2:22",
  //           "album": {
  //             "name": "Thiruchitrampazham",
  //             "images": [
  //               {
  //                 "url": "https://wallpapercave.com/dwp1x/wp11387365.jpg",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1",
  //               "popularity": 0,
  //               "type": "artist",
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Bimmbiliki Pillapi",
  //           "path": "https://cdn.tamilmp3free.net/down.php?ses=1822c444&file=Tamil%202022%20Songs/Prince%20(Tamil)/128/Bimbilikki%20Pilapi.mp3",
  //           "id": "9",
  //           "duration": "4:08",
  //           "album": {
  //             "name": "Prince",
  //             "images": [
  //               {
  //                 "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqb3xrs7kD02LEwDP2MdazgXYLbe0tXDn5ZjXeSBCrL65jHllp",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1",
  //               "popularity": 0,
  //               "type": "artist",
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Megham Karukatha",
  //           "path": "https://cdn10.solamutha.xyz/download/4HME8rv07WrnmqCt09Mu0A/1667044025/t/2022/Thiruchitrambalam/128/Megham-Karukatha-MassTamilan.dev.mp3",
  //           "id": "10",
  //           "duration": "4:50",
  //           "album": {
  //             "name": "Thiruchitrampazham",
  //             "images": [
  //               {
  //                 "url": "https://wallpapercave.com/dwp1x/wp11387365.jpg",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1",
  //               "popularity": 0,
  //               "type": "artist",
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Life of Pazham",
  //           "path": "https://cdn10.solamutha.xyz/download/4HME8rv07WrnmqCt09Mu0A/1667044025/t/2022/Thiruchitrambalam/128/Life-of-Pazham-MassTamilan.dev.mp3",
  //           "id": "11",
  //           "duration": "3:54",
  //           "album": {
  //             "name": "Thiruchitrampazham",
  //             "images": [
  //               {
  //                 "url": "https://wallpapercave.com/dwp1x/wp11387365.jpg",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1",
  //               "popularity": 0,
  //               "type": "artist",
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Veera Soora",
  //           "path": "https://cdn.tamilmp3free.net/down.php?ses=1822c444&file=Tamil%202022%20Songs/Naane%20Varuvean/128/Veera%20Soora.mp3",
  //           "id": "12",
  //           "duration": "3:25",
  //           "album": {
  //             "name": "Naane Varuven",
  //             "images": [
  //               {
  //                 "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3UO4_vLSdzm76mMTuOf96jLyjdfme5Zx8gVTPNgBLiVyiLMc6",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "external_urls": {
  //                 "spotify": "string"
  //               },
  //               "followers": {
  //                 "href": "string",
  //                 "total": 12313112
  //               },
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1 2",
  //               "popularity": 0,
  //               "type": "artist",
  //               "uri": "string"
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Mathuga Mathuga",
  //           "path": "https://cdn10.solamutha.xyz/download/ZF5txUtNk1Mg9IX4VUIRhA/1667044207/k/2022/Vikram-Hitlist/128/Mathuga-Mathuga-MassTamilan.dev.mp3",
  //           "id": "13",
  //           "duration": "03:31",
  //           "album": {
  //             "name": "Vikram",
  //             "images": [
  //               {
  //                 "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcywLT8os8ZXJb7n3hmSzrSzpnLIDNgHeIufdEvCprHyuxThul",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "external_urls": {
  //                 "spotify": "string"
  //               },
  //               "followers": {
  //                 "href": "string",
  //                 "total": 12313112
  //               },
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1 2",
  //               "popularity": 0,
  //               "type": "artist",
  //               "uri": "string"
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Once Upon a Time",
  //           "path": "https://cdn10.solamutha.xyz/download/ZF5txUtNk1Mg9IX4VUIRhA/1667044207/k/2022/Vikram-Hitlist/128/Once-Upon-a-Time-MassTamilan.dev.mp3",
  //           "id": "14",
  //           "duration": "2:23",
  //           "album": {
  //             "name": "Vikram",
  //             "images": [
  //               {
  //                 "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcywLT8os8ZXJb7n3hmSzrSzpnLIDNgHeIufdEvCprHyuxThul",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "external_urls": {
  //                 "spotify": "string"
  //               },
  //               "followers": {
  //                 "href": "string",
  //                 "total": 12313112
  //               },
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1 2",
  //               "popularity": 0,
  //               "type": "artist",
  //               "uri": "string"
  //             }
  //           ],
  //         },
  //       ]
  //     }
  //   },
  //   {
  //     "name": "Top Telugu Hits",
  //     "description": "Telugu hits thats trending now",
  //     "id": "2",
  //     "distribute": "false",
  //     "tracks": {
  //       "image": "https://i.ytimg.com/vi/D2bxKKivYCo/maxresdefault.jpg",
  //       "items": [
  //         {
  //           "name": "Bimmbiliki Pillapi",
  //           "path": "https://cdn.tamilmp3free.net/down.php?ses=1822c444&file=Tamil%202022%20Songs/Prince%20(Tamil)/128/Bimbilikki%20Pilapi.mp3",
  //           "id": "1",
  //           "duration": "4:08",
  //           "album": {
  //             "name": "Prince",
  //             "images": [
  //               {
  //                 "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqb3xrs7kD02LEwDP2MdazgXYLbe0tXDn5ZjXeSBCrL65jHllp",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1",
  //               "popularity": 0,
  //               "type": "artist",
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Mathuga Mathuga",
  //           "path": "https://cdn10.solamutha.xyz/download/ZF5txUtNk1Mg9IX4VUIRhA/1667044207/k/2022/Vikram-Hitlist/128/Mathuga-Mathuga-MassTamilan.dev.mp3",
  //           "id": "2",
  //           "duration": "03:31",
  //           "album": {
  //             "name": "Vikram",
  //             "images": [
  //               {
  //                 "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcywLT8os8ZXJb7n3hmSzrSzpnLIDNgHeIufdEvCprHyuxThul",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "external_urls": {
  //                 "spotify": "string"
  //               },
  //               "followers": {
  //                 "href": "string",
  //                 "total": 12313112
  //               },
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1 2",
  //               "popularity": 0,
  //               "type": "artist",
  //               "uri": "string"
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Once Upon a Time",
  //           "path": "https://cdn10.solamutha.xyz/download/ZF5txUtNk1Mg9IX4VUIRhA/1667044207/k/2022/Vikram-Hitlist/128/Once-Upon-a-Time-MassTamilan.dev.mp3",
  //           "id": "3",
  //           "duration": "2:23",
  //           "album": {
  //             "name": "Vikram",
  //             "images": [
  //               {
  //                 "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcywLT8os8ZXJb7n3hmSzrSzpnLIDNgHeIufdEvCprHyuxThul",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "external_urls": {
  //                 "spotify": "string"
  //               },
  //               "followers": {
  //                 "href": "string",
  //                 "total": 12313112
  //               },
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1 2",
  //               "popularity": 0,
  //               "type": "artist",
  //               "uri": "string"
  //             }
  //           ],
  //         },
  //       ]
  //     }
  //   },
  //   {
  //     "id": "3",
  //     "name": "Arijit Hits",
  //     "description": "Arijit hits thats trending now",
  //     "distribute": "true",
  //     "tracks": {
  //       "image": "https://indiater.com/wp-content/uploads/2021/06/Free-Music-Album-Cover-Art-Banner-Photoshop-Template-990x990.jpg",
  //       "items": [
  //         {
  //           "name": "Agar Tum Saath Ho",
  //           "path": "https://cdn10.solamutha.xyz/download/XBhlDsth3GW209sq6JzwFw/1667044899/h/2020/Tamasha/128/Agar-Tum-Saath-Ho-MassTamilan.io.mp3",
  //           "id": "1",
  //           "duration": "5:41",
  //           "album": {
  //             "name": "Tamasha",
  //             "images": [
  //               {
  //                 "url": "https://masstamilan.dev/i/wp/tamasha-2020.webp",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1",
  //               "popularity": 0,
  //               "type": "artist",
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Bimmbiliki Pillapi",
  //           "path": "https://cdn.tamilmp3free.net/down.php?ses=1822c444&file=Tamil%202022%20Songs/Prince%20(Tamil)/128/Bimbilikki%20Pilapi.mp3",
  //           "id": "2",
  //           "duration": "4:08",
  //           "album": {
  //             "name": "Prince",
  //             "images": [
  //               {
  //                 "url": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqb3xrs7kD02LEwDP2MdazgXYLbe0tXDn5ZjXeSBCrL65jHllp",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1",
  //               "popularity": 0,
  //               "type": "artist",
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Megham Karukatha",
  //           "path": "https://cdn10.solamutha.xyz/download/4HME8rv07WrnmqCt09Mu0A/1667044025/t/2022/Thiruchitrambalam/128/Megham-Karukatha-MassTamilan.dev.mp3",
  //           "id": "3",
  //           "duration": "4:50",
  //           "album": {
  //             "name": "Thiruchitrampazham",
  //             "images": [
  //               {
  //                 "url": "https://wallpapercave.com/dwp1x/wp11387365.jpg",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1",
  //               "popularity": 0,
  //               "type": "artist",
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Life of Pazham",
  //           "path": "https://cdn10.solamutha.xyz/download/4HME8rv07WrnmqCt09Mu0A/1667044025/t/2022/Thiruchitrambalam/128/Life-of-Pazham-MassTamilan.dev.mp3",
  //           "id": "4",
  //           "duration": "3:54",
  //           "album": {
  //             "name": "Thiruchitrampazham",
  //             "images": [
  //               {
  //                 "url": "https://wallpapercave.com/dwp1x/wp11387365.jpg",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1",
  //               "popularity": 0,
  //               "type": "artist",
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Veera Soora",
  //           "path": "https://cdn.tamilmp3free.net/down.php?ses=1822c444&file=Tamil%202022%20Songs/Naane%20Varuvean/128/Veera%20Soora.mp3",
  //           "id": "5",
  //           "duration": "3:25",
  //           "album": {
  //             "name": "Naane Varuven",
  //             "images": [
  //               {
  //                 "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3UO4_vLSdzm76mMTuOf96jLyjdfme5Zx8gVTPNgBLiVyiLMc6",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "external_urls": {
  //                 "spotify": "string"
  //               },
  //               "followers": {
  //                 "href": "string",
  //                 "total": 12313112
  //               },
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1 2",
  //               "popularity": 0,
  //               "type": "artist",
  //               "uri": "string"
  //             }
  //           ],
  //         },
  //         {
  //           "name": "Mathuga Mathuga",
  //           "path": "https://cdn10.solamutha.xyz/download/ZF5txUtNk1Mg9IX4VUIRhA/1667044207/k/2022/Vikram-Hitlist/128/Mathuga-Mathuga-MassTamilan.dev.mp3",
  //           "id": "6",
  //           "duration": "03:31",
  //           "album": {
  //             "name": "Vikram",
  //             "images": [
  //               {
  //                 "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcywLT8os8ZXJb7n3hmSzrSzpnLIDNgHeIufdEvCprHyuxThul",
  //                 "height": 300,
  //                 "width": 300
  //               },
  //             ],
  //           },
  //           "artists": [
  //             {
  //               "external_urls": {
  //                 "spotify": "string"
  //               },
  //               "followers": {
  //                 "href": "string",
  //                 "total": 12313112
  //               },
  //               "genres": [
  //                 "Prog rock",
  //                 "Grunge"
  //               ],
  //               "href": "string",
  //               "id": "12421",
  //               "images": [
  //                 {
  //                   "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228\n",
  //                   "height": 300,
  //                 }
  //               ],
  //               "name": "U1 2",
  //               "popularity": 0,
  //               "type": "artist",
  //               "uri": "string"
  //             }
  //           ],
  //         },
  //       ]
  //     }
  //   },
  //   {
  //     "id": "4",
  //     "name": "All Hits",
  //     "isPlaylist": "true",
  //     "tracks": {
  //       "image": "https://i.ytimg.com/vi/D2bxKKivYCo/maxresdefault.jpg",
  //       "items": [
  //         {
  //           "name": "Arijith",
  //           "id": "3",
  //           "images": [
  //             {
  //               "url": "https://m.media-amazon.com/images/M/MV5BMTNmMTQ2YzMtYzU0MS00NTI2LTk3MTgtOTI5MDgyNDc3ZDFkXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY317_CR32,0,214,317_AL__QL50.jpg",
  //             },
  //           ],
  //           "followers": 1100,
  //         },
  //         {
  //           "name": "Anirudh",
  //           "id": "1",
  //           "images": [
  //             {
  //               "url": "https://www.sunpictures.in/wp-content/uploads/2021/03/Anirudh-Ravichander-1-150x150.jpg",
  //             },
  //           ],
  //           "followers": 110120,
  //         },
  //       ]
  //     }
  //   },
  // ],
  playlists: []
  //DUMMY VALUESS
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_AUDIO":
      return {
        ...state,
        audio: action.audio,
        item: action.item,
        index: action.index || 0,
      };

    case "UNSET_AUDIO":
      return {
        ...state,
        audio: null,
      };

    case "SET_VOLUME":
      return {
        ...state,
        volume: action.volume,
      };

    case "SET_USER":
      console.log('state', state)
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: [...action.playlist],
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_SHUFFLE":
      return {
        ...state,
        shuffle: action.shuffle,
      };

    case "SET_REPEAT":
      return {
        ...state,
        repeat: action.repeat,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playingPlaylist: action.playlists,
        index: action.index || 0,
      };

    case "SET_SELECTEDLISTS":
      return {
        ...state,
        selectedPlaylist: action.selectPlay,
      };

    case "_setOpen":
      return {
        ...state,
        open: action.value,
      };

    case "SET_INDEX":
      return {
        ...state,
        index: action.index,
      };
    default:
      return state;
  }
};

export default reducer;
